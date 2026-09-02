/**
 * BRAND CONFIGURATION & CENTRAL SETTINGS
 * =====================================
 * This file is the single source of truth for all brand identity, contact information,
 * WhatsApp conversion numbers, store location, social channels, and SEO metadata.
 * 
 * Simply edit the values below to update the entire website instantly.
 */

export interface BrandConfig {
  brandName: string;
  brandTagline: string;
  brandSubtext: string;
  establishedYear: string;
  
  contact: {
    whatsappNumber: string;       // International format without '+' or spaces for wa.me links
    whatsappDisplay: string;      // User-facing formatted number
    phoneNumber: string;          // Calling number
    phoneDisplay: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    facebookUrl?: string;
  };

  store: {
    name: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl?: string;
    timings: string;
    openDays: string;
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
  // Brand Identity (Update with official business name whenever ready)
  brandName: "[BRAND NAME]",
  brandTagline: "Bangles • Fashion Accessories • Beauty Essentials",
  brandSubtext: "Curating timeless Jaipur Lakh craftsmanship, modern fashion accessories, and everyday beauty for the contemporary woman.",
  establishedYear: "2008",

  // Direct Communication Channels
  contact: {
    whatsappNumber: "919876543210", // e.g. 91XXXXXXXXXX
    whatsappDisplay: "+91 98765 43210",
    phoneNumber: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    email: "contact@brandname.com",
    instagramHandle: "@brandname_official",
    instagramUrl: "https://instagram.com",
  },

  // Physical Boutique / Store Location
  store: {
    name: "[BRAND NAME] Boutique & Bangles Studio",
    addressLine1: "Shop No. 14, Ground Floor, Central Market Complex",
    addressLine2: "Main Commercial High Street, Near Gandhi Chowk",
    city: "City Centre",
    state: "Rajasthan / India",
    pincode: "302001",
    landmark: "Opposite Rajwada Square",
    googleMapsUrl: "https://maps.google.com/?q=Central+Market+Complex",
    timings: "10:30 AM – 9:30 PM",
    openDays: "Open All 7 Days",
  },

  // Core Value Propositions
  businessPillars: {
    heritage: "Heritage Jaipur Lakh & Artisan Handcrafted Bangles",
    variety: "1,000+ Curated Bangles, Hair Accents & Beauty Must-Haves",
    curation: "Fresh Arrivals & Trending Designs Every Single Week",
    wholesale: "Direct Boutique Wholesale & Bulk Festive Gifting Options",
  },

  // Top Announcement Bar
  announcement: {
    enabled: true,
    badge: "✨ NEW ARRIVALS",
    text: "Explore Our Handcrafted Lakh & Bridal Chooda Sets in Store & on WhatsApp",
    linkText: "Enquire Now",
    linkHref: "#whatsapp-enquiry",
  },

  // Local & Digital SEO
  seo: {
    title: "[BRAND NAME] | Luxury Bangles, Fashion Accessories & Beauty Essentials",
    description: "Discover handcrafted Lakh bangles, bridal chooda sets, high-fashion hair accessories, artisanal perfumes, and daily beauty essentials. Visit our offline boutique or enquire on WhatsApp.",
    keywords: [
      "lakh bangles",
      "traditional bridal bangles",
      "fancy stone bangles",
      "women fashion accessories",
      "korean hair clips",
      "satin scrunchies",
      "artisanal perfumes",
      "skincare beauty products",
      "festive return gifts",
      "offline bangle boutique"
    ],
    ogImage: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop",
  }
};
