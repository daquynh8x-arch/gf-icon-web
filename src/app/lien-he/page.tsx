import { storeInfo } from "@/data/store-info";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Liên hệ với chúng tôi</h1>
        <p className="mt-3 text-gray-500">Bạn cần tư vấn, hỗ trợ, hay muốn hợp tác? Liên hệ GF ICON bất cứ lúc nào.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Cards */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                💬
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Zalo</h3>
                <a
                  href={`https://zalo.me/${storeInfo.zalo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {storeInfo.zalo}
                </a>
                <p className="text-xs text-gray-500 mt-1">Phản hồi nhanh nhất — trong vòng 30 phút</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                📞
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Điện thoại</h3>
                <a href={`tel:${storeInfo.phone}`} className="text-green-600 hover:underline">
                  {storeInfo.phone}
                </a>
                <p className="text-xs text-gray-500 mt-1">8h - 21h hàng ngày</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                ✉️
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <a href={`mailto:${storeInfo.email}`} className="text-purple-600 hover:underline">
                  {storeInfo.email}
                </a>
                <p className="text-xs text-gray-500 mt-1">Phản hồi trong 24h</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                📘
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Facebook</h3>
                <a
                  href={storeInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GF ICON
                </a>
                <p className="text-xs text-gray-500 mt-1">Inbox trực tiếp trên Facebook</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Thông tin cửa hàng</h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Thương hiệu</p>
                <p className="font-semibold text-gray-900">GF ICON — Áo thun nam cao cấp</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Địa chỉ</p>
                <p className="font-semibold text-gray-900">{storeInfo.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Giờ làm việc</p>
                <p className="font-semibold text-gray-900">8h - 21h (T2 - CN)</p>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <h3 className="font-bold text-gray-900 mb-3">Chính sách</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Đổi trả trong {storeInfo.policies.returnDays} ngày
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Free ship đơn từ {(storeInfo.policies.freeShipMin / 1000).toFixed(0)}k
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                COD toàn quốc
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Chuyển khoản ngân hàng
              </li>
            </ul>

            <hr className="my-6 border-gray-200" />

            <h3 className="font-bold text-gray-900 mb-3">Bạn muốn hợp tác?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Nếu bạn là shop thời trang và muốn kinh doanh sản phẩm GF ICON, liên hệ để trở thành đối tác phân phối.
            </p>
            <a
              href={`https://zalo.me/${storeInfo.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full text-sm transition"
            >
              Liên hệ hợp tác
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
