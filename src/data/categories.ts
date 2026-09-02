import type { CategoryInfo, PriceTier } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'lakh-bangles',
    label: 'Lakh Bangles',
    subtitle: 'Jaipur Heritage & Handcrafted Artistry',
    description: 'Explore our heirloom collection of Jaipur Lakh bangles, hand-melted over embers and studded with glass mirrors, Kundan polki, and Austrian stones.',
    heroImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop',
    badge: 'Signature Heritage',
    itemCountDesc: '50+ In-Store Designs',
    subcategories: ['Bridal Lakh Sets', 'Daily Wear Kadas', 'Kundan Lakh Choodas', 'Jaipuri Mirror Bangles'],
    featured: true,
  },
  {
    id: 'fancy-bangles',
    label: 'Fancy Bangles',
    subtitle: 'Contemporary Glamour & Bridal Splendor',
    description: 'Curated bridal chooda sets, velvet glass chooris, crystal openable kadas, and celebratory metal bangles for weddings and festive functions.',
    heroImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    badge: 'Trending & Bridal',
    itemCountDesc: '80+ Curated Sets',
    subcategories: ['Bridal Chooda Sets', 'Velvet Glass Bangles', 'Crystal Metal Kadas', 'Silk Thread Bangles'],
    featured: true,
  },
  {
    id: 'traditional-bangles',
    label: 'Traditional Bangles',
    subtitle: 'Temple Motifs, Antique Polish & Classic Filigree',
    description: 'Timeless Indian jewellery artistry featuring matte temple motifs, South Indian Kemp stones, antique brass filigree, and auspicious auspicious wedding kadas.',
    heroImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=900&auto=format&fit=crop',
    badge: 'Temple & Antique',
    itemCountDesc: '45+ Classic Styles',
    subcategories: ['Temple Antique Kadas', 'Kemp Stone Bangles', 'Traditional Meenakari', 'Gold-Plated Filigree'],
    featured: true,
  },
  {
    id: 'fashion-accessories',
    label: 'Fashion Accessories',
    subtitle: 'Statement Jhumkas & Boutique Finds',
    description: 'Elevate your daily outfits with lightweight Chandbalis, oxidised silver studs, modern rings, and versatile women\'s accessories.',
    heroImage: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=900&auto=format&fit=crop',
    badge: 'Style Essentials',
    itemCountDesc: '60+ Modern Pieces',
    subcategories: ['Festive Jhumkas', 'Oxidised Silver', 'Statement Rings', 'Chokers & Neckpieces'],
    featured: false,
  },
  {
    id: 'hair-accessories',
    label: 'Hair Accessories',
    subtitle: 'French Acetate Claws, Silk Scrunchies & Pearl Bands',
    description: 'Effortless Parisian and Korean hair accents including cellulose acetate claws, mulberry satin scrunchies, crystal hairpins, and velvet headbands.',
    heroImage: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=900&auto=format&fit=crop',
    badge: 'Daily Chic',
    itemCountDesc: '120+ Accents',
    subcategories: ['Acetate Hair Claws', 'Silk Satin Scrunchies', 'Velvet Headbands', 'Pastel Barrettes & Clips'],
    featured: true,
  },
  {
    id: 'beauty',
    label: 'Beauty & Skincare',
    subtitle: 'Botanical Mists, High-Shine Lacquers & Glow Essentials',
    description: 'Carefully curated gentle face washes, pure steam-distilled Kannauj rosewater, nourishing Kumkumadi face elixirs, and salon-finish gel nail paints.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop',
    badge: 'Pure Glow',
    itemCountDesc: '40+ Tested Favorites',
    subcategories: ['Facial Cleansers & Washes', 'Floral Toners & Mists', 'Gel Nail Lacquers', 'Facial Oils & Lip Care'],
    featured: true,
  },
  {
    id: 'fragrance',
    label: 'Artisanal Fragrance',
    subtitle: 'Pure Floral Attars & Travel-Friendly Eau De Parfums',
    description: 'Enchanting botanical distillations, alcohol-free roll-on attars with 12-hour longevity, and luxury travel perfumes crafted from rose, oud, and amber.',
    heroImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop',
    badge: 'Signature Scents',
    itemCountDesc: '25+ Exotic Blends',
    subcategories: ['Roll-On Pure Attars', 'Pocket Eau De Parfum', 'Luxury Mist Sprays', 'Oud & Amber Blends'],
    featured: false,
  },
  {
    id: 'gifts',
    label: 'Gifts & Hampers',
    subtitle: 'Thoughtful Curations for Sangeet, Birthdays & Favors',
    description: 'Ready-to-gift keepsake boxes filled with handcrafted bangles, satin scrunchies, floral mists, and handwritten blessing notes.',
    heroImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop',
    badge: 'Gifting Studio',
    itemCountDesc: 'Custom Boxes Available',
    subcategories: ['Bridal Return Favors', 'Pastel Birthday Kits', 'Festive Celebration Boxes', 'Custom Hamper Curation'],
    featured: true,
  },
  {
    id: 'new-arrivals',
    label: 'New Arrivals',
    subtitle: 'Fresh Atelier Additions & Weekly Boutique Drops',
    description: 'Discover the latest additions to our boutique, refreshed every 7 days with trending Korean hair claws, seasonal lakh motifs, and festive bridal suites.',
    heroImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    badge: 'Just Landed',
    itemCountDesc: 'Weekly Curations',
    subcategories: ['Latest Bangles', 'Trending Hair Accents', 'Fresh Beauty Drops'],
    featured: false,
  },
  {
    id: 'best-sellers',
    label: 'Best Sellers',
    subtitle: 'Most Loved Heirloom Pieces & Customer Favorites',
    description: 'Our most sought-after handcrafted pieces, verified by in-store customer demand and bridal appointments.',
    heroImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop',
    badge: 'Customer Favorites',
    itemCountDesc: 'In-Store Favorites',
    subcategories: ['Top Lakh Kadas', 'Signature Silk Scrunchies', 'Pure Rosewater'],
    featured: false,
  },
];

