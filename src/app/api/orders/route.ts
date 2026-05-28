import { NextRequest, NextResponse } from "next/server";

// ============================================================
// API ROUTE: Nhận đơn hàng → Gửi đến Google Sheets + Email
// Google Apps Script webhook URL được lưu trong .env.local
// ============================================================

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
      items: items.map((item: {
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
      })),
      payment: {
        method: payment.method,
        subtotal: payment.subtotal,
        shipping: payment.shipping,
        total: payment.total,
      },
    };

    // Send to Google Apps Script webhook
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });

        if (!webhookResponse.ok) {
          console.error("Google Sheets webhook error:", webhookResponse.status);
        }
      } catch (webhookError) {
        // Log but don't fail the order
        console.error("Google Sheets webhook failed:", webhookError);
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL not set — order only logged to console");
      console.log("=== NEW ORDER ===", JSON.stringify(orderData, null, 2));
    }

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
