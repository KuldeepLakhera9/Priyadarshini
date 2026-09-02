/**
 * BRAND CONFIGURATION & CENTRAL SETTINGS
 * =====================================
 * This file is the SINGLE SOURCE OF TRUTH for all business details, contact information,
 * WhatsApp conversion channels, physical store location, Google Maps, social handles,
 * and Local SEO metadata.
 * 
 * Edit the values below to update the entire website instantly without touching UI code.
 */

export interface BrandConfig {
  brandName: string;
  brandTagline: string;
  brandSubtext: string;
  establishedYear: string;
  websiteUrl: string; // Primary domain for QR code generation and canonical SEO
  
  contact: {
    whatsappNumber: string;       // International format without '+' or spaces (e.g. 919876543210)
    whatsappDisplay: string;      // User-facing formatted number (e.g. +91 98765 43210)
    phoneNumber: string;          // Direct dial phone number (e.g. +919876543210)
    phoneDisplay: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    facebookUrl?: string;
    googleReviewUrl?: string;     // Direct Google Business Profile review link (when available)
  };

  store: {
    name: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
    googleMapsUrl: string;        // Real Google Maps navigation link
    googleMapsEmbedQuery: string; // Safe search query for map display
    timings: string;
    openDays: string;
    priceRange: string;
  };

  qrCampaign: {
    counterTentUrl: string;       // Counter display QR target
    shoppingBagUrl: string;       // Shopping bag printed QR target
    businessCardUrl: string;      // Visiting card QR target
  };

  businessPillars: {
    heritage: string;
    variety: string;
    curation: string;
    wholesale: string;
  };

  announcement: {
    enabled: boolean;
    badge: string;
    text: string;
    linkText?: string;
    linkHref?: string;
  };

  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export const BRAND_CONFIG: BrandConfig = {
  // Brand Identity (Update with your registered business name)
  brandName: "[BRAND NAME]",
  brandTagline: "Bangles • Fashion Accessories • Beauty Essentials",
  brandSubtext: "Curating authentic Jaipur Lakh artistry, bridal choodas, Korean hair accents, and pure botanical beauty for the modern woman.",
  establishedYear: "2008",
  websiteUrl: "https://priyadarshini-boutique.com",

  // Direct Contact Channels (Update with real store phone & WhatsApp numbers)
  contact: {
    whatsappNumber: "919876543210", // [PLACEHOLDER] Replace with real store WhatsApp: 91XXXXXXXXXX
    whatsappDisplay: "+91 98765 43210",
    phoneNumber: "+919876543210",   // [PLACEHOLDER] Replace with real store calling number
    phoneDisplay: "+91 98765 43210",
    email: "contact@brandname.com",
    instagramHandle: "@brandname_official", // [PLACEHOLDER] Replace with real boutique Instagram handle
    instagramUrl: "https://instagram.com",
    googleReviewUrl: "https://search.google.com/local/writereview?placeid=REPLACE_WITH_GOOGLE_PLACE_ID",
  },

  // Physical Boutique Store Location (Update with father's actual store address)
  store: {
    name: "[BRAND NAME] Boutique & Bangles Studio",
    addressLine1: "Shop No. 14, Ground Floor, Central Market Complex",
    addressLine2: "Main Commercial High Street, Near Gandhi Chowk",
    city: "City Centre",
    state: "Rajasthan",
    pincode: "302001",
    country: "India",
    landmark: "Opposite Rajwada Square",
    googleMapsUrl: "https://maps.google.com/?q=Central+Market+Complex", // [PLACEHOLDER] Replace with exact Google Maps pin
    googleMapsEmbedQuery: "Central Market Complex, Main High Street",
    timings: "10:30 AM – 9:30 PM",
    openDays: "Open All 7 Days",
    priceRange: "₹₹ (Accessible Luxury: ₹49 - ₹899)",
  },

  // QR Code Offline-to-Online Campaign Targets
  qrCampaign: {
    counterTentUrl: "https://priyadarshini-boutique.com/?ref=qr_counter",
    shoppingBagUrl: "https://priyadarshini-boutique.com/?ref=qr_bag",
    businessCardUrl: "https://priyadarshini-boutique.com/?ref=qr_card",
  },

  // Core Value Propositions
  businessPillars: {
    heritage: "Heritage Jaipur Lakh & Handcrafted Auspicious Bangles",
    variety: "1,000+ Curated Bangles, Hair Accents & Beauty Must-Haves",
    curation: "Fresh Arrivals & Trending Korean Designs Every Week",
    wholesale: "Bespoke Bulk Supply & Sangeet Return Favors",
  },

  // Announcement Ribbon
  announcement: {
    enabled: true,
    badge: "VISIT BOUTIQUE",
    text: "Visit our physical store to experience 1,000+ handcrafted bangles, Korean accessories & floral attars.",
    linkText: "Get Directions",
    linkHref: "#visit-store"
  },

  // Comprehensive Local SEO & OpenGraph Metadata
  seo: {
    title: "[BRAND NAME] | Handcrafted Jaipur Lakh Bangles, Fashion Accessories & Beauty Boutique",
    description: "Discover handcrafted Jaipur Lakh bangles, bridal choodas, Parisian acetate hair claws, and pure botanical beauty rituals. Visit our offline boutique or enquire instantly on WhatsApp.",
    keywords: [
      "lakh bangles",
      "jaipur lakh kadas",
      "bridal chooda set",
      "bangles shop near me",
      "traditional bangles",
      "hair accessories",
      "acetate hair claws",
      "mulberry silk scrunchies",
      "kannauj rosewater mist",
      "ladies accessories boutique",
      "wedding return gifts",
      "women beauty essentials"
    ],
    ogImage: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop"
  }
};
