/**
 * REAL BUSINESS IDENTITY & CENTRAL CONTENT CONFIGURATION
 * =====================================================
 * This file is the single source of truth for the brand.
 * 
 * Edit the fields below to update the entire website instantly.
 * Any field with a bracket like [REAL BRAND NAME] is ready for your real business data.
 */

export interface BrandConfig {
  // 1. Core Brand Identity
  brandName: string;            // Primary customer-facing brand name
  businessName: string;         // Legal or registered store name (if different)
  tagline: string;              // Tasteful brand tagline
  brandSubtext: string;         // Concise brand positioning
  establishedYear: string;
  websiteUrl: string;           // Primary live domain

  // 2. Direct Contact & Communication Channels
  contact: {
    whatsappNumber: string;     // International format: e.g. "919876543210" (no spaces or '+' sign)
    whatsappDisplay: string;    // Formatted for customers: e.g. "+91 98765 43210"
    phoneNumber: string;        // Direct calling number
    phoneDisplay: string;       // Formatted calling display
    email: string;
    instagramHandle: string;    // e.g. "@brandname_official"
    instagramUrl: string;       // Full Instagram profile URL
    googleReviewUrl?: string;   // Google Business Profile direct review URL
  };

  // 3. Physical Boutique Store Location
  store: {
    name: string;
    addressLine1: string;       // Shop / building number and street
    addressLine2: string;       // Area, market, or road
    city: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
    googleMapsUrl: string;      // Google Maps directions URL
    googleMapsEmbedQuery: string;
    timings: string;            // Opening hours: e.g. "10:30 AM – 9:30 PM"
    openDays: string;           // Working days: e.g. "Open All 7 Days"
    priceRange: string;         // Accessible luxury indicator
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
  brandName: "[REAL BRAND NAME]",
  businessName: "[REAL BUSINESS NAME]",
  tagline: "Everyday Elegance, Beautifully Curated.",
  brandSubtext: "Handcrafted bangles, daily hair accessories, botanical beauty rituals and celebratory gifts.",
  establishedYear: "2008",
  websiteUrl: "https://priyadarshini-boutique.com",

  // 2. Direct Contact Channels
  contact: {
    whatsappNumber: "919876543210",       // [REPLACE] Real store WhatsApp number (e.g. 91XXXXXXXXXX)
    whatsappDisplay: "+91 98765 43210",   // [REPLACE] Customer display format
    phoneNumber: "+919876543210",         // [REPLACE] Real store telephone
    phoneDisplay: "+91 98765 43210",
    email: "contact@brandname.com",
    instagramHandle: "@brandname_official", // [REPLACE] Official Instagram handle
    instagramUrl: "https://instagram.com",
    googleReviewUrl: "https://search.google.com/local/writereview?placeid=REPLACE_WITH_GOOGLE_PLACE_ID",
  },

  // 3. Physical Boutique Store Location
  store: {
    name: "[REAL BRAND NAME] Boutique & Bangles Studio",
    addressLine1: "Shop No. 14, Ground Floor, Central Market Complex",
    addressLine2: "Main Commercial High Street, Near Gandhi Chowk",
    city: "City Centre",
    state: "Rajasthan",
    pincode: "302001",
    country: "India",
    landmark: "Opposite Rajwada Square",
    googleMapsUrl: "https://maps.google.com/?q=Central+Market+Complex", // [REPLACE] Real Google Maps link
    googleMapsEmbedQuery: "Central Market Complex, Main High Street",
    timings: "10:30 AM – 9:30 PM",
    openDays: "Open All 7 Days",
    priceRange: "₹₹ (Affordable Premium: ₹49 - ₹899)",
  },

  // 4. Authentic Brand Story
  story: {
    kicker: "The Boutique Journey",
    heading: "From Traditional Bangles to Everyday Elegance",
    quote: "What began with a love for beautiful bangles has grown into a carefully curated destination for women's fashion, beauty and everyday accessories.",
    paragraphs: [
      "Our story started with the timeless charm of handcrafted Jaipur Lakh bangles — the rich colours, the artisan mirror-work, and the quiet joy of finding the exact wrist fit for a festive celebration.",
      "Over the years, our customers asked us for pieces to complete their daily looks. Listening to their desires, we thoughtfully expanded our shelves: French acetate hair claws for effortless mornings, pure botanical rosewater mists for daily glow, and ready-to-gift celebratory keepsakes.",
      "Today, our physical store is a vibrant, welcoming sanctuary where traditional Indian heritage effortlessly meets modern feminine taste — always curated with personal warmth and honest pricing."
    ],
    pillars: [
      {
        title: "Heirloom Craftsmanship",
        desc: "Pure organic Lakh and bridal choodas hand-sculpted by master artisans."
      },
      {
        title: "Fresh Weekly Curations",
        desc: "New Korean hair claws, trending studs, and skin essentials arriving every 7 days."
      },
      {
        title: "Honest Affordable Luxury",
        desc: "Thoughtful quality from ₹49 daily essentials to royal bridal suites without excessive retail markups."
      },
      {
        title: "Warm Personal Service",
        desc: "Complimentary mandrel sizing in store or live video previews on WhatsApp."
      }
    ]
  },

  // 5. QR Code Offline Campaign Targets
  qrCampaign: {
    counterTentUrl: "https://priyadarshini-boutique.com/?ref=qr_counter",
    shoppingBagUrl: "https://priyadarshini-boutique.com/?ref=qr_bag",
    businessCardUrl: "https://priyadarshini-boutique.com/?ref=qr_card",
  },

  // 6. Announcement Ribbon
  announcement: {
    enabled: true,
    badge: "VISIT BOUTIQUE",
    text: "Visit our physical store to experience 1,000+ handcrafted bangles, Korean accessories & floral attars.",
    linkText: "Get Directions",
    linkHref: "#visit-store"
  },

  // 7. Local SEO & Meta Tags
  seo: {
    title: "[REAL BRAND NAME] | Handcrafted Jaipur Lakh Bangles, Fashion Accessories & Beauty Boutique",
    description: "Discover handcrafted Jaipur Lakh bangles, bridal choodas, Parisian acetate hair claws, and pure botanical beauty rituals. Visit our offline boutique or enquire instantly on WhatsApp.",
    keywords: [
      "lakh bangles",
      "jaipur lakh kadas",
      "bridal chooda set",
      "bangles shop near me",
      "hair accessories",
      "acetate hair claws",
      "mulberry silk scrunchies",
      "kannauj rosewater mist",
      "ladies accessories boutique",
      "women beauty essentials"
    ],
    ogImage: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop"
  }
};
