import Link from "next/link";
import { storeInfo } from "@/data/store-info";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-auto">
      {/* CTA Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Tư vấn miễn phí qua Zalo</h3>
              <p className="text-sm text-gray-400 mt-1">Phản hồi trong 30 phút — 8h đến 21h hàng ngày</p>
            </div>
            <a
              href={`https://zalo.me/${storeInfo.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full transition-all btn-shine whitespace-nowrap text-sm uppercase tracking-wider"
            >
              Nhắn Zalo ngay
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-black text-white tracking-wider">
              GF <span className="font-light tracking-[0.3em]">ICON</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              {storeInfo.tagline}. Sản phẩm trực tiếp từ Xưởng Sỉ Hoàng Hưng — 10+ năm kinh nghiệm thời trang nam.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href={storeInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {storeInfo.tiktok && (
                <a
                  href={storeInfo.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 flex items-center justify-center transition-colors"
                  title="TikTok"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              )}
              <a
                href={`https://zalo.me/${storeInfo.zalo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition-colors"
                title="Zalo"
              >
                <span className="text-white text-xs font-bold">Z</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Sản phẩm
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/san-pham" className="hover:text-white transition-all inline-block">
                  Tất cả sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=ao-thun-co-tru" className="hover:text-white transition-all inline-block">
                  Áo Thun Cổ Trụ
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=ao-thun-co-tron" className="hover:text-white transition-all inline-block">
                  Áo Thun Cổ Tròn
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=quan-tay-au" className="hover:text-white transition-all inline-block">
                  Quần Tây Âu
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=san-pham-khac" className="hover:text-white transition-all inline-block">
                  Sản Phẩm Khác
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Chính sách
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                Đổi trả trong {storeInfo.policies.returnDays} ngày
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                Free ship đơn từ {(storeInfo.policies.freeShipMin / 1000).toFixed(0)}k
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                COD toàn quốc
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                Chuyển khoản ngân hàng
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Liên hệ
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{storeInfo.address}</span>
              </li>
              <li>
                <a href={`tel:${storeInfo.phone}`} className="flex items-center gap-2.5 hover:text-white transition">
                  <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {storeInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${storeInfo.email}`} className="flex items-center gap-2.5 hover:text-white transition">
                  <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {storeInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GF ICON. Thương hiệu thuộc về Dạ Quỳnh — Xưởng Sỉ Hoàng Hưng.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>COD toàn quốc</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>Chuyển khoản</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>Giao hàng 2-5 ngày</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
