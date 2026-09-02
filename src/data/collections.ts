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
    heroImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    badge: 'Wedding Special',
    season: 'Wedding Season',
    isActive: true,
    productIds: ['lakh-01', 'fancy-01', 'lakh-04', 'trad-01', 'acc-01', 'gifts-03']
  },
  {
    id: 'karwa-chauth-teej',
    title: 'Auspicious Karwa Chauth & Teej Edit',
    tagline: 'Traditional Crimson & Velvet Chimes',
    description: 'Sculpted organic Lakh kadas in vibrant sindoori reds, Firozabad velvet glass chooris, and steam-distilled rose mist for festive celebrations.',
    heroImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop',
    badge: 'Festive Ritual',
    season: 'Festive Puja',
    isActive: true,
    productIds: ['lakh-01', 'lakh-02', 'fancy-02', 'beauty-01', 'frag-01']
  },
  {
    id: 'parisian-everyday-chic',
    title: 'The Parisian Everyday Chic Edit',
    tagline: 'Effortless Hair & Skin Rituals Under ₹199',
    description: 'French cellulose acetate hair claws, mulberry silk cloud scrunchies, and fast-drying nude gel lacquers for effortless modern elegance.',
    heroImage: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=900&auto=format&fit=crop',
    badge: 'Daily Essentials',
    season: 'All Year',
    isActive: true,
    productIds: ['hair-01', 'hair-02', 'hair-03', 'hair-04', 'beauty-03']
  },
  {
    id: 'gifting-favors',
    title: 'The Gifting Atelier & Wedding Favors',
    tagline: 'Thoughtful Curations for Every Celebration',
    description: 'Handcrafted keepsake boxes, pastel birthday kits, and customized return favor suites with handwritten calligraphy notes.',
    heroImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop',
    badge: 'Gifting Suite',
    season: 'Occasions',
    isActive: true,
    productIds: ['gifts-01', 'gifts-02', 'gifts-03', 'frag-01', 'lakh-01']
  }
];
