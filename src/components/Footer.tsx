import Link from "next/link";
import { storeInfo } from "@/data/store-info";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-black text-white">
              GF <span className="text-amber-500">ICON</span>
            </span>
            <p className="mt-3 text-sm text-gray-400">{storeInfo.tagline}</p>
            <p className="mt-2 text-sm text-gray-400">{storeInfo.description}</p>
          </div>

          {/* Sản phẩm */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sản phẩm
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/san-pham?category=ao-thun-co-tru" className="hover:text-white transition">
                  Áo Thun Cổ Trụ
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=ao-polo" className="hover:text-white transition">
                  Áo Polo Nam
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=ao-thun-co-tron" className="hover:text-white transition">
                  Áo Thun Cổ Tròn
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="hover:text-white transition">
                  Tất cả sản phẩm
                </Link>
              </li>
            </ul>
          </div>

          {/* Chính sách */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Chính sách
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Đổi trả trong {storeInfo.policies.returnDays} ngày</li>
              <li>Free ship đơn từ {(storeInfo.policies.freeShipMin / 1000).toFixed(0)}k</li>
              <li>Thanh toán COD toàn quốc</li>
              <li>Chuyển khoản ngân hàng</li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Liên hệ
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${storeInfo.phone}`} className="hover:text-white transition">
                  Hotline: {storeInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://zalo.me/${storeInfo.zalo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Zalo: {storeInfo.zalo}
                </a>
              </li>
              <li>
                <a href={`mailto:${storeInfo.email}`} className="hover:text-white transition">
                  {storeInfo.email}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href={storeInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>
                <a
                  href={storeInfo.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GF ICON. Thương hiệu thuộc về Dạ Quỳnh — Xưởng Sỉ Hoàng Hưng.
        </div>
      </div>
    </footer>
  );
}
