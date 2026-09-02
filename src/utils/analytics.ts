/**
 * LIGHTWEIGHT ANALYTICS & CONVERSION TRACKER
 * ==========================================
 * Safely dispatches customer conversion events to Google Tag Manager (window.dataLayer),
 * Meta Pixel, or console logger without breaking when offline.
 */

export type AnalyticsEventType =
  | 'product_viewed'
  | 'category_viewed'
  | 'whatsapp_enquiry_clicked'
  | 'directions_clicked'
  | 'call_clicked'
  | 'instagram_clicked'
  | 'product_shared'
  | 'search_performed'
  | 'collection_viewed';

export function trackConversionEvent(
  eventType: AnalyticsEventType,
  metadata: Record<string, any> = {}
): void {
  try {
    const payload = {
      event: eventType,
      timestamp: new Date().toISOString(),
      ...metadata,
    };

    // Safe dispatch to Google Tag Manager dataLayer if installed
    if (typeof window !== 'undefined') {
      const w = window as any;
      if (Array.isArray(w.dataLayer)) {
        w.dataLayer.push(payload);
      }
    }

    // Development diagnostic log
    if (import.meta.env?.DEV) {
      console.log(`[Analytics Event: ${eventType}]`, metadata);
    }
  } catch {
    // Fail silently in production to avoid interrupting user experience
  }
}
