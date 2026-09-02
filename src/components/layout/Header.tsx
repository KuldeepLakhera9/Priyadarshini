import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { Search, MessageCircle, Menu, MapPin } from 'lucide-react';
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
        boxShadow: isScrolled ? '0 4px 24px rgba(22, 19, 18, 0.05)' : 'none',
      }}
    >
      {/* Main Top Header Bar */}
      <div className="container-custom" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--header-height)',
        gap: '20px'
      }}>
        {/* Left: Mobile Menu & Clean Search Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onOpenDrawer}
            aria-label="Open menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-xs)',
            }}
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>

          <button
            onClick={onOpenSearch}
            aria-label="Search collection"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8125rem',
              letterSpacing: '0.04em',
              transition: 'color var(--transition-fast)'
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Search size={18} strokeWidth={1.75} color="var(--text-main)" />
            <span className="search-text-label" style={{ display: 'inline-block' }}>
              Search Catalogue
            </span>
          </button>
        </div>

        {/* Center: Brand Typographic Wordmark */}
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
            fontSize: 'clamp(1.35rem, 3vw, 2.05rem)',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-main)',
            lineHeight: 1.1,
          }}>
            {BRAND_CONFIG.brandName}
          </div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.5625rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold-dark)',
            fontWeight: 600,
            marginTop: '3px'
          }}>
            Atelier • Bangles • Beauty
          </div>
        </div>

        {/* Right: Store Locator & WhatsApp Concierge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Store Location Quick Link */}
          <a
            href="#visit-store"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontWeight: 600,
              padding: '6px 0',
              borderBottom: '1px solid transparent',
              transition: 'all var(--transition-fast)'
            }}
            className="desktop-store-link"
            onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--accent-gold)')}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = 'transparent')}
          >
            <MapPin size={15} color="var(--accent-gold-dark)" />
            <span>Boutique Store</span>
          </a>

          {/* WhatsApp Direct Enquiry CTA — Tailored Luxury */}
          <a
            href={createGeneralEnquiryUrl('Header Nav')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              padding: '9px 18px',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
            }}
          >
            <MessageCircle size={15} />
            <span className="whatsapp-header-text">WhatsApp Stylist</span>
          </a>
        </div>
      </div>

      {/* Desktop Category Navigation Sub-bar */}
      <div className="desktop-category-bar" style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'rgba(250, 247, 242, 0.98)',
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
          padding: '11px 0',
          overflowX: 'auto',
        }}>
          <button
            onClick={() => onSelectCategory('all')}
            className="category-nav-link"
          >
            All Catalogue
          </button>
          
          <button
            onClick={() => onSelectCategory('lakh-bangles')}
            className="category-nav-link highlight-link"
          >
            Lakh Bangles
          </button>

          <button
            onClick={() => onSelectCategory('fancy-bangles')}
            className="category-nav-link"
          >
            Bridal & Fancy Bangles
          </button>

          <button
            onClick={() => onSelectCategory('hair-accessories')}
            className="category-nav-link"
          >
            Hair Accessories
          </button>

          <button
            onClick={() => onSelectCategory('beauty-skincare')}
            className="category-nav-link"
          >
            Beauty & Skincare
          </button>

          <button
            onClick={() => onSelectCategory('fragrance')}
            className="category-nav-link"
          >
            Fragrance & Attar
          </button>

          <button
            onClick={() => onSelectCategory('gifts-hampers')}
            className="category-nav-link"
          >
            Gifting Atelier
          </button>

          <a
            href="#wholesale"
            className="category-nav-link"
            style={{ color: 'var(--accent-gold-dark)', fontWeight: 600 }}
          >
            Wholesale
          </a>
        </div>
      </div>

      <style>{`
        .category-nav-link {
          background: none;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: '0.1em';
          text-transform: uppercase;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px 2px;
          white-space: nowrap;
          position: relative;
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .category-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--text-main);
          transition: width var(--transition-smooth);
        }
        .category-nav-link:hover {
          color: var(--text-main);
        }
        .category-nav-link:hover::after {
          width: 100%;
        }
        .highlight-link {
          color: var(--accent-rose);
          font-weight: 600;
        }
        .highlight-link::after {
          background-color: var(--accent-rose);
        }

        @media (max-width: 960px) {
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
        @media (min-width: 961px) {
          .desktop-store-link {
            display: inline-flex !important;
          }
        }
        @media (max-width: 480px) {
          .whatsapp-header-text {
            display: none;
          }
          .btn-whatsapp {
            padding: 9px 12px !important;
          }
        }
      `}</style>
    </header>
  );
};
