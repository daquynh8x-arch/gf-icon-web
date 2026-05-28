import Link from "next/link";
import { Product, formatPrice } from "@/data/products";

// Map color names to hex values for dots
const colorMap: Record<string, string> = {
  "Đen": "#111827",
  "Trắng": "#f9fafb",
  "Xám": "#6b7280",
  "Xám Đậm": "#4b5563",
  "Xanh Navy": "#1e3a5f",
  "Xanh Đen": "#0f2027",
  "Xanh Rêu": "#2d4a22",
  "Xanh Dương": "#2563eb",
  "Be": "#d4b896",
  "Nâu": "#78350f",
  "Ghi Sáng": "#9ca3af",
  "Rượu Vang": "#722f37",
  "Cà Phê": "#6b4423",
};

function getColorHex(name: string): string {
  return colorMap[name] || "#d1d5db";
}

function getDiscountPercent(price: number, originalPrice?: number): number | null {
  if (!originalPrice || originalPrice <= price) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = getDiscountPercent(product.price, product.originalPrice);

  return (
    <Link
      href={`/san-pham/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden card-hover border border-gray-100"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        {/* Product image or placeholder */}
        {product.images[0] && !product.images[0].includes("co-tru-classic") && !product.images[0].includes("co-tru-phoi") && !product.images[0].includes("co-tron-") && !product.images[0].includes("quan-tay-") && !product.images[0].includes("bomber-") && !product.images[0].includes("that-lung-") ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center shimmer-bg">
            <div className="text-center opacity-40 group-hover:opacity-50 transition-opacity">
              <svg viewBox="0 0 100 120" fill="none" className="w-20 h-24 mx-auto text-gray-400">
                <path d="M50 8 L35 20 L30 18 L25 25 L15 95 L85 95 L75 25 L70 18 L65 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M35 20 Q50 30 65 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="50" cy="14" r="2" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

        {/* Quick view hint */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-gray-900/90 text-white text-center py-2.5 text-xs font-medium tracking-wide uppercase">
            Xem chi tiết
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={`px-2.5 py-1 text-[10px] font-bold rounded-md uppercase tracking-wider shadow-sm ${
                product.badge === "hot"
                  ? "bg-red-500 text-white"
                  : product.badge === "new"
                  ? "bg-gray-900 text-white"
                  : "bg-emerald-500 text-white"
              }`}
            >
              {product.badge === "hot" ? "Bán chạy" : product.badge === "new" ? "Mới" : "Sale"}
            </span>
          )}
          {discount && (
            <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-amber-500 text-white shadow-sm">
              -{discount}%
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2.5">
        {/* Name */}
        <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1 text-sm lg:text-base">
          {product.name}
        </h3>

        {/* Material */}
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
          {product.material}
        </p>

        {/* Color dots */}
        <div className="flex items-center gap-1.5">
          {product.colors.slice(0, 5).map((color) => (
            <span
              key={color}
              className="w-4 h-4 rounded-full border border-gray-200 shadow-sm"
              style={{ backgroundColor: getColorHex(color) }}
              title={color}
            />
          ))}
          {product.colors.length > 5 && (
            <span className="text-[10px] text-gray-400 ml-0.5">+{product.colors.length - 5}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-lg font-bold text-amber-600">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
