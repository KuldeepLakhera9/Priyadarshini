import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. LAKH BANGLES (Heritage Category)
  // ==========================================
  {
    id: 'prod-lakh-01',
    code: 'LAKH-ROYAL-01',
    name: 'Jaipuri Handcrafted Royal Lakh Kada (Pair)',
    category: 'lakh-bangles',
    categoryLabel: 'Lakh Bangles',
    subcategory: 'Bridal & Occasion Kadas',
    price: 349,
    originalPrice: 499,
    priceMode: 'pair',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Authentic royal Jaipur handcrafted Lakh kada encrusted with micro-faceted Austrian stones and golden zari accents. Skin-safe, non-allergic and finished with rich natural lacquer.',
    story: 'Handmade by generational Lakh artisans using pure shellac and centuries-old heat molding techniques.',
    details: [
      'Material: 100% Pure Natural Shellac (Lakh)',
      'Set Contains: 2 Handcrafted Broad Kadas',
      'Stone Work: Fine Cut Crystals & Golden Zari Inlay',
      'Finish: High-Gloss Protective Seal',
      'Ideal for: Karwa Chauth, Weddings, Festive Pujas'
    ],
    sizes: ['2.2', '2.4', '2.6', '2.8'],
    colors: [
      { name: 'Royal Crimson Red', hex: '#8B1E2D' },
      { name: 'Emerald Forest Green', hex: '#1E4D2B' },
      { name: 'Rani Deep Pink', hex: '#C21E56' },
      { name: 'Antique Gold Lustre', hex: '#D4AF37' }
    ],
    tags: ['Heritage Craft', 'Bestseller', 'Festive Special', 'Under ₹499'],
    isHeritage: true,
    isFeatured: true,
    isBestSeller: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-lakh-02',
    code: 'LAKH-MIRROR-02',
    name: 'Mirror Work Floral Lakh Churi Set (12 Pcs)',
    category: 'lakh-bangles',
    categoryLabel: 'Lakh Bangles',
    subcategory: 'Traditional Churi Sets',
    price: 279,
    originalPrice: 350,
    priceMode: 'set',
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'A classic 12-piece slim Lakh churi set featuring hand-set miniature glass mirrors (Abla work) with floral dotted motifs.',
    details: [
      'Material: Pure Lakh with Real Glass Mirrors',
      'Set Contains: 12 Bangles (6 for each hand)',
      'Lightweight & comfortable for all-day festive wear'
    ],
    sizes: ['2.4', '2.6', '2.8'],
    colors: [
      { name: 'Multi Festive', hex: '#D97706' },
      { name: 'Ruby Wine', hex: '#722F37' },
      { name: 'Peacock Blue', hex: '#004F71' }
    ],
    tags: ['Heritage Craft', 'New Arrival', 'Under ₹299'],
    isHeritage: true,
    isNewArrival: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-lakh-03',
    code: 'LAKH-BRIDAL-03',
    name: 'Grand Royal Rajputi Lakh Bridal Chooda Set',
    category: 'lakh-bangles',
    categoryLabel: 'Lakh Bangles',
    subcategory: 'Bridal Sets',
    price: 899,
    originalPrice: 1250,
    priceMode: 'set',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'A magnificent handcrafted bridal chooda combining royal broad centre kadas, pearl-lined border bangles, and sparkling ruby-red Lakh bangles.',
    details: [
      'Set Contains: 28 Designer Bangles + 4 Statement Kadas',
      'Hand-embellished Kundan stones and seed pearls',
      'Custom sizing and color matching available on WhatsApp'
    ],
    sizes: ['2.4', '2.6', '2.8'],
    colors: [
      { name: 'Bridal Crimson & Pearl', hex: '#800020' },
      { name: 'Maroon & Antique Gold', hex: '#5C1D24' }
    ],
    tags: ['Bridal Pick', 'Heritage Craft', 'Bestseller'],
    isHeritage: true,
    isFeatured: true,
    isBestSeller: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-lakh-04',
    code: 'LAKH-DAILY-04',
    name: 'Minimal Matte Pastel Lakh Kada Pair',
    category: 'lakh-bangles',
    categoryLabel: 'Lakh Bangles',
    subcategory: 'Daily Wear Kadas',
    price: 199,
    originalPrice: 260,
    priceMode: 'pair',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Understated modern Lakh bangles in sophisticated contemporary pastel shades. Designed for everyday kurtis and fusion office wear.',
    details: [
      'Material: Hand-turned Natural Lakh',
      'Set Contains: 2 Sleek Kadas',
      'Smooth matte silk finish'
    ],
    sizes: ['2.2', '2.4', '2.6', '2.8'],
    colors: [
      { name: 'Dusty Rose', hex: '#DCAE96' },
      { name: 'Sage Green', hex: '#8F9E8B' },
      { name: 'Ivory Champagne', hex: '#F0E6D2' }
    ],
    tags: ['Under ₹199', 'New Arrival'],
    isHeritage: true,
    isNewArrival: true,
    stockStatus: 'in_stock'
  },

  // ==========================================
  // 2. FANCY & BRIDAL BANGLES
  // ==========================================
  {
    id: 'prod-fancy-01',
    code: 'FANCY-KDN-01',
    name: 'Royal Kundan Polki Openable Kada (Single / Pair)',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Kundan Jewellery',
    price: 449,
    originalPrice: 599,
    priceMode: 'starting_at',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Exquisite Jadau Kundan work set in brass with 18k antique gold micro-plating. Features a concealed screw lock for effortless wearing.',
    details: [
      'Base: Premium Brass with Micro Gold Polish',
      'Stones: High-Grade Uncut Polki Kundan Glass & Ruby Beads',
      'Closure: Side Screw Lock (Fits sizes 2.4 to 2.8)'
    ],
    sizes: ['2.4', '2.6', '2.8'],
    colors: [
      { name: 'Gold & Clear Polki', hex: '#E5C158' },
      { name: 'Gold & Ruby Red', hex: '#9E2A2B' },
      { name: 'Gold & Mint Green', hex: '#A3B18A' }
    ],
    tags: ['Bestseller', 'Bridal Pick', 'Under ₹499'],
    isFeatured: true,
    isBestSeller: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-fancy-02',
    code: 'FANCY-VEL-02',
    name: 'Velvet Matte Glass Bangles Combo (24 Pcs)',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Glass Bangles',
    price: 149,
    originalPrice: 200,
    priceMode: 'set',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Ultra-smooth velvet flocked glass bangles offering rich deep colour saturation with zero glitter fallout. Perfect for pairing between kadas.',
    details: [
      'Material: Toughened Glass with Velvet Coating',
      'Contains: 24 Bangles (12 per hand)',
      'Rich matte texture'
    ],
    sizes: ['2.2', '2.4', '2.6', '2.8'],
    colors: [
      { name: 'Burgundy Velvet', hex: '#58111A' },
      { name: 'Bottle Green Velvet', hex: '#0F3820' },
      { name: 'Mustard Ochre', hex: '#D49B24' },
      { name: 'Midnight Navy', hex: '#1B263B' }
    ],
    tags: ['Under ₹199', 'Festive Special'],
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-fancy-03',
    code: 'FANCY-TMP-03',
    name: 'Matte Temple Gold Embossed Kada Pair',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Temple Jewellery',
    price: 399,
    originalPrice: 520,
    priceMode: 'pair',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Intricate South Indian temple filigree motifs embossed in a matte antique gold tone. Looks identical to heirloom gold jewellery.',
    details: [
      'Finish: Antique Matte Temple Polish',
      'Contains: 2 Statement Kadas',
      'Weight: Lightweight hollow brass core'
    ],
    sizes: ['2.4', '2.6', '2.8'],
    tags: ['Festive Special', 'Under ₹499'],
    isNewArrival: true,
    stockStatus: 'in_stock'
  },

  // ==========================================
  // 3. HAIR ACCESSORIES
  // ==========================================
  {
    id: 'prod-hair-01',
    code: 'HAIR-CLAW-01',
    name: 'French Acetate Tortoiseshell Hair Claw (9cm)',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Claw Clips',
    price: 129,
    originalPrice: 180,
    priceMode: 'fixed',
    images: [
      'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Eco-friendly biodegradable cellulose acetate hair claw with reinforced golden steel spring. Strong grip that holds thick and medium hair securely all day without headaches.',
    details: [
      'Material: Premium Italian-style Cellulose Acetate',
      'Size: 9.5 cm Length (Medium to Thick Hair)',
      'Teeth: Smooth rounded non-snagging tips'
    ],
    colors: [
      { name: 'Classic Amber Tortoise', hex: '#8B4513' },
      { name: 'Oatmeal Marble', hex: '#D8C3A5' },
      { name: 'Smoky Olive', hex: '#556B2F' },
      { name: 'Midnight Jet', hex: '#1C1C1C' }
    ],
    tags: ['Bestseller', 'Under ₹199', 'Everyday Chic'],
    isFeatured: true,
    isBestSeller: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-hair-02',
    code: 'HAIR-SCR-02',
    name: 'Mulberry Silk Satin Cloud Scrunchies (Pack of 3)',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Scrunchies',
    price: 99,
    originalPrice: 150,
    priceMode: 'set',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Ultra-gentle 100% premium silk satin scrunchies designed to prevent hair breakage, creasing, and split ends during sleep and daily wear.',
    details: [
      'Contains: 3 Large Cloud Scrunchies in aesthetic organza pouch',
      'Fabric: High-grade Mulberry Satin sheen',
      'Elastic: Heavy-duty long-lasting stretch'
    ],
    colors: [
      { name: 'Champagne, Rose & Mocha', hex: '#C5A880' },
      { name: 'Pastel Lavender & Sage', hex: '#B8B5C0' }
    ],
    tags: ['Under ₹99', 'Bestseller', 'Cute Gifts'],
    isBestSeller: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-hair-03',
    code: 'HAIR-BAND-03',
    name: 'Hand-Embellished Velvet Pearl Headband',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Headbands',
    price: 189,
    originalPrice: 250,
    priceMode: 'fixed',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'A padded plush velvet headband studded with gradient faux freshwater pearls. Flexible comfort band that doesn’t pinch behind the ears.',
    details: [
      'Base: Padded Korean Velvet Band',
      'Stones: Assorted Hand-Sewn Lustrous Pearls',
      'Free Size (Ultra-flexible fit)'
    ],
    colors: [
      { name: 'Blush Powder Pink', hex: '#F4C2C2' },
      { name: 'Deep Emerald', hex: '#0B6623' },
      { name: 'Classic Black Velvet', hex: '#000000' }
    ],
    tags: ['Under ₹199', 'New Arrival'],
    isNewArrival: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-hair-04',
    code: 'HAIR-PIN-04',
    name: 'Korean Pastel Geometric Hair Barrettes (Set of 4)',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Clips & Pins',
    price: 79,
    originalPrice: 120,
    priceMode: 'set',
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Minimalist Korean resin and matte acrylic snap clips in soft candy hues. A must-have for half-up hair styling.',
    details: [
      'Contains: 4 Different Shapes & Pastel Colors',
      'Anti-slip alligator grip backing',
      'Rust-proof golden alloy plating'
    ],
    tags: ['Under ₹99', 'Cute Gifts'],
    stockStatus: 'in_stock'
  },

  // ==========================================
  // 4. FASHION ACCESSORIES
  // ==========================================
  {
    id: 'prod-acc-01',
    code: 'ACC-JHM-01',
    name: 'Festive Pearl Drop Meenakari Chandbali Earrings',
    category: 'fashion-accessories',
    categoryLabel: 'Fashion Accessories',
    subcategory: 'Earrings & Jhumkis',
    price: 249,
    originalPrice: 349,
    priceMode: 'pair',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Hand-painted Rajasthani meenakari work with delicate pearl clusters and kundan accents. Surprisingly lightweight and easy to wear all night.',
    details: [
      'Craft: Traditional Hand Meenakari & Kundan',
      'Finish: 18k Matt Gold Tone',
      'Backing: Push back with comfort silicon washer'
    ],
    colors: [
      { name: 'Rani Pink & Mint', hex: '#E75480' },
      { name: 'Royal Ivory & Gold', hex: '#FFFDD0' },
      { name: 'Peacock Turquoise', hex: '#008080' }
    ],
    tags: ['Under ₹299', 'Festive Special'],
    isFeatured: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-acc-02',
    code: 'ACC-OXD-02',
    name: 'Boho Oxidised Silver Tribal Stud Set (Pack of 3 Pairs)',
    category: 'fashion-accessories',
    categoryLabel: 'Fashion Accessories',
    subcategory: 'Daily Earrings',
    price: 149,
    originalPrice: 220,
    priceMode: 'set',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Three versatile pairs of dual-tone oxidised silver daily studs featuring sunburst, lotus, and peacock engravings.',
    details: [
      'Contains: 3 Unique Design Pairs',
      'Material: Skin-friendly German Silver Alloy (Lead & Nickel Free)',
      'Ideal for: Kurtis, Jeans, College & Casual wear'
    ],
    tags: ['Under ₹199', 'Bestseller'],
    isBestSeller: true,
    stockStatus: 'in_stock'
  },

  // ==========================================
  // 5. BEAUTY & SKINCARE
  // ==========================================
  {
    id: 'prod-bty-01',
    code: 'BTY-ROSE-01',
    name: 'Pure Steam-Distilled Kannauj Rose Water Facial Mist (100ml)',
    category: 'beauty-skincare',
    categoryLabel: 'Beauty & Skincare',
    subcategory: 'Toners & Mists',
    price: 169,
    originalPrice: 220,
    priceMode: 'fixed',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop'
    ],
    description: '100% natural, steam-distilled from fresh Indian Desi Gulab petals. Instant skin hydration, pore tightening, and a divine natural fragrance with zero chemicals or alcohol.',
    details: [
      'Volume: 100ml Spray Bottle with Ultra-Fine Mist Nozzle',
      '100% Alcohol-Free, Paraben-Free, Artificial Fragrance-Free',
      'Suitable for: All Skin Types (Dry, Oily, Sensitive)'
    ],
    tags: ['Under ₹199', 'Pure Glow', 'Bestseller'],
    isFeatured: true,
    isBestSeller: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-bty-02',
    code: 'BTY-NAIL-02',
    name: 'Glossy Gel-Shine Nail Lacquer (Choose from 24 Shades)',
    category: 'beauty-skincare',
    categoryLabel: 'Beauty & Skincare',
    subcategory: 'Nail Paints',
    price: 79,
    originalPrice: 110,
    priceMode: 'fixed',
    images: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'High-pigment salon gel finish without UV lamp. Chip-resistant formula lasts up to 7 days with mirror shine. Quick drying in under 60 seconds.',
    details: [
      'Quantity: 11ml',
      'Wide U-Cut Brush for one-stroke smooth application',
      'Cruelty-Free, Toxin-Free 7-Free Formula'
    ],
    colors: [
      { name: 'Nude Almond', hex: '#D7B9A5' },
      { name: 'Wine Velvet', hex: '#58111A' },
      { name: 'Classic Ruby Red', hex: '#B80F0A' },
      { name: 'Mauve Sunset', hex: '#8B5A6B' },
      { name: 'French Milky White', hex: '#FAF9F6' }
    ],
    tags: ['Under ₹99', 'Bestseller'],
    isBestSeller: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-bty-03',
    code: 'BTY-WASH-03',
    name: 'Saffron & Honey Gentle Glow Foaming Face Wash (120ml)',
    category: 'beauty-skincare',
    categoryLabel: 'Beauty & Skincare',
    subcategory: 'Face Wash & Cleansers',
    price: 199,
    originalPrice: 275,
    priceMode: 'fixed',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'A soothing Ayurvedic brightening cleanser enriched with pure Kashmiri Saffron, organic raw honey, and aloe vera. Removes daily pollution without stripping moisture.',
    details: [
      'Volume: 120ml Built-in Silicone Soft Face Brush',
      'Sulphate-Free, Soap-Free gentle formula',
      'Dermatologically tested for daily morning & night care'
    ],
    tags: ['Under ₹199', 'New Arrival'],
    isNewArrival: true,
    stockStatus: 'in_stock'
  },

  // ==========================================
  // 6. ARTISANAL FRAGRANCE & ATTAR
  // ==========================================
  {
    id: 'prod-frg-01',
    code: 'FRG-OUD-01',
    name: 'Royal White Oud & Jasmine Luxury Pocket Perfume (20ml)',
    category: 'fragrance',
    categoryLabel: 'Fragrance',
    subcategory: 'Eau De Parfum',
    price: 249,
    originalPrice: 350,
    priceMode: 'fixed',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'A captivating blend of velvety Indian Jasmine sambac, sensual white musk, and soft creamy agarwood (oud). Sleek travel-friendly glass bottle.',
    details: [
      'Concentration: Eau de Parfum (Long lasting 8–10 hours)',
      'Top Notes: Jasmine, Bergamot',
      'Heart Notes: Soft Amber, Cashmere Rose',
      'Base Notes: White Oud, Sandalwood Musk',
      'Pocket friendly 20ml luxury spray bottle'
    ],
    tags: ['Under ₹299', 'Signature Scents'],
    isFeatured: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-frg-02',
    code: 'FRG-ATR-02',
    name: 'Gulab Khas Pure Alcohol-Free Roll-On Attar (8ml)',
    category: 'fragrance',
    categoryLabel: 'Fragrance',
    subcategory: 'Pure Attar',
    price: 180,
    originalPrice: 240,
    priceMode: 'fixed',
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'Traditional pure concentrated perfume oil made from Kannauj Damask roses on a soothing sandalwood base. 100% alcohol-free and skin friendly.',
    details: [
      'Volume: 8ml Roll-On Glass Bottle with Gold Cap',
      '100% Non-Alcoholic Oil (Halal & Skin-Safe)',
      'Lasts 24+ hours on fabrics and pulse points'
    ],
    tags: ['Under ₹199', 'Bestseller'],
    isBestSeller: true,
    stockStatus: 'in_stock'
  },

  // ==========================================
  // 7. GIFTS & FESTIVE HAMPERS
  // ==========================================
  {
    id: 'prod-gft-01',
    code: 'GFT-BOX-01',
    name: 'Festive Radiance Curated Gift Box',
    category: 'gifts-hampers',
    categoryLabel: 'Gifts & Hampers',
    subcategory: 'Festive Hampers',
    price: 499,
    originalPrice: 699,
    priceMode: 'box',
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'A beautifully assembled luxury gift box featuring a pair of Jaipur Lakh kadas, Mulberry satin scrunchie, rosewater mist, and an artisanal pocket perfume packed with festive ribbons.',
    details: [
      'Contains: 1 Pair Lakh Kadas + 1 Satin Scrunchie + 1 Pocket Perfume + 1 Rose Mist',
      'Packaging: Hardbound Textured Keepsake Gift Box with Satin Bow',
      'Includes complimentary personalized handwritten note card'
    ],
    tags: ['Under ₹499', 'Festive Special', 'Cute Gifts'],
    isFeatured: true,
    isNewArrival: true,
    stockStatus: 'in_stock'
  },
  {
    id: 'prod-gft-02',
    code: 'GFT-PASTEL-02',
    name: 'Sweet Sixteen Pastel Aesthetic Hair Care Kit',
    category: 'gifts-hampers',
    categoryLabel: 'Gifts & Hampers',
    subcategory: 'Birthday & Teens',
    price: 299,
    originalPrice: 420,
    priceMode: 'box',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop'
    ],
    description: 'An adorable gifting hamper containing 2 aesthetic hair claws, 2 silk scrunchies, 4 Korean pastel clips, and cute stickers in a clear gift bag.',
    details: [
      'Contains: 8 Trendy Hair Accessories',
      'Packed in reusable aesthetic holographic bag',
      'Perfect for birthdays, return gifts, and friendship day'
    ],
    tags: ['Under ₹299', 'Cute Gifts', 'New Arrival'],
    isNewArrival: true,
    stockStatus: 'in_stock'
  }
];
