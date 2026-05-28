// ============================================================
// DATA SẢN PHẨM GF ICON
// Quỳnh chỉ cần sửa file này để cập nhật sản phẩm
// ============================================================

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "ao-thun-co-tru" | "ao-thun-co-tron" | "quan-tay-au" | "san-pham-khac";
  price: number;
  originalPrice?: number;
  images: string[];
  colors: string[];
  sizes: string[];
  material: string;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: "new" | "hot" | "sale";
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

// ============================================================
// DANH MỤC SẢN PHẨM
// ============================================================

export const categories: Category[] = [
  {
    id: "ao-thun-co-tru",
    name: "Áo Thun Cổ Trụ",
    slug: "ao-thun-co-tru",
    description: "Phong cách lịch lãm, chất thun lạnh QC thoáng mát",
    image: "/images/category-co-tru.jpg",
  },
  {
    id: "ao-thun-co-tron",
    name: "Áo Thun Cổ Tròn",
    slug: "ao-thun-co-tron",
    description: "Basic dễ phối đồ, chất thun lạnh QC mềm mịn",
    image: "/images/category-co-tron.jpg",
  },
  {
    id: "quan-tay-au",
    name: "Quần Tây Âu",
    slug: "quan-tay-au",
    description: "Lịch lãm, đứng form, phù hợp đi làm và sự kiện",
    image: "/images/category-quan-tay.jpg",
  },
  {
    id: "san-pham-khac",
    name: "Sản Phẩm Khác",
    slug: "san-pham-khac",
    description: "Phụ kiện, áo khoác và các sản phẩm đặc biệt",
    image: "/images/category-khac.jpg",
  },
];

// ============================================================
// SẢN PHẨM — Quỳnh thay ảnh thật và cập nhật thông tin
// ============================================================

