import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { MapPin, Clock, Phone, MessageCircle, Navigation, CheckCircle } from 'lucide-react';
import { createStoreVisitEnquiryUrl } from '../../utils/whatsapp';

export const StoreVisit: React.FC = () => {
  return (
    <section id="visit-store" style={{
      paddingTop: 'clamp(56px, 7vw, 96px)',
      paddingBottom: 'clamp(56px, 7vw, 96px)',
      backgroundColor: '#FAF7F2',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(36px, 5vw, 64px)',
          alignItems: 'center'
        }}>
          {/* Left Column: Store Details & Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div className="section-eyebrow">
                <MapPin size={12} />
                <span>Visit Our Physical Store</span>
              </div>

              <h2 className="editorial-heading-1" style={{ marginTop: '8px' }}>
                Experience Our Boutique In Person
              </h2>
            </div>

            <p className="luxury-subtext">
              Step into our store to try on 1,000+ handcrafted bangle sets, find your exact wrist size, explore testers for all perfumes & skincare, and receive personalized styling advice from our family team.
            </p>

            {/* In-Store Detail Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Address card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                padding: '16px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                boxShadow: 'var(--shadow-subtle)'
              }}>
                <MapPin size={20} color="var(--accent-rose)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {BRAND_CONFIG.store.name}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.5 }}>
                    {BRAND_CONFIG.store.addressLine1}, {BRAND_CONFIG.store.addressLine2}, {BRAND_CONFIG.store.city}, {BRAND_CONFIG.store.state} – {BRAND_CONFIG.store.pincode}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold-dark)', fontWeight: 600, marginTop: '4px' }}>
                    Landmark: {BRAND_CONFIG.store.landmark}
                  </div>
                </div>
              </div>

              {/* Timings card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                padding: '16px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-subtle)'
              }}>
                <Clock size={20} color="var(--accent-gold-dark)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Store Timings & Working Days
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {BRAND_CONFIG.store.timings} • <span style={{ color: 'var(--status-instock)', fontWeight: 600 }}>{BRAND_CONFIG.store.openDays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs: Directions, WhatsApp Pin, Call */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '8px' }}>
              <a
                href={BRAND_CONFIG.store.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <Navigation size={16} />
                <span>Get Google Map Directions</span>
              </a>

              <a
                href={createStoreVisitEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <MessageCircle size={16} />
                <span>Send WhatsApp Location Pin</span>
              </a>

              <a
                href={`tel:${BRAND_CONFIG.contact.phoneNumber}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-main)',
                  border: '1px solid var(--border-strong)',
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-xs)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              >
                <Phone size={16} color="var(--accent-rose)" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Mockup Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: '#FFFFFF',
              position: 'relative'
            }}>
              {/* Map Preview Graphic */}
              <div style={{ height: '340px', position: 'relative', backgroundColor: '#E8E1D7' }}>
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=900&auto=format&fit=crop"
                  alt="Store Location Map Area"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(25, 21, 20, 0.35)',
                }} />

                {/* Map Pin Pulse Point */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <div style={{
                    backgroundColor: 'var(--accent-rose)',
                    color: '#ffffff',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 0 10px rgba(139, 38, 62, 0.3)',
                    animation: 'pulseGlow 2s infinite'
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-main)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-xs)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    whiteSpace: 'nowrap'
                  }}>
                    {BRAND_CONFIG.brandName} Store
                  </div>
                </div>
              </div>

              {/* Bottom In-Store Highlights */}
              <div style={{ padding: '20px', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-rose)' }}>
                  In-Store Facilities & Amenities
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="var(--status-instock)" />
                    <span>Free Wrist Sizing</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="var(--status-instock)" />
                    <span>Live Fragrance Testers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="var(--status-instock)" />
                    <span>Gift Wrapping Station</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="var(--status-instock)" />
                    <span>UPI & Card Accepted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
