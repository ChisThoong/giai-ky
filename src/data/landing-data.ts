export const trustItems = [
  {
    icon: "shield-check" as const,
    title: "Kiểm định GIA / NGTC",
    subtitle: "Định giá trị — minh bạch",
  },
  {
    icon: "truck" as const,
    title: "Miễn phí giao toàn quốc",
    subtitle: "Đơn từ 2 triệu",
  },
  {
    icon: "rotate-ccw" as const,
    title: "Đổi trả 7 ngày",
    subtitle: "Cam kết hài lòng",
  },
  {
    icon: "award" as const,
    title: "Bảo hành trọn đời",
    subtitle: "Đánh bóng — siết dây",
  },
  {
    icon: "headset" as const,
    title: "Tư vấn 1:1 nghệ nhân",
    subtitle: "Đặt lịch miễn phí",
  },
];

export const collectionCards = [
  {
    id: "phi-thuy",
    region: "Myanmar — Loại A",
    name: "Phỉ Thúy",
    description: "Xanh ngọc trong veo, chuẩn kiểm định GIA",
    count: 120,
    image: "/images/jade-bangle-green.jpg",
    href: "#featured",
  },
  {
    id: "hoa-dien",
    region: "Hòa Điền — Tím lam",
    name: "Hòa Điền",
    description: "Sắc tím lam quý hiếm, độc bản",
    count: 86,
    image: "/images/jade-bangle-lavender.jpg",
    href: "#featured",
  },
  {
    id: "luc-yen",
    region: "Lục Yên — Việt Nam",
    name: "Lục Yên",
    description: "Ngọc bích truyền thống Việt Nam",
    count: 64,
    image: "/images/jade-beads-bracelet.jpg",
    href: "#featured",
  },
];

export const categories = [
  {
    id: "vong-tay",
    name: "Vòng tay",
    slug: "vong-tay",
    image: "/images/jade-bangle-green.jpg",
    count: 86,
  },
  {
    id: "mat-day-chuyen",
    name: "Mặt dây chuyền",
    slug: "mat-day-chuyen",
    image: "/images/jade-pendant-buddha.jpg",
    count: 64,
  },
  {
    id: "phat-ban-menh",
    name: "Phật bản mệnh",
    slug: "phat-ban-menh",
    image: "/images/jade-pendant-buddha.jpg",
    count: 42,
  },
  {
    id: "vong-chuoi",
    name: "Vòng chuỗi",
    slug: "vong-chuoi",
    image: "/images/jade-beads-bracelet.jpg",
    count: 58,
  },
  {
    id: "nhan-ngoc",
    name: "Nhẫn ngọc",
    slug: "nhan-ngoc",
    image: "/images/jade-ring.jpg",
    count: 37,
  },
  {
    id: "phong-thuy",
    name: "Vật phẩm phong thủy",
    slug: "phong-thuy",
    image: "/images/jade-fengshui.jpg",
    count: 29,
  },
];

export type ProductCategory =
  | "all"
  | "phi-thuy"
  | "hoa-dien"
  | "phong-thuy"
  | "suu-tam";

export const productFilters: { id: ProductCategory; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "phi-thuy", label: "Phỉ Thúy" },
  { id: "hoa-dien", label: "Hòa Điền" },
  { id: "phong-thuy", label: "Phong thủy" },
  { id: "suu-tam", label: "Sưu tầm" },
];

