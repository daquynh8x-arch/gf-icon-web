// ============================================================
// GOOGLE APPS SCRIPT — GF ICON ĐƠN HÀNG
// File này KHÔNG chạy trong website
// Copy toàn bộ code này vào Google Apps Script (xem hướng dẫn)
// ============================================================

// Email nhận thông báo đơn hàng
const NOTIFICATION_EMAIL = "contact@gficon.vn";

// Tên sheet
const SHEET_NAME = "Don Hang";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 1. Ghi vào Google Sheets
    writeToSheet(data);

    // 2. Gửi email thông báo
    sendEmailNotification(data);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function writeToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  // Tạo sheet + header nếu chưa có
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Ngày",
      "Mã đơn",
      "Tên KH",
      "SĐT",
      "Email",
      "Địa chỉ",
      "Thành phố",
      "Ghi chú",
      "Sản phẩm",
      "Tạm tính",
      "Ship",
      "Tổng",
      "Thanh toán"
    ]);

    // Format header
    const headerRange = sheet.getRange(1, 1, 1, 13);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1a1a1a");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);

    // Set column widths
    sheet.setColumnWidth(1, 150); // Ngày
    sheet.setColumnWidth(2, 130); // Mã đơn
    sheet.setColumnWidth(3, 150); // Tên
    sheet.setColumnWidth(4, 120); // SĐT
    sheet.setColumnWidth(5, 180); // Email
    sheet.setColumnWidth(6, 250); // Địa chỉ
    sheet.setColumnWidth(7, 130); // TP
    sheet.setColumnWidth(8, 150); // Ghi chú
    sheet.setColumnWidth(9, 350); // Sản phẩm
    sheet.setColumnWidth(10, 120); // Tạm tính
    sheet.setColumnWidth(11, 100); // Ship
    sheet.setColumnWidth(12, 120); // Tổng
    sheet.setColumnWidth(13, 120); // Thanh toán
  }

  // Format sản phẩm thành chuỗi
  const itemsText = data.items.map(function(item) {
    return item.name + " (" + item.color + "/" + item.size + ") x" + item.quantity + " = " + formatVND(item.subtotal);
  }).join("\n");

  // Thêm dòng mới
  sheet.appendRow([
    data.orderDate,
    data.orderNumber,
    data.customer.name,
    "'" + data.customer.phone, // ' giữ format SĐT
    data.customer.email,
    data.customer.address,
    data.customer.city,
    data.customer.note,
    itemsText,
    data.payment.subtotal,
    data.payment.shipping,
    data.payment.total,
    data.payment.method === "cod" ? "COD" : "Chuyển khoản"
  ]);
}

