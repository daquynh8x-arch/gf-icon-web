"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/data/products";
import { storeInfo } from "@/data/store-info";

type PaymentMethod = "cod" | "bank";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    note: "",
  });

  const freeShip = totalPrice >= storeInfo.policies.freeShipMin;
  const shippingFee = freeShip ? 0 : 30000;
  const grandTotal = totalPrice + shippingFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || !form.city) {
      alert("Vui long dien day du thong tin giao hang!");
      return;
    }

    // Generate order number
    const num = "GFI-" + Date.now().toString(36).toUpperCase();
    setOrderNumber(num);

    // In production: send order to backend/email/Zalo
    // For now, create a summary to send via Zalo
    const orderSummary = items
      .map(
        (i) =>
          `• ${i.product.name} (${i.selectedColor}/${i.selectedSize}) x${i.quantity} = ${formatPrice(
            i.product.price * i.quantity
          )}`
      )
      .join("\n");

    const message = `DON HANG MOI #${num}\n\nKhach: ${form.name}\nSĐT: ${form.phone}\nDia chi: ${form.address}, ${form.city}\nGhi chu: ${form.note || "Khong"}\n\nSan pham:\n${orderSummary}\n\nTam tinh: ${formatPrice(totalPrice)}\nPhi ship: ${freeShip ? "Mien phi" : formatPrice(shippingFee)}\nTONG: ${formatPrice(grandTotal)}\nThanh toan: ${paymentMethod === "cod" ? "COD" : "Chuyen khoan"}`;

    console.log("=== ORDER ===", message);

    setOrderPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Khong co san pham de thanh toan</h1>
        <Link href="/san-pham" className="text-amber-600 hover:underline mt-4 inline-block">
          Xem san pham
        </Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mt-6">Dat hang thanh cong!</h1>
        <p className="text-gray-500 mt-2">Ma don hang: <span className="font-bold text-gray-900">{orderNumber}</span></p>

        {paymentMethod === "bank" && (
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-left">
            <h3 className="font-bold text-gray-900 mb-3">Thong tin chuyen khoan</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Ngan hang:</span> <strong>{storeInfo.bankInfo.bankName}</strong></p>
              <p><span className="text-gray-500">So tai khoan:</span> <strong>{storeInfo.bankInfo.accountNumber}</strong></p>
              <p><span className="text-gray-500">Chu tai khoan:</span> <strong>{storeInfo.bankInfo.accountName}</strong></p>
              <p><span className="text-gray-500">Noi dung CK:</span> <strong>{orderNumber}</strong></p>
              <p><span className="text-gray-500">So tien:</span> <strong className="text-amber-600">{formatPrice(grandTotal)}</strong></p>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Vui long chuyen khoan trong 24h. Don hang se duoc xu ly sau khi xac nhan thanh toan.
            </p>
          </div>
        )}

        {paymentMethod === "cod" && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <p className="text-sm text-gray-600">
              Don hang se duoc giao trong 2-5 ngay. Ban thanh toan khi nhan hang.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/san-pham"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition"
          >
            Tiep tuc mua sam
          </Link>
          <a
            href={`https://zalo.me/${storeInfo.zalo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-500 transition"
          >
            Nhan Zalo ho tro
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Thanh toan</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Info */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Thong tin giao hang</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ho ten <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Nguyen Van A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    So dien thoai <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="0912 345 678"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dia chi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="So nha, duong, phuong/xa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tinh/Thanh pho <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="TP. Ho Chi Minh"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chu</label>
                  <input
                    type="text"
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Giao gio hanh chinh, goi truoc..."
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Phuong thuc thanh toan</h2>
              <div className="space-y-3">
                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition ${
                    paymentMethod === "cod" ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-amber-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Thanh toan khi nhan hang (COD)</p>
                    <p className="text-sm text-gray-500">Tra tien mat khi nhan hang tu shipper</p>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition ${
                    paymentMethod === "bank" ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="accent-amber-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Chuyen khoan ngan hang</p>
                    <p className="text-sm text-gray-500">
                      {storeInfo.bankInfo.bankName} — {storeInfo.bankInfo.accountName}
                    </p>
                  </div>
                </label>
              </div>

              {paymentMethod === "bank" && (
                <div className="mt-4 bg-amber-50 rounded-xl p-4 text-sm">
                  <p className="font-semibold text-gray-900 mb-2">Thong tin chuyen khoan:</p>
                  <p>Ngan hang: <strong>{storeInfo.bankInfo.bankName}</strong></p>
                  <p>STK: <strong>{storeInfo.bankInfo.accountNumber}</strong></p>
                  <p>Chu TK: <strong>{storeInfo.bankInfo.accountName}</strong></p>
                  <p className="mt-2 text-xs text-gray-500">Noi dung CK: [Ma don hang se duoc tao sau khi dat hang]</p>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
              <h2 className="font-bold text-gray-900 mb-4">
                Don hang ({items.reduce((s, i) => s + i.quantity, 0)} san pham)
              </h2>

              <div className="space-y-3 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex justify-between text-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{item.product.name}</p>
                      <p className="text-gray-500">
                        {item.selectedColor} / {item.selectedSize} x{item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold shrink-0 ml-3">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tam tinh</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Van chuyen</span>
                  <span className={freeShip ? "text-green-600" : ""}>
                    {freeShip ? "Mien phi" : formatPrice(shippingFee)}
                  </span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-base font-bold">
                  <span>Tong cong</span>
                  <span className="text-amber-600">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition shadow-lg shadow-amber-600/30"
              >
                Dat hang
              </button>

              <p className="mt-3 text-xs text-gray-400 text-center">
                Doi tra trong {storeInfo.policies.returnDays} ngay neu khong hai long
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