export const products = [
  {
    id: "1",
    name: "Vòng Phỉ Thúy Hoàng Gia",
    category: "phi-thuy" as const,
    categoryLabel: "Phỉ Thúy",
    origin: "MYANMAR",
    price: 28500000,
    originalPrice: 35600000,
    rating: 5,
    reviewCount: 48,
    badge: "HOT" as const,
    image: "/images/jade-bangle-green.jpg",
  },
  {
    id: "2",
    name: "Vòng Hòa Điền Tím Lam",
    category: "hoa-dien" as const,
    categoryLabel: "Hòa Điền",
    origin: "HÒA ĐIỀN",
    price: 12800000,
    originalPrice: null,
    rating: 5,
    reviewCount: 32,
    badge: "MỚI" as const,
    image: "/images/jade-bangle-lavender.jpg",
  },
  {
    id: "3",
    name: "Mặt Phật Quan Âm Ngọc Lục",
    category: "phong-thuy" as const,
    categoryLabel: "Phong thủy",
    origin: "PHONG THỦY",
    price: 8900000,
    originalPrice: 11200000,
    rating: 4.9,
    reviewCount: 21,
    badge: "GIẢM 20%" as const,
    image: "/images/jade-pendant-buddha.jpg",
  },
  {
    id: "4",
    name: "Vòng Chuỗi Phỉ Thúy 108 Hạt",
    category: "phi-thuy" as const,
    categoryLabel: "Phỉ Thúy",
    origin: "MYANMAR",
    price: 45600000,
    originalPrice: null,
    rating: 5,
    reviewCount: 15,
    badge: "KIỆT TÁC" as const,
    image: "/images/jade-beads-bracelet.jpg",
  },
  {
    id: "5",
    name: "Nhẫn Ngọc Bích Lục Yên",
    category: "suu-tam" as const,
    categoryLabel: "Sưu tầm",
    origin: "LỤC YÊN",
    price: 6200000,
    originalPrice: 7800000,
    rating: 4.8,
    reviewCount: 19,
    badge: "HOT" as const,
    image: "/images/jade-ring.jpg",
  },
  {
    id: "6",
    name: "Tỳ Hưu Phỉ Thúy Chiêu Tài",
    category: "phong-thuy" as const,
    categoryLabel: "Phong thủy",
    origin: "PHONG THỦY",
    price: 15800000,
    originalPrice: null,
    rating: 5,
    reviewCount: 27,
    badge: "MỚI" as const,
    image: "/images/jade-fengshui.jpg",
  },
  {
    id: "7",
    name: "Vòng Ngọc Bích Myanmar Loại A",
    category: "phi-thuy" as const,
    categoryLabel: "Phỉ Thúy",
    origin: "MYANMAR",
    price: 32400000,
    originalPrice: 40500000,
    rating: 5,
    reviewCount: 36,
    badge: "GIẢM 20%" as const,
    image: "/images/hero-jade-bangle.jpg",
  },
  {
    id: "8",
    name: "Bộ Trang Sức Hòa Điền Cao Cấp",
    category: "hoa-dien" as const,
    categoryLabel: "Hòa Điền",
    origin: "HÒA ĐIỀN",
    price: 18900000,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 11,
    badge: null,
    image: "/images/jade-collection-flatlay.jpg",
  },
];

export const commitments = [
  {
    icon: "gem" as const,
    title: "Ngọc tự nhiên 100%",
    description:
      "Mỗi viên ngọc đều được tuyển chọn từ nguồn gốc rõ ràng, cam kết không xử lý hóa học, không ngọc nhân tạo.",
  },
  {
    icon: "file-badge" as const,
    title: "Kiểm định độc lập",
    description:
      "Đính kèm chứng nhận GIA hoặc NGTC cho từng sản phẩm, minh bạch về chất lượng và giá trị thị trường.",
  },
  {
    icon: "hammer" as const,
    title: "Chế tác thủ công",
    description:
      "Ba thế hệ nghệ nhân chế tác tinh xảo từng chi tiết, giữ trọn vẻ đẹp tự nhiên của ngọc Việt.",
  },
  {
    icon: "shield" as const,
    title: "Bảo hành trọn đời",
    description:
      "Miễn phí đánh bóng, siết dây và bảo dưỡng trọn đời — đồng hành cùng báu vật của bạn qua năm tháng.",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Cách phân biệt Phỉ Thúy loại A",
    excerpt:
      "5 dấu hiệu vàng giúp bạn nhận biết Phỉ Thúy loại A chuẩn GIA — từ độ trong, màu sắc đến cấu trúc tinh thể.",
    category: "CẨM NANG",
    date: "12 Tháng 5, 2026",
    readTime: "6 phút đọc",
    image: "/images/blog-jade-guide.jpg",
    slug: "cach-phan-biet-phi-thuy-loai-a",
  },
  {
    id: "2",
    title: "Tỳ Hưu đặt ở đâu cho đúng?",
    excerpt:
      "Hướng dẫn chọn vị trí đặt Tỳ Hưu theo phong thủy — hướng, cao thấp và cách bài trí để chiêu tài lộc.",
    category: "PHONG THỦY",
    date: "8 Tháng 5, 2026",
    readTime: "5 phút đọc",
    image: "/images/jade-fengshui.jpg",
    slug: "ty-huu-dat-o-dau-cho-dung",
  },
  {
    id: "3",
    title: "Câu chuyện về chiếc vòng ngọc cũ",
    excerpt:
      "Hành trình phục hồi chiếc vòng ngọc 40 năm tuổi — từ ký ức gia đình đến tác phẩm nghệ thuật sống mới.",
    category: "CÂU CHUYỆN",
    date: "2 Tháng 5, 2026",
    readTime: "8 phút đọc",
    image: "/images/jade-bangle-lavender.jpg",
    slug: "cau-chuyen-ve-chiec-vong-ngoc-cu",
  },
];