export const PRICE_TIERS: PriceTier[] = [
  {
    id: 'under-99',
    title: 'Under ₹99',
    maxPrice: 99,
    tagline: 'The Petite Edit',
    popularItems: 'Pastel Claw Clips, Salon Gel Nail Lacquers, Crystal Pins',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop',
    badgeColor: '#A3705C'
  },
  {
    id: 'under-199',
    title: 'Under ₹199',
    maxPrice: 199,
    tagline: 'The Daily Signature',
    popularItems: 'Mulberry Silk Scrunchies, French Acetate Claws, Pure Rosewater Mist',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=600&auto=format&fit=crop',
    badgeColor: '#802035'
  },
  {
    id: 'under-299',
    title: 'Under ₹299',
    maxPrice: 299,
    tagline: 'The Statement Archive',
    popularItems: 'Handcrafted Lakh Kadas, Pearl Headbands, Roll-on Floral Attars',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600&auto=format&fit=crop',
    badgeColor: '#BFA37C'
  },
  {
    id: 'under-499',
    title: 'Under ₹499',
    maxPrice: 499,
    tagline: 'The Festive Suite',
    popularItems: 'Royal Kundan Kadas, Bridal Glass Chooda Sets, Keepsake Gift Boxes',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    badgeColor: '#2D2522'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Authentic Craftsmanship',
    description: 'Handcrafted Jaipur Lakh molded with organic shellac and skin-safe natural minerals.'
  },
  {
    title: 'Weekly Curations',
    description: 'We refresh our boutique collection every 7 days with trending Korean & festive designs.'
  },
  {
    title: 'Honest Offline Pricing',
    description: 'Accessible luxury from ₹49 everyday essentials to exquisite heirloom bridal choodas.'
  },
  {
    title: 'Boutique Consultation',
    description: 'Visit our store to try on sizes in person or receive video previews on WhatsApp.'
  }
];
