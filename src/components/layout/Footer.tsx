import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { CATEGORIES } from '../../data/categories';
import { MessageCircle, Phone, MapPin, Mail, Sparkles } from 'lucide-react';
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
      borderTop: '1px solid rgba(197, 168, 128, 0.25)',
      paddingTop: '60px',
      paddingBottom: '90px', // extra padding for mobile bottom bar
    }}>
      <div className="container-custom">
        {/* Top Tier: Brand Essence & Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          paddingBottom: '50px',
          borderBottom: '1px solid rgba(232, 224, 213, 0.12)'
        }}>
          {/* Column 1: Brand Wordmark & Story */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              marginBottom: '4px'
            }}>
              {BRAND_CONFIG.brandName}
            </div>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              Boutique • Bangles • Beauty
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: '#B0A79E',
              lineHeight: 1.7,
              marginBottom: '20px',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <InstagramIcon size={14} color="#C5A880" />
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
                  backgroundColor: '#25D366',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Signature Collections */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.125rem',
              color: '#FFFFFF',
              letterSpacing: '0.06em',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={14} color="var(--accent-gold)" />
              <span>Signature Collections</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                      color: '#B0A79E',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#C5A880')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#B0A79E')}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Boutique Links */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.125rem',
              color: '#FFFFFF',
              letterSpacing: '0.06em',
              marginBottom: '18px',
            }}>
              Boutique Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a
                  href="#new-arrivals"
                  style={{ color: '#B0A79E', fontSize: '0.875rem', textDecoration: 'none' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#C5A880')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#B0A79E')}
                >
                  New Arrivals (Weekly Drops)
                </a>
              </li>
              <li>
                <a
                  href="#heritage-bangles"
                  style={{ color: '#B0A79E', fontSize: '0.875rem', textDecoration: 'none' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#C5A880')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#B0A79E')}
                >
                  Lakh Bangles Craftsmanship
                </a>
              </li>
              <li>
                <a
                  href="#price-tiers"
                  style={{ color: '#B0A79E', fontSize: '0.875rem', textDecoration: 'none' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#C5A880')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#B0A79E')}
                >
                  Shop Under ₹99 / ₹199 / ₹299
                </a>
              </li>
              <li>
                <a
                  href="#gifting"
                  style={{ color: '#B0A79E', fontSize: '0.875rem', textDecoration: 'none' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#C5A880')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#B0A79E')}
                >
                  Festive & Wedding Favours
                </a>
              </li>
              <li>
                <a
                  href={createWholesaleEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 600 }}
                >
                  Wholesale & Bulk Supply ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Offline Store Details */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.125rem',
              color: '#FFFFFF',
              letterSpacing: '0.06em',
              marginBottom: '18px',
            }}>
              Visit Our Store
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem', color: '#B0A79E' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="#C5A880" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>
                  {BRAND_CONFIG.store.addressLine1}, {BRAND_CONFIG.store.addressLine2}, {BRAND_CONFIG.store.city}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#C5A880" style={{ flexShrink: 0 }} />
                <span>{BRAND_CONFIG.contact.phoneDisplay}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#C5A880" style={{ flexShrink: 0 }} />
                <span>{BRAND_CONFIG.contact.email}</span>
              </div>
              <div style={{
                paddingTop: '8px',
                borderTop: '1px dashed rgba(255,255,255,0.1)',
                fontSize: '0.75rem',
                color: 'var(--accent-gold)'
              }}>
                🕒 {BRAND_CONFIG.store.timings} • {BRAND_CONFIG.store.openDays}
              </div>
              
              <a
                href={createStoreVisitEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginTop: '4px'
                }}
              >
                Get Exact Directions on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div style={{
          paddingTop: '30px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.75rem',
          color: '#8A8179'
        }}>
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.brandName}. Handcrafted with elegance & care for every woman.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Digital Showroom & WhatsApp Discovery</span>
            <span>•</span>
            <span>All Store Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
