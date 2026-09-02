import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { Sparkles, MessageCircle } from 'lucide-react';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

export const AnnouncementBar: React.FC = () => {
  if (!BRAND_CONFIG.announcement.enabled) return null;

  return (
    <div style={{
      backgroundColor: '#191514',
      color: '#FAF7F2',
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.06em',
      padding: '8px 16px',
      borderBottom: '1px solid rgba(197, 168, 128, 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 40
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{
          backgroundColor: '#8B263E',
          color: '#FFFFFF',
          fontSize: '0.625rem',
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: '3px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Sparkles size={10} />
          {BRAND_CONFIG.announcement.badge}
        </span>
        <span style={{ color: '#E8E0D5' }}>{BRAND_CONFIG.announcement.text}</span>
        
        <a
          href={createGeneralEnquiryUrl('New Collection')}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#C5A880',
            textDecoration: 'underline',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            marginLeft: '6px'
          }}
        >
          <MessageCircle size={12} />
          {BRAND_CONFIG.announcement.linkText || 'Enquire on WhatsApp'}
        </a>
      </div>
    </div>
  );
};
