"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getProductBySlug, formatPrice, products, categories } from "@/data/products";
import { useCart } from "@/components/CartProvider";
import ProductCard from "@/components/ProductCard";

// Bảng size áo thun GF ICON
const shirtSizeChart = [
  { size: "L", weight: "55 – 62kg", height: "160 – 168cm", body: "Gầy – cân đối" },
  { size: "XL", weight: "62 – 70kg", height: "165 – 175cm", body: "Cân đối" },
  { size: "2XL", weight: "70 – 80kg", height: "168 – 178cm", body: "Cân đối – hơi to" },
  { size: "3XL", weight: "78 – 90kg", height: "170 – 185cm", body: "To – vạm vỡ" },
];

// Bảng size quần tây
const pantsSizeChart = [
  { size: "29", waist: "73cm", hip: "92cm", body: "55 – 60kg" },
  { size: "30", waist: "76cm", hip: "95cm", body: "60 – 65kg" },
  { size: "31", waist: "79cm", hip: "98cm", body: "65 – 70kg" },
  { size: "32", waist: "82cm", hip: "101cm", body: "70 – 75kg" },
  { size: "33", waist: "85cm", hip: "104cm", body: "75 – 80kg" },
  { size: "34", waist: "88cm", hip: "107cm", body: "80 – 90kg" },
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Sản phẩm không tồn tại</h1>
        <Link href="/san-pham" className="text-gray-900 hover:underline mt-4 inline-block text-sm uppercase tracking-wider">
          &larr; Quay lại sản phẩm
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.slug === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const isPants = product.category === "quan-tay-au";
  const currentSizeChart = isPants ? pantsSizeChart : shirtSizeChart;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Vui lòng chọn màu và size!");
      return;
    }
    addItem(product, selectedColor, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-8 uppercase tracking-wider">
        <Link href="/" className="hover:text-gray-900 transition">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link href="/san-pham" className="hover:text-gray-900 transition">Sản phẩm</Link>
        {category && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/san-pham?category=${category.slug}`} className="hover:text-gray-900 transition">
              {category.name}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          {product.images.length > 0 && product.images[0] !== "/images/products/co-tru-classic-1.jpg" && !product.images[0].includes("placeholder") ? (
            <div>
              {/* Main Image */}
              <div className="bg-[#f5f0eb] aspect-[3/4] overflow-hidden">
                <img
                  src={product.images[activeImage] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`shrink-0 w-16 h-20 overflow-hidden border-2 transition ${
                        activeImage === i ? "border-gray-900" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[#f5f0eb] aspect-[3/4] flex items-center justify-center">
              <div className="text-center opacity-30">
                <svg viewBox="0 0 120 160" fill="none" className="w-32 h-44 mx-auto text-gray-500">
                  <path d="M60 12 L40 28 L35 25 L28 35 L18 140 L102 140 L92 35 L85 25 L80 28 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M40 28 Q60 42 80 28" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="60" cy="18" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                </svg>
                <p className="text-gray-400 text-xs mt-4 uppercase tracking-[0.2em]">Ảnh sản phẩm sắp cập nhật</p>
              </div>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          {product.badge && (
            <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4 ${
              product.badge === "hot" ? "bg-gray-900 text-white" : product.badge === "new" ? "bg-gray-900 text-white" : "bg-emerald-500 text-white"
            }`}>
              {product.badge === "hot" ? "Bán chạy" : product.badge === "new" ? "Mới" : "Sale"}
            </span>
          )}

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">{product.name}</h1>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-[0.15em]">{product.material}</p>

          {/* Price */}
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
            {product.originalPrice && (
              <span className="text-xs bg-amber-500 text-white px-2 py-1 font-bold">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          <div className="w-12 h-[1px] bg-gray-200 my-6" />

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>

          {/* Features */}
          <ul className="mt-5 space-y-2">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="w-1 h-1 rounded-full bg-gray-900 mt-2 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="w-12 h-[1px] bg-gray-200 my-6" />

          {/* Color Selection */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 uppercase tracking-[0.15em] mb-3">
              Màu sắc {selectedColor && <span className="font-normal text-gray-400 normal-case tracking-normal">— {selectedColor}</span>}
            </label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2.5 text-sm border transition-all ${
                    selectedColor === color
                      ? "border-gray-900 bg-gray-900 text-white font-medium"
                      : "border-gray-200 text-gray-500 hover:border-gray-400"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-semibold text-gray-900 uppercase tracking-[0.15em]">
                Size {selectedSize && <span className="font-normal text-gray-400 normal-case tracking-normal">— {selectedSize}</span>}
              </label>
              <button
                onClick={() => setShowSizeGuide(!showSizeGuide)}
                className="text-xs text-gray-400 hover:text-gray-900 underline underline-offset-2 transition uppercase tracking-wider"
              >
                Hướng dẫn chọn size
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[52px] h-11 px-3 text-sm border transition-all ${
                    selectedSize === size
                      ? "border-gray-900 bg-gray-900 text-white font-medium"
                      : "border-gray-200 text-gray-500 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Size Guide Table */}
          {showSizeGuide && (
            <div className="mt-4 bg-[#f5f0eb] p-5 animate-fade-in">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em] mb-4">
                Bảng size {isPants ? "Quần Tây" : "Áo Thun"} GF ICON
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 pr-4 text-xs font-bold text-gray-900 uppercase">Size</th>
                      {isPants ? (
                        <>
                          <th className="text-left py-2 pr-4 text-xs font-bold text-gray-900 uppercase">Vòng eo</th>
                          <th className="text-left py-2 pr-4 text-xs font-bold text-gray-900 uppercase">Vòng hông</th>
                          <th className="text-left py-2 text-xs font-bold text-gray-900 uppercase">Cân nặng</th>
                        </>
                      ) : (
                        <>
                          <th className="text-left py-2 pr-4 text-xs font-bold text-gray-900 uppercase">Cân nặng</th>
                          <th className="text-left py-2 pr-4 text-xs font-bold text-gray-900 uppercase">Chiều cao</th>
                          <th className="text-left py-2 text-xs font-bold text-gray-900 uppercase">Dáng người</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {isPants
                      ? pantsSizeChart.map((row) => (
                          <tr key={row.size} className={`border-b border-gray-200 ${selectedSize === row.size ? "bg-gray-900 text-white" : ""}`}>
                            <td className="py-2.5 pr-4 font-bold">{row.size}</td>
                            <td className="py-2.5 pr-4">{row.waist}</td>
                            <td className="py-2.5 pr-4">{row.hip}</td>
                            <td className="py-2.5">{row.body}</td>
                          </tr>
                        ))
                      : shirtSizeChart.map((row) => (
                          <tr key={row.size} className={`border-b border-gray-200 ${selectedSize === row.size ? "bg-gray-900 text-white" : ""}`}>
                            <td className="py-2.5 pr-4 font-bold">{row.size}</td>
                            <td className="py-2.5 pr-4">{row.weight}</td>
                            <td className="py-2.5 pr-4">{row.height}</td>
                            <td className="py-2.5">{row.body}</td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[11px] text-gray-400 italic">
                * Bảng size mang tính tương đối. Nếu nằm giữa 2 size, hãy chọn size lớn hơn. Nhắn Zalo 0927.007.117 để được tư vấn chính xác.
              </p>
            </div>
          )}

          {/* Quantity */}
          <div className="mt-6">
            <label className="block text-xs font-semibold text-gray-900 uppercase tracking-[0.15em] mb-3">Số lượng</label>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-11 h-11 border border-gray-200 text-gray-500 hover:border-gray-400 transition flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
              <span className="w-14 h-11 flex items-center justify-center border-y border-gray-200 text-sm font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-11 h-11 border border-gray-200 text-gray-500 hover:border-gray-400 transition flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 py-3.5 px-6 text-sm font-semibold uppercase tracking-[0.15em] transition-all btn-shine ${
                added
                  ? "bg-emerald-600 text-white"
                  : product.inStock
                  ? "bg-gray-900 hover:bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {added ? "Đã thêm vào giỏ ✓" : product.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
            </button>
            <Link
              href="/gio-hang"
              className="py-3.5 px-6 text-sm font-semibold uppercase tracking-[0.15em] border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
            >
              Mua ngay
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 bg-[#f5f0eb] p-5">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em] mb-3">
              Yên tâm khi mua GF ICON
            </h3>
            <div className="space-y-2">
              {[
                "Hình ảnh sản phẩm chụp thật",
                "Chất vải giống mô tả",
                "Form mặc thực tế dễ mặc",
                "Kiểm tra kỹ trước khi giao hàng",
                "Hỗ trợ đổi size nếu mặc không vừa",
                "Hàng lỗi đổi miễn phí qua Zalo",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-400 italic">
              Inbox khu vực bạn đang sống, shop sẽ gửi địa chỉ cửa hàng gần nhất để xem chất vải và thử form trực tiếp.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-8">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
