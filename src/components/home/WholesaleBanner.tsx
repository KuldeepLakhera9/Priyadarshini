import { Building2, MessageCircle, Sparkles } from 'lucide-react';
import { createWholesaleEnquiryUrl } from '../../utils/whatsapp';

export const WholesaleBanner: React.FC = () => {
  return (
    <section id="wholesale" style={{
      paddingTop: '48px',
      paddingBottom: '48px',
      backgroundColor: '#FAF4EB',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          padding: 'clamp(24px, 4vw, 36px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', maxWidth: '640px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: 'var(--accent-rose-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: 'var(--accent-rose)'
            }}>
              <Building2 size={24} />
            </div>

            <div>
              <div style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold-dark)',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Sparkles size={11} />
                <span>Boutique B2B & Bulk Orders</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                lineHeight: 1.25
              }}>
                Retailers, Boutiques & Wedding Planners
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginTop: '6px',
                lineHeight: 1.5
              }}>
                We supply handcrafted Lakh bangles, Korean hair accessories, and return gift hampers in bulk with customized packaging and wholesale price catalogs.
              </p>
            </div>
          </div>

          <a
            href={createWholesaleEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              padding: '12px 24px',
              whiteSpace: 'nowrap'
            }}
          >
            <MessageCircle size={18} />
            <span>Wholesale Enquiry on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
