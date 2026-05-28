import Link from "next/link";
import { Product, formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/san-pham/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {/* Placeholder when no real image */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className="w-16 h-16 text-gray-300 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5a1.5 1.5 0 001.5 1.5z"
              />
            </svg>
            <p className="text-xs text-gray-400 mt-2">{product.name}</p>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${
              product.badge === "hot"
                ? "bg-red-500 text-white"
                : product.badge === "new"
                ? "bg-amber-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {product.badge === "hot" ? "Bán chạy" : product.badge === "new" ? "Mới" : "Sale"}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{product.material}</p>

        {/* Colors preview */}
        <p className="text-xs text-gray-400 mt-2">
          {product.colors.length} màu | {product.sizes.join(", ")}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-amber-600">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
