import React from 'react';
import { TRUST_PILLARS } from '../../data/categories';
import { Sparkles, Shield, HeartHandshake, RefreshCw, Store, Gem, MessageSquareHeart } from 'lucide-react';

export const WhyShopWithUs: React.FC = () => {
  const icons = [
    <Gem size={22} color="var(--accent-rose)" />,
    <RefreshCw size={22} color="var(--accent-gold-dark)" />,
    <Sparkles size={22} color="var(--accent-rose)" />,
    <MessageSquareHeart size={22} color="var(--accent-whatsapp-dark)" />,
    <Store size={22} color="var(--accent-rose)" />,
    <HeartHandshake size={22} color="var(--accent-gold-dark)" />,
  ];

  return (
    <section style={{
      paddingTop: 'clamp(56px, 7vw, 90px)',
      paddingBottom: 'clamp(56px, 7vw, 90px)',
      backgroundColor: '#FAF7F2',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '48px',
          gap: '8px'
        }}>
          <div className="section-eyebrow">
            <Shield size={12} />
            <span>The Boutique Promise</span>
          </div>

          <h2 className="editorial-heading-1">
            Why Women Love Shopping With Us
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '580px' }}>
            We bridge the gap between authentic artisan heritage, modern fashion trends, and personalized in-store service.
          </p>
        </div>

        {/* Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                padding: '28px 24px',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'all var(--transition-smooth)'
              }}
              className="trust-card"
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: '#FAF4EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(197, 168, 128, 0.25)'
              }}>
                {icons[idx % icons.length]}
              </div>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  lineHeight: 1.2
                }}>
                  {pillar.title}
                </h3>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent-gold-dark)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginTop: '4px'
                }}>
                  {pillar.subtitle}
                </div>
              </div>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                fontWeight: 300
              }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-card);
          border-color: var(--accent-gold);
        }
      `}</style>
    </section>
  );
};
