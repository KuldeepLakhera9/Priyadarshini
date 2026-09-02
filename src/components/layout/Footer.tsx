import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { CATEGORIES } from '../../data/categories';
import { MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { createGeneralEnquiryUrl, createStoreVisitEnquiryUrl, createWholesaleEnquiryUrl } from '../../utils/whatsapp';

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer style={{
      backgroundColor: '#161312',
      color: '#E8E1D7',
      borderTop: '1px solid rgba(191, 163, 124, 0.2)',
      paddingTop: 'clamp(56px, 7vw, 84px)',
      paddingBottom: 'clamp(84px, 9vw, 110px)', // safe area for mobile bottom bar
    }}>
      <div className="container-custom">
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(32px, 5vw, 56px)',
          paddingBottom: '52px',
          borderBottom: '1px solid rgba(234, 227, 217, 0.1)'
        }}>
          {/* Column 1: Brand Wordmark & Story */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.85rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              marginBottom: '4px'
            }}>
              {BRAND_CONFIG.brandName}
            </div>
            <div style={{
              fontSize: '0.625rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              fontWeight: 600,
              marginBottom: '18px'
            }}>
              {BRAND_CONFIG.tagline}
            </div>
            <p style={{
              fontSize: '0.8125rem',
              color: '#B2A89E',
              lineHeight: 1.7,
              marginBottom: '22px',
              fontWeight: 300
            }}>
              {BRAND_CONFIG.brandSubtext}
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={BRAND_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#FAF7F2',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <InstagramIcon size={13} color="#BFA37C" />
                <span>{BRAND_CONFIG.contact.instagramHandle}</span>
              </a>

              <a
                href={createGeneralEnquiryUrl('Footer')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#FFFFFF',
                  backgroundColor: 'var(--accent-whatsapp)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                <MessageCircle size={13} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Signature Collections */}
          <div>
            <div style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={11} />
              <span>Signature Collections</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#B2A89E',
                      fontSize: '0.8125rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      fontWeight: 400,
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#B2A89E')}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Boutique Services */}
          <div>
            <div style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '20px',
            }}>
              Boutique Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <li>
                <a
                  href="#new-arrivals"
                  style={{ color: '#B2A89E', fontSize: '0.8125rem', textDecoration: 'none', fontWeight: 400 }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#B2A89E')}
                >
                  Weekly Atelier Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#heritage-bangles"
                  style={{ color: '#B2A89E', fontSize: '0.8125rem', textDecoration: 'none', fontWeight: 400 }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#B2A89E')}
                >
                  Jaipur Lakh Craft Monograph
                </a>
              </li>
              <li>
                <a
                  href="#price-tiers"
                  style={{ color: '#B2A89E', fontSize: '0.8125rem', textDecoration: 'none', fontWeight: 400 }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#B2A89E')}
                >
                  Curated Price Tiers (Under ₹99+)
                </a>
              </li>
              <li>
                <a
                  href="#gifting"
                  style={{ color: '#B2A89E', fontSize: '0.8125rem', textDecoration: 'none', fontWeight: 400 }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#B2A89E')}
                >
                  The Gifting Atelier & Wedding Favors
                </a>
              </li>
              <li>
                <a
                  href={createWholesaleEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold)', fontSize: '0.8125rem', textDecoration: 'none', fontWeight: 600 }}
                >
                  Wholesale & Boutique Supply ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Offline Store Details */}
          <div>
            <div style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '20px',
            }}>
              Visit Our Store
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.8125rem', color: '#B2A89E', fontWeight: 300 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="#BFA37C" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>
                  {BRAND_CONFIG.store.addressLine1}, {BRAND_CONFIG.store.addressLine2}, {BRAND_CONFIG.store.city}, {BRAND_CONFIG.store.state} – {BRAND_CONFIG.store.pincode}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={15} color="#BFA37C" style={{ flexShrink: 0 }} />
                <span>
                  <a href={`tel:${BRAND_CONFIG.contact.primaryPhone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {BRAND_CONFIG.contact.primaryPhoneDisplay}
                  </a>
                  {' • '}
                  <a href={`tel:${BRAND_CONFIG.contact.secondaryPhone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {BRAND_CONFIG.contact.secondaryPhoneDisplay}
                  </a>
                </span>
              </div>
              <div style={{
                paddingTop: '8px',
                borderTop: '1px dashed rgba(255,255,255,0.1)',
                fontSize: '0.75rem',
                color: 'var(--accent-champagne)'
              }}>
                🕒 {BRAND_CONFIG.store.timings} • {BRAND_CONFIG.store.openDays}
              </div>
              
              <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                <a
                  href={BRAND_CONFIG.store.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--accent-gold)',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderBottom: '1px solid var(--accent-gold)',
                    paddingBottom: '2px',
                  }}
                >
                  Get Directions ↗
                </a>

                <a
                  href={createStoreVisitEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderBottom: '1px solid rgba(255,255,255,0.5)',
                    paddingBottom: '2px',
                  }}
                >
                  WhatsApp Location Pin ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div style={{
          paddingTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.75rem',
          color: '#82786F'
        }}>
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.brandName}. Curated with devotion for the modern woman.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Digital Showroom & WhatsApp Discovery</span>
            <span>•</span>
            <span>All Store Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
