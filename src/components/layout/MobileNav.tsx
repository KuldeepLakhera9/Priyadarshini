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
        height: 'calc(var(--mobile-bar-height) + env(safe-area-inset-bottom, 0px))',
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: '6px',
        justifyContent: 'space-around',
        zIndex: 45,
        boxShadow: '0 -4px 20px rgba(22, 19, 18, 0.06)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 4px)',
      }}
    >
      {/* Home */}
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
          padding: '8px 12px',
          fontSize: '0.625rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontWeight: currentView === 'home' ? 700 : 500,
        }}
      >
        <Home size={19} strokeWidth={currentView === 'home' ? 2.4 : 1.75} />
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
          padding: '8px 12px',
          fontSize: '0.625rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontWeight: currentView === 'catalogue' ? 700 : 500,
        }}
      >
        <Compass size={19} strokeWidth={currentView === 'catalogue' ? 2.4 : 1.75} />
        <span>Catalogue</span>
      </button>

      {/* Center WhatsApp Conversion Button — Jewel Tone */}
      <a
        href={createGeneralEnquiryUrl('Mobile Bottom Bar')}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: 'var(--accent-whatsapp)',
          color: '#ffffff',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-16px',
          boxShadow: '0 6px 18px rgba(28, 77, 56, 0.35)',
          border: '2px solid #ffffff',
          textDecoration: 'none',
        }}
        aria-label="WhatsApp Enquiry"
      >
        <MessageCircle size={20} fill="#ffffff" strokeWidth={0} />
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
          padding: '8px 12px',
          fontSize: '0.625rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        <Search size={19} strokeWidth={1.75} />
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
          padding: '8px 12px',
          fontSize: '0.625rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        <MapPin size={19} strokeWidth={1.75} />
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
