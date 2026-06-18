import { Phone, BudgetCategory } from "@/types/phone";

export const phones: Phone[] = [
  {
    id: "1",
    slug: "redmi-13c-5g",
    name: "Redmi 13C 5G",
    brand: "Xiaomi",
    price: 9999,
    originalPrice: 12999,
    rating: 4.2,
    reviewCount: 15420,
    image: "https://placehold.co/400x400/1a1a2e/ffffff?text=Redmi+13C+5G",
    badge: "Budget King",
    shortDescription:
      "Best 5G phone under ₹10,000 with MediaTek Dimensity 6100+ and 50MP camera.",
    fullDescription:
      "The Redmi 13C 5G is a game-changer in the budget segment, bringing 5G connectivity to the masses. Powered by the MediaTek Dimensity 6100+ processor, it delivers smooth performance for everyday tasks and light gaming. The 50MP triple camera setup captures detailed photos even in low light.",
    pros: [
      "5G connectivity at an unbeatable price",
      "50MP triple camera system",
      "5000mAh large battery",
      "90Hz smooth display",
      "MIUI 14 with Android 13",
    ],
    cons: [
      "Plastic build quality",
      "No HD+ display (720p only)",
      "Slow 18W charging",
      "Bloatware from MIUI",
    ],
    specs: {
      display: '6.74" IPS LCD, 720x1600, 90Hz',
      processor: "MediaTek Dimensity 6100+ (6nm)",
      ram: "4GB / 6GB / 8GB",
      storage: "128GB (expandable to 1TB)",
      battery: "5000mAh",
      camera: "50MP + 2MP + AI lens",
      os: "MIUI 14, Android 13",
      charging: "18W Fast Charging",
      network: "5G, 4G LTE, Wi-Fi 5",
    },
    affiliateLink: "https://www.amazon.in/dp/example1",
    category: ["under-10000", "5g", "battery"],
    isAvailable: true,
    publishedAt: "2024-01-15",
    updatedAt: "2024-03-01",
  },
  {
    id: "2",
    slug: "samsung-galaxy-m14-5g",
    name: "Samsung Galaxy M14 5G",
    brand: "Samsung",
    price: 13499,
    originalPrice: 16499,
    rating: 4.3,
    reviewCount: 22310,
    image: "https://placehold.co/400x400/0f3460/ffffff?text=Galaxy+M14+5G",
    badge: "Editor's Pick",
    shortDescription:
      "Samsung's most value-packed 5G phone with 6000mAh battery and Exynos 1330.",
    fullDescription:
      "Samsung Galaxy M14 5G stands out in the mid-budget category with its massive 6000mAh battery and clean One UI 5.1 experience. The Exynos 1330 processor handles multitasking with ease, and Samsung promises 4 years of security updates.",
    pros: [
      "6000mAh massive battery",
      "Clean One UI experience",
      "4 years of security updates",
      "Bright FHD+ display",
      "Trusted Samsung after-sales service",
    ],
    cons: [
      "Exynos 1330 not as fast as Snapdragon rivals",
      "25W charging (no charger in box)",
      "Average camera performance",
      "Slightly heavy at 206g",
    ],
    specs: {
      display: '6.6" FHD+ Super AMOLED, 90Hz',
      processor: "Samsung Exynos 1330 (5nm)",
      ram: "4GB / 6GB",
      storage: "64GB / 128GB (expandable to 1TB)",
      battery: "6000mAh",
      camera: "50MP + 2MP + 2MP",
      os: "One UI 5.1, Android 13",
      charging: "25W Fast Charging",
      network: "5G, 4G LTE, Wi-Fi 5",
    },
    affiliateLink: "https://www.amazon.in/dp/example2",
    category: ["under-15000", "5g", "battery"],
    isAvailable: true,
    publishedAt: "2024-01-20",
    updatedAt: "2024-03-05",
  },
  {
    id: "3",
    slug: "poco-m6-pro-5g",
    name: "POCO M6 Pro 5G",
    brand: "POCO",
    price: 12999,
    originalPrice: 15999,
    rating: 4.4,
    reviewCount: 18900,
    image: "https://placehold.co/400x400/533483/ffffff?text=POCO+M6+Pro",
    badge: "Best Seller",
    shortDescription:
      "Snapdragon 4 Gen 2 powerhouse with 108MP camera and 5000mAh battery.",
    fullDescription:
      "POCO M6 Pro 5G redefines what a sub-₹15,000 phone can do. The Snapdragon 4 Gen 2 processor is the fastest in this price range, paired with a 108MP camera that rivals phones twice its price.",
    pros: [
      "Snapdragon 4 Gen 2 — fastest in class",
      "108MP high-resolution camera",
      "FHD+ 120Hz smooth display",
      "5000mAh with 33W fast charging",
      "No ads in MIUI (POCO UI)",
    ],
    cons: [
      "POCO UI still has some bloatware",
      "Average ultrawide camera",
      "No wireless charging",
      "Glass back attracts fingerprints",
    ],
    specs: {
      display: '6.79" FHD+ IPS LCD, 120Hz',
      processor: "Snapdragon 4 Gen 2 (4nm)",
      ram: "6GB / 8GB",
      storage: "128GB / 256GB (expandable)",
      battery: "5000mAh",
      camera: "108MP + 8MP + 2MP",
      os: "POCO UI 5, Android 13",
      charging: "33W Turbo Charging",
      network: "5G, 4G LTE, Wi-Fi 5",
    },
    affiliateLink: "https://www.amazon.in/dp/example3",
    category: ["under-15000", "5g", "camera"],
    isAvailable: true,
    publishedAt: "2024-02-01",
    updatedAt: "2024-03-10",
  },
  {
    id: "4",
    slug: "realme-narzo-70-pro-5g",
    name: "Realme Narzo 70 Pro 5G",
    brand: "Realme",
    price: 19999,
    originalPrice: 22999,
    rating: 4.5,
    reviewCount: 9870,
    image: "https://placehold.co/400x400/16213e/ffffff?text=Narzo+70+Pro",
    badge: "New",
    shortDescription:
      "Premium AMOLED display with MediaTek Dimensity 7050 and 67W SUPERVOOC charging.",
    fullDescription:
      "Realme Narzo 70 Pro 5G is a premium offering under ₹20,000 featuring a stunning AMOLED display and ultra-fast 67W charging. The Dimensity 7050 chipset ensures smooth gaming and multitasking.",
    pros: [
      "AMOLED display with 120Hz",
      "67W SUPERVOOC fast charging",
      "Dimensity 7050 excellent performance",
      "Premium glass back design",
      "Excellent low-light camera",
    ],
    cons: [
      "Realme UI has some ads",
      "No 3.5mm headphone jack",
      "Average ultrawide camera",
      "Heating during heavy gaming",
    ],
    specs: {
      display: '6.7" FHD+ AMOLED, 120Hz, 950 nits',
      processor: "MediaTek Dimensity 7050 (6nm)",
      ram: "8GB / 12GB",
      storage: "128GB / 256GB",
      battery: "5000mAh",
      camera: "50MP Sony IMX890 + 8MP + 2MP",
      os: "Realme UI 5.0, Android 14",
      charging: "67W SUPERVOOC",
      network: "5G, 4G LTE, Wi-Fi 6",
    },
    affiliateLink: "https://www.amazon.in/dp/example4",
    category: ["under-20000", "5g", "camera"],
    isAvailable: true,
    publishedAt: "2024-02-15",
    updatedAt: "2024-03-12",
  },
  {
    id: "5",
    slug: "iqoo-z9-5g",
    name: "iQOO Z9 5G",
    brand: "iQOO",
    price: 19999,
    originalPrice: 23999,
    rating: 4.6,
    reviewCount: 7450,
    image: "https://placehold.co/400x400/1b1b2f/ffffff?text=iQOO+Z9+5G",
    badge: "Editor's Pick",
    shortDescription:
      "Snapdragon 7 Gen 3 performance beast with 144Hz AMOLED display.",
    fullDescription:
      "iQOO Z9 5G is perhaps the best value-for-money phone under ₹20,000 in 2024. It packs the Snapdragon 7 Gen 3 — a chip you'd find in last year's flagships — along with a 144Hz AMOLED panel.",
    pros: [
      "Snapdragon 7 Gen 3 — exceptional performance",
      "144Hz AMOLED display",
      "44W FlashCharge",
      "Clean Funtouch OS",
      "Excellent gaming performance",
    ],
    cons: [
      "Funtouch OS has bloatware",
      "Average low-light photos",
      "No expandable storage",
      "Limited colour options",
    ],
    specs: {
      display: '6.67" FHD+ AMOLED, 144Hz, 2800 nits',
      processor: "Snapdragon 7 Gen 3 (4nm)",
      ram: "8GB / 12GB",
      storage: "128GB / 256GB (UFS 3.1)",
      battery: "5000mAh",
      camera: "50MP + 2MP",
      os: "Funtouch OS 14, Android 14",
      charging: "44W FlashCharge",
      network: "5G, 4G LTE, Wi-Fi 6",
    },
    affiliateLink: "https://www.amazon.in/dp/example5",
    category: ["under-20000", "5g", "gaming"],
    isAvailable: true,
    publishedAt: "2024-02-20",
    updatedAt: "2024-03-15",
  },
  {
    id: "6",
    slug: "redmi-a3",
    name: "Redmi A3",
    brand: "Xiaomi",
    price: 8499,
    originalPrice: 10999,
    rating: 4.0,
    reviewCount: 11230,
    image: "https://placehold.co/400x400/2c2c54/ffffff?text=Redmi+A3",
    badge: "Value Pick",
    shortDescription:
      "Ultra-budget 4G phone with clean design and large 5000mAh battery.",
    fullDescription:
      "Redmi A3 is Xiaomi's most affordable smartphone targeting first-time buyers and seniors. It offers a clean design, large display, and excellent battery life — all under ₹9,000.",
    pros: [
      "Under ₹9,000 price",
      "5000mAh long-lasting battery",
      "Clean IP52 dust/splash resistance",
      "Smooth 90Hz display",
      "18 months of security updates",
    ],
    cons: [
      "4G only, no 5G",
      "Mediatek Helio G36 — basic performance",
      "8MP camera is average",
      "10W slow charging only",
    ],
    specs: {
      display: '6.71" HD+ IPS LCD, 90Hz',
      processor: "MediaTek Helio G36 (12nm)",
      ram: "3GB / 4GB",
      storage: "64GB / 128GB (expandable)",
      battery: "5000mAh",
      camera: "8MP + AI lens",
      os: "MIUI 14, Android 13",
      charging: "10W Standard Charging",
      network: "4G LTE, Wi-Fi 4",
    },
    affiliateLink: "https://www.amazon.in/dp/example6",
    category: ["under-10000", "battery"],
    isAvailable: true,
    publishedAt: "2024-01-10",
    updatedAt: "2024-02-28",
  },
];

export const budgetCategories: BudgetCategory[] = [
  {
    label: "Under ₹10,000",
    slug: "under-10000",
    maxPrice: 10000,
    description: "Best budget smartphones that don't compromise on essentials",
    icon: "💰",
  },
  {
    label: "Under ₹15,000",
    slug: "under-15000",
    maxPrice: 15000,
    description: "Mid-range value picks with 5G and better cameras",
    icon: "📱",
  },
  {
    label: "Under ₹20,000",
    slug: "under-20000",
    maxPrice: 20000,
    description: "Near-premium experience without the flagship price tag",
    icon: "🚀",
  },
];

export function getPhonesByCategory(category: string): Phone[] {
  return phones.filter((p) => p.category.includes(category as never));
}

export function getPhoneBySlug(slug: string): Phone | undefined {
  return phones.find((p) => p.slug === slug);
}

export function getLatestPhones(count = 6): Phone[] {
  return [...phones]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, count);
}

export function searchPhones(query: string): Phone[] {
  const q = query.toLowerCase();
  return phones.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
  );
}

export function getFeaturedPhones(): Phone[] {
  return phones.filter((p) => p.badge === "Editor's Pick" || p.badge === "Best Seller");
}
