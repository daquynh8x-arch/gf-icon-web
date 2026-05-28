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

          {/* San pham */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              San pham
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/san-pham?category=ao-thun-co-tru" className="hover:text-white transition">
                  Ao Thun Co Tru
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=ao-polo" className="hover:text-white transition">
                  Ao Polo Nam
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=ao-thun-co-tron" className="hover:text-white transition">
                  Ao Thun Co Tron
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="hover:text-white transition">
                  Tat ca san pham
                </Link>
              </li>
            </ul>
          </div>

          {/* Chinh sach */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Chinh sach
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Doi tra trong {storeInfo.policies.returnDays} ngay</li>
              <li>Free ship don tu {(storeInfo.policies.freeShipMin / 1000).toFixed(0)}k</li>
              <li>Thanh toan COD toan quoc</li>
              <li>Chuyen khoan ngan hang</li>
            </ul>
          </div>

          {/* Lien he */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Lien he
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
          &copy; {new Date().getFullYear()} GF ICON. Thuong hieu thuoc ve Da Quynh — Xuong Si Hoang Hung.
        </div>
      </div>
    </footer>
  );
}
