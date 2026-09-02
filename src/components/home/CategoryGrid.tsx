import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories-section" style={{
      paddingTop: 'clamp(48px, 6vw, 80px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)',
      backgroundColor: '#FAF7F2',
    }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 'clamp(32px, 5vw, 48px)',
          gap: '10px'
        }}>
          <div className="section-eyebrow">
            <Sparkles size={12} />
            <span>Curated For Her</span>
          </div>

          <h2 className="editorial-heading-1">
            Shop by Collection
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '580px' }}>
            From time-honored Lakh craft to modern Parisian hair accents and daily skin glow essentials.
          </p>
        </div>

        {/* Editorial Category Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="category-card"
              style={{
                position: 'relative',
                height: index === 0 || index === 1 ? '360px' : '300px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-subtle)',
                transition: 'all var(--transition-smooth)',
                backgroundColor: '#EFE8DF'
              }}
            >
              {/* Background Image */}
              <img
                src={cat.heroImage}
                alt={cat.label}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="category-bg-image"
              />

              {/* Dark Gradient Overlay for text contrast */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(25, 21, 20, 0.15) 0%, rgba(25, 21, 20, 0.4) 40%, rgba(25, 21, 20, 0.88) 100%)',
                zIndex: 1,
              }} />

              {/* Top Badge */}
              {cat.badge && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  zIndex: 2,
                }}>
                  <span style={{
                    backgroundColor: cat.id === 'lakh-bangles' ? 'rgba(139, 38, 62, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                    color: cat.id === 'lakh-bangles' ? '#ffffff' : 'var(--text-main)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-xs)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}>
                    {cat.id === 'lakh-bangles' && <Sparkles size={10} />}
                    {cat.badge}
                  </span>
                </div>
              )}

              {/* Bottom Details Content */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px 20px',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                color: '#FAF7F2'
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: '0.02em',
                }}>
                  {cat.label}
                </div>

                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: '#E8E1D7',
                  fontWeight: 300,
                }}>
                  {cat.subtitle}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-champagne)',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}>
                  <span>{cat.itemCountDesc}</span>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#FFFFFF'
                  }}>
                    <span>Explore</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .category-card:hover .category-bg-image {
          transform: scale(1.08);
        }
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
        }
      `}</style>
    </section>
  );
};
