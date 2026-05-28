import { NextRequest, NextResponse } from "next/server";

// ============================================================
// API ROUTE: Nhận đơn hàng → Gửi thông báo tự động
// 1. ntfy.sh — push notification (điện thoại/trình duyệt)
// 2. formsubmit.co — email thông báo
// 3. Google Sheets webhook (nếu có)
// ============================================================

const NTFY_TOPIC = process.env.NTFY_TOPIC || "gficon-dh-0881815b";
const STORE_EMAIL = process.env.STORE_EMAIL || "contact@gficon.vn";

function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN").format(amount) + "đ";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { customer, items, payment } = body;
    if (!customer?.name || !customer?.phone || !customer?.address || !customer?.city) {
      return NextResponse.json(
        { error: "Thiếu thông tin khách hàng" },
        { status: 400 }
      );
    }

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Đơn hàng trống" },
        { status: 400 }
      );
    }

    // Generate order number
    const orderNumber = "GFI-" + Date.now().toString(36).toUpperCase();
    const orderDate = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // Build order data
    const orderItems = items.map((item: {
      name: string;
      color: string;
      size: string;
      quantity: number;
      price: number;
    }) => ({
      name: item.name,
      color: item.color,
      size: item.size,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.price * item.quantity,
    }));

    const orderData = {
      orderNumber,
      orderDate,
      customer: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email || "",
        address: customer.address,
        city: customer.city,
        note: customer.note || "",
      },
      items: orderItems,
      payment: {
        method: payment.method,
        subtotal: payment.subtotal,
        shipping: payment.shipping,
        total: payment.total,
      },
    };

    // Build notification message
    const itemsText = orderItems
      .map((i: { name: string; color: string; size: string; quantity: number; subtotal: number }) =>
        `${i.name} (${i.color}/${i.size}) x${i.quantity} = ${formatVND(i.subtotal)}`
      )
      .join("\n");

    const notifyMessage =
      `DON HANG #${orderNumber}\n` +
      `${orderDate}\n\n` +
      `KHACH: ${customer.name}\n` +
      `SDT: ${customer.phone}\n` +
      `DIA CHI: ${customer.address}, ${customer.city}\n` +
      (customer.note ? `GHI CHU: ${customer.note}\n` : "") +
      (customer.email ? `EMAIL: ${customer.email}\n` : "") +
      `\nSAN PHAM:\n${itemsText}\n\n` +
      `TONG: ${formatVND(payment.total)} (${payment.method === "cod" ? "COD" : "CK"})` +
      (payment.shipping === 0 ? " | FREE SHIP" : ` | Ship: ${formatVND(payment.shipping)}`);

    // ========== 1. NTFY.SH — Push notification ==========
    try {
      await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
        method: "POST",
        headers: {
          "Title": `Don hang moi #${orderNumber} - ${formatVND(payment.total)}`,
          "Priority": "high",
          "Tags": "shopping_cart,moneybag",
          "Actions": `view, Goi ${customer.phone}, tel:${customer.phone}`,
        },
        body: notifyMessage,
      });
    } catch (ntfyError) {
      console.error("ntfy.sh notification failed:", ntfyError);
    }

    // ========== 2. FORMSUBMIT.CO — Email notification ==========
    try {
      await fetch(`https://formsubmit.co/ajax/${STORE_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `DON HANG MOI #${orderNumber} - ${customer.name} - ${formatVND(payment.total)}`,
          "Ma don hang": orderNumber,
          "Ngay dat": orderDate,
          "Ten khach": customer.name,
          "So dien thoai": customer.phone,
          "Email": customer.email || "Khong co",
          "Dia chi": `${customer.address}, ${customer.city}`,
          "Ghi chu": customer.note || "Khong",
          "San pham": itemsText,
          "Tam tinh": formatVND(payment.subtotal),
          "Phi ship": payment.shipping === 0 ? "Mien phi" : formatVND(payment.shipping),
          "Tong cong": formatVND(payment.total),
          "Thanh toan": payment.method === "cod" ? "COD" : "Chuyen khoan",
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    // ========== 3. GOOGLE SHEETS WEBHOOK (optional) ==========
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });
      } catch (webhookError) {
        console.error("Google Sheets webhook failed:", webhookError);
      }
    }

    // Log to server console as backup
    console.log("=== NEW ORDER ===", orderNumber, customer.name, customer.phone, formatVND(payment.total));

    return NextResponse.json({
      success: true,
      orderNumber,
      message: "Đơn hàng đã được tiếp nhận",
    });
  } catch (error) {
    console.error("Order API error:", error);
    return NextResponse.json(
      { error: "Lỗi hệ thống, vui lòng thử lại" },
      { status: 500 }
    );
  }
}