export const footerLinks = {
  explore: [
    { label: "Phỉ Thúy", href: "#" },
    { label: "Hòa Điền", href: "#" },
    { label: "Lục Yên", href: "#" },
    { label: "Phong thủy", href: "#" },
    { label: "Sưu tầm", href: "#" },
  ],
  support: [
    { label: "Hướng dẫn chọn ngọc", href: "#" },
    { label: "Bảng size vòng tay", href: "#" },
    { label: "Chính sách đổi trả", href: "#" },
    { label: "Vận chuyển & giao hàng", href: "#" },
    { label: "Câu hỏi thường gặp", href: "#" },
  ],
};

export const navLinks = [
  { label: "Trang chủ", href: "#" },
  { label: "Sản phẩm", href: "#featured", hasDropdown: true },
  { label: "Câu chuyện", href: "#brand-story" },
  { label: "Blog", href: "#blog" },
  { label: "Liên hệ", href: "#footer" },
];

export const heroSlides = [
  {
    id: "1",
    tag: "Ưu đãi vàng son",
    tagDays: "Còn 12 ngày",
    titleBefore: "Ưu đãi ",
    titleHighlight: "vàng son",
    titleAfter: " giảm 20%",
    description:
      "Ưu đãi 20% toàn bộ vòng ngọc Phỉ Thúy & Hòa Điền loại A.",
    descriptionSub: "Tặng kèm hộp đựng gỗ cao cấp và chứng nhận GIA.",
    primaryCta: "Săn ưu đãi ngay",
    secondaryCta: "Xem điều kiện",
    secondaryHref: "#",
    image: "/images/hero-bg-slide-1.jpg",
    imageAlt: "Vòng ngọc trên nền kem cao cấp",
    badge: { prefix: "GIẢM", value: "-20%", suffix: "ĐẾN 30/11" },
  },
  {
    id: "2",
    tag: "Bộ sưu tập",
    tagDays: "Phỉ Thúy Myanmar",
    titleBefore: "Tinh hoa ",
    titleHighlight: "Phỉ Thúy",
    titleAfter: " loại A",
    description:
      "Vòng ngọc xanh ngọc trong veo, chuẩn kiểm định GIA đầy đủ.",
    descriptionSub: "Tôn vinh đẳng cấp và giá trị truyền thống qua từng viên ngọc.",
    primaryCta: "Khám phá Phỉ Thúy",
    secondaryCta: "Tư vấn chọn ngọc",
    secondaryHref: "#",
    image: "/images/hero-bg-slide-2.jpg",
    imageAlt: "Vòng Phỉ Thúy xanh ngọc Myanmar",
    badge: { prefix: "GIA", value: "100%", suffix: "KIỂM ĐỊNH" },
  },
  {
    id: "3",
    tag: "Hòa Điền",
    tagDays: "Tím lam quý hiếm",
    titleBefore: "Vòng ngọc ",
    titleHighlight: "Hòa Điền",
    titleAfter: " tím lam",
    description:
      "Sắc tím lam trong trẻo hiếm có — mỗi chiếc vòng là tác phẩm độc bản.",
    descriptionSub: "Chế tác thủ công bởi nghệ nhân Giai Kỳ qua ba thế hệ.",
    primaryCta: "Xem bộ sưu tập",
    secondaryCta: "Đặt lịch tư vấn",
    secondaryHref: "#",
    image: "/images/hero-bg-slide-3.jpg",
    imageAlt: "Vòng ngọc Hòa Điền tím lam",
    badge: { prefix: "BỘ", value: "MỚI", suffix: "SƯU TẬP" },
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + "₫";
}
