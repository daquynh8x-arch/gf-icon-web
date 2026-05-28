import { storeInfo } from "@/data/store-info";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Lien he voi chung toi</h1>
        <p className="mt-3 text-gray-500">Ban can tu van, ho tro, hay muon hop tac? Lien he GF ICON bat cu luc nao.</p>
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
                <p className="text-xs text-gray-500 mt-1">Phan hoi nhanh nhat — trong vong 30 phut</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                📞
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Dien thoai</h3>
                <a href={`tel:${storeInfo.phone}`} className="text-green-600 hover:underline">
                  {storeInfo.phone}
                </a>
                <p className="text-xs text-gray-500 mt-1">8h - 21h hang ngay</p>
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
                <p className="text-xs text-gray-500 mt-1">Phan hoi trong 24h</p>
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
                <p className="text-xs text-gray-500 mt-1">Inbox truc tiep tren Facebook</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Thong tin cua hang</h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Thuong hieu</p>
                <p className="font-semibold text-gray-900">GF ICON — Ao thun nam cao cap</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dia chi</p>
                <p className="font-semibold text-gray-900">{storeInfo.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gio lam viec</p>
                <p className="font-semibold text-gray-900">8h - 21h (T2 - CN)</p>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <h3 className="font-bold text-gray-900 mb-3">Chinh sach</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Doi tra trong {storeInfo.policies.returnDays} ngay
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Free ship don tu {(storeInfo.policies.freeShipMin / 1000).toFixed(0)}k
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                COD toan quoc
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Chuyen khoan ngan hang
              </li>
            </ul>

            <hr className="my-6 border-gray-200" />

            <h3 className="font-bold text-gray-900 mb-3">Ban muon hop tac?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Neu ban la shop thoi trang va muon kinh doanh san pham GF ICON, lien he de tro thanh doi tac phan phoi.
            </p>
            <a
              href={`https://zalo.me/${storeInfo.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full text-sm transition"
            >
              Lien he hop tac
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
