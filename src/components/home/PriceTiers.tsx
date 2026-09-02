import { PRICE_TIERS } from '../../data/categories';
import { ArrowRight, Tag } from 'lucide-react';

interface PriceTiersProps {
  onSelectPriceTier: (tierId: string) => void;
}

export const PriceTiers: React.FC<PriceTiersProps> = ({ onSelectPriceTier }) => {
  return (
    <section id="price-tiers" style={{
      paddingTop: 'clamp(56px, 7vw, 84px)',
      paddingBottom: 'clamp(56px, 7vw, 84px)',
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
          marginBottom: '40px',
          gap: '8px'
        }}>
          <div className="section-eyebrow">
            <Tag size={12} />
            <span>Honest & Accessible Luxury</span>
          </div>

          <h2 className="editorial-heading-1">
            Shop by Price Range
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '560px' }}>
            Elevate your everyday style or find the perfect party favor without breaking the bank.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {PRICE_TIERS.map((tier) => (
            <div
              key={tier.id}
              onClick={() => onSelectPriceTier(tier.id)}
              className="price-tier-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-subtle)',
                cursor: 'pointer',
                transition: 'all var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image banner */}
              <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={tier.image}
                  alt={tier.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  className="tier-img"
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'var(--text-main)',
                  color: '#FAF7F2',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-xs)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600
                }}>
                  {tier.title}
                </div>
              </div>

              {/* Card info */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', gap: '14px' }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--text-main)'
                  }}>
                    {tier.tagline}
                  </div>
                  <div style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    marginTop: '6px',
                    lineHeight: 1.5
                  }}>
                    {tier.popularItems}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--accent-rose)'
                }}>
                  <span>Browse Collection</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .price-tier-card:hover .tier-img {
          transform: scale(1.08);
        }
        .price-tier-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--accent-gold);
        }
      `}</style>
    </section>
  );
};
