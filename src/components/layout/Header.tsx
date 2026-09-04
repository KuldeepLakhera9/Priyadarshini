import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { Search, MessageCircle, Menu } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';
import { trackConversionEvent } from '../../utils/analytics';

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
      <div className="container-custom header-inner-bar" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--header-height)',
        gap: 'clamp(6px, 2vw, 20px)'
      }}>
        {/* Left: Mobile Menu & Clean Search Trigger */}
        <div className="header-left-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <button
            onClick={onOpenDrawer}
            aria-label="Open menu"
            className="header-icon-btn"
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
              transition: 'background var(--transition-fast)',
              minWidth: '38px',
              minHeight: '38px'
            }}
          >
            <Menu size={21} strokeWidth={1.5} />
          </button>

          <button
            onClick={onOpenSearch}
            aria-label="Search catalogue"
            className="header-search-trigger"
            style={{
              background: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '6px 10px',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.8125rem',
              letterSpacing: '0.04em',
              transition: 'color var(--transition-fast)',
              minHeight: '38px'
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
          className="header-brand-center"
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            userSelect: 'none',
            minWidth: 0,
            padding: '0 4px',
          }}
        >
          <div className="brand-wordmark-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.125rem, 3.8vw, 2.15rem)',
            fontWeight: 500,
            letterSpacing: 'clamp(0.08em, 1.2vw, 0.18em)',
            textTransform: 'uppercase',
            color: 'var(--text-main)',
            lineHeight: 1.05,
            whiteSpace: 'nowrap',
          }}>
            {BRAND_CONFIG.brandName}
          </div>
          <div className="brand-wordmark-tagline" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.48rem, 1.4vw, 0.5625rem)',
            letterSpacing: 'clamp(0.08em, 1vw, 0.18em)',
            textTransform: 'uppercase',
            color: 'var(--accent-gold-dark)',
            fontWeight: 600,
            marginTop: '2px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {BRAND_CONFIG.tagline}
          </div>
        </div>

        {/* Right: Search, Instagram & WhatsApp Concierge */}
        <div className="header-right-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Instagram Link */}
          <a
            href={BRAND_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Priyadarshani on Instagram"
            onClick={() => trackConversionEvent('instagram_clicked', { source: 'header' })}
            className="header-icon-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              padding: '8px',
              borderRadius: 'var(--radius-xs)',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)',
              minWidth: '38px',
              minHeight: '38px'
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-rose)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            title="Follow @the_bangle_edit_store"
          >
            <InstagramIcon size={18} color="currentColor" />
          </a>

          {/* WhatsApp Direct Enquiry CTA */}
          <a
            href={createGeneralEnquiryUrl('Header Nav')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp header-whatsapp-btn"
            onClick={() => trackConversionEvent('whatsapp_enquiry_clicked', { source: 'header' })}
            style={{
              padding: '8px 16px',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              minHeight: '38px'
            }}
          >
            <MessageCircle size={15} />
            <span className="whatsapp-header-text">WhatsApp Us</span>
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
          gap: '24px',
          padding: '11px 0',
          overflowX: 'auto',
        }}>
          <button
            onClick={() => onSelectCategory('all')}
            className="category-nav-link"
          >
            Shop
          </button>

          <a
            href="#seasonal-collections"
            className="category-nav-link"
          >
            Collections
          </a>

          <button
            onClick={() => onSelectCategory('lakh-bangles')}
            className="category-nav-link highlight-link"
          >
            Bangles
          </button>

          <button
            onClick={() => onSelectCategory('fashion-accessories')}
            className="category-nav-link"
          >
            Accessories
          </button>

          <button
            onClick={() => onSelectCategory('hair-accessories')}
            className="category-nav-link"
          >
            Hair Accents
          </button>

          <button
            onClick={() => onSelectCategory('fragrance')}
            className="category-nav-link"
          >
            Fragrance
          </button>

          <button
            onClick={() => onSelectCategory('gifts')}
            className="category-nav-link"
          >
            Gifts
          </button>

          <a
            href="#brand-story"
            className="category-nav-link"
          >
            About
          </a>

          <a
            href="#visit-store"
            className="category-nav-link"
            style={{ color: 'var(--accent-rose)', fontWeight: 600 }}
          >
            Visit Store
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
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px 2px;
          white-space: nowrap;
          position: relative;
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .category-nav-link:hover {
          color: var(--text-main);
        }
        .category-nav-link.highlight-link {
          color: var(--accent-rose);
          font-weight: 600;
        }
        .category-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1.5px;
          background-color: var(--accent-rose);
          transition: width var(--transition-fast);
        }
        .category-nav-link:hover::after {
          width: 100%;
        }

        @media (max-width: 860px) {
          .desktop-category-bar {
            display: none !important;
          }
          .search-text-label {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .header-inner-bar {
            height: var(--header-height) !important;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-header-text {
            display: none !important;
          }
          .header-whatsapp-btn {
            padding: 8px !important;
            min-width: 36px !important;
            width: 36px !important;
            height: 36px !important;
            border-radius: 50% !important;
            justify-content: center !important;
          }
          .header-search-trigger {
            padding: 6px 8px !important;
          }
          .header-icon-btn {
            padding: 6px !important;
          }
        }

        @media (max-width: 360px) {
          .brand-wordmark-tagline {
            display: none !important;
          }
          .brand-wordmark-title {
            font-size: 1.05rem !important;
            letter-spacing: 0.08em !important;
          }
        }
      `}</style>
    </header>
  );
};
