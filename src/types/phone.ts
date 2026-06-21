// Flexible specs - works for any gadget/product (key-value pairs)
export interface PhoneSpecs {
  [key: string]: string | undefined;
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
  badge?: "Best Seller" | "Editor's Pick" | "New" | "Budget King" | "Value Pick" | "Trending" | "Top Deal";
  shortDescription: string;
  fullDescription: string;
  pros: string[];
  cons: string[];
  specs: PhoneSpecs;
  affiliateLink: string;
  category: string[];
  isAvailable: boolean;
  publishedAt: string;
  updatedAt: string;
}

export type PhoneCategory = string;

export interface BudgetCategory {
  label: string;
  slug: string;
  maxPrice: number;
  description: string;
  icon: string;
}

// Product categories for the gadget/home niche
export interface ProductCategory {
  label: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}
