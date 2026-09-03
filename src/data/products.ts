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
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop'
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
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop'
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
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop'
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
    code: 'EARRING-KUNDAN-CHAND',
    name: 'Kundan Pearl Meenakari Festive Chandbalis',
    category: 'fashion-accessories',
    categoryLabel: 'Fashion Accessories',
    subcategory: 'Festive Jhumkas',
    price: 249,
    originalPrice: 350,
    priceMode: 'fixed',
    priceLabel: '₹249',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Crescent moon silhouette adorned with teardrop pearls and uncut Kundan glass stones. Featherlight on earlobes.',
    details: [
      'Comfortable lightweight brass construction',
      'Hypoallergenic ear-posts with rubber push backs',
      'Length: 6.5 cm'
    ],
    colors: [
      { name: 'Pearl White & Gold', hex: '#F0E6D2' },
      { name: 'Ruby Pink & Gold', hex: '#C2185B' }
    ],
    material: 'Brass, Kundan Glass & Faux Pearls',
    tags: ['Best Seller', 'Wedding Guest', 'Under 299'],
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['acc-02', 'fancy-01', 'lakh-01']
  },
  {
    id: 'acc-02',
    code: 'EARRING-OXIDISED-JHUMKA',
    name: 'Tribal German Silver Oxidised Bell Jhumkas',
    category: 'fashion-accessories',
    categoryLabel: 'Fashion Accessories',
    subcategory: 'Oxidised Silver',
    price: 149,
    priceMode: 'fixed',
    priceLabel: '₹149',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Vintage-washed oxidised silver alloy jhumkas with delicate tinkling ghungroo drops, perfect for kurti and fusion outfits.',
    details: [
      'German silver alloy with antique patina',
      'Zero lead & zero nickel',
      'Weight: 22g pair'
    ],
    colors: [
      { name: 'Antique Silver', hex: '#9E9E9E' }
    ],
    material: 'German Silver Alloy',
    tags: ['College Style', 'Under 199'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['acc-01', 'hair-01', 'hair-02']
  },
  {
    id: 'acc-03',
    code: 'RING-KUNDAN-ADJUSTABLE',
    name: 'Bespoke Kundan Mirror Adjustable Statement Ring',
    category: 'fashion-accessories',
    categoryLabel: 'Fashion Accessories',
    subcategory: 'Statement Rings',
    price: 99,
    priceMode: 'fixed',
    priceLabel: '₹99',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Cocktail ring featuring a circular sunburst Kundan polki setting with an adjustable back band fitting all finger sizes.',
    details: [
      'Universal adjustable band',
      'High-gloss antique gold finish',
      'Diameter: 3.2 cm'
    ],
    colors: [
      { name: 'Gold & Clear', hex: '#E8D3A2' }
    ],
    sizes: ['Free Size (Adjustable)'],
    material: 'Brass & Polki Glass',
    tags: ['Petite Edit', 'Under 99'],
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['acc-01', 'lakh-02', 'hair-03']
  },

  // ==========================================
  // 5. HAIR ACCESSORIES (Claws, Scrunchies, Bands)
  // ==========================================
  {
    id: 'hair-01',
    code: 'HAIR-CLAW-ACETATE-L',
    name: 'French Cellulose Acetate Marbled Jumbo Hair Claw',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Acetate Hair Claws',
    price: 149,
    priceMode: 'fixed',
    priceLabel: '₹149',
    images: [
      'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Eco-friendly biodegradable cellulose acetate hair claw with high-tension rust-proof spring. Strong all-day hold for thick or curly hair.',
    details: [
      '10.5 cm wide jumbo silhouette',
      'Smooth hand-polished teeth prevents hair breakage',
      'Heavy-duty non-slip spring mechanism'
    ],
    colors: [
      { name: 'Tortoiseshell Amber', hex: '#633B19' },
      { name: 'Smoky Olive', hex: '#556B2F' },
      { name: 'Pearl Ivory', hex: '#FDFBF7' },
      { name: 'Blush Marble', hex: '#D8A096' }
    ],
    material: 'Biodegradable Cellulose Acetate',
    tags: ['Viral Favorite', 'Under 199', 'Best Seller'],
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
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Zero friction, anti-breakage mulberry satin scrunchies designed to glide over strands without creasing or tugging delicate hair.',
    details: [
      'Pack includes 3 harmonized pastel shades',
      'High-elasticity durable natural rubber core',
      'Gentle on treated, wavy, and delicate hair'
    ],
    colors: [
      { name: 'Champagne, Rose & Mocha', hex: '#CBB29E' }
    ],
    material: 'Mulberry Satin & Soft Elastic',
    tags: ['Hair Care', 'Under 199'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['hair-01', 'hair-03', 'beauty-01']
  },
  {
    id: 'hair-03',
    code: 'HAIR-HEADBAND-VELVET-PEARL',
    name: 'Vintage Padded Velvet Headband with Hand-Set Pearls',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Velvet Headbands',
    price: 199,
    priceMode: 'fixed',
    priceLabel: '₹199',
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Plush velvet padded band adorned with assorted ivory simulated pearls. Flexible comfort structure that never presses behind the ears.',
    details: [
      'Ergonomic flex band with zero headache pressure',
      'Hand-stitched faux pearls on rich velvet',
      'Width: 3.5 cm'
    ],
    colors: [
      { name: 'Midnight Onyx', hex: '#1C1C1C' },
      { name: 'Wine Velvet', hex: '#58111A' },
      { name: 'Warm Taupe', hex: '#8B7D6B' }
    ],
    material: 'Italian Velvet & Simulated Pearls',
    tags: ['Trending', 'Under 199'],
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['hair-01', 'hair-02', 'acc-01']
  },
  {
    id: 'hair-04',
    code: 'HAIR-CLIPS-KOREAN-SET',
    name: 'Korean Matte Pastel Snap Hair Pins (Pack of 6)',
    category: 'hair-accessories',
    categoryLabel: 'Hair Accessories',
    subcategory: 'Pastel Barrettes & Clips',
    price: 79,
    priceMode: 'set',
    priceLabel: '₹79 (Set of 6)',
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop'
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
    relatedProducts: ['hair-01', 'hair-02', 'beauty-03']
  },

  // ==========================================
  // 6. BEAUTY & SKINCARE
  // ==========================================
  {
    id: 'beauty-01',
    code: 'BEAUTY-ROSEWATER-MIST',
    name: 'Pure Steam-Distilled Kannauj Desi Gulab Facial Mist',
    category: 'beauty',
    categoryLabel: 'Beauty & Skincare',
    subcategory: 'Floral Toners & Mists',
    price: 169,
    originalPrice: 220,
    priceMode: 'fixed',
    priceLabel: '₹169 (100ml)',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop'
    ],
    description: '100% pure steam distillation of Indian Damask roses sourced directly from Kannauj. Alcohol-free hydrating skin refresher.',
    details: [
      '100ml spray bottle with fine-mist nozzle',
      'No artificial fragrance, no alcohol, no parabens',
      'Balances skin pH and tightens enlarged pores'
    ],
    material: 'Pure Rosa Damascena Hydrosol',
    tags: ['Pure Glow', 'Under 199', 'Best Seller'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['beauty-02', 'beauty-04', 'frag-01']
  },
  {
    id: 'beauty-02',
    code: 'BEAUTY-FACEWASH-SAFFRON',
    name: 'Kashmiri Saffron & Sandalwood Clarifying Face Cleanser',
    category: 'beauty',
    categoryLabel: 'Beauty & Skincare',
    subcategory: 'Facial Cleansers & Washes',
    price: 189,
    priceMode: 'fixed',
    priceLabel: '₹189 (100ml)',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Non-drying gel face wash infused with real Kashmiri Kesar filaments and pure chandan extract for radiant, clean skin.',
    details: [
      '100ml pump bottle',
      'Gentle sulfate-free lather suitable for all skin types',
      'Reduces tan and restores natural skin radiance'
    ],
    material: 'Saffron & Sandalwood Botanical Extract',
    tags: ['Daily Cleanser', 'Under 199'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['beauty-01', 'beauty-04', 'gifts-01']
  },
  {
    id: 'beauty-03',
    code: 'BEAUTY-NAIL-GEL-SET',
    name: 'Salon High-Shine Chip-Resistant Gel Nail Paint',
    category: 'beauty',
    categoryLabel: 'Beauty & Skincare',
    subcategory: 'Gel Nail Lacquers',
    price: 89,
    priceMode: 'fixed',
    priceLabel: '₹89',
    images: [
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
    ],
    description: '7-Free, toxic-free quick-drying formula delivering salon-like plump gel gloss that stays chip-free for up to 7 days.',
    details: [
      '12ml wide-fan flat bristle brush for single-stroke coating',
      'Dries in under 60 seconds without UV lamp',
      'Over 20+ shades available in store'
    ],
    colors: [
      { name: 'Deep Cherry Wine', hex: '#630D16' },
      { name: 'Nude Almond', hex: '#C29B7F' },
      { name: 'French Ballerina Pink', hex: '#E8A5A5' },
      { name: 'Glazed Pearl Chrome', hex: '#EBE5DF' }
    ],
    material: '7-Free Toxic Free Formulation',
    tags: ['Petite Edit', 'Under 99', 'Fast Drying'],
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['beauty-01', 'hair-04', 'acc-03']
  },
  {
    id: 'beauty-04',
    code: 'BEAUTY-KUMKUMADI-ELIXIR',
    name: 'Ayurvedic Kumkumadi Miraculous Night Face Oil',
    category: 'beauty',
    categoryLabel: 'Beauty & Skincare',
    subcategory: 'Facial Oils & Lip Care',
    price: 299,
    originalPrice: 399,
    priceMode: 'fixed',
    priceLabel: '₹299 (15ml)',
    images: [
      'https://images.unsplash.com/photo-1608248597359-002d99d34e9e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Traditional 26-herb Ayurvedic formulation with saffron, lotus stamens, and goat milk for nocturnal cellular rejuvenation.',
    details: [
      '15ml amber glass dropper bottle',
      'Pure saffron & sandalwood scent',
      'Apply 2-3 drops nightly on clean skin'
    ],
    material: 'Ayurvedic Herbal Infusion',
    tags: ['Ayurvedic Glow', 'Under 299'],
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['beauty-01', 'beauty-02', 'frag-02']
  },

  // ==========================================
  // 7. ARTISANAL FRAGRANCE (Attars & Scents)
  // ==========================================
  {
    id: 'frag-01',
    code: 'FRAG-GULAB-ATTAR',
    name: 'Gulab Khas Pure Concentrated Roll-On Attar (6ml)',
    category: 'fragrance',
    categoryLabel: 'Artisanal Fragrance',
    subcategory: 'Roll-On Pure Attars',
    price: 199,
    priceMode: 'fixed',
    priceLabel: '₹199 (6ml)',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop'
    ],
    description: '100% alcohol-free traditional roll-on perfume oil extracted from Kannauj desi roses. Long-lasting scent projection up to 12 hours.',
    details: [
      '6ml crystal roll-on vial with gold cap',
      'Zero alcohol, zero synthetic preservatives',
      'Notes: Crisp fresh rose, gentle morning dewdrops, warm amber drydown'
    ],
    material: 'Pure Essential Oils in Sandalwood Base',
    tags: ['Alcohol Free', 'Long Lasting', 'Under 199'],
    isFeatured: true,
    isBestSeller: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['frag-02', 'frag-03', 'beauty-01']
  },
  {
    id: 'frag-02',
    code: 'FRAG-WHITE-OUD-EDP',
    name: 'Royal White Oud & Jasmine Pocket Eau De Parfum (20ml)',
    category: 'fragrance',
    categoryLabel: 'Artisanal Fragrance',
    subcategory: 'Pocket Eau De Parfum',
    price: 249,
    priceMode: 'fixed',
    priceLabel: '₹249 (20ml)',
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Travel-friendly luxury spray opening with fresh Indian jasmine blossoms over a rich, velvety white oud and cashmere wood trail.',
    details: [
      '20ml slim pocket glass spray',
      'Over 250+ sprays per bottle',
      'Top Notes: Jasmine Sambac; Heart: Saffron; Base: White Oud'
    ],
    material: 'Eau De Parfum (20% Concentration)',
    tags: ['Luxury Scent', 'Under 299'],
    isNew: true,
    availability: 'in_stock',
    stockStatus: 'in_stock',
    relatedProducts: ['frag-01', 'frag-03', 'gifts-01']
  },
  {
    id: 'frag-03',
    code: 'FRAG-CHANDAN-PURE',
    name: 'Mysore Sandalwood Pure Heritage Attar (6ml)',
    category: 'fragrance',
    categoryLabel: 'Artisanal Fragrance',
    subcategory: 'Roll-On Pure Attars',
    price: 299,
    priceMode: 'fixed',
    priceLabel: '₹299 (6ml)',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Earthy, sacred sandalwood distilled over slow fire, revered for calming the senses during meditative rituals and celebratory evenings.',
    details: [
      '6ml crystal applicator vial',
      'Warm woody profile that deepens with body heat',
      '100% alcohol-free skin safe'
    ],
    material: 'Pure Sandalwood Oil Base',
    tags: ['Sacred Heritage', 'Under 299'],
    availability: 'limited',
    stockStatus: 'limited',
    relatedProducts: ['frag-01', 'frag-02', 'lakh-01']
  },

  // ==========================================
  // 8. GIFTS & HAMPERS
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
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'An elegant gift set including 1 Pair of Jaipur Lakh kadas, 1 Kannauj Rosewater Mist (50ml), and 1 Mulberry Silk scrunchie.',
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
    name: 'Sweet Sixteen Pastel Hair & Gloss Surprise Kit',
    category: 'gifts',
    categoryLabel: 'Gifts & Hampers',
    subcategory: 'Pastel Birthday Kits',
    price: 299,
    priceMode: 'box',
    priceLabel: '₹299 (Box)',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A charming aesthetic gift box featuring 2 French acetate claws, 2 pastel nail lacquers, and 3 Korean snap clips in a soft pink gift box.',
    details: [
      'Pastel aesthetics curated for young girls & birthdays',
      'Ready-to-gift box with shredded paper and bow',
      'Custom color selections available via WhatsApp'
    ],
    material: 'Korean Accessories & Cosmetics',
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
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop'
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
