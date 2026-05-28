import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, categories, formatPrice } from "@/data/products";
import { storeInfo } from "@/data/store-info";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4">
              Thuong hieu ao thun nam Viet Nam
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Chat luong cao cap.
              <br />
              <span className="text-amber-500">Gia binh dan.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              GF ICON giup ban tu tin va chin chu moi ngay voi ao thun, ao polo chat lieu thun lanh QC va ca sau min QC cao cap.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/san-pham"
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition shadow-lg shadow-amber-600/30"
              >
                Mua ngay
              </Link>
              <Link
                href="/ve-chung-toi"
                className="px-8 py-3 border border-white/30 hover:border-white text-white font-semibold rounded-full transition"
              >
                Tim hieu them
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES BAR ============ */}
      <section className="bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🚚", text: `Free ship don tu ${(storeInfo.policies.freeShipMin / 1000).toFixed(0)}k` },
              { icon: "🔄", text: `Doi tra ${storeInfo.policies.returnDays} ngay` },
              { icon: "💳", text: "COD toan quoc" },
              { icon: "✅", text: "Chat luong chuan shop" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Danh muc san pham</h2>
          <p className="mt-3 text-gray-500">Chon phong cach cua ban</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/san-pham?category=${cat.slug}`}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] flex items-end hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative p-6 text-white">
                <h3 className="text-xl font-bold group-hover:text-amber-400 transition">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">San pham noi bat</h2>
              <p className="mt-2 text-gray-500">Nhung mau ban chay nhat thang nay</p>
            </div>
            <Link
              href="/san-pham"
              className="text-amber-600 hover:text-amber-700 font-semibold text-sm transition"
            >
              Xem tat ca &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY GF ICON ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Tai sao chon GF ICON?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Chat lieu cao cap",
              desc: "Thun lanh QC va ca sau min QC — thoang mat, khong nhan, khong bai. Giat may nhieu lan van giu form.",
              icon: "👕",
            },
            {
              title: "May ky chuan shop",
              desc: "Tung duong chi deu dep, form ao chuan, size chinh xac tu M den XXL (50-95kg).",
              icon: "✂️",
            },
            {
              title: "Gia hop ly",
              desc: "San pham truc tiep tu xuong — khong qua trung gian. Chat luong tuong duong 400-500k, gia chi tu " + formatPrice(199000) + ".",
              icon: "💰",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-amber-50 transition"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">Tu tin moi ngay voi GF ICON</h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Don tu {formatPrice(storeInfo.policies.freeShipMin)} duoc mien phi van chuyen. Doi tra trong {storeInfo.policies.returnDays} ngay neu khong hai long.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/san-pham"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition"
            >
              Xem san pham
            </Link>
            <a
              href={`https://zalo.me/${storeInfo.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 hover:border-white font-semibold rounded-full transition"
            >
              Nhan Zalo tu van
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
