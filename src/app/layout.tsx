import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import { storeInfo } from "@/data/store-info";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: storeInfo.seo.title,
  description: storeInfo.seo.description,
  keywords: storeInfo.seo.keywords.join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* Zalo Chat Button */}
          <a
            href={`https://zalo.me/${storeInfo.zalo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            title="Chat Zalo"
          >
            <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-25" />
            <span className="relative flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.88 5.83L2.2 21.8l4.15-1.58A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.36-.56-4.68-1.5l-.33-.22-2.46.94.72-2.37-.24-.36A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </span>
          </a>
        </CartProvider>
      </body>
    </html>
  );
}
