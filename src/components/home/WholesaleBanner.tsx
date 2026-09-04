import { Building2, MessageCircle, Sparkles } from 'lucide-react';
import { createWholesaleEnquiryUrl } from '../../utils/whatsapp';

export const WholesaleBanner: React.FC = () => {
  return (
    <section id="wholesale" style={{
      paddingTop: '40px',
      paddingBottom: '40px',
      backgroundColor: 'var(--bg-canvas-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xs)',
          border: '1px solid var(--border-subtle)',
          padding: 'clamp(26px, 4vw, 36px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', maxWidth: '680px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: 'var(--accent-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: 'var(--accent-gold-dark)',
              border: '1px solid rgba(191, 163, 124, 0.25)'
            }}>
              <Building2 size={22} />
            </div>

            <div>
              <div style={{
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold-dark)',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Sparkles size={10} />
                <span>Boutique Supply & Wedding Favors</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 500,
                color: 'var(--text-main)',
                lineHeight: 1.25
              }}>
                Retailers, Boutiques & Wedding Planners
              </h3>

              <p style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                marginTop: '6px',
                lineHeight: 1.6,
                fontWeight: 300
              }}>
                We provide curated wholesale supply of authentic Jaipur Lakh bangles, Korean hair accessories, and festive return hampers with custom packaging and direct artisan pricing.
              </p>
            </div>
          </div>

          <a
            href={createWholesaleEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp wholesale-btn"
            style={{
              padding: '12px 22px',
              textAlign: 'center',
            }}
          >
            <MessageCircle size={16} />
            <span>Wholesale Enquiry on WhatsApp</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 580px) {
          .wholesale-btn {
            width: 100% !important;
            justify-content: center !important;
            white-space: normal !important;
          }
        }
      `}</style>
    </section>
  );
};
