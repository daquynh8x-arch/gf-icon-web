import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, categories, formatPrice } from "@/data/products";
import { storeInfo } from "@/data/store-info";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-[#f5f0eb] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center">
            {/* Text */}
            <div className="py-16 lg:py-0 animate-fade-in">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
                Thời trang nam cao cấp
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 uppercase">
                Timeless
                <br />
                <span className="font-light tracking-[0.1em]">Essentials</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-gray-500 max-w-md leading-relaxed">
                Thiết kế tối giản. Chất lượng vượt trội.
                <br />
                Phong cách dành cho người đàn ông hiện đại.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/san-pham"
                  className="px-10 py-3.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold uppercase tracking-[0.15em] transition-all btn-shine"
                >
                  Mua ngay
                </Link>
                <Link
                  href="/ve-chung-toi"
                  className="px-10 py-3.5 border border-gray-900 text-gray-900 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gray-900 hover:text-white transition-all"
                >
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:flex items-center justify-center animate-fade-in-delay">
              <div className="w-full max-w-lg aspect-[3/4] bg-gradient-to-b from-[#e8e0d8] to-[#d4c8bc] rounded-sm flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 120 160" fill="none" className="w-32 h-44 mx-auto opacity-20">
                    <path d="M60 12 L40 28 L35 25 L28 35 L18 140 L102 140 L92 35 L85 25 L80 28 Z" stroke="#666" strokeWidth="1" fill="none"/>
                    <path d="M40 28 Q60 42 80 28" stroke="#666" strokeWidth="1" fill="none"/>
                    <line x1="60" y1="28" x2="60" y2="90" stroke="#666" strokeWidth="0.5" opacity="0.5"/>
                    <circle cx="60" cy="18" r="2.5" stroke="#666" strokeWidth="0.8" fill="none"/>
                    <circle cx="60" cy="50" r="1.5" stroke="#666" strokeWidth="0.8" fill="none"/>
                    <circle cx="60" cy="65" r="1.5" stroke="#666" strokeWidth="0.8" fill="none"/>
                  </svg>
                  <p className="text-gray-400 text-xs mt-4 uppercase tracking-[0.2em]">GF ICON</p>
                  <p className="text-gray-400 text-[10px] mt-1">Ảnh sản phẩm sắp cập nhật</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES BAR ============ */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🚚", text: `Free ship đơn từ ${(storeInfo.policies.freeShipMin / 1000).toFixed(0)}k` },
              { icon: "↩️", text: `Đổi trả ${storeInfo.policies.returnDays} ngày` },
              { icon: "💳", text: "COD toàn quốc" },
              { icon: "✦", text: "Chất lượng chuẩn shop" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Bộ sưu tập</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">Danh mục sản phẩm</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/san-pham?category=${cat.slug}`}
              className="group relative bg-[#f5f0eb] overflow-hidden aspect-[3/4] flex items-end hover:shadow-2xl transition-all duration-500"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700">
                  <svg viewBox="0 0 100 120" fill="none" className="w-24 h-28 mx-auto text-gray-500">
                    <path d="M50 8 L35 20 L30 18 L25 25 L15 95 L85 95 L75 25 L70 18 L65 20 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <path d="M35 20 Q50 30 65 20" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              <div className="relative p-6 text-white w-full">
                <h3 className="text-xl font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Xem ngay</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Bán chạy nhất</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">Sản phẩm nổi bật</h2>
            </div>
            <Link
              href="/san-pham"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-amber-600 transition uppercase tracking-wider"
            >
              Xem tất cả
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-amber-600 transition uppercase tracking-wider"
            >
              Xem tất cả sản phẩm
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY GF ICON ============ */}
      <section className="bg-[#f5f0eb] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Cam kết</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">Tại sao chọn GF ICON?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Chất liệu cao cấp",
                desc: "Thun lạnh QC và cá sấu mịn QC — thoáng mát, không nhăn, không bai. Giặt máy nhiều lần vẫn giữ form.",
                num: "01",
              },
              {
                title: "May kỹ chuẩn shop",
                desc: "Từng đường chỉ đều đẹp, form áo chuẩn, size chính xác từ L đến 5XL (dưới 55kg - 89kg).",
                num: "02",
              },
              {
                title: "Giá hợp lý",
                desc: "Sản phẩm trực tiếp từ xưởng — không qua trung gian. Chất lượng tương đương 400-500k, giá chỉ từ " + formatPrice(199000) + ".",
                num: "03",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 md:p-10 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-5xl font-black text-gray-100 group-hover:text-amber-100 transition-colors absolute top-6 right-6">
                  {item.num}
                </span>
                <div className="relative">
                  <div className="w-10 h-[2px] bg-gray-900 mb-6" />
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BRAND STORY STRIP ============ */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">Câu chuyện thương hiệu</p>
          <h2 className="text-2xl md:text-3xl font-light leading-relaxed">
            Hơn <span className="font-bold">10 năm</span> kinh nghiệm cùng{" "}
            <span className="font-bold">1000+</span> đối tác toàn quốc.
            <br className="hidden md:block" />
            GF ICON ra đời để mỗi người đàn ông Việt Nam đều mặc đẹp với giá hợp lý.
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "10+", label: "Năm kinh nghiệm" },
              { num: "1000+", label: "Đối tác toàn quốc" },
              { num: "3", label: "Dòng sản phẩm" },
              { num: "L—5XL", label: "Đầy đủ size" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-black">{item.num}</p>
                <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
            Tự tin mỗi ngày
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Đơn từ {formatPrice(storeInfo.policies.freeShipMin)} được miễn phí vận chuyển. Đổi trả trong {storeInfo.policies.returnDays} ngày nếu không hài lòng.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/san-pham"
              className="px-10 py-3.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold uppercase tracking-[0.15em] transition-all btn-shine"
            >
              Xem sản phẩm
            </Link>
            <a
              href={`https://zalo.me/${storeInfo.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3.5 border border-gray-900 text-gray-900 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gray-900 hover:text-white transition-all"
            >
              Nhắn Zalo tư vấn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