export const products: Product[] = [
  // --- ÁO THUN CỔ TRỤ ---
  {
    id: "gfi-001",
    slug: "ao-thun-co-tru-classic-den",
    name: "Áo Thun Cổ Trụ Classic",
    category: "ao-thun-co-tru",
    price: 259000,
    originalPrice: 320000,
    images: ["/images/products/co-tru-classic-1.jpg"],
    colors: ["Đen", "Trắng", "Xám", "Xanh Navy"],
    sizes: ["L", "XL", "2XL", "3XL", "4XL", "5XL"],
    material: "Thun lạnh QC cao cấp",
    description:
      "Áo thun cổ trụ GF ICON phiên bản Classic — thiết kế tinh giản, chất thun lạnh QC thoáng mát. Phù hợp mặc đi làm, đi chơi, hay ngày thường. Cổ trụ đứng form, may kỹ từng đường chỉ.",
    features: [
      "Chất liệu: Thun lạnh QC — thoáng mát, không nhăn, không bai",
      "Cổ trụ đứng form, lịch lãm",
      "May kỹ chuẩn shop — đường chỉ đều đẹp",
      "Size: L - 5XL (dưới 55kg - 89kg)",
      "Giặt máy không biến dạng",
    ],
    inStock: true,
    badge: "hot",
  },
  {
    id: "gfi-002",
    slug: "ao-thun-co-tru-phoi-ke",
    name: "Áo Thun Cổ Trụ Phối Kẻ",
    category: "ao-thun-co-tru",
    price: 279000,
    images: ["/images/products/co-tru-phoi-ke-1.jpg"],
    colors: ["Đen phối kẻ", "Navy phối kẻ", "Xám phối kẻ"],
    sizes: ["L", "XL", "2XL", "3XL", "4XL", "5XL"],
    material: "Thun lạnh QC cao cấp",
    description:
      "Áo thun cổ trụ phối kẻ GF ICON — điểm nhấn tinh tế ở cổ và tay. Chất thun lạnh QC mềm mịn, thoáng mát suốt ngày. Phong cách trẻ trung nhưng không quá nổi bật.",
    features: [
      "Chất liệu: Thun lạnh QC — mềm mịn, thoáng mát",
      "Chi tiết phối kẻ tinh tế ở cổ và tay áo",
      "Đứng form, tôn dáng",
      "Size: L - 5XL",
      "Dễ phối với quần jeans, kaki, short",
    ],
    inStock: true,
    badge: "new",
  },

  // --- ÁO THUN CỔ TRÒN ---
  {
    id: "gfi-003",
    slug: "ao-thun-co-tron-basic",
    name: "Áo Thun Cổ Tròn Basic",
    category: "ao-thun-co-tron",
    price: 199000,
    images: ["/images/products/co-tron-basic-1.jpg"],
    colors: ["Đen", "Trắng", "Xám", "Xanh Navy", "Kem"],
    sizes: ["L", "XL", "2XL", "3XL", "4XL", "5XL"],
    material: "Thun lạnh QC",
    description:
      "Áo thun cổ tròn basic GF ICON — đơn giản nhưng không tầm thường. Chất thun lạnh QC mềm mịn, mặc một mình hay layer đều đẹp. Must-have cho tủ đồ nam.",
    features: [
      "Chất liệu: Thun lạnh QC — mềm, mát, không nhăn",
      "Cổ tròn rộng vừa phải",
      "Form fitted — tôn dáng không chật",
      "Size: L - 5XL",
      "5 màu cơ bản, dễ mix-match",
    ],
    inStock: true,
    badge: "hot",
  },
  {
    id: "gfi-004",
    slug: "ao-thun-co-tron-in-minimal",
    name: "Áo Thun Cổ Tròn In Minimal",
    category: "ao-thun-co-tron",
    price: 229000,
    images: ["/images/products/co-tron-minimal-1.jpg"],
    colors: ["Đen", "Trắng", "Xám Đậm"],
    sizes: ["L", "XL", "2XL", "3XL", "4XL", "5XL"],
    material: "Thun lạnh QC",
    description:
      "Áo thun cổ tròn GF ICON với họa tiết in minimal — tinh tế, không lòe loẹt. Chất thun lạnh QC thoáng mát, hình in bền màu không bong tróc.",
    features: [
      "Chất liệu: Thun lạnh QC cao cấp",
      "Họa tiết in DTG — bền màu, không bong tróc",
      "Thiết kế minimal, phù hợp mọi dịp",
      "Size: L - 5XL",
      "Giặt máy bình thường, không cần chăm sóc đặc biệt",
    ],
    inStock: true,
    badge: "new",
  },

  // --- QUẦN TÂY ÂU ---
  {
    id: "gfi-005",
    slug: "quan-tay-au-slim-fit",
    name: "Quần Tây Âu Slim Fit",
    category: "quan-tay-au",
    price: 359000,
    originalPrice: 450000,
    images: ["/images/products/quan-tay-slim-1.jpg"],
    colors: ["Đen", "Xám Đậm", "Xanh Navy"],
    sizes: ["29", "30", "31", "32", "33", "34"],
    material: "Vải âu co giãn cao cấp",
    description:
      "Quần tây âu GF ICON dáng slim fit — đứng form, tôn dáng, co giãn thoải mái. Chất vải âu cao cấp, không nhăn, giữ phom sau nhiều lần giặt. Phù hợp đi làm, sự kiện, hay phối smart casual.",
    features: [
      "Chất liệu: Vải âu co giãn cao cấp — thoáng mát, không nhăn",
      "Dáng slim fit — tôn dáng, gọn gàng",
      "Lưng có khóa móc, dây thắt lưng chuẩn",
      "Size: 29 - 34 (55kg - 90kg)",
      "Phù hợp đi làm, công sở, sự kiện",
    ],
    inStock: true,
    badge: "hot",
  },
  {
    id: "gfi-006",
    slug: "quan-tay-au-regular",
    name: "Quần Tây Âu Regular Fit",
    category: "quan-tay-au",
    price: 339000,
    images: ["/images/products/quan-tay-regular-1.jpg"],
    colors: ["Đen", "Xám", "Nâu", "Xanh Navy"],
    sizes: ["29", "30", "31", "32", "33", "34"],
    material: "Vải âu co giãn cao cấp",
    description:
      "Quần tây âu GF ICON dáng regular — thoải mái, không ôm sát, phù hợp nhiều vóc dáng. Vải âu co giãn nhẹ, thoáng mát cả ngày dài.",
    features: [
      "Chất liệu: Vải âu co giãn — mềm mại, thoáng khí",
      "Dáng regular fit — thoải mái mọi vóc dáng",
      "Đường may kỹ, ly quần sắc nét",
      "Size: 29 - 34",
      "4 màu cơ bản, dễ phối áo sơ mi, áo thun",
    ],
    inStock: true,
    badge: "new",
  },

  // --- SẢN PHẨM KHÁC ---
  {
    id: "gfi-007",
    slug: "ao-khoac-bomber-basic",
    name: "Áo Khoác Bomber Basic",
    category: "san-pham-khac",
    price: 399000,
    originalPrice: 520000,
    images: ["/images/products/bomber-basic-1.jpg"],
    colors: ["Đen", "Xanh Rêu", "Xám"],
    sizes: ["L", "XL", "2XL", "3XL", "4XL", "5XL"],
    material: "Vải dù chống nước nhẹ",
    description:
      "Áo khoác bomber GF ICON — thiết kế gọn gàng, chất dù nhẹ chống nước, phù hợp thời tiết Sài Gòn. Layer hoàn hảo với áo thun cổ tròn hoặc cổ trụ.",
    features: [
      "Chất liệu: Vải dù chống nước nhẹ",
      "Bo cổ, bo tay, bo gấu co giãn",
      "2 túi ngoài + 1 túi trong",
      "Size: L - 5XL",
      "Phối đẹp với mọi sản phẩm GF ICON",
    ],
    inStock: true,
    badge: "sale",
  },
  {
    id: "gfi-008",
    slug: "that-lung-da-nam",
    name: "Thắt Lưng Da Nam Classic",
    category: "san-pham-khac",
    price: 189000,
    images: ["/images/products/that-lung-1.jpg"],
    colors: ["Đen", "Nâu"],
    sizes: ["Free size"],
    material: "Da PU cao cấp",
    description:
      "Thắt lưng da nam GF ICON — khóa kim loại chắc chắn, da PU cao cấp mềm mại. Phối hoàn hảo với quần tây âu hoặc quần jeans.",
    features: [
      "Chất liệu: Da PU cao cấp — mềm, bền, không bong tróc",
      "Khóa kim loại mạ chống gỉ",
      "Bề rộng 3.5cm — chuẩn nam tính",
      "Free size — cắt được theo vòng eo",
      "Phối đẹp với quần tây, jeans, kaki",
    ],
    inStock: true,
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge === "hot" || p.badge === "new");
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}
