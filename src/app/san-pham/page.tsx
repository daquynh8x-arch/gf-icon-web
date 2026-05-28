"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import Link from "next/link";

function ProductList() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filtered = categoryFilter
    ? products.filter((p) => p.category === categoryFilter)
    : products;

  const currentCategory = categoryFilter
    ? categories.find((c) => c.slug === categoryFilter)
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-900">
          Trang chu
        </Link>
        <span className="mx-2">/</span>
        {currentCategory ? (
          <>
            <Link href="/san-pham" className="hover:text-gray-900">
              San pham
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{currentCategory.name}</span>
          </>
        ) : (
          <span className="text-gray-900">Tat ca san pham</span>
        )}
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="md:w-56 shrink-0">
          <h3 className="font-semibold text-gray-900 mb-4">Danh muc</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/san-pham"
                className={`block px-3 py-2 rounded-lg text-sm transition ${
                  !categoryFilter
                    ? "bg-amber-100 text-amber-800 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Tat ca ({products.length})
              </Link>
            </li>
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat.slug).length;
              return (
                <li key={cat.id}>
                  <Link
                    href={`/san-pham?category=${cat.slug}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition ${
                      categoryFilter === cat.slug
                        ? "bg-amber-100 text-amber-800 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat.name} ({count})
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {currentCategory ? currentCategory.name : "Tat ca san pham"}
            </h1>
            <span className="text-sm text-gray-500">{filtered.length} san pham</span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Chua co san pham nao trong danh muc nay.</p>
              <Link href="/san-pham" className="text-amber-600 hover:underline mt-2 inline-block">
                Xem tat ca san pham
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SanPhamPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-400">
          Dang tai san pham...
        </div>
      }
    >
      <ProductList />
    </Suspense>
  );
}
