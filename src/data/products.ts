// ============================================================
// DATA SAN PHAM GF ICON
// Quynh chi can sua file nay de cap nhat san pham
// ============================================================

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "ao-thun-co-tru" | "ao-polo" | "ao-thun-co-tron";
  price: number; // Gia ban le (VND)
  originalPrice?: number; // Gia goc truoc khi giam (neu co)
  images: string[]; // Danh sach anh san pham
  colors: string[]; // Cac mau co san
  sizes: string[]; // Cac size co san
  material: string; // Chat lieu
  description: string;
  features: string[];
  inStock: boolean;
  badge?: "new" | "hot" | "sale"; // Nhan hien thi
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

// ============================================================
// DANH MUC SAN PHAM
// ============================================================

export const categories: Category[] = [
  {
    id: "ao-thun-co-tru",
    name: "Ao Thun Co Tru",
    slug: "ao-thun-co-tru",
    description: "Ao thun co tru nam phong cach lich lam, chat thun lanh QC thoang mat",
    image: "/images/category-co-tru.jpg",
  },
  {
    id: "ao-polo",
    name: "Ao Polo",
    slug: "ao-polo",
    description: "Ao polo nam ca sau min QC cao cap, may ky chuan shop",
    image: "/images/category-polo.jpg",
  },
  {
    id: "ao-thun-co-tron",
    name: "Ao Thun Co Tron",
    slug: "ao-thun-co-tron",
    description: "Ao thun co tron basic, de phoi do, chat thun lanh QC",
    image: "/images/category-co-tron.jpg",
  },
];

// ============================================================
// SAN PHAM MAU — Quynh thay anh that va cap nhat thong tin
// ============================================================

export const products: Product[] = [
  {
    id: "gfi-001",
    slug: "ao-thun-co-tru-classic-den",
    name: "Ao Thun Co Tru Classic",
    category: "ao-thun-co-tru",
    price: 259000,
    originalPrice: 320000,
    images: ["/images/products/co-tru-classic-1.jpg"],
    colors: ["Den", "Trang", "Xam", "Xanh Navy"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Thun lanh QC cao cap",
    description:
      "Ao thun co tru GF ICON phien ban Classic — thiet ke tinh gian, chat thun lanh QC thoang mat. Phu hop mac di lam, di choi, hay ngay thuong. Co tru dung form, may ky tung duong chi.",
    features: [
      "Chat lieu: Thun lanh QC — thoang mat, khong nhan, khong bai",
      "Co tru dung form, lich lam",
      "May ky chuan shop — duong chi deu dep",
      "Size: M - XXL (50kg - 95kg)",
      "Giat may khong bien dang",
    ],
    inStock: true,
    badge: "hot",
  },
  {
    id: "gfi-002",
    slug: "ao-thun-co-tru-phoi-ke",
    name: "Ao Thun Co Tru Phoi Ke",
    category: "ao-thun-co-tru",
    price: 279000,
    images: ["/images/products/co-tru-phoi-ke-1.jpg"],
    colors: ["Den phoi ke", "Navy phoi ke", "Xam phoi ke"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Thun lanh QC cao cap",
    description:
      "Ao thun co tru phoi ke GF ICON — diem nhan tinh te o co va tay. Chat thun lanh QC mem min, thoang mat suot ngay. Phong cach tre trung nhung khong qua noi bat.",
    features: [
      "Chat lieu: Thun lanh QC — mem min, thoang mat",
      "Chi tiet phoi ke tinh te o co va tay ao",
      "Dung form, ton dang",
      "Size: M - XXL",
      "De phoi voi quan jeans, kaki, short",
    ],
    inStock: true,
    badge: "new",
  },
  {
    id: "gfi-003",
    slug: "ao-polo-ca-sau-min",
    name: "Ao Polo Ca Sau Min Premium",
    category: "ao-polo",
    price: 299000,
    originalPrice: 380000,
    images: ["/images/products/polo-ca-sau-1.jpg"],
    colors: ["Den", "Trang", "Xanh reu", "Xam nhat", "Be"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Ca sau min QC cao cap",
    description:
      "Ao polo GF ICON chat ca sau min QC — be mat min mang, thoang khi, khong xo long. Thiet ke co bac classic, phu hop di lam va di choi. May ky chuan shop, duong chi chinh chu.",
    features: [
      "Chat lieu: Ca sau min QC cao cap — min mang, thoang khi",
      "Co bac classic, giu phom tot",
      "Khong xo long, khong bien dang sau nhieu lan giat",
      "Size: M - XXL (50kg - 95kg)",
      "Phu hop di lam, cafe, hen ho",
    ],
    inStock: true,
    badge: "hot",
  },
  {
    id: "gfi-004",
    slug: "ao-polo-phoi-vien",
    name: "Ao Polo Phoi Vien Sport",
    category: "ao-polo",
    price: 289000,
    images: ["/images/products/polo-phoi-vien-1.jpg"],
    colors: ["Den phoi do", "Navy phoi trang", "Xam phoi den"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Ca sau min QC cao cap",
    description:
      "Ao polo phoi vien GF ICON — phong cach sporty nhung van lich su. Chat ca sau min QC mem mai, co tieu chuan, vien co va tay phoi mau noi bat.",
    features: [
      "Chat lieu: Ca sau min QC — mem, thoang, ben mau",
      "Thiet ke phoi vien sporty tai co va tay",
      "Form regular fit — thoai mai van dong",
      "Size: M - XXL",
      "Ket hop duoc voi nhieu phong cach",
    ],
    inStock: true,
    badge: "new",
  },
  {
    id: "gfi-005",
    slug: "ao-thun-co-tron-basic",
    name: "Ao Thun Co Tron Basic",
    category: "ao-thun-co-tron",
    price: 199000,
    images: ["/images/products/co-tron-basic-1.jpg"],
    colors: ["Den", "Trang", "Xam", "Navy", "Kem"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Thun lanh QC",
    description:
      "Ao thun co tron basic GF ICON — don gian nhung khong tam thuong. Chat thun lanh QC mem min, mac mot minh hay layer deu dep. Must-have cho tu do nam.",
    features: [
      "Chat lieu: Thun lanh QC — mem, mat, khong nhan",
      "Co tron rong vua phai",
      "Form fitted — ton dang khong chat",
      "Size: M - XXL",
      "5 mau co ban, de mix-match",
    ],
    inStock: true,
  },
  {
    id: "gfi-006",
    slug: "ao-thun-co-tron-in-minimal",
    name: "Ao Thun Co Tron In Minimal",
    category: "ao-thun-co-tron",
    price: 229000,
    images: ["/images/products/co-tron-minimal-1.jpg"],
    colors: ["Den", "Trang", "Xam dam"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Thun lanh QC",
    description:
      "Ao thun co tron GF ICON voi hoa tiet in minimal — tinh te, khong loe loet. Chat thun lanh QC thoang mat, hinh in ben mau khong bong troc.",
    features: [
      "Chat lieu: Thun lanh QC cao cap",
      "Hoa tiet in DTG — ben mau, khong bong troc",
      "Thiet ke minimal, phu hop moi dip",
      "Size: M - XXL",
      "Giat may binh thuong, khong can cham soc dac biet",
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
  return new Intl.NumberFormat("vi-VN").format(price) + "d";
}
