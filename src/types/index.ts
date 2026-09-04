export type ProductCategory =
  | 'all'
  | 'lakh-bangles'
  | 'fancy-bangles'
  | 'traditional-bangles'
  | 'fashion-accessories'
  | 'hair-accessories'
  | 'fragrance'
  | 'gifts'
  | 'new-arrivals'
  | 'best-sellers';

export type ProductAvailability = 'in_stock' | 'limited' | 'in_store_only' | 'made_to_order';

export type PriceDisplayMode =
  | 'fixed'
  | 'starting_at'
  | 'pair'
  | 'set'
  | 'box'
  | 'price_on_request'
  | 'available_in_store';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  subcategory: string;
  price?: number;
  originalPrice?: number;
  priceMode: PriceDisplayMode;
  priceLabel?: string;
  description: string;
  images: string[];
  thumbnail?: string;
  colors?: ProductColor[];
  colours?: ProductColor[]; // support both spellings
  sizes?: string[]; // e.g. ["2.2", "2.4", "2.6", "2.8", "Free Size"]
  material?: string;
  details?: string[];
  story?: string;
  tags: string[];
  isNew?: boolean;
  isNewArrival?: boolean; // compatibility
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isHeritage?: boolean;
  availability: ProductAvailability;
  stockStatus: ProductAvailability;
  whatsappMessage?: string;
  customWhatsAppMessage?: string; // compatibility
  relatedProducts?: string[];
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  subtitle: string;
  description: string;
  heroImage: string;
  badge?: string;
  itemCountDesc: string;
  subcategories: string[];
  featured?: boolean;
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
  priceTier: string;
  selectedColor?: string;
  selectedSize?: string;
  selectedSubcategory?: string;
  availabilityOnly?: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest';
}
