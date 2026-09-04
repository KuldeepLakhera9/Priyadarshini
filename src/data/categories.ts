import type { CategoryInfo, PriceTier } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'lakh-bangles',
    label: 'Lakh Bangles',
    subtitle: 'Jaipur Heritage & Handcrafted Artistry',
    description: 'Explore our heirloom collection of Jaipur Lakh bangles, hand-melted over embers and studded with glass mirrors, Kundan polki, and Austrian stones.',
    heroImage: '/images/products/jaipuri-rani-pink-lakh-kadas.jpg',
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
    heroImage: '/images/products/navratna-pave-kadas.jpg',
    badge: 'Trending & Bridal',
    itemCountDesc: '80+ Curated Sets',
    subcategories: ['Bridal Chooda Sets', 'Velvet Glass Bangles', 'Crystal Metal Kadas', 'Silk Thread Bangles'],
    featured: true,
  },
  {
    id: 'traditional-bangles',
    label: 'Traditional Bangles',
    subtitle: 'Temple Motifs, Antique Polish & Classic Filigree',
    description: 'Timeless Indian jewellery artistry featuring matte temple motifs, South Indian Kemp stones, antique brass filigree, and auspicious wedding kadas.',
    heroImage: '/images/products/moti-jaal-kadas.jpg',
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
    heroImage: '/images/products/oxidised-silver-necklace-rings.jpg',
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
    heroImage: '/images/products/korean-pastel-hair-claws.jpg',
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
    heroImage: '/images/products/luxury-skincare-beauty-suite.jpg',
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
    heroImage: '/images/products/artisanal-pocket-perfumes-attar.jpg',
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
    heroImage: '/images/products/crystal-pearl-saree-pins.jpg',
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
    heroImage: '/images/products/butterfly-clips-pearl-headband.jpg',
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
    heroImage: '/images/products/jaipuri-rani-pink-lakh-kadas.jpg',
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
    image: '/images/products/korean-pastel-hair-claws.jpg',
    badgeColor: '#A3705C'
  },
  {
    id: 'under-199',
    title: 'Under ₹199',
    maxPrice: 199,
    tagline: 'The Daily Signature',
    popularItems: 'Mulberry Silk Scrunchies, French Acetate Claws, Pure Rosewater Mist',
    image: '/images/products/butterfly-clips-pearl-headband.jpg',
    badgeColor: '#802035'
  },
  {
    id: 'under-299',
    title: 'Under ₹299',
    maxPrice: 299,
    tagline: 'The Statement Archive',
    popularItems: 'Handcrafted Lakh Kadas, Pearl Headbands, Roll-on Floral Attars',
    image: '/images/products/artisanal-pocket-perfumes-attar.jpg',
    badgeColor: '#BFA37C'
  },
  {
    id: 'under-499',
    title: 'Under ₹499',
    maxPrice: 499,
    tagline: 'The Festive Suite',
    popularItems: 'Royal Kundan Kadas, Bridal Glass Chooda Sets, Keepsake Gift Boxes',
    image: '/images/products/bridal-kundan-lakh-chooda.jpg',
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
