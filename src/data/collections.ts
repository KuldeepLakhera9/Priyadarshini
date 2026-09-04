export interface SeasonalCollection {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  badge: string;
  season: string;
  isActive: boolean;
  productIds: string[];
}

export const SEASONAL_COLLECTIONS: SeasonalCollection[] = [
  {
    id: 'bridal-trousseau',
    title: 'The Royal Bridal Trousseau',
    tagline: 'Heirloom Lakh & Kundan Splendor',
    description: 'Bespoke bridal choodas, Jaipuri Kundan polki broad kadas, and celebratory Chandbalis curated for weddings, Sangeets, and bridal trousseaus.',
    heroImage: '/images/products/bridal-kundan-lakh-chooda.jpg',
    badge: 'Wedding Special',
    season: 'Wedding Season',
    isActive: true,
    productIds: ['lakh-01', 'fancy-01', 'lakh-04', 'trad-01', 'acc-01', 'gifts-03']
  },
  {
    id: 'karwa-chauth-teej',
    title: 'Auspicious Karwa Chauth & Teej Edit',
    tagline: 'Traditional Crimson & Velvet Chimes',
    description: 'Sculpted organic Lakh kadas in vibrant sindoori reds, Firozabad velvet glass chooris, and traditional botanical attars for festive celebrations.',
    heroImage: '/images/products/jaipuri-rani-pink-lakh-kadas.jpg',
    badge: 'Festive Ritual',
    season: 'Festive Puja',
    isActive: true,
    productIds: ['lakh-01', 'lakh-02', 'fancy-02', 'frag-01', 'acc-03']
  },
  {
    id: 'parisian-everyday-chic',
    title: 'The Parisian Everyday Chic Edit',
    tagline: 'Effortless Hair & Accessory Accents Under ₹199',
    description: 'Korean pastel hair claws, whimsical butterfly pins, velvet headbands, and carved antique silver rings for effortless modern elegance.',
    heroImage: '/images/products/korean-pastel-hair-claws.jpg',
    badge: 'Daily Essentials',
    season: 'All Year',
    isActive: true,
    productIds: ['hair-01', 'hair-02', 'hair-03', 'hair-04', 'acc-02']
  },
  {
    id: 'gifting-favors',
    title: 'The Gifting Atelier & Wedding Favors',
    tagline: 'Thoughtful Curations for Every Celebration',
    description: 'Handcrafted keepsake boxes, pastel birthday kits, and customized return favor suites with handwritten calligraphy notes.',
    heroImage: '/images/products/crystal-pearl-saree-pins.jpg',
    badge: 'Gifting Suite',
    season: 'Occasions',
    isActive: true,
    productIds: ['gifts-01', 'gifts-02', 'gifts-03', 'frag-01', 'lakh-01']
  }
];
