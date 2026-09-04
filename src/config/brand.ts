/**
 * OFFICIAL BRAND CONFIGURATION — PRIYADARSHANI
 * ============================================
 * Single source of truth for all business details, store address,
 * contact numbers, Google Maps navigation, social channels, and SEO.
 */

export interface BrandConfig {
  // 1. Core Brand Identity
  brandName: string;
  businessName: string;
  tagline: string;
  brandSubtext: string;
  websiteUrl: string;

  // 2. Direct Contact & Communication Channels
  contact: {
    whatsappNumber: string;       // International format without '+' or spaces: "919403478600"
    whatsappDisplay: string;      // User-facing formatted number: "+91 94034 78600"
    primaryPhone: string;         // Calling number: "+919403478600"
    primaryPhoneDisplay: string;  // "+91 94034 78600"
    secondaryPhone: string;       // Calling number: "+919325299923"
    secondaryPhoneDisplay: string;// "+91 93252 99923"
    phoneNumber: string;          // Backward-compatible alias to primaryPhone
    phoneDisplay: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    googleReviewUrl?: string;
  };

  // 3. Physical Boutique Store Location in Jalgaon
  store: {
    name: string;
    shopNumber: string;
    buildingName: string;
    area: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
    latitude: number;
    longitude: number;
    googleMapsUrl: string;
    googleMapsEmbedQuery: string;
    timings: string;
    openDays: string;
    priceRange: string;
  };

  // 4. Authentic Brand Story & Heritage
  story: {
    kicker: string;
    heading: string;
    quote: string;
    paragraphs: string[];
    pillars: {
      title: string;
      desc: string;
    }[];
  };

  // 5. Offline-to-Online QR Campaign Targets
  qrCampaign: {
    counterTentUrl: string;
    shoppingBagUrl: string;
    businessCardUrl: string;
  };

  // 6. Top Announcement Ribbon
  announcement: {
    enabled: boolean;
    badge: string;
    text: string;
    linkText?: string;
    linkHref?: string;
  };

  // 7. Local SEO & Meta Tags
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export const BRAND_CONFIG: BrandConfig = {
  // 1. Core Brand Identity
  brandName: "Priyadarshani",
  businessName: "Priyadarshani Bangles & Fancy Collections",
  tagline: "Adornment, Beauty & Everyday Elegance.",
  brandSubtext: "Curating traditional & fancy bangles, fashion accessories, beauty essentials, fine fragrances and celebratory gifts in Jalgaon.",
  websiteUrl: "https://priyadarshani-boutique.com",

  // 2. Direct Contact Channels
  contact: {
    whatsappNumber: "919403478600",
    whatsappDisplay: "+91 94034 78600",
    primaryPhone: "+919403478600",
    primaryPhoneDisplay: "+91 94034 78600",
    secondaryPhone: "+919325299923",
    secondaryPhoneDisplay: "+91 93252 99923",
    phoneNumber: "+919403478600",
    phoneDisplay: "+91 94034 78600",
    email: "contact@priyadarshani.com",
    instagramHandle: "@the_bangle_edit_store",
    instagramUrl: "https://www.instagram.com/the_bangle_edit_store/",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=21.0118,75.57",
  },

  // 3. Physical Boutique Store Location
  store: {
    name: "Priyadarshani Bangles & Fancy Collections",
    shopNumber: "Shop No. 3",
    buildingName: "Om Tulsi Plaza",
    area: "Bhawani Peth",
    addressLine1: "Shop No. 3, Om Tulsi Plaza, Bhawani Peth",
    addressLine2: "Near R.C. Bafna New Showroom",
    city: "Jalgaon",
    state: "Maharashtra",
    pincode: "425001",
    country: "India",
    landmark: "Near R.C. Bafna New Showroom",
    latitude: 21.0118,
    longitude: 75.57,
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=21.0118,75.57",
    googleMapsEmbedQuery: "Om Tulsi Plaza, Bhawani Peth, Jalgaon",
    timings: "9:00 AM – 8:00 PM",
    openDays: "Every Day",
    priceRange: "₹₹ (Accessible Luxury: ₹49 - ₹899)",
  },

  // 4. Authentic Brand Story
  story: {
    kicker: "The Priyadarshani Journey",
    heading: "From Timeless Bangles to Modern Lifestyle Adornment",
    quote: "What began with a love for beautiful bangles has grown into a carefully curated destination for women's fashion, beauty and everyday accessories in Jalgaon.",
    paragraphs: [
      "Our story started with the rich artistry of handcrafted Lakh, fancy, and bridal bangles — celebrating the shimmer, vibrant colours, and auspicious grace of Indian womanhood.",
      "Over time, listening to our customers across Jalgaon, we thoughtfully expanded into everyday fashion accessories: French acetate hair claws, mulberry silk scrunchies, salon gel nail paints, daily face care, fine fragrances, and celebratory gifting edits.",
      "Located at Om Tulsi Plaza in Bhawani Peth, our boutique is a welcoming space where heritage Indian jewellery seamlessly blends with contemporary taste — always backed by warm personal assistance and fair pricing."
    ],
    pillars: [
      {
        title: "Heritage Craftsmanship",
        desc: "Jaipur Lakh kadas, bridal choodas, and traditional velvet chooris."
      },
      {
        title: "Weekly Fresh Curation",
        desc: "New Korean hair claws, trending studs, and beauty essentials every 7 days."
      },
      {
        title: "Affordable Elegance",
        desc: "Thoughtful quality from ₹49 everyday items to elevated bridal suites."
      },
      {
        title: "Personal In-Store Care",
        desc: "Complimentary wrist sizing on brass mandrels and live WhatsApp guidance."
      }
    ]
  },

  // 5. QR Code Campaign Targets
  qrCampaign: {
    counterTentUrl: "https://priyadarshani-boutique.com/?ref=qr_counter",
    shoppingBagUrl: "https://priyadarshani-boutique.com/?ref=qr_bag",
    businessCardUrl: "https://priyadarshani-boutique.com/?ref=qr_card",
  },

  // 6. Top Announcement Ribbon
  announcement: {
    enabled: true,
    badge: "VISIT OUR STORE",
    text: "Visit our boutique at Bhawani Peth, Jalgaon to explore 1,000+ bangles, accessories, beauty & fragrances.",
    linkText: "Get Directions",
    linkHref: "#visit-store"
  },

  // 7. Local SEO & Meta Tags
  seo: {
    title: "Priyadarshani | Bangles, Fashion Accessories & Beauty in Jalgaon",
    description: "Discover handcrafted Lakh bangles, bridal choodas, Korean hair accessories, skincare essentials, fine fragrances and gift items at Priyadarshani in Bhawani Peth, Jalgaon. Visit our boutique or enquire on WhatsApp.",
    keywords: [
      "Priyadarshani Jalgaon",
      "Priyadarshani Bangles & Fancy Collections",
      "bangles shop in jalgaon",
      "lakh bangles jalgaon",
      "fancy bangles jalgaon",
      "bridal chooda jalgaon",
      "bhawani peth jalgaon bangles",
      "om tulsi plaza jalgaon",
      "hair accessories jalgaon",
      "ladies beauty products jalgaon",
      "perfumes and fragrance jalgaon",
      "women gifts and hampers jalgaon"
    ],
    ogImage: "/images/products/jaipuri-rani-pink-lakh-kadas.jpg"
  }
};
