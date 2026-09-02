import type { CategoryInfo, PriceTier } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'lakh-bangles',
    label: 'Lakh Bangles',
    subtitle: 'Jaipur Heritage & Handcrafted Artistry',
    heroImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop',
    badge: 'Signature Heritage',
    itemCountDesc: '50+ In-Store Designs',
    featured: true,
    description: 'Authentic royal Jaipur Lakh bangles embellished with glass stones, kundan work, and vibrant natural pigments for weddings and festive pujas.'
  },
  {
    id: 'fancy-bangles',
    label: 'Fancy & Bridal Bangles',
    subtitle: 'Kundan, Glass & Temple Elegance',
    heroImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    badge: 'Trending & Bridal',
    itemCountDesc: '80+ Curated Sets',
    featured: true,
    description: 'Exquisite bridal chooda sets, Kundan polki kadas, matte gold temple bangles, and sparkling crystal glass sets for every special celebration.'
  },
  {
    id: 'hair-accessories',
    label: 'Hair Accessories',
    subtitle: 'Parisian Claws, Scrunchies & Pearl Bands',
    heroImage: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=900&auto=format&fit=crop',
    badge: 'Everyday Chic',
    itemCountDesc: '120+ Cute & Luxury Accents',
    featured: true,
    description: 'From mulberry silk satin scrunchies to acetate French hair claws, pearl headbands, and minimal Korean hair accents.'
  },
  {
    id: 'fashion-accessories',
    label: 'Fashion Accessories',
    subtitle: 'Statement Earrings & Boutique Finds',
    heroImage: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=900&auto=format&fit=crop',
    badge: 'Style Essentials',
    itemCountDesc: '60+ Modern Pieces',
    featured: false,
    description: 'Statement festive jhumkas, lightweight daily earrings, velvet hair ribbons, and curated women\'s fashion accents.'
  },
  {
    id: 'beauty-skincare',
    label: 'Beauty & Skincare',
    subtitle: 'Glow Essentials, Nail Lacquers & Mists',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop',
    badge: 'Pure Glow',
    itemCountDesc: '40+ Tested Favorites',
    featured: true,
    description: 'Gentle clarifying face washes, steam-distilled rosewater mists, nourishing lip elixirs, and 20+ chip-resistant high-shine nail paints.'
  },
  {
    id: 'fragrance',
    label: 'Artisanal Fragrance',
    subtitle: 'Pocket Perfumes & Long-Lasting Attars',
    heroImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop',
    badge: 'Signature Scents',
    itemCountDesc: '25+ Exotic Blends',
    featured: false,
    description: 'Enchanting floral notes, warm Indian sandalwood, alcohol-free pure roll-on attars, and travel-friendly luxury Eau de Parfums.'
  },
  {
    id: 'gifts-hampers',
    label: 'Gifts & Festive Hampers',
    subtitle: 'Thoughtful Curations for Every Budget',
    heroImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop',
    badge: 'Gifting Studio',
    itemCountDesc: 'Custom Boxes Available',
    featured: true,
    description: 'Ready-to-gift bridal favor boxes, festive celebration hampers, birthday surprise kits, and cute aesthetic packaging under ₹500.'
  }
];

export const PRICE_TIERS: PriceTier[] = [
  {
    id: 'under-99',
    title: 'Under ₹99',
    maxPrice: 99,
    tagline: 'Little Everyday Luxuries',
    popularItems: 'Crystal Hair Pins, Matte Nail Paints, Cute Pastel Clips',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop',
    badgeColor: '#A3705C'
  },
  {
    id: 'under-199',
    title: 'Under ₹199',
    maxPrice: 199,
    tagline: 'Best-Selling Daily Glamour',
    popularItems: 'Mulberry Satin Scrunchies, Korean Claws, Pure Rose Mist',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=600&auto=format&fit=crop',
    badgeColor: '#8B4860'
  },
  {
    id: 'under-299',
    title: 'Under ₹299',
    maxPrice: 299,
    tagline: 'Statement Pieces & Gift Packs',
    popularItems: 'Jaipuri Daily Lakh Kadas, Pearl Hairbands, Pocket Perfumes',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600&auto=format&fit=crop',
    badgeColor: '#6B3868'
  },
  {
    id: 'under-499',
    title: 'Under ₹499',
    maxPrice: 499,
    tagline: 'Occasion Wear & Festive Sets',
    popularItems: 'Royal Kundan Bangles, Bridal Hair Combos, Festive Gift Boxes',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    badgeColor: '#8B263E'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Heritage Craftsmanship',
    subtitle: 'Authentic Lakh & Handcrafted Bangles',
    desc: 'Each Lakh piece is handcrafted by seasoned artisans using traditional techniques, offering radiant gloss and comfortable, skin-safe wear.'
  },
  {
    title: 'Fresh Arrivals Weekly',
    subtitle: 'Always in Sync with Trends',
    desc: 'We refresh our boutique collection every week with the newest Korean hair accessories, trending bangles, and bridal styles.'
  },
  {
    title: 'Affordable Everyday Luxury',
    subtitle: 'High Aesthetics, Honest Pricing',
    desc: 'From ₹49 everyday cute hair accents to grand ₹599 bridal kada sets, discover impeccable quality across every budget.'
  },
  {
    title: 'Personal WhatsApp Concierge',
    subtitle: 'Size Guides & Video Previews',
    desc: 'Not sure about your bangle size or colour match? Message us on WhatsApp for high-resolution video previews and direct personal styling.'
  },
  {
    title: 'Visit Our Physical Boutique',
    subtitle: 'Touch, Feel & Experience In-Store',
    desc: 'Experience our full digital catalogue in real life at our boutique store. Try on designs and find your perfect fit with warm assistance.'
  },
  {
    title: 'Custom Bridal & Bulk Orders',
    subtitle: 'Weddings, Return Gifts & Wholesale',
    desc: 'Planning wedding favors, festive corporate gifting, or retail boutique supply? We provide bespoke curation and bulk pricing.'
  }
];
