import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Star } from 'lucide-react';
import { createStoreVisitEnquiryUrl } from '../../utils/whatsapp';
import { trackConversionEvent } from '../../utils/analytics';

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(32px, 6vw, 80px)',
          alignItems: 'center'
        }}>
          {/* Left Column: Boutique Address & Invitation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <div className="section-eyebrow">
                <MapPin size={11} color="var(--accent-gold-dark)" />
                <span>The Offline Experience</span>
              </div>

              <h2 className="editorial-heading-1" style={{ marginTop: '10px' }}>
                Visit Priyadarshani
              </h2>
            </div>

            <p className="luxury-subtext">
              Experience the full depth of our collection in person at Om Tulsi Plaza, Bhawani Peth. Try on over 1,000 handcrafted bangle sets, determine your exact size on our brass mandrels, discover Korean hair accessories, sample fine fragrances, and receive warm personal styling from our family team.
            </p>

            {/* Architectural Store Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Address card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                padding: 'clamp(14px, 3vw, 20px) clamp(16px, 3vw, 22px)',
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
                padding: 'clamp(14px, 2.5vw, 16px) clamp(16px, 3vw, 22px)',
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
            <div className="store-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '6px' }}>
              <a
                href={BRAND_CONFIG.store.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary store-action-btn"
                style={{ flex: '1 1 180px' }}
                onClick={() => trackConversionEvent('directions_clicked', { source: 'store_section' })}
              >
                <Navigation size={15} />
                <span>Get Directions</span>
              </a>

              <a
                href={createStoreVisitEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp store-action-btn"
                style={{ flex: '1 1 180px' }}
                onClick={() => trackConversionEvent('whatsapp_enquiry_clicked', { source: 'store_section_pin' })}
              >
                <MessageCircle size={15} />
                <span>WhatsApp Location</span>
              </a>

              <div className="store-call-group" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', width: '100%' }}>
                <a
                  href={`tel:${BRAND_CONFIG.contact.primaryPhone}`}
                  onClick={() => trackConversionEvent('call_clicked', { source: 'store_section_primary' })}
                  className="store-call-btn"
                  style={{
                    flex: '1 1 140px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-main)',
                    border: '1px solid var(--border-strong)',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-xs)',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                  title="Call 9403478600"
                >
                  <Phone size={14} color="var(--accent-rose)" />
                  <span>94034 78600</span>
                </a>

                <a
                  href={`tel:${BRAND_CONFIG.contact.secondaryPhone}`}
                  onClick={() => trackConversionEvent('call_clicked', { source: 'store_section_secondary' })}
                  className="store-call-btn"
                  style={{
                    flex: '1 1 140px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-xs)',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                  title="Call 9325299923"
                >
                  <Phone size={14} color="var(--accent-gold-dark)" />
                  <span>93252 99923</span>
                </a>
              </div>
            </div>

            {/* Genuine Google Review CTA (No fabricated ratings or fake stars) */}
            {BRAND_CONFIG.contact.googleReviewUrl && (
              <div style={{
                paddingTop: '16px',
                borderTop: '1px dashed var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)'
              }}>
                <Star size={14} color="var(--accent-gold-dark)" />
                <span>
                  Visited our boutique?{' '}
                  <a
                    href={BRAND_CONFIG.contact.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-rose)', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    Leave us a review on Google
                  </a>
                </span>
              </div>
            )}
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
                  src="/images/brand/storefront.jpg"
                  alt="Priyadarshani Store Location and Ambiance"
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
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

      <style>{`
        @media (max-width: 480px) {
          .store-action-btn {
            width: 100% !important;
            flex: 1 1 100% !important;
          }
          .store-call-btn {
            width: 100% !important;
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
