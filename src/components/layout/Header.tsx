import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { Search, MessageCircle, Menu, MapPin, Sparkles } from 'lucide-react';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenDrawer: () => void;
  onSelectCategory: (categoryId: string) => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenDrawer,
  onSelectCategory,
  onNavigateHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="glass-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: isScrolled ? '0 4px 20px rgba(25, 21, 20, 0.06)' : 'none',
      }}
    >
      <div className="container-custom" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--header-height)',
        gap: '16px'
      }}>
        {/* Left: Mobile Menu & Quick Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onOpenDrawer}
            aria-label="Open boutique menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-xs)',
            }}
          >
            <Menu size={22} />
          </button>

          <button
            onClick={onOpenSearch}
            aria-label="Search collection"
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8125rem',
            }}
            className="search-bar-trigger"
          >
            <Search size={16} color="var(--accent-rose)" />
            <span className="search-text-label" style={{ display: 'inline-block' }}>
              Search bangles, hair clips, perfumes...
            </span>
          </button>
        </div>

        {/* Center: Brand Typographic Logo Wordmark */}
        <div
          onClick={onNavigateHome}
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.25rem, 2.8vw, 1.85rem)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-main)',
            lineHeight: 1.1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <span>{BRAND_CONFIG.brandName}</span>
          </div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold-dark)',
            fontWeight: 600,
            marginTop: '2px'
          }}>
            Bangles • Fashion • Beauty
          </div>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Store Location Quick Link */}
          <a
            href="#visit-store"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontWeight: 500,
              padding: '6px 12px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'rgba(255,255,255,0.6)'
            }}
            className="desktop-store-link"
          >
            <MapPin size={15} color="var(--accent-rose)" />
            <span>Store Locator</span>
          </a>

          {/* WhatsApp Direct Enquiry CTA */}
          <a
            href={createGeneralEnquiryUrl('Boutique Catalogue')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              padding: '8px 16px',
              fontSize: '0.8125rem',
            }}
          >
            <MessageCircle size={17} />
            <span className="whatsapp-header-text">WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Desktop Category Navigation Sub-bar */}
      <div className="desktop-category-bar" style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'rgba(250, 247, 242, 0.95)',
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          padding: '10px 0',
          overflowX: 'auto',
        }}>
          <button
            onClick={() => onSelectCategory('all')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.785rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '4px 8px',
              whiteSpace: 'nowrap',
              transition: 'color var(--transition-fast)'
            }}
          >
            All Catalogue
          </button>
          
          <button
            onClick={() => onSelectCategory('lakh-bangles')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.785rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent-rose)',
              cursor: 'pointer',
              padding: '4px 8px',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Sparkles size={13} />
            Lakh Bangles
          </button>

          <button
            onClick={() => onSelectCategory('fancy-bangles')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.785rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px 8px',
              whiteSpace: 'nowrap',
            }}
          >
            Bridal & Fancy Bangles
          </button>

          <button
            onClick={() => onSelectCategory('hair-accessories')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.785rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px 8px',
              whiteSpace: 'nowrap',
            }}
          >
            Hair Accessories
          </button>

          <button
            onClick={() => onSelectCategory('beauty-skincare')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.785rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px 8px',
              whiteSpace: 'nowrap',
            }}
          >
            Beauty & Skincare
          </button>

          <button
            onClick={() => onSelectCategory('fragrance')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.785rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px 8px',
              whiteSpace: 'nowrap',
            }}
          >
            Artisanal Fragrance
          </button>

          <button
            onClick={() => onSelectCategory('gifts-hampers')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.785rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px 8px',
              whiteSpace: 'nowrap',
            }}
          >
            Gifts & Hampers
          </button>

          <a
            href="#wholesale"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.785rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold-dark)',
              textDecoration: 'none',
              padding: '4px 8px',
              whiteSpace: 'nowrap',
            }}
          >
            Wholesale
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-category-bar {
            display: none !important;
          }
          .desktop-store-link {
            display: none !important;
          }
          .search-text-label {
            display: none !important;
          }
        }
        @media (min-width: 901px) {
          .desktop-store-link {
            display: inline-flex !important;
          }
        }
        @media (max-width: 480px) {
          .whatsapp-header-text {
            display: none;
          }
          .btn-whatsapp {
            padding: 8px 10px !important;
          }
        }
      `}</style>
    </header>
  );
};
