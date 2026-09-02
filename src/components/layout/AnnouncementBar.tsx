import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

export const AnnouncementBar: React.FC = () => {
  if (!BRAND_CONFIG.announcement.enabled) return null;

  return (
    <div style={{
      backgroundColor: '#161312',
      color: '#E8E2D8',
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '9px 16px',
      borderBottom: '1px solid rgba(191, 163, 124, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      zIndex: 40
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>
          {BRAND_CONFIG.announcement.badge}
        </span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span style={{ color: '#EAE3D9' }}>
          {BRAND_CONFIG.announcement.text}
        </span>
        <span style={{ opacity: 0.4 }}>•</span>
        <a
          href={createGeneralEnquiryUrl('Announcement Bar')}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--accent-gold)',
            textDecoration: 'none',
            fontWeight: 600,
            borderBottom: '1px solid var(--accent-gold)',
            paddingBottom: '1px',
            transition: 'color var(--transition-fast)'
          }}
        >
          {BRAND_CONFIG.announcement.linkText || 'Enquire on WhatsApp ↗'}
        </a>
      </div>
    </div>
  );
};
