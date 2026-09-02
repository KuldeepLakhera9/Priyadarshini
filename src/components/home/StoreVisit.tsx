import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react';
import { createStoreVisitEnquiryUrl } from '../../utils/whatsapp';

export const StoreVisit: React.FC = () => {
  return (
    <section id="visit-store" style={{
      paddingTop: 'clamp(64px, 8vw, 108px)',
      paddingBottom: 'clamp(64px, 8vw, 108px)',
      backgroundColor: '#FAF7F2',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center'
        }}>
          {/* Left Column: Boutique Address & Invitation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div className="section-eyebrow">
                <MapPin size={11} color="var(--accent-gold-dark)" />
                <span>The Offline Experience</span>
              </div>

              <h2 className="editorial-heading-1" style={{ marginTop: '10px' }}>
                Visit Our Physical Boutique
              </h2>
            </div>

            <p className="luxury-subtext">
              Experience the full depth of our collection in person. Try on over 1,000 handcrafted bangle sets, determine your exact size on our brass mandrels, sample our botanical fragrances, and receive warm personal styling from our family team.
            </p>

            {/* Architectural Store Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Address card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                padding: '20px 22px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                boxShadow: 'var(--shadow-subtle)'
              }}>
                <MapPin size={20} color="var(--accent-rose)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.01em' }}>
                    {BRAND_CONFIG.store.name}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.6, fontWeight: 300 }}>
                    {BRAND_CONFIG.store.addressLine1}, {BRAND_CONFIG.store.addressLine2}, {BRAND_CONFIG.store.city}, {BRAND_CONFIG.store.state} – {BRAND_CONFIG.store.pincode}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold-dark)', fontWeight: 600, marginTop: '6px' }}>
                    Landmark: {BRAND_CONFIG.store.landmark}
                  </div>
                </div>
              </div>

              {/* Timings card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                padding: '16px 22px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: 'var(--shadow-subtle)'
              }}>
                <Clock size={18} color="var(--accent-gold-dark)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    Boutique Hours & Working Days
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px', fontWeight: 300 }}>
                    {BRAND_CONFIG.store.timings} • <span style={{ color: 'var(--status-instock)', fontWeight: 600 }}>{BRAND_CONFIG.store.openDays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs: Directions, WhatsApp Pin, Call */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
              <a
                href={BRAND_CONFIG.store.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, minWidth: '190px' }}
              >
                <Navigation size={15} />
                <span>Google Maps Directions</span>
              </a>

              <a
                href={createStoreVisitEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: 1, minWidth: '190px' }}
              >
                <MessageCircle size={15} />
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
                  padding: '13px 20px',
                  borderRadius: 'var(--radius-xs)',
                  textDecoration: 'none',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                <Phone size={14} color="var(--accent-rose)" />
                <span>Call Boutique</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Store Visual & In-Store Amenities */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-elevated)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: '#FFFFFF',
              position: 'relative'
            }}>
              {/* Store Aesthetic Graphic */}
              <div style={{ height: '360px', position: 'relative', backgroundColor: 'var(--bg-surface-stone)' }}>
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=900&auto=format&fit=crop"
                  alt="Store Location and Ambiance"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(22, 19, 18, 0.2) 0%, rgba(22, 19, 18, 0.65) 100%)',
                }} />

                {/* Center Store Beacon */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    backgroundColor: 'var(--accent-rose)',
                    color: '#FFFFFF',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 0 8px rgba(128, 32, 53, 0.35)',
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-main)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-xs)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    whiteSpace: 'nowrap'
                  }}>
                    {BRAND_CONFIG.brandName} Studio
                  </div>
                </div>
              </div>

              {/* Bottom In-Store Hospitality Guarantees */}
              <div style={{ padding: '24px 22px', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--accent-gold-dark)'
                }}>
                  Atelier Hospitality & Services
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>• Complimentary Wrist Sizing</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '2px' }}>Professional mandrel measurement</div>
                  </div>

                  <div>
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>• Pure Fragrance Bar</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '2px' }}>Tester bar for all floral attars</div>
                  </div>

                  <div>
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>• Custom Gifting Station</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '2px' }}>Ribbons & personalized note cards</div>
                  </div>

                  <div>
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>• All Payment Modes</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '2px' }}>UPI, Cards, & Cash accepted</div>
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
