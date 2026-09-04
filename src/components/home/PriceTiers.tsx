import { ArrowRight, Sparkles } from 'lucide-react';

interface PriceTiersProps {
  onSelectPriceTier: (tierId: string) => void;
}

interface LuxuryTier {
  id: string;
  tierTitle: string;
  priceLabel: string;
  curationName: string;
  description: string;
  image: string;
}

const LUXURY_TIERS: LuxuryTier[] = [
  {
    id: 'under-99',
    tierTitle: 'Under ₹99',
    priceLabel: 'Under ₹99',
    curationName: 'The Little Accents Edit',
    description: 'Mini pastel Korean hair claws, carved antique silver rings, and crystal pins.',
    image: '/images/products/korean-pastel-hair-claws.jpg',
  },
  {
    id: 'under-199',
    tierTitle: 'Under ₹199',
    priceLabel: 'Under ₹199',
    curationName: 'Little Finds Worth Discovering',
    description: 'Mulberry silk satin scrunchies, organza butterfly hairpins, and pure roll-on attars.',
    image: '/images/products/butterfly-clips-pearl-headband.jpg',
  },
  {
    id: 'under-299',
    tierTitle: 'Under ₹299',
    priceLabel: 'Under ₹299',
    curationName: 'The Everyday Statement Edit',
    description: 'Handcrafted daily Jaipur Lakh kadas, pearl-studded headbands, and Bohemian oxidised necklace sets.',
    image: '/images/products/artisanal-pocket-perfumes-attar.jpg',
  },
  {
    id: 'under-499',
    tierTitle: 'Under ₹499',
    priceLabel: 'Under ₹499',
    curationName: 'Elevated Picks for Every Occasion',
    description: 'Kundan polki openable kadas, festive velvet bangles, and celebratory keepsake gift hampers.',
    image: '/images/products/bridal-kundan-lakh-chooda.jpg',
  }
];

export const PriceTiers: React.FC<PriceTiersProps> = ({ onSelectPriceTier }) => {
  return (
    <section id="price-tiers" style={{
      paddingTop: 'clamp(64px, 8vw, 100px)',
      paddingBottom: 'clamp(64px, 8vw, 100px)',
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
          gap: '12px'
        }}>
          <div className="section-eyebrow">
            <Sparkles size={11} color="var(--accent-gold-dark)" />
            <span>Honest & Accessible Luxury</span>
          </div>

          <h2 className="editorial-heading-1">
            Curated Tiers of Everyday Indulgence
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '560px' }}>
            Elevate your everyday rituals or discover the perfect festive token across four carefully curated price edits.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {LUXURY_TIERS.map((tier) => (
            <div
              key={tier.id}
              onClick={() => onSelectPriceTier(tier.id)}
              className="luxury-tier-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-subtle)',
                cursor: 'pointer',
                transition: 'all var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image banner with quiet label */}
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={tier.image}
                  alt={tier.curationName}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="tier-img"
                />
                
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(22, 19, 18, 0.88)',
                  backdropFilter: 'blur(6px)',
                  color: '#FAF7F2',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-xs)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {tier.priceLabel}
                </div>
              </div>

              {/* Card info */}
              <div style={{
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-between',
                gap: '16px'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-dark)',
                    fontWeight: 700
                  }}>
                    {tier.tierTitle}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: 'var(--text-main)',
                    marginTop: '4px',
                    lineHeight: 1.25
                  }}>
                    {tier.curationName}
                  </h3>

                  <p style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    marginTop: '6px',
                    lineHeight: 1.55,
                    fontWeight: 300
                  }}>
                    {tier.description}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--accent-rose)'
                }}>
                  <span>Explore Edit</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .luxury-tier-card:hover .tier-img {
          transform: scale(1.06);
        }
        .luxury-tier-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }
      `}</style>
    </section>
  );
};
