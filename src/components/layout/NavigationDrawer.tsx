import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { CATEGORIES } from '../../data/categories';
import { X, MessageCircle, Phone, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { createGeneralEnquiryUrl, createStoreVisitEnquiryUrl } from '../../utils/whatsapp';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categoryId: string) => void;
  onSelectPriceTier: (tierId: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectPriceTier,
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 100,
      display: 'flex',
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(25, 21, 20, 0.6)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer Panel */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '380px',
        height: '100%',
        backgroundColor: 'var(--bg-canvas)',
        boxShadow: '4px 0 25px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 101,
        animation: 'slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        overflowY: 'auto',
      }}>
        {/* Drawer Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--bg-surface)'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'var(--text-main)',
              textTransform: 'uppercase'
            }}>
              {BRAND_CONFIG.brandName}
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              color: 'var(--accent-gold-dark)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Boutique & Showroom
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--text-main)',
              borderRadius: 'var(--radius-xs)'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Categories Section */}
        <div style={{ padding: '24px 20px', flex: 1 }}>
          <div style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-subtle)',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>Explore Collections</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <button
              onClick={() => { onSelectCategory('all'); onClose(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.125rem',
                color: 'var(--text-main)',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              <span>View All Catalogue</span>
              <ChevronRight size={16} color="var(--accent-gold)" />
            </button>

            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => { onSelectCategory(cat.id); onClose(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  background: cat.id === 'lakh-bangles' ? 'var(--accent-rose-light)' : 'transparent',
                  border: 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.125rem',
                  color: cat.id === 'lakh-bangles' ? 'var(--accent-rose)' : 'var(--text-main)',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {cat.id === 'lakh-bangles' && <Sparkles size={14} color="var(--accent-rose)" />}
                  <span>{cat.label}</span>
                </div>
                <span style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--text-subtle)',
                  fontWeight: 500
                }}>
                  {cat.badge || 'Browse'}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Budget Filters */}
          <div style={{ marginTop: '28px' }}>
            <div style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-subtle)',
              marginBottom: '12px'
            }}>
              Shop By Budget
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {['Under ₹99', 'Under ₹199', 'Under ₹299', 'Under ₹499'].map(tier => (
                <button
                  key={tier}
                  onClick={() => {
                    const tierId = tier.toLowerCase().replace(' ', '-').replace('₹', '');
                    onSelectPriceTier(tierId);
                    onClose();
                  }}
                  style={{
                    padding: '10px 8px',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-surface)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Boutique Visit Info */}
          <div style={{
            marginTop: '28px',
            padding: '16px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-rose)' }}>
              <MapPin size={16} />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700 }}>Store Location</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              {BRAND_CONFIG.store.addressLine1}, {BRAND_CONFIG.store.addressLine2}, {BRAND_CONFIG.store.city}
            </p>
            <div style={{ fontSize: '0.6875rem', color: 'var(--accent-gold-dark)', fontWeight: 600, marginTop: '6px' }}>
              🕒 {BRAND_CONFIG.store.timings} ({BRAND_CONFIG.store.openDays})
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div style={{
          padding: '18px 20px',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <a
            href={createGeneralEnquiryUrl('Mobile Menu')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ width: '100%' }}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <a
              href={`tel:${BRAND_CONFIG.contact.phoneNumber}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '10px',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              <Phone size={14} />
              <span>Call Store</span>
            </a>

            <a
              href={createStoreVisitEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '10px',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              <MapPin size={14} />
              <span>Directions</span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '6px' }}>
            <a
              href={BRAND_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none'
              }}
            >
              <InstagramIcon size={14} color="var(--accent-rose)" />
              <span>{BRAND_CONFIG.contact.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
