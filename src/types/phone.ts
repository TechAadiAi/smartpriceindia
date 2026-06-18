export interface PhoneSpecs {
  display: string;
  processor: string;
  ram: string;
  storage: string;
  battery: string;
  camera: string;
  os: string;
  charging: string;
  network?: string;
}

export interface Phone {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  badge?: "Best Seller" | "Editor's Pick" | "New" | "Budget King" | "Value Pick";
  shortDescription: string;
  fullDescription: string;
  pros: string[];
  cons: string[];
  specs: PhoneSpecs;
  affiliateLink: string;
  category: PhoneCategory[];
  isAvailable: boolean;
  publishedAt: string;
  updatedAt: string;
}

export type PhoneCategory =
  | "under-10000"
  | "under-15000"
  | "under-20000"
  | "under-30000"
  | "flagship"
  | "5g"
  | "gaming"
  | "camera"
  | "battery";

export interface BudgetCategory {
  label: string;
  slug: string;
  maxPrice: number;
  description: string;
  icon: string;
}
