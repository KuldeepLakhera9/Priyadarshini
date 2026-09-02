import { BRAND_CONFIG } from '../config/brand';
import type { Product } from '../types';

/**
 * Builds clean WhatsApp click-to-chat links with pre-encoded luxury messages.
 */

export function getWhatsAppBaseUrl(): string {
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}`;
}

export function createProductEnquiryUrl(
  product: Product,
  selectedColor?: string,
  selectedSize?: string
): string {
  const brandName = BRAND_CONFIG.brandName;
  const colorText = selectedColor ? ` | Color: ${selectedColor}` : '';
  const sizeText = selectedSize ? ` | Size: ${selectedSize}` : '';

  const message = [
    `Hello ${brandName} team! ✨`,
    `I am interested in this item from your online catalogue:`,
    ``,
    `🛍️ *${product.name}*`,
    `🏷️ *Code:* ${product.code}`,
    `💰 *Price:* ₹${product.price} (${product.priceMode === 'pair' ? 'Pair' : product.priceMode === 'set' ? 'Full Set' : product.priceMode === 'starting_at' ? 'Starting Price' : 'Piece'})`,
    colorText || sizeText ? `✨ *Preferences:* ${colorText}${sizeText}`.trim() : null,
    ``,
    `Could you please let me know if this is currently available at the boutique, or share more photos & video clips on WhatsApp? Thank you! 🙏`
  ]
    .filter(line => line !== null)
    .join('\n');

  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createGeneralEnquiryUrl(topic: string = 'General Inquiry'): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! ✨\nI am browsing your website and would like some assistance regarding ${topic}. Could you please guide me?`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createStoreVisitEnquiryUrl(): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! 📍\nI am planning to visit your boutique store today. Could you please share your exact location pin, landmark, and current store timings?`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createBridalCustomOrderUrl(): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! 👰‍♀️✨\nI am looking for custom Bridal / Festive Bangles matching my outfit. Could we connect on WhatsApp to discuss matching designs, sizes, and custom handcrafted Lakh sets?`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createWholesaleEnquiryUrl(): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! 🏢\nI am a boutique / store owner and I would like to enquire about Wholesale / Bulk purchase for Bangles & Accessories. Please share your wholesale catalogue and minimum order quantities.`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function createPriceTierEnquiryUrl(tierTitle: string): string {
  const brandName = BRAND_CONFIG.brandName;
  const message = `Hello ${brandName}! 🎁\nI am looking for gifting / accessory options in the *${tierTitle}* category. Could you share the latest in-store catalog for this budget?`;
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
}
