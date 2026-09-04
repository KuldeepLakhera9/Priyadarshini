import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. LAKH BANGLES (Heritage Jaipur Handcraft)
  // ==========================================
  {
    id: 'lakh-01',
    code: 'LAKH-RANI-PINK-VINES',
    name: 'Jaipuri Rani Pink Hand-Painted Lakh Kada Pair',
    category: 'lakh-bangles',
    categoryLabel: 'Lakh Bangles',
    subcategory: 'Bridal Lakh Sets',
    price: 420,
    originalPrice: 550,
    priceMode: 'pair',
    priceLabel: '₹420 (Pair)',
    images: [
      '/images/products/jaipuri-rani-pink-lakh-kadas.jpg'
    ],
    description: 'Exquisite pair of broad handcrafted Jaipur Lakh kadas in vibrant rani pink, detailed with hand-painted Rajasthani floral vines, pearl-encircled pavé crystal medallions, and micro-rhinestone crystal trims.',
    story: 'Melted over simmering charcoal embers and shaped by master artisans in Jaipur. A radiant centerpiece for festive suits and bridal trousseaus.',
    details: [
      'Pair of 2 broad authentic Jaipur Lakh kadas',
      'Hand-painted Rajasthani floral vine artistry',
      'Round circular pavé champagne crystal medallions bordered with seed pearls',
      'Sparkling diamond rhinestone crystal chain borders',
      'Smooth skin-safe inner shellac lacquer lining',
      'Sizes available: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Rani Pink & Gold', hex: '#C21E56' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Organic Shellac Resin, Crystals & Seed Pearls',
    tags: ['Best Seller', 'Jaipur Craft', 'Boutique Exclusive'],
    isFeatured: true,
    isBestSeller: true,
    isHeritage: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['lakh-02', 'lakh-04', 'fancy-03']
  },
  {
    id: 'lakh-02',
    code: 'LAKH-SHISH-MAHAL-EMERALD',
    name: 'Shish Mahal Emerald Mirror-Work Lakh Kadas',
    category: 'lakh-bangles',
    categoryLabel: 'Lakh Bangles',
    subcategory: 'Jaipuri Mirror Bangles',
    price: 380,
    priceMode: 'pair',
    priceLabel: '₹380 (Pair)',
    images: [
      '/images/products/shish-mahal-mirror-lakh-kadas.jpg'
    ],
    description: 'Heritage hand-faceted circular glass mirror inlays set into deep imperial emerald green lacquer with warm gold hand-painted vines and seed pearl borders.',
    story: 'Inspired by the Shish Mahal of Amer Fort. Handcrafted natural resin embedded with circular mirrors reflecting celebratory candlelight.',
    details: [
      'Authentic hand-faceted glass mirror inlays (aaina shish-mahal work)',
      'Deep imperial emerald green lacquer with golden floral vine motifs',
      'Micro seed pearl halos around each mirror disc',
      'Smooth edges preventing thread-snagging with festive sarees',
      'Sizes available: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Imperial Emerald & Gold', hex: '#1B4D3E' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Organic Shellac Resin, Mirror Glass & Pearl Halos',
    tags: ['Handcrafted', 'Festive Heritage', 'Signature'],
    isFeatured: true,
    isHeritage: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['lakh-01', 'lakh-04', 'trad-01']
  },
  {
    id: 'lakh-03',
    code: 'LAKH-TRICOLOR-FESTIVE-8',
    name: 'Auspicious Tri-Color Festive Lakh Bangle Set (Set of 8)',
    category: 'lakh-bangles',
    categoryLabel: 'Lakh Bangles',
    subcategory: 'Daily Wear Kadas',
    price: 290,
    priceMode: 'set',
    priceLabel: '₹290 (Set of 8)',
    images: [
      '/images/products/festive-tricolor-lakh-set.jpg'
    ],
    description: 'Traditional festive 8-piece stacking set in auspicious vermilion red, turmeric yellow, and forest green high-gloss lacquer, alternating with textured golden stone spacer kadas.',
    story: 'The timeless suhaag trio of red, haldi yellow, and green. A celebratory favorite at Priyadarshani for Teej, Karwa Chauth, and weddings.',
    details: [
      'Complete set of 8 festive Lakh bangles',
      'Auspicious tri-color palette: Vermilion Red, Haldi Yellow & Bottle Green',
      'Alternating with textured gold shimmer stone kadas',
      'High-gloss smooth finish with soothing chime',
      'Sizes: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Auspicious Tri-Color', hex: '#8B0000' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Pure Organic Shellac & Gold Stone Spacers',
    tags: ['Festive Favorite', 'Under 299', 'New Arrival'],
    isNew: true,
    isFeatured: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['lakh-01', 'lakh-02', 'fancy-02']
  },
  {
    id: 'lakh-04',
    code: 'LAKH-KUNDAN-BRIDAL-CHOODA',
    name: 'Maharani Kundan Polki Bridal Lakh Chooda Suite',
    category: 'lakh-bangles',
    categoryLabel: 'Lakh Bangles',
    subcategory: 'Bridal Lakh Sets',
    price: 580,
    originalPrice: 750,
    priceMode: 'set',
    priceLabel: '₹580 (Full Suite)',
    images: [
      '/images/products/bridal-kundan-lakh-chooda.jpg'
    ],
    description: 'Regal bridal Lakh chooda suite featuring two broad crimson-red kadas encrusted with Kundan polki florets and seed pearls, stacked with rich crimson bangles and gold filigree spacer chooris.',
    story: 'Crafted for the royal Indian bride. Photographed on warm limestone pedestal with draped raw silk for timeless bridal trousseau grandeur.',
    details: [
      'Complete bridal chooda stack with 2 broad Kundan kadas and spacer bangles',
      'Kundan polki flower medallions set on royal crimson lacquer',
      'Gold filigree and micro-rhinestone spacers',
      'Smooth non-allergenic natural shellac inner core',
      'Sizes: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Royal Bridal Crimson', hex: '#7D0A14' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Shellac Resin, Kundan Polki & Gold Filigree',
    tags: ['Bridal Pick', 'Heirloom', 'Best Seller'],
    isFeatured: true,
    isBestSeller: true,
    isHeritage: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['lakh-01', 'fancy-01', 'trad-01']
  },

  // ==========================================
  // 2. FANCY BANGLES (Bridal, Glass, Metal)
  // ==========================================
  {
    id: 'fancy-01',
    code: 'CHOODA-ROYAL-BRIDAL',
    name: 'Traditional Royal Red Bridal Chooda Set',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Bridal Chooda Sets',
    price: 899,
    originalPrice: 1200,
    priceMode: 'set',
    priceLabel: '₹899 (Full Set)',
    images: [
      '/images/products/bridal-kundan-lakh-chooda.jpg',
      '/images/products/moti-jaal-kadas.jpg'
    ],
    description: 'Complete bridal chooda suite featuring rich red gloss bangles bordered by intricate white pearl-accented kadas.',
    details: [
      'Complete set for both hands (approx. 40 pieces total)',
      'High-grade gloss acrylic and brass kadas',
      'Sizes: 2.4, 2.6, 2.8',
      'In-store custom wrist fitting available'
    ],
    colors: [
      { name: 'Bridal Red & Cream', hex: '#A30000' },
      { name: 'Deep Maroon & Cream', hex: '#580812' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'High-Gloss Acrylic & Brass Filigree',
    tags: ['Bridal Special', 'Complete Set'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['lakh-01', 'lakh-04', 'trad-01']
  },
  {
    id: 'fancy-02',
    code: 'GLASS-VELVET-SETS',
    name: 'Firozabad Velvet Touch Glass Chooris (Pack of 24)',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Velvet Glass Bangles',
    price: 180,
    priceMode: 'set',
    priceLabel: '₹180 (Pack of 24)',
    images: [
      '/images/products/festive-tricolor-lakh-set.jpg',
      '/images/products/floral-baguette-bangles.jpg'
    ],
    description: 'Authentic Firozabad glass chooris coated in a soft matte-velvet texture that produces a soothing traditional chime.',
    details: [
      '24 velvet-finish glass bangles',
      'Rich non-fade pigmented flocking',
      'Sizes: 2.2, 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Wine Plum', hex: '#4A1525' },
      { name: 'Royal Pine', hex: '#1C3A27' },
      { name: 'Mustard Haldi', hex: '#D49B18' },
      { name: 'Midnight Navy', hex: '#162238' }
    ],
    sizes: ['2.2', '2.4', '2.6', '2.8'],
    material: 'Flocked Glass',
    tags: ['Under 199', 'Festive Chime'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['lakh-03', 'fancy-03', 'trad-02']
  },
  {
    id: 'fancy-03',
    code: 'FANCY-NAVRATNA-PAVE',
    name: 'Navratna Multistone & Pave Crystal Broad Kada Pair',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Crystal Metal Kadas',
    price: 380,
    priceMode: 'pair',
    priceLabel: '₹380 (Pair)',
    images: [
      '/images/products/navratna-pave-kadas.jpg'
    ],
    description: 'Statement broad gold-plated kada pair studded with vibrant dome cabochons in emerald green, rose pink, ruby magenta, turquoise, and yellow, encircled by radiant pavé crystal cluster domes.',
    story: 'Direct in-store favorite from Priyadarshani, Jalgaon. Hand-finished with micro-pavé shimmer and vibrant candy-gem cabochons.',
    details: [
      'Pair of 2 broad designer kadas with rich textured gold plating',
      'Micro-pavé rhinestone crystal cluster discs',
      'Vibrant polished dome cabochon stones in multiple festive hues',
      'Smooth skin-friendly inner brass core',
      'Sizes: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Multicolor & Gold', hex: '#D4AF37' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Textured Gold-Plated Brass & Pavé Crystals',
    tags: ['Boutique Exclusive', 'Best Seller', 'Festive Statement'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['fancy-01', 'fancy-04', 'fancy-05']
  },
  {
    id: 'fancy-04',
    code: 'FANCY-FLORAL-BAGUETTE-4',
    name: 'Floral Enamel & Pastel Baguette Chooriyan (Set of 4)',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Crystal Metal Kadas',
    price: 240,
    priceMode: 'set',
    priceLabel: '₹240 (Set of 4)',
    images: [
      '/images/products/floral-baguette-bangles.jpg'
    ],
    description: 'Exquisite four-piece sleek bangle set crafted with alternating faceted baguette gemstones in ruby red, jade green, magenta, and blush, bordered by handcrafted white enamel blossoms.',
    story: 'Curated for Priyadarshani customers who adore minimalist elegance with traditional floral meenakari touch.',
    details: [
      'Complete set of 4 sleek stacking bangles',
      'Hand-applied white enamel floral flowerets with golden core',
      'Faceted rectangular crystal baguettes',
      'Versatile: wear standalone or stack alongside bridal velvet glass chooris',
      'Sizes: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Pastel Garden Multi', hex: '#C27B88' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Gold-Plated Alloy, Enamel & Baguette Crystals',
    tags: ['Boutique Exclusive', 'New Arrival', 'Under 299'],
    isNew: true,
    isFeatured: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['fancy-02', 'fancy-03', 'fancy-06']
  },
  {
    id: 'fancy-05',
    code: 'FANCY-HEART-PEARL-SILVER',
    name: 'Crystal Solitaire Heart & Seed Pearl Silver Kada Pair',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Crystal Metal Kadas',
    price: 360,
    priceMode: 'pair',
    priceLabel: '₹360 (Pair)',
    images: [
      '/images/products/crystal-heart-pearl-kadas.jpg'
    ],
    description: 'Shimmering rhodium-plated silver kada pair featuring faceted heart-shaped clear solitaire crystals, each encircled in a delicate scalloped halo of micro seed pearls with rainbow aurora borealis crystal accents.',
    story: 'A radiant cocktail piece photographed on warm limestone and linen for modern evening and sangeet elegance.',
    details: [
      'Pair of 2 silver rhodium-finish designer kadas',
      'Faceted heart-cut solitaire crystals with brilliant prismatic light reflection',
      'Circled with micro seed pearl scallops and aurora borealis accents',
      'Smooth inner finish for snag-free, all-day comfort',
      'Sizes: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Silver Solitaire & Pearl', hex: '#E2E6EA' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Rhodium-Plated Brass, Solitaire Crystals & Seed Pearls',
    tags: ['Boutique Exclusive', 'Silver Collection', 'Party Wear'],
    isFeatured: true,
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['fancy-03', 'fancy-06', 'trad-01']
  },
  {
    id: 'fancy-06',
    code: 'FANCY-CANDY-PEARL-FLOWER',
    name: 'Candy Cabochon & Pearl Blossom Silver Kada Pair',
    category: 'fancy-bangles',
    categoryLabel: 'Fancy Bangles',
    subcategory: 'Crystal Metal Kadas',
    price: 320,
    priceMode: 'pair',
    priceLabel: '₹320 (Pair)',
    images: [
      '/images/products/candy-pearl-silver-kadas.jpg'
    ],
    description: 'Playful frosted silver kadas studded with smooth oval candy cabochons in pastel pink, amber yellow, ruby red, and turquoise mint, interspersed with 5-pearl flowerets with multicolored crystal centers.',
    story: 'A fresh, feminine boutique design bringing together joyful pastel colors, lustrous pearls, and sparkling frosted silver.',
    details: [
      'Pair of 2 frosted silver-glitter finish kadas',
      'Smooth oval cabochons in festive pastel colors',
      '5-petal pearl floral clusters with multicolor rhinestone crystal cores',
      'Versatile styling: pairs beautifully with both Indo-western and traditional ethnic attire',
      'Sizes: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Multicolor & Frosted Silver', hex: '#DCDFE3' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Frosted Silver Finish Brass, Pearl Clusters & Cabochon Gems',
    tags: ['Boutique Exclusive', 'New Arrival', 'Under 499'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['fancy-04', 'fancy-05', 'trad-01']
  },

  // ==========================================
  // 3. TRADITIONAL BANGLES (Temple & Antique)
  // ==========================================
  {
    id: 'trad-01',
    code: 'TRAD-MOTI-JAAL-BRIDAL',
    name: 'Moti Jaal Royal Seed Pearl & Ruby-Emerald Scalloped Kada Pair',
    category: 'traditional-bangles',
    categoryLabel: 'Traditional Bangles',
    subcategory: 'Temple Antique Kadas',
    price: 490,
    originalPrice: 650,
    priceMode: 'pair',
    priceLabel: '₹490 (Pair)',
    images: [
      '/images/products/moti-jaal-kadas.jpg'
    ],
    description: 'Regal bridal kada pair richly woven with dense micro seed pearls in intricate scalloped diamond trellis motifs, accented with sparkling ruby red and emerald green stones.',
    story: 'Heirloom styling presented on antique mirrored tray and limestone pedestal. Perfect centerpiece kada for bridal choodas or wedding lehengas.',
    details: [
      'Heavy bridal kada pair (2 pieces)',
      'Intricate moti jaal (seed pearl embroidery) over gold brass core',
      'Scalloped crown outer border with ruby and emerald gemstone accents',
      'Smooth non-snagging inner gold lining for skin comfort',
      'Sizes: 2.4, 2.6, 2.8'
    ],
    colors: [
      { name: 'Pearl Gold with Ruby & Emerald', hex: '#EAE6DF' }
    ],
    sizes: ['2.4', '2.6', '2.8'],
    material: 'Seed Pearls, Brass & Faceted Gemstones',
    tags: ['Bridal Heirloom', 'Signature', 'Best Seller'],
    isFeatured: true,
    isBestSeller: true,
    isHeritage: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['fancy-01', 'fancy-03', 'fancy-05']
  },
  {
    id: 'trad-02',
    code: 'MEENAKARI-PEACOCK-KADA',
    name: 'Jaipuri Hand-Painted Meenakari Peacock Bangles',
    category: 'traditional-bangles',
    categoryLabel: 'Traditional Bangles',
    subcategory: 'Traditional Meenakari',
    price: 299,
    priceMode: 'pair',
    priceLabel: '₹299 (Pair)',
    images: [
      '/images/products/floral-baguette-bangles.jpg',
      '/images/products/shish-mahal-mirror-lakh-kadas.jpg'
    ],
    description: 'Enamelled with vibrant peacock blues and emerald greens using centuries-old Jaipur Meenakari firing techniques.',
    details: [
      'Hand-painted vitreous enamel on brass',
      'Reversible detailing with floral motifs',
      'Sizes: 2.4, 2.6'
    ],
    colors: [
      { name: 'Peacock Royal Blue', hex: '#1E3F66' },
      { name: 'Meenakari Emerald', hex: '#124E3F' }
    ],
    sizes: ['2.4', '2.6'],
    material: 'Enamelled Brass (Meenakari)',
    tags: ['Hand-Painted', 'Under 299'],
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['trad-01', 'lakh-02', 'acc-02']
  },

  // ==========================================
  // 4. FASHION ACCESSORIES (Jewellery & Accents)
  // ==========================================
  {
    id: 'acc-01',
    code: 'JEWEL-OXIDISED-NECKLACE-SET',
    name: 'Bohemian German Silver Tribal Coin & Ghungroo Necklace Set',
    category: 'fashion-accessories',
    categoryLabel: 'Fashion Accessories',
    subcategory: 'Oxidised Silver',
    price: 199,
    originalPrice: 280,
    priceMode: 'fixed',
    priceLabel: '₹199',
    images: [
      '/images/products/oxidised-silver-necklace-rings.jpg'
    ],
    description: 'Vintage-washed German silver tribal statement necklace detailed with hanging chime ghungroos, engraved antique coin pendants, carnelian and turquoise accent beads, paired with a matching bell jhumka.',
    story: 'Sourced directly from our Jalgaon counter. A Bohemian festival favorite that pairs effortlessly with cotton kurtis, fusion sarees, and Navratri chaniyas.',
    details: [
      'Artisanal German silver alloy with antique matte patina',
      'Tinkling ghungroo bells and embossed temple coin charms',
      'Turquoise and terracotta bead spacers',
      'Matching statement bell jhumka included',
      'Zero lead & zero nickel skin-safe alloy'
    ],
    colors: [
      { name: 'Antique Silver Patina', hex: '#8C9298' }
    ],
    material: 'German Silver Alloy & Glass Accent Beads',
    tags: ['Best Seller', 'Oxidised Silver', 'Under 199'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['acc-02', 'acc-03', 'lakh-02']
  },
  {
    id: 'acc-02',
    code: 'RING-OXIDISED-FLORAL-SET',
    name: 'Shivson Handcrafted Antique Silver Carved Statement Rings',
    category: 'fashion-accessories',
    categoryLabel: 'Fashion Accessories',
    subcategory: 'Statement Rings',
    price: 89,
    priceMode: 'fixed',
    priceLabel: '₹89 (Set of 2)',
    images: [
      '/images/products/oxidised-silver-necklace-rings.jpg'
    ],
    description: 'Set of two intricately engraved antique silver finger rings featuring traditional mandala and filigree petal motifs. Fitted with an adjustable back band for universal sizing.',
    story: 'The timeless college and daily-wear staple from Priyadarshani\'s jewellery counter, photographed on raw slate stone.',
    details: [
      'Set of 2 statement finger rings with mandala and petal engravings',
      'Smooth adjustable comfort band fitting any finger size',
      'Matte antique silver oxidised finish',
      'Lightweight and comfortable for all-day wear'
    ],
    colors: [
      { name: 'Oxidised Antique Silver', hex: '#9E9E9E' }
    ],
    sizes: ['Free Size (Adjustable)'],
    material: 'German Silver Alloy',
    tags: ['Petite Edit', 'Under 99', 'College Favorite'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['acc-01', 'acc-03', 'hair-01']
  },
  {
    id: 'acc-03',
    code: 'BROOCH-CRYSTAL-PEARL-SUITE',
    name: 'Artisanal Crystal Floral Saree Pins & Pearl Swan Brooches Suite',
    category: 'fashion-accessories',
    categoryLabel: 'Fashion Accessories',
    subcategory: 'Brooches & Saree Pins',
    price: 149,
    originalPrice: 199,
    priceMode: 'set',
    priceLabel: '₹149 (Curated Pair)',
    images: [
      '/images/products/crystal-pearl-saree-pins.jpg'
    ],
    description: 'Exquisite jewelry suite featuring pastel crystal-petal floral saree safety pins with teardrop crystal drops, accompanied by pavé crystal twin swan brooches and pearl-encrusted heart pins.',
    story: 'Handcrafted with brilliant aurora borealis crystals and lustrous simulated pearls on champagne velvet, designed to elevate saree drapes, dupattas, and festive cardigans without damaging fabric.',
    details: [
      'Includes 1 crystal floral saree pin + 1 pearl swan or heart brooch pin',
      'Multi-color pastel crystal petals (rose, mint, champagne, lavender)',
      'High-grade stainless steel safety pin needle with safety lock clasp',
      'Snag-free backing that protects delicate silk, georgette, and organza fabrics'
    ],
    colors: [
      { name: 'Pastel Crystal & Pearl Gold', hex: '#F0E6D2' }
    ],
    material: 'Austrian Crystals, Seed Pearls & Rose Gold Tone Alloy',
    tags: ['Saree Essentials', 'Boutique Exclusive', 'Under 199'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['acc-01', 'fancy-03', 'hair-03']
  },

  // ==========================================
  // 5. HAIR ACCESSORIES (Claws, Scrunchies, Bands)
  // ==========================================
  {
    id: 'hair-01',
    code: 'HAIR-KOREAN-PASTEL-CLAWS',
    name: 'Korean Pastel Floral & Butterfly Mini Hair Claws Collection',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Acetate Hair Claws',
    price: 99,
    priceMode: 'set',
    priceLabel: '₹99 (Set of 6)',
    images: [
      '/images/products/korean-pastel-hair-claws.jpg'
    ],
    description: 'Delightful 6-piece assortment of Korean matte pastel mini flower claws, butterfly pins, and square clips in soft blush pink, lilac, mint green, baby blue, and cream, along with jumbo tortoiseshell and glitter claws.',
    story: 'Fresh from our Jalgaon boutique hair counter. Ultra-lightweight with anti-slip interlocking teeth, styled on warm travertine stone.',
    details: [
      'Curated set of 6 aesthetic matte pastel hair claws',
      'Includes floral, butterfly, and geometric square silhouette shapes',
      'High-tension rust-proof spring with rounded non-scratch teeth',
      'Gentle on fine and thick hair; perfect for half-up twists and bangs'
    ],
    colors: [
      { name: 'Pastel Garden Assortment', hex: '#D8B4E2' }
    ],
    material: 'Matte Soft-Touch Resin & Coated Steel Spring',
    tags: ['Viral Favorite', 'Under 99', 'Best Seller'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['hair-02', 'hair-03', 'hair-04']
  },
  {
    id: 'hair-02',
    code: 'HAIR-SCRUNCHIE-SILK-3P',
    name: 'Mulberry Silk Satin Cloud Scrunchies (Pack of 3)',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Silk Satin Scrunchies',
    price: 129,
    priceMode: 'set',
    priceLabel: '₹129 (Set of 3)',
    images: [
      '/images/products/butterfly-clips-pearl-headband.jpg',
      '/images/products/korean-pastel-hair-claws.jpg'
    ],
    description: 'Zero friction, anti-breakage mulberry satin scrunchies designed to glide over strands without creasing or tugging delicate hair.',
    details: [
      'Pack includes 3 harmonized pastel shades (Rose, Sage & Champagne)',
      'High-elasticity durable natural rubber core',
      'Gentle on treated, wavy, and delicate hair'
    ],
    colors: [
      { name: 'Champagne, Rose & Sage', hex: '#CBB29E' }
    ],
    material: 'Mulberry Satin & Soft Elastic',
    tags: ['Hair Care', 'Under 199'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['hair-01', 'hair-03', 'hair-04']
  },
  {
    id: 'hair-03',
    code: 'HAIR-BUTTERFLY-VELVET-SUITE',
    name: 'Whimsical Organza Butterfly Hairpins & Pearl Velvet Headband Suite',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Velvet Headbands',
    price: 179,
    originalPrice: 240,
    priceMode: 'set',
    priceLabel: '₹179 (Suite)',
    images: [
      '/images/products/butterfly-clips-pearl-headband.jpg'
    ],
    description: 'Dreamy boutique hair suite featuring double-layered translucent embroidered organza butterfly hairpins, a padded dusty-rose velvet comfort headband with pearl beading, and lustrous satin scrunchies.',
    story: 'Photographed on soft cream linen in natural morning sunlight. Ideal for birthdays, festive occasions, and youthful ethnic ensembles.',
    details: [
      '1 Padded velvet headband with hand-sewn pearl clusters and gold criss-cross embroidery',
      'Pair of 2 3D organza fluttering butterfly alligator hairpins',
      'Flexible headband core that prevents headache pressure behind ears',
      'Suitable for girls, teens, and women'
    ],
    colors: [
      { name: 'Dusty Rose & Pearl Ivory', hex: '#B86F77' }
    ],
    material: 'Plush Velvet, Embroidered Organza & Faux Pearls',
    tags: ['Trending', 'Under 199', 'Boutique Exclusive'],
    isFeatured: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['hair-01', 'hair-02', 'acc-03']
  },
  {
    id: 'hair-04',
    code: 'HAIR-CLIPS-KOREAN-SET',
    name: 'Korean Matte Pastel Snap Hair Pins & Clips (Pack of 6)',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Pastel Barrettes & Clips',
    price: 69,
    priceMode: 'set',
    priceLabel: '₹69 (Set of 6)',
    images: [
      '/images/products/korean-pastel-hair-claws.jpg',
      '/images/products/butterfly-clips-pearl-headband.jpg'
    ],
    description: 'Set of 6 aesthetic matte rubberised snap barrettes in muted Korean cafe shades. Perfect for pinning front fringes and baby hairs.',
    details: [
      '6 muted pastel colors per pack',
      'Non-slip rubberized matte finish',
      'Rust-proof steel snap mechanism'
    ],
    colors: [
      { name: 'Assorted Pastels', hex: '#E0B5B0' }
    ],
    material: 'Coated Spring Steel',
    tags: ['Petite Edit', 'Under 99', 'Best Seller'],
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['hair-01', 'hair-02', 'hair-03']
  },

  // ==========================================
  // 6. ARTISANAL FRAGRANCE (Attars & Scents)
  // ==========================================
  {
    id: 'frag-01',
    code: 'FRAG-GULAB-ATTAR',
    name: 'Artisanal Cut-Crystal Roll-On Pure Botanical Attar (6ml)',
    category: 'fragrance',
    categoryLabel: 'Artisanal Fragrance',
    subcategory: 'Roll-On Pure Attars',
    price: 149,
    priceMode: 'fixed',
    priceLabel: '₹149 (6ml)',
    images: [
      '/images/products/artisanal-pocket-perfumes-attar.jpg'
    ],
    description: '100% alcohol-free traditional concentrated perfume oil in cut-crystal glass flacons with gold filigree domed caps. Long-lasting scent projection up to 12 hours.',
    story: 'Direct from our fragrance shelf. Pure concentrated botanical extracts of Rose de Damas and Sweet Khaleej, aged over sandalwood essential oils.',
    details: [
      '6ml traditional faceted crystal vial with embossed gold filigree cap',
      '100% alcohol-free, skin-nourishing concentrated fragrance oil',
      'Available in: Rose de Damas, Sandalwood Khus, and Sweet Heart'
    ],
    material: 'Pure Concentrated Perfume Oil',
    tags: ['Alcohol Free', 'Long Lasting', 'Under 199'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['frag-02', 'frag-03', 'lakh-01']
  },
  {
    id: 'frag-02',
    code: 'FRAG-POCKET-EDP-SERIES',
    name: 'Whisky Smoke & Sandalwood Essence Pocket Eau De Parfum (20ml)',
    category: 'fragrance',
    categoryLabel: 'Artisanal Fragrance',
    subcategory: 'Pocket Eau De Parfum',
    price: 199,
    priceMode: 'fixed',
    priceLabel: '₹199 (20ml)',
    images: [
      '/images/products/artisanal-pocket-perfumes-attar.jpg'
    ],
    description: 'Travel-friendly luxury pocket spray perfumes with gold atomizers in frosted glass and matte black finishes. Featuring popular notes of Whisky Smoke, Jade, and Sandalwood Essence.',
    details: [
      '20ml slim pocket glass spray with gold fine-mist pump',
      'Over 250+ sprays per bottle',
      'High oil concentration (EDP) with 8+ hours longevity'
    ],
    material: 'Eau De Parfum (20% Concentration)',
    tags: ['Pocket Perfume', 'Under 199', 'Travel Ready'],
    isNew: true,
    isFeatured: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['frag-01', 'frag-03', 'gifts-01']
  },
  {
    id: 'frag-03',
    code: 'FRAG-CHANDAN-PURE',
    name: 'Pure Mysore Sandalwood & Amber Royal Attar (6ml)',
    category: 'fragrance',
    categoryLabel: 'Artisanal Fragrance',
    subcategory: 'Roll-On Pure Attars',
    price: 199,
    priceMode: 'fixed',
    priceLabel: '₹199 (6ml)',
    images: [
      '/images/products/artisanal-pocket-perfumes-attar.jpg'
    ],
    description: 'Sacred creamy sandalwood distilled over slow fire, revered for calming the senses during festive celebrations and evening gatherings.',
    details: [
      '6ml faceted crystal applicator bottle with gold cap',
      'Warm woody profile that deepens with body heat',
      '100% alcohol-free and skin safe'
    ],
    material: 'Pure Sandalwood Essential Oil Base',
    tags: ['Sacred Heritage', 'Under 199'],
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['frag-01', 'frag-02', 'lakh-01']
  },

  // ==========================================
  // 7. GIFTS & HAMPERS
  // ==========================================
  {
    id: 'gifts-01',
    code: 'GIFT-FESTIVE-RADIANCE',
    name: 'The Festive Radiance Curated Keepsake Box',
    category: 'gifts',
    categoryLabel: 'Gifts & Hampers',
    subcategory: 'Festive Celebration Boxes',
    price: 499,
    originalPrice: 650,
    priceMode: 'box',
    priceLabel: '₹499 (Box)',
    images: [
      '/images/products/jaipuri-rani-pink-lakh-kadas.jpg',
      '/images/products/artisanal-pocket-perfumes-attar.jpg',
      '/images/products/butterfly-clips-pearl-headband.jpg'
    ],
    description: 'An elegant gift set including 1 Pair of Jaipur Lakh kadas, 1 Pure Botanical Roll-On Attar (6ml), and 1 Mulberry Silk scrunchie.',
    details: [
      'Gold foil embossed textured gift box with satin ribbon',
      'Includes complimentary handwritten blessing calligraphy note',
      'Ideal for: Diwali, Rakhi, Karwa Chauth, or Wedding Guest Gifts'
    ],
    material: 'Curated Artisan Assortment',
    tags: ['Best Seller', 'Festive Ready', 'Gift Suite'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['gifts-02', 'gifts-03', 'lakh-01']
  },
  {
    id: 'gifts-02',
    code: 'GIFT-PASTEL-BIRTHDAY',
    name: 'Sweet Sixteen Pastel Hair & Accessories Surprise Kit',
    category: 'gifts',
    categoryLabel: 'Gifts & Hampers',
    subcategory: 'Pastel Birthday Kits',
    price: 299,
    priceMode: 'box',
    priceLabel: '₹299 (Box)',
    images: [
      '/images/products/korean-pastel-hair-claws.jpg',
      '/images/products/butterfly-clips-pearl-headband.jpg',
      '/images/products/crystal-pearl-saree-pins.jpg'
    ],
    description: 'A charming aesthetic gift box featuring 2 French acetate claws, 1 set of embroidered butterfly pins, and 3 Korean snap clips in a soft pink gift box.',
    details: [
      'Pastel aesthetics curated for young girls & birthdays',
      'Ready-to-gift box with shredded paper and bow',
      'Custom color selections available via WhatsApp'
    ],
    material: 'Korean Accessories & Keepsake Items',
    tags: ['Birthday Pick', 'Under 299'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['gifts-01', 'hair-01', 'hair-04']
  },
  {
    id: 'gifts-03',
    code: 'GIFT-BRIDAL-FAVOR-SUITE',
    name: 'Bespoke Mehendi & Sangeet Return Favor Box',
    category: 'gifts',
    categoryLabel: 'Gifts & Hampers',
    subcategory: 'Bridal Return Favors',
    priceMode: 'price_on_request',
    priceLabel: 'Price on Request (Bulk Orders)',
    images: [
      '/images/products/bridal-kundan-lakh-chooda.jpg',
      '/images/products/crystal-pearl-saree-pins.jpg',
      '/images/products/artisanal-pocket-perfumes-attar.jpg'
    ],
    description: 'Customized favors for wedding guests featuring traditional Lakh bangles, pocket floral attars, and personalized bride & groom tags.',
    details: [
      'Custom color coordination with wedding theme',
      'Bulk wholesale rates starting from 25+ boxes',
      'Complimentary custom printed monogram cards'
    ],
    material: 'Bespoke Curated Packaging',
    tags: ['Wedding Favors', 'Wholesale Option'],
    availability: 'made_to_order',
    stockStatus: 'made_to_order',
    whatsappMessage: 'Hi! I would like to inquire about customized Mehendi/Sangeet return favor gift boxes for an upcoming wedding.',
    relatedProducts: ['gifts-01', 'lakh-01', 'frag-01']
  }
];
