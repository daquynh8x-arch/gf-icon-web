import Link from "next/link";
import { storeInfo } from "@/data/store-info";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Về chúng tôi
        </p>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900">
          GF <span className="text-amber-600">ICON</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Áo thun nam cao cấp với giá bình dân — giúp bạn tự tin và chỉn chu mỗi ngày.
        </p>
      </div>

      {/* Story */}
      <section className="prose prose-lg max-w-none">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Câu chuyện của chúng tôi</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              GF ICON ra đời từ một niềm tin đơn giản: <strong>mỗi người đàn ông Việt Nam đều xứng đáng mặc đẹp với giá hợp lý</strong>.
            </p>
            <p>
              Không phải áo hàng chợ. Không phải áo premium xa xỉ. Mà là áo thun chất lượng cao cấp — thun lạnh QC, cá sấu mịn QC — với giá mà ai cũng với tới được.
            </p>
            <p>
              Với hơn 10 năm kinh nghiệm trong ngành thời trang nam cùng Xưởng Sỉ Hoàng Hưng — phục vụ 1.000+ đối tác toàn quốc — chúng tôi hiểu rõ <strong>thế nào là một chiếc áo đáng mặc</strong>: chất vải phải mát, form phải đẹp, đường chỉ phải kỹ, và giá phải thật.
            </p>
            <p>
              GF ICON là thương hiệu để mọi khách hàng — không chỉ shop — đều có thể sở hữu chất lượng xứng tầm từ Hồ Chí Minh.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Giá trị cốt lõi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Chất lượng thật",
              desc: "Thun lạnh QC và cá sấu mịn QC — không phải vải rẻ, không phải hàng chợ. Chất liệu được chọn lọc kỹ lưỡng, may kỹ chuẩn shop.",
              icon: "👕",
            },
            {
              title: "Giá thật",
              desc: "Trực tiếp từ xưởng đến tay bạn. Không trung gian, không đội giá. Giá niêm yết là giá bán được.",
              icon: "💰",
            },
            {
              title: "Thiết kế cho người Việt",
              desc: "Form áo chuẩn dáng người Việt, size từ L đến 5XL (dưới 55kg - 89kg). Mặc vừa, mặc đẹp, mặc tự tin.",
              icon: "✂️",
            },
            {
              title: "Phục vụ tận tâm",
              desc: "Đổi trả trong " + storeInfo.policies.returnDays + " ngày. Free ship từ " + (storeInfo.policies.freeShipMin / 1000).toFixed(0) + "k. Hỗ trợ Zalo 24/7.",
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
          <h2 className="text-2xl font-bold text-center mb-8">GF ICON bằng con số</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "10+", label: "Năm kinh nghiệm" },
              { num: "1000+", label: "Đối tác toàn quốc" },
              { num: "3", label: "Dòng sản phẩm" },
              { num: "L-5XL", label: "Đầy đủ size" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sẵn sàng trải nghiệm?</h2>
          <p className="text-gray-500 mb-6">Chọn cho mình một chiếc áo GF ICON — tự tin hơn mỗi ngày.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/san-pham"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition"
            >
              Xem sản phẩm
            </Link>
            <a
              href={`https://zalo.me/${storeInfo.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-500 transition"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
