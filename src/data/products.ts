// ============================================================
// DATA SẢN PHẨM GF ICON
// Quỳnh chỉ cần sửa file này để cập nhật sản phẩm
// ============================================================

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "ao-thun-co-tru" | "ao-polo" | "ao-thun-co-tron";
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
    description: "Áo thun cổ trụ nam phong cách lịch lãm, chất thun lạnh QC thoáng mát",
    image: "/images/category-co-tru.jpg",
  },
  {
    id: "ao-polo",
    name: "Áo Polo",
    slug: "ao-polo",
    description: "Áo polo nam cá sấu mịn QC cao cấp, may kỹ chuẩn shop",
    image: "/images/category-polo.jpg",
  },
  {
    id: "ao-thun-co-tron",
    name: "Áo Thun Cổ Tròn",
    slug: "ao-thun-co-tron",
    description: "Áo thun cổ tròn basic, dễ phối đồ, chất thun lạnh QC",
    image: "/images/category-co-tron.jpg",
  },
];

// ============================================================
// SẢN PHẨM MẪU — Quỳnh thay ảnh thật và cập nhật thông tin
// ============================================================

export const products: Product[] = [
  {
    id: "gfi-001",
    slug: "ao-thun-co-tru-classic-den",
    name: "Áo Thun Cổ Trụ Classic",
    category: "ao-thun-co-tru",
    price: 259000,
    originalPrice: 320000,
    images: ["/images/products/co-tru-classic-1.jpg"],
    colors: ["Đen", "Trắng", "Xám", "Xanh Navy"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Thun lạnh QC cao cấp",
    description:
      "Áo thun cổ trụ GF ICON phiên bản Classic — thiết kế tinh giản, chất thun lạnh QC thoáng mát. Phù hợp mặc đi làm, đi chơi, hay ngày thường. Cổ trụ đứng form, may kỹ từng đường chỉ.",
    features: [
      "Chất liệu: Thun lạnh QC — thoáng mát, không nhăn, không bai",
      "Cổ trụ đứng form, lịch lãm",
      "May kỹ chuẩn shop — đường chỉ đều đẹp",
      "Size: M - XXL (50kg - 95kg)",
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
    sizes: ["M", "L", "XL", "XXL"],
    material: "Thun lạnh QC cao cấp",
    description:
      "Áo thun cổ trụ phối kẻ GF ICON — điểm nhấn tinh tế ở cổ và tay. Chất thun lạnh QC mềm mịn, thoáng mát suốt ngày. Phong cách trẻ trung nhưng không quá nổi bật.",
    features: [
      "Chất liệu: Thun lạnh QC — mềm mịn, thoáng mát",
      "Chi tiết phối kẻ tinh tế ở cổ và tay áo",
      "Đứng form, tôn dáng",
      "Size: M - XXL",
      "Dễ phối với quần jeans, kaki, short",
    ],
    inStock: true,
    badge: "new",
  },
  {
    id: "gfi-003",
    slug: "ao-polo-ca-sau-min",
    name: "Áo Polo Cá Sấu Mịn Premium",
    category: "ao-polo",
    price: 299000,
    originalPrice: 380000,
    images: ["/images/products/polo-ca-sau-1.jpg"],
    colors: ["Đen", "Trắng", "Xanh rêu", "Xám nhạt", "Be"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Cá sấu mịn QC cao cấp",
    description:
      "Áo polo GF ICON chất cá sấu mịn QC — bề mặt mịn màng, thoáng khí, không xù lông. Thiết kế cổ bẻ classic, phù hợp đi làm và đi chơi. May kỹ chuẩn shop, đường chỉ chỉnh chu.",
    features: [
      "Chất liệu: Cá sấu mịn QC cao cấp — mịn màng, thoáng khí",
      "Cổ bẻ classic, giữ phom tốt",
      "Không xù lông, không biến dạng sau nhiều lần giặt",
      "Size: M - XXL (50kg - 95kg)",
      "Phù hợp đi làm, cafe, hẹn hò",
    ],
    inStock: true,
    badge: "hot",
  },
  {
    id: "gfi-004",
    slug: "ao-polo-phoi-vien",
    name: "Áo Polo Phối Viền Sport",
    category: "ao-polo",
    price: 289000,
    images: ["/images/products/polo-phoi-vien-1.jpg"],
    colors: ["Đen phối đỏ", "Navy phối trắng", "Xám phối đen"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Cá sấu mịn QC cao cấp",
    description:
      "Áo polo phối viền GF ICON — phong cách sporty nhưng vẫn lịch sự. Chất cá sấu mịn QC mềm mại, cổ tiêu chuẩn, viền cổ và tay phối màu nổi bật.",
    features: [
      "Chất liệu: Cá sấu mịn QC — mềm, thoáng, bền màu",
      "Thiết kế phối viền sporty tại cổ và tay",
      "Form regular fit — thoải mái vận động",
      "Size: M - XXL",
      "Kết hợp được với nhiều phong cách",
    ],
    inStock: true,
    badge: "new",
  },
  {
    id: "gfi-005",
    slug: "ao-thun-co-tron-basic",
    name: "Áo Thun Cổ Tròn Basic",
    category: "ao-thun-co-tron",
    price: 199000,
    images: ["/images/products/co-tron-basic-1.jpg"],
    colors: ["Đen", "Trắng", "Xám", "Navy", "Kem"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Thun lạnh QC",
    description:
      "Áo thun cổ tròn basic GF ICON — đơn giản nhưng không tầm thường. Chất thun lạnh QC mềm mịn, mặc một mình hay layer đều đẹp. Must-have cho tủ đồ nam.",
    features: [
      "Chất liệu: Thun lạnh QC — mềm, mát, không nhăn",
      "Cổ tròn rộng vừa phải",
      "Form fitted — tôn dáng không chật",
      "Size: M - XXL",
      "5 màu cơ bản, dễ mix-match",
    ],
    inStock: true,
  },
  {
    id: "gfi-006",
    slug: "ao-thun-co-tron-in-minimal",
    name: "Áo Thun Cổ Tròn In Minimal",
    category: "ao-thun-co-tron",
    price: 229000,
    images: ["/images/products/co-tron-minimal-1.jpg"],
    colors: ["Đen", "Trắng", "Xám đậm"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Thun lạnh QC",
    description:
      "Áo thun cổ tròn GF ICON với họa tiết in minimal — tinh tế, không lòe loẹt. Chất thun lạnh QC thoáng mát, hình in bền màu không bong tróc.",
    features: [
      "Chất liệu: Thun lạnh QC cao cấp",
      "Họa tiết in DTG — bền màu, không bong tróc",
      "Thiết kế minimal, phù hợp mọi dịp",
      "Size: M - XXL",
      "Giặt máy bình thường, không cần chăm sóc đặc biệt",
    ],
    inStock: true,
    badge: "new",
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
