"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/data/products";
import { storeInfo } from "@/data/store-info";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  const freeShip = totalPrice >= storeInfo.policies.freeShipMin;
  const shippingFee = freeShip ? 0 : 30000;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-20 h-20 mx-auto text-gray-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mt-6">Gio hang trong</h1>
        <p className="text-gray-500 mt-2">Ban chua co san pham nao trong gio hang.</p>
        <Link
          href="/san-pham"
          className="inline-block mt-6 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition"
        >
          Xem san pham
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Gio hang cua ban</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
              className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
            >
              {/* Thumbnail */}
              <div className="w-24 h-24 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center">
                <span className="text-xs text-gray-400">Anh</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link
                  href={`/san-pham/${item.product.slug}`}
                  className="font-semibold text-gray-900 hover:text-amber-600 transition line-clamp-1"
                >
                  {item.product.name}
                </Link>
                <p className="text-sm text-gray-500 mt-1">
                  {item.selectedColor} / {item.selectedSize}
                </p>
                <p className="text-amber-600 font-bold mt-1">{formatPrice(item.product.price)}</p>

                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.selectedColor,
                          item.selectedSize,
                          item.quantity - 1
                        )
                      }
                      className="px-3 py-1 text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.selectedColor,
                          item.selectedSize,
                          item.quantity + 1
                        )
                      }
                      className="px-3 py-1 text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      removeItem(item.product.id, item.selectedColor, item.selectedSize)
                    }
                    className="text-sm text-red-500 hover:text-red-700 transition"
                  >
                    Xoa
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="text-right shrink-0">
                <p className="font-bold text-gray-900">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 mb-4">Tom tat don hang</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Tam tinh</span>
                <span className="font-semibold">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Phi van chuyen</span>
                <span className={`font-semibold ${freeShip ? "text-green-600" : ""}`}>
                  {freeShip ? "Mien phi" : formatPrice(shippingFee)}
                </span>
              </div>
              {!freeShip && (
                <p className="text-xs text-amber-600">
                  Them {formatPrice(storeInfo.policies.freeShipMin - totalPrice)} de duoc mien phi van chuyen
                </p>
              )}
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base">
                <span className="font-bold text-gray-900">Tong cong</span>
                <span className="font-bold text-amber-600">
                  {formatPrice(totalPrice + shippingFee)}
                </span>
              </div>
            </div>

            <Link
              href="/thanh-toan"
              className="block w-full text-center mt-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition shadow-lg shadow-amber-600/30"
            >
              Tien hanh thanh toan
            </Link>

            <Link
              href="/san-pham"
              className="block text-center mt-3 text-sm text-gray-500 hover:text-gray-700 transition"
            >
              &larr; Tiep tuc mua sam
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
