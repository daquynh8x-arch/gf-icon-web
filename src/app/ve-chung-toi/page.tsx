import Link from "next/link";
import { storeInfo } from "@/data/store-info";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Ve chung toi
        </p>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900">
          GF <span className="text-amber-600">ICON</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Ao thun nam cao cap voi gia binh dan — giup ban tu tin va chin chu moi ngay.
        </p>
      </div>

      {/* Story */}
      <section className="prose prose-lg max-w-none">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cau chuyen cua chung toi</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              GF ICON ra doi tu mot niem tin don gian: <strong>moi nguoi dan ong Viet Nam deu xung dang mac dep voi gia hop ly</strong>.
            </p>
            <p>
              Khong phai ao hang cho. Khong phai ao premium xa xi. Ma la ao thun chat luong cao cap — thun lanh QC, ca sau min QC — voi gia ma ai cung voi toi duoc.
            </p>
            <p>
              Voi hon 10 nam kinh nghiem trong nganh thoi trang nam cung Xuong Si Hoang Hung — phuc vu 1.000+ doi tac toan quoc — chung toi hieu ro <strong>the nao la mot chiec ao dang mac</strong>: chat vai phai mat, form phai dep, duong chi phai ky, va gia phai that.
            </p>
            <p>
              GF ICON la thuong hieu de moi khach hang — khong chi shop — deu co the so huu chat luong xung tu Ho Chi Minh.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Gia tri cot loi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Chat luong that",
              desc: "Thun lanh QC va ca sau min QC — khong phai vai re, khong phai hang cho. Chat lieu duoc chon loc ky luong, may ky chuan shop.",
              icon: "👕",
            },
            {
              title: "Gia that",
              desc: "Truc tiep tu xuong den tay ban. Khong trung gian, khong doi gia. Gia niem yet la gia ban duoc.",
              icon: "💰",
            },
            {
              title: "Thiet ke cho nguoi Viet",
              desc: "Form ao chuan dang nguoi Viet, size tu M den XXL (50-95kg). Mac vua, mac dep, mac tu tin.",
              icon: "✂️",
            },
            {
              title: "Phuc vu tan tam",
              desc: "Doi tra trong " + storeInfo.policies.returnDays + " ngay. Free ship tu " + (storeInfo.policies.freeShipMin / 1000).toFixed(0) + "k. Ho tro Zalo 24/7.",
              icon: "🤝",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Numbers */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">GF ICON bang con so</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "10+", label: "Nam kinh nghiem" },
              { num: "1000+", label: "Doi tac toan quoc" },
              { num: "3", label: "Dong san pham" },
              { num: "M-XXL", label: "Day du size" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-amber-500">{item.num}</p>
                <p className="text-sm text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">San sang trai nghiem?</h2>
          <p className="text-gray-500 mb-6">Chon cho minh mot chiec ao GF ICON — tu tin hon moi ngay.</p>
          <div className="flex flex-wrap justify-center gap-4">
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
              className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-500 transition"
            >
              Lien he tu van
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
