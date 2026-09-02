import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div style={{ position: 'fixed', bottom: '86px', right: '20px', zIndex: 85, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
      {/* Mini Dismissable Concierge Bubble */}
      {showTooltip && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            color: 'var(--text-main)',
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.8125rem',
            maxWidth: '220px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            animation: 'fadeIn 0.4s ease-out',
            position: 'relative'
          }}
        >
          <Sparkles size={16} color="var(--accent-rose)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.75rem', color: 'var(--accent-rose)' }}>
              Need Styling or Sizing Help?
            </div>
            <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              Chat with our in-store stylist on WhatsApp!
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
        <MessageCircle size={22} fill="#ffffff" strokeWidth={0} />
        <span>Ask on WhatsApp</span>
      </a>
    </div>
  );
};
