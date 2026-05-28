"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getProductBySlug, formatPrice, products, categories } from "@/data/products";
import { useCart } from "@/components/CartProvider";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">San pham khong ton tai</h1>
        <Link href="/san-pham" className="text-amber-600 hover:underline mt-4 inline-block">
          &larr; Quay lai san pham
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.slug === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Vui long chon mau va size!");
      return;
    }
    addItem(product, selectedColor, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-900">Trang chu</Link>
        <span className="mx-2">/</span>
        <Link href="/san-pham" className="hover:text-gray-900">San pham</Link>
        {category && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/san-pham?category=${category.slug}`} className="hover:text-gray-900">
              {category.name}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
          <div className="text-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-24 h-24 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5a1.5 1.5 0 001.5 1.5z" />
            </svg>
            <p className="mt-3 text-sm">Them anh san pham</p>
          </div>
        </div>

        {/* Product Info */}
        <div>
          {product.badge && (
            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase mb-3 ${
              product.badge === "hot" ? "bg-red-100 text-red-600" : product.badge === "new" ? "bg-amber-100 text-amber-600" : "bg-green-100 text-green-600"
            }`}>
              {product.badge === "hot" ? "Ban chay" : product.badge === "new" ? "Moi" : "Sale"}
            </span>
          )}

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-2">{product.material}</p>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-bold text-amber-600">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
            {product.originalPrice && (
              <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

          {/* Features */}
          <ul className="mt-4 space-y-2">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-amber-500 mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Color Selection */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Mau sac: {selectedColor && <span className="font-normal text-gray-500">{selectedColor}</span>}
            </label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 text-sm rounded-lg border transition ${
                    selectedColor === color
                      ? "border-amber-600 bg-amber-50 text-amber-700 font-semibold"
                      : "border-gray-200 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-5">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Size: {selectedSize && <span className="font-normal text-gray-500">{selectedSize}</span>}
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-10 text-sm rounded-lg border transition ${
                    selectedSize === size
                      ? "border-amber-600 bg-amber-50 text-amber-700 font-semibold"
                      : "border-gray-200 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-5">
            <label className="block text-sm font-semibold text-gray-900 mb-2">So luong</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-200 rounded-lg text-gray-600 hover:border-gray-400 transition"
              >
                -
              </button>
              <span className="w-10 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-200 rounded-lg text-gray-600 hover:border-gray-400 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 py-3 px-6 rounded-full font-semibold text-white transition ${
                added
                  ? "bg-green-500"
                  : product.inStock
                  ? "bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-600/30"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {added ? "Da them vao gio!" : product.inStock ? "Them vao gio hang" : "Het hang"}
            </button>
            <Link
              href="/gio-hang"
              className="py-3 px-6 rounded-full font-semibold border border-gray-300 text-gray-700 hover:border-gray-500 transition"
            >
              Mua ngay
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">San pham lien quan</h2>
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
