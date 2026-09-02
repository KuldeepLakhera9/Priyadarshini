import { BRAND_CONFIG } from '../config/brand';
import type { Product } from '../types';

/**
 * Builds clean WhatsApp click-to-chat links with pre-encoded luxury messages.
 * Single source of truth for the boutique WhatsApp number.
 */

export function getWhatsAppBaseUrl(): string {
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}`;
}

export function formatProductPrice(product: Product): string {
  if (product.priceLabel) {
    return product.priceLabel;
  }
  if (product.priceMode === 'price_on_request') {
    return 'Price on Request';
  }
  if (product.priceMode === 'available_in_store') {
    return 'Available in Store';
  }
  if (product.price === undefined || product.price === null) {
    return 'Price on Request';
  }

  const prefix = product.priceMode === 'starting_at' ? 'Starting from ' : '';
  const suffix =
    product.priceMode === 'pair'
      ? ' (Pair)'
      : product.priceMode === 'set'
      ? ' (Set)'
      : product.priceMode === 'box'
      ? ' (Hamper)'
      : '';

  return `${prefix}₹${product.price}${suffix}`;
}

export function getProductCtaLabel(product: Product, context: 'card' | 'modal' | 'sticky' = 'modal'): string {
  if (context === 'card') {
    return 'Enquire';
  }
  if (product.availability === 'limited' || product.stockStatus === 'limited') {
    return 'Check Availability';
  }
  if (product.availability === 'in_store_only' || product.stockStatus === 'in_store_only') {
    return 'Check In-Store Availability';
  }
  if (product.priceMode === 'price_on_request') {
    return 'Request Price on WhatsApp';
  }
  return 'Ask on WhatsApp';
}

export function createProductEnquiryUrl(
  product: Product,
  selectedColor?: string,
  selectedSize?: string
): string {
  // If product has a custom pre-configured message
  if (product.whatsappMessage || product.customWhatsAppMessage) {
    const customMsg = product.whatsappMessage || product.customWhatsAppMessage || '';
    return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(customMsg)}`;
  }

  const priceText = formatProductPrice(product);
  const variantParts: string[] = [];
  if (selectedColor) variantParts.push(`Color: ${selectedColor}`);
  if (selectedSize) variantParts.push(`Size: ${selectedSize}`);
  const variantStr = variantParts.length > 0 ? ` (${variantParts.join(', ')})` : '';

  const message = `Hi, I'm interested in the ${product.name} [Code: ${product.code}] (${priceText})${variantStr}. Could you please confirm availability and available designs?`;

  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createProductShareUrl(product: Product): string {
  const brandName = BRAND_CONFIG.brandName;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : BRAND_CONFIG.websiteUrl;
  const message = `Check out this ${product.name} at ${brandName}: ${currentUrl}`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}

export function createGeneralEnquiryUrl(topic: string = 'General Inquiry'): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! ✨\nI am browsing your website catalogue and would like some assistance regarding ${topic}. Could you please guide me?`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createStoreVisitEnquiryUrl(): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! 📍\nI am planning to visit your boutique store. Could you please share your exact location pin, landmark, and current store timings?`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createBridalCustomOrderUrl(): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! 👰‍♀️✨\nI am looking for custom Bridal / Festive Bangles matching my outfit. Could we connect on WhatsApp to discuss matching designs, sizes, and custom handcrafted Lakh sets?`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createWholesaleEnquiryUrl(): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! 🏢\nI am a boutique / store owner interested in wholesale supply for Bangles, Hair Accents, and Festive Accessories. Please share your wholesale catalogue and minimum order quantities.`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createPriceTierEnquiryUrl(tierTitle: string): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! 🎁\nI am looking for items in your ${tierTitle} collection. Could you share the latest in-store options for this budget?`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}
