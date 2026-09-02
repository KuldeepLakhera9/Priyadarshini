import React from 'react';
import { SEASONAL_COLLECTIONS, type SeasonalCollection } from '../../data/collections';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SeasonalCollectionsProps {
  onSelectCollection: (collection: SeasonalCollection) => void;
}

export const SeasonalCollections: React.FC<SeasonalCollectionsProps> = ({ onSelectCollection }) => {
  const activeCollections = SEASONAL_COLLECTIONS.filter(c => c.isActive);

  if (activeCollections.length === 0) return null;

  return (
    <section id="seasonal-collections" style={{
      paddingTop: 'clamp(56px, 7vw, 92px)',
      paddingBottom: 'clamp(56px, 7vw, 92px)',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '40px',
          gap: '12px'
        }}>
          <div className="section-eyebrow">
            <Sparkles size={11} color="var(--accent-gold-dark)" />
            <span>Curated Seasonal Edits</span>
          </div>

          <h2 className="editorial-heading-1">
            Celebratory Collections
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '560px' }}>
            Thoughtfully assembled suites for weddings, festive pujas, and elevated everyday styling.
          </p>
        </div>

        {/* Collections Editorial Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {activeCollections.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col)}
              className="seasonal-col-card"
              style={{
                backgroundColor: '#FAF7F2',
                borderRadius: 'var(--radius-xs)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-subtle)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all var(--transition-smooth)'
              }}
            >
              {/* Image Banner */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={col.heroImage}
                  alt={col.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="seasonal-img"
                />

                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: 'rgba(22, 19, 18, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: 'var(--accent-gold)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-xs)'
                }}>
                  {col.badge}
                </div>
              </div>

              {/* Text Meta */}
              <div style={{
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-between',
                gap: '14px'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-dark)',
                    fontWeight: 700
                  }}>
                    {col.season}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 500,
                    color: 'var(--text-main)',
                    marginTop: '4px',
                    lineHeight: 1.25
                  }}>
                    {col.title}
                  </h3>

                  <p style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    marginTop: '6px',
                    lineHeight: 1.55,
                    fontWeight: 300
                  }}>
                    {col.description}
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
                  <span>Explore Suite ({col.productIds.length} Designs)</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .seasonal-col-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }
        .seasonal-col-card:hover .seasonal-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
};
