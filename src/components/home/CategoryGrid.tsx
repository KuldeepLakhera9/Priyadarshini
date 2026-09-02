import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  // Showcase core 8 merchandise categories (excluding dynamic collections like new-arrivals/best-sellers)
  const displayCategories = CATEGORIES.filter(c => c.id !== 'new-arrivals' && c.id !== 'best-sellers');

  return (
    <section id="categories-section" style={{
      paddingTop: 'clamp(56px, 7vw, 96px)',
      paddingBottom: 'clamp(56px, 7vw, 96px)',
      backgroundColor: '#FAF7F2',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 'clamp(40px, 6vw, 64px)',
          gap: '12px'
        }}>
          <div className="section-eyebrow">
            <Sparkles size={11} color="var(--accent-gold-dark)" />
            <span>The Curated Collections</span>
          </div>

          <h2 className="editorial-heading-1">
            Explore the Boutique
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '560px' }}>
            From time-honored Jaipur Lakh artistry to Parisian hair accents and daily skin glow rituals.
          </p>
        </div>

        {/* Asymmetrical Editorial Category Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px',
        }}>
          {displayCategories.map((cat, index) => {
            // Asymmetrical grid column spans:
            // 0 (Lakh): 7 cols, 1 (Fancy): 5 cols
            // 2 (Traditional): 4 cols, 3 (Hair): 4 cols, 4 (Fashion): 4 cols
            // 5 (Beauty): 4 cols, 6 (Fragrance): 4 cols, 7 (Gifts): 4 cols
            let colSpan = 'span 4';
            let cardHeight = '360px';

            if (index === 0) {
              colSpan = 'span 7';
              cardHeight = '420px';
            } else if (index === 1) {
              colSpan = 'span 5';
              cardHeight = '420px';
            }

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="editorial-category-card"
                style={{
                  gridColumn: colSpan,
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all var(--transition-smooth)'
                }}
              >
                {/* Image Container with delicate framing */}
                <div
                  className="img-zoom-container"
                  style={{
                    width: '100%',
                    height: cardHeight,
                    backgroundColor: 'var(--bg-surface-stone)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={cat.heroImage}
                    alt={cat.label}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  {/* Archival Index Pip */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(22, 19, 18, 0.78)',
                    backdropFilter: 'blur(6px)',
                    color: '#FAF7F2',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-xs)'
                  }}>
                    0{index + 1}
                  </div>

                  {cat.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                    }}>
                      <span className="badge-luxury badge-heritage">
                        {cat.badge}
                      </span>
                    </div>
                  )}

                  {/* Soft bottom vignette overlay for text legibility */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(22, 19, 18, 0.75) 100%)',
                    zIndex: 1,
                  }} />

                  {/* Overlaid Title & Meta for true editorial feel */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 22px',
                    zIndex: 2,
                    color: '#FAF7F2',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: index === 0 ? '1.85rem' : '1.35rem',
                      fontWeight: 500,
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                      color: '#FFFFFF'
                    }}>
                      {cat.label}
                    </h3>

                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      color: '#E6DDD2',
                      fontWeight: 300,
                      lineHeight: 1.4
                    }}>
                      {cat.subtitle}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '10px',
                      marginTop: '4px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-champagne)'
                    }}>
                      <span>{cat.itemCountDesc}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', fontWeight: 600 }}>
                        <span>Discover</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .editorial-category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }
        @media (max-width: 992px) {
          .editorial-category-card {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 640px) {
          .editorial-category-card {
            grid-column: span 12 !important;
          }
          .editorial-category-card .img-zoom-container {
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
};
