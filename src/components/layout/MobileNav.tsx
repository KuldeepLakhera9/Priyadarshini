import React from 'react';
import { Home, Compass, Search, MapPin, MessageCircle } from 'lucide-react';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

interface MobileNavProps {
  currentView: 'home' | 'catalogue';
  onNavigateHome: () => void;
  onNavigateCatalogue: () => void;
  onOpenSearch: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  currentView,
  onNavigateHome,
  onNavigateCatalogue,
  onOpenSearch,
}) => {
  return (
    <nav
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'var(--mobile-bar-height)',
        backgroundColor: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 45,
        boxShadow: '0 -4px 20px rgba(25, 21, 20, 0.08)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {/* Home Button */}
      <button
        onClick={onNavigateHome}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: currentView === 'home' ? 'var(--accent-rose)' : 'var(--text-muted)',
          cursor: 'pointer',
          padding: '6px 12px',
          fontSize: '0.6875rem',
          fontWeight: currentView === 'home' ? 700 : 500,
        }}
      >
        <Home size={20} strokeWidth={currentView === 'home' ? 2.5 : 1.8} />
        <span>Home</span>
      </button>

      {/* Explore / Catalogue */}
      <button
        onClick={onNavigateCatalogue}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: currentView === 'catalogue' ? 'var(--accent-rose)' : 'var(--text-muted)',
          cursor: 'pointer',
          padding: '6px 12px',
          fontSize: '0.6875rem',
          fontWeight: currentView === 'catalogue' ? 700 : 500,
        }}
      >
        <Compass size={20} strokeWidth={currentView === 'catalogue' ? 2.5 : 1.8} />
        <span>Catalogue</span>
      </button>

      {/* Center WhatsApp Conversion Button */}
      <a
        href={createGeneralEnquiryUrl('Mobile Bottom Bar')}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: 'var(--accent-whatsapp)',
          color: '#ffffff',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-18px',
          boxShadow: '0 6px 16px rgba(37, 211, 102, 0.4)',
          border: '3px solid #ffffff',
          textDecoration: 'none',
        }}
        aria-label="WhatsApp Enquiry"
      >
        <MessageCircle size={22} fill="#ffffff" strokeWidth={0} />
      </a>

      {/* Search */}
      <button
        onClick={onOpenSearch}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          padding: '6px 12px',
          fontSize: '0.6875rem',
          fontWeight: 500,
        }}
      >
        <Search size={20} strokeWidth={1.8} />
        <span>Search</span>
      </button>

      {/* Visit Store */}
      <a
        href="#visit-store"
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          padding: '6px 12px',
          fontSize: '0.6875rem',
          fontWeight: 500,
        }}
      >
        <MapPin size={20} strokeWidth={1.8} />
        <span>Boutique</span>
      </a>

      <style>{`
        @media (min-width: 769px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};
