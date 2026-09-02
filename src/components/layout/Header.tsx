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
              transition: 'background var(--transition-fast)'
            }}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <button
            onClick={onOpenSearch}
            aria-label="Search catalogue"
            style={{
              background: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: 'var(--radius-xs)',
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
            fontSize: 'clamp(1.4rem, 3.2vw, 2.15rem)',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-main)',
            lineHeight: 1.05,
          }}>
            {BRAND_CONFIG.brandName}
          </div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.5625rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold-dark)',
            fontWeight: 600,
            marginTop: '3px'
          }}>
            {BRAND_CONFIG.tagline}
          </div>
        </div>

        {/* Right: Search, Instagram & WhatsApp Concierge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Instagram Link */}
          <a
            href={BRAND_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Priyadarshani on Instagram"
            onClick={() => trackConversionEvent('instagram_clicked', { source: 'header' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              padding: '8px',
              borderRadius: 'var(--radius-xs)',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)'
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-rose)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            title="Follow @the_bangle_edit_store"
          >
            <InstagramIcon size={19} color="currentColor" />
          </a>

          {/* WhatsApp Direct Enquiry CTA */}
          <a
            href={createGeneralEnquiryUrl('Header Nav')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            onClick={() => trackConversionEvent('whatsapp_enquiry_clicked', { source: 'header' })}
            style={{
              padding: '9px 18px',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
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
            onClick={() => onSelectCategory('beauty')}
            className="category-nav-link"
          >
            Beauty
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

        @media (max-width: 480px) {
          .whatsapp-header-text {
            display: none !important;
          }
          .btn-whatsapp {
            padding: 8px !important;
          }
        }
      `}</style>
    </header>
  );
};