function sendEmailNotification(data) {
  const itemsList = data.items.map(function(item) {
    return "  - " + item.name + " (" + item.color + "/" + item.size + ") x" + item.quantity + " = " + formatVND(item.subtotal);
  }).join("\n");

  const subject = "DON HANG MOI #" + data.orderNumber + " - " + data.customer.name;

  const body =
    "DON HANG MOI - GF ICON\n" +
    "========================\n\n" +
    "Ma don: " + data.orderNumber + "\n" +
    "Ngay: " + data.orderDate + "\n\n" +
    "KHACH HANG:\n" +
    "  Ten: " + data.customer.name + "\n" +
    "  SDT: " + data.customer.phone + "\n" +
    "  Email: " + (data.customer.email || "Khong co") + "\n" +
    "  Dia chi: " + data.customer.address + ", " + data.customer.city + "\n" +
    "  Ghi chu: " + (data.customer.note || "Khong") + "\n\n" +
    "SAN PHAM:\n" + itemsList + "\n\n" +
    "THANH TOAN:\n" +
    "  Tam tinh: " + formatVND(data.payment.subtotal) + "\n" +
    "  Phi ship: " + (data.payment.shipping === 0 ? "Mien phi" : formatVND(data.payment.shipping)) + "\n" +
    "  TONG: " + formatVND(data.payment.total) + "\n" +
    "  Phuong thuc: " + (data.payment.method === "cod" ? "COD" : "Chuyen khoan") + "\n\n" +
    "---\n" +
    "GF ICON - gficon.vn";

  // HTML email đẹp hơn
  const htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">' +
    '<div style="background:#1a1a1a;color:#fff;padding:20px;text-align:center">' +
    '<h1 style="margin:0;font-size:24px">GF ICON</h1>' +
    '<p style="margin:5px 0 0;color:#d4a574;font-size:12px">DON HANG MOI</p>' +
    '</div>' +
    '<div style="padding:20px;background:#f9f9f9">' +
    '<h2 style="color:#1a1a1a;border-bottom:2px solid #d4a574;padding-bottom:8px">#' + data.orderNumber + '</h2>' +
    '<p style="color:#666;font-size:14px">' + data.orderDate + '</p>' +
    '<h3 style="color:#1a1a1a">Khach hang</h3>' +
    '<table style="width:100%;font-size:14px;border-collapse:collapse">' +
    '<tr><td style="padding:5px 10px 5px 0;color:#666;width:80px">Ten:</td><td style="padding:5px 0"><strong>' + data.customer.name + '</strong></td></tr>' +
    '<tr><td style="padding:5px 10px 5px 0;color:#666">SDT:</td><td style="padding:5px 0"><strong>' + data.customer.phone + '</strong></td></tr>' +
    '<tr><td style="padding:5px 10px 5px 0;color:#666">Dia chi:</td><td style="padding:5px 0">' + data.customer.address + ', ' + data.customer.city + '</td></tr>' +
    (data.customer.note ? '<tr><td style="padding:5px 10px 5px 0;color:#666">Ghi chu:</td><td style="padding:5px 0">' + data.customer.note + '</td></tr>' : '') +
    '</table>' +
    '<h3 style="color:#1a1a1a;margin-top:20px">San pham</h3>' +
    '<table style="width:100%;font-size:14px;border-collapse:collapse">' +
    data.items.map(function(item) {
      return '<tr style="border-bottom:1px solid #eee"><td style="padding:8px 0">' + item.name + '<br><span style="color:#999;font-size:12px">' + item.color + ' / ' + item.size + ' x' + item.quantity + '</span></td><td style="padding:8px 0;text-align:right;white-space:nowrap"><strong>' + formatVND(item.subtotal) + '</strong></td></tr>';
    }).join('') +
    '</table>' +
    '<div style="margin-top:15px;padding:15px;background:#fff;border-radius:8px">' +
    '<div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:5px"><span style="color:#666">Tam tinh:</span> <span>' + formatVND(data.payment.subtotal) + '</span></div>' +
    '<div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:5px"><span style="color:#666">Ship:</span> <span>' + (data.payment.shipping === 0 ? '<span style="color:#16a34a">Mien phi</span>' : formatVND(data.payment.shipping)) + '</span></div>' +
    '<div style="display:flex;justify-content:space-between;font-size:18px;font-weight:bold;border-top:2px solid #1a1a1a;padding-top:10px;margin-top:10px"><span>TONG:</span> <span style="color:#d97706">' + formatVND(data.payment.total) + '</span></div>' +
    '<div style="text-align:center;margin-top:8px;padding:5px;background:' + (data.payment.method === "cod" ? "#dbeafe" : "#fef3c7") + ';border-radius:4px;font-size:13px">' + (data.payment.method === "cod" ? "COD - Thanh toan khi nhan hang" : "Chuyen khoan ngan hang") + '</div>' +
    '</div>' +
    '</div>' +
    '<div style="background:#1a1a1a;color:#999;padding:15px;text-align:center;font-size:12px">' +
    'GF ICON - gficon.vn | 0927.007.117' +
    '</div>' +
    '</div>';

  GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body, {
    htmlBody: htmlBody,
    name: "GF ICON - Don Hang"
  });
}

function formatVND(amount) {
  return new Intl.NumberFormat("vi-VN").format(amount) + "d";
}

// Test function - chạy thử trong Apps Script Editor
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        orderNumber: "GFI-TEST123",
        orderDate: "28/05/2026, 20:00:00",
        customer: {
          name: "Nguyen Van Test",
          phone: "0912345678",
          email: "test@gmail.com",
          address: "123 Nguyen Hue",
          city: "TP. Ho Chi Minh",
          note: "Giao gio hanh chinh"
        },
        items: [
          {
            name: "Ao Thun Co Tru Classic",
            color: "Den",
            size: "XL",
            quantity: 2,
            price: 259000,
            subtotal: 518000
          }
        ],
        payment: {
          method: "cod",
          subtotal: 518000,
          shipping: 0,
          total: 518000
        }
      })
    }
  };

  doPost(testData);
  Logger.log("Test hoan thanh! Kiem tra sheet va email.");
}
