"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-gray-900">
              GF <span className="text-amber-600">ICON</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/san-pham"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              Sản phẩm
            </Link>
            <Link
              href="/san-pham?category=ao-thun-co-tru"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              Áo Cổ Trụ
            </Link>
            <Link
              href="/san-pham?category=ao-polo"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              Áo Polo
            </Link>
            <Link
              href="/ve-chung-toi"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              Về chúng tôi
            </Link>
            <Link
              href="/lien-he"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              Liên hệ
            </Link>
          </nav>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/gio-hang"
              className="relative p-2 text-gray-600 hover:text-gray-900 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-2">
            <div className="flex flex-col gap-2">
              {[
                { href: "/san-pham", label: "Sản phẩm" },
                { href: "/san-pham?category=ao-thun-co-tru", label: "Áo Cổ Trụ" },
                { href: "/san-pham?category=ao-polo", label: "Áo Polo" },
                { href: "/ve-chung-toi", label: "Về chúng tôi" },
                { href: "/lien-he", label: "Liên hệ" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
