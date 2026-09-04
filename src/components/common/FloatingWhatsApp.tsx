import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="floating-whatsapp-container" style={{
      position: 'fixed',
      bottom: '84px',
      right: '24px',
      zIndex: 85,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '8px'
    }}>
      {/* Mini Concierge Bubble */}
      {showTooltip && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            color: 'var(--text-main)',
            padding: '12px 16px',
            borderRadius: 'var(--radius-xs)',
            boxShadow: '0 8px 30px rgba(22, 19, 18, 0.1)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.8125rem',
            maxWidth: '220px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            animation: 'fadeIn 0.3s ease-out',
            position: 'relative'
          }}
        >
          <Sparkles size={14} color="var(--accent-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-rose)' }}>
              Styling & Sizing Help
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.4, fontWeight: 300 }}>
              Chat with our in-store stylist on WhatsApp.
            </div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-subtle)',
              padding: '2px',
              marginLeft: '4px'
            }}
            aria-label="Dismiss message"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating CTA */}
      <a
        href={createGeneralEnquiryUrl('Floating Concierge')}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget pulse-whatsapp"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle size={18} fill="#ffffff" strokeWidth={0} />
        <span>Ask on WhatsApp</span>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .floating-whatsapp-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
