export type ProductCategory =
  | 'all'
  | 'lakh-bangles'
  | 'fancy-bangles'
  | 'hair-accessories'
  | 'fashion-accessories'
  | 'beauty-skincare'
  | 'fragrance'
  | 'gifts-hampers';

export type StockStatus = 'in_stock' | 'limited' | 'made_to_order';

export type PriceDisplayMode = 'fixed' | 'starting_at' | 'pair' | 'set' | 'box';

export interface Product {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  priceMode: PriceDisplayMode;
  images: string[];
  description: string;
  story?: string;
  details: string[];
  colors?: { name: string; hex: string }[];
  sizes?: string[]; // e.g. ["2.2", "2.4", "2.6", "2.8", "Free Size"]
  tags: string[];
  isNewArrival?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isHeritage?: boolean;
  stockStatus: StockStatus;
  customWhatsAppMessage?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  subtitle: string;
  heroImage: string;
  badge?: string;
  itemCountDesc: string;
  featured?: boolean;
  description: string;
}

export interface PriceTier {
  id: string;
  title: string;
  maxPrice: number;
  tagline: string;
  image: string;
  popularItems: string;
  badgeColor: string;
}

export interface FilterState {
  category: ProductCategory;
  searchQuery: string;
  priceRange: [number, number];
  selectedTags: string[];
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest';
  stockOnly: boolean;
}
