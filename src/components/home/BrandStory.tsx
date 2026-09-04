import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { Sparkles, ArrowRight, MapPin } from 'lucide-react';

interface BrandStoryProps {
  onExploreCollection: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onExploreCollection }) => {
  const story = BRAND_CONFIG.story;

  return (
    <section id="brand-story" style={{
      paddingTop: 'clamp(64px, 8vw, 108px)',
      paddingBottom: 'clamp(64px, 8vw, 108px)',
      backgroundColor: '#FAF7F2',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(32px, 6vw, 84px)',
          alignItems: 'center'
        }}>
          {/* Left Column: Visual Collage Spread */}
          <div style={{ position: 'relative' }}>
            <div className="story-image-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '14px',
              alignItems: 'center'
            }}>
              {/* Primary Image: Bangle Craftsmanship */}
              <div
                className="story-primary-img"
                style={{
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-elevated)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface-stone)',
                  height: 'clamp(300px, 44vw, 480px)'
                }}
              >
                <img
                  src="/images/products/jaipuri-rani-pink-lakh-kadas.jpg"
                  alt="Jaipur Lakh Craftsmanship"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Secondary Inset Image: Everyday Hair & Fragrance */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}>
                <div
                  className="story-secondary-img"
                  style={{
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--bg-surface-stone)',
                    height: 'clamp(140px, 20vw, 225px)'
                  }}
                >
                  <img
                    src="/images/products/korean-pastel-hair-claws.jpg"
                    alt="Everyday Korean Hair Accents"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div
                  className="story-secondary-img"
                  style={{
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--bg-surface-stone)',
                    height: 'clamp(140px, 20vw, 225px)'
                  }}
                >
                  <img
                    src="/images/products/artisanal-pocket-perfumes-attar.jpg"
                    alt="Fine Fragrances & Roll-On Attars"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div className="section-eyebrow">
                <Sparkles size={11} color="var(--accent-gold-dark)" />
                <span>{story.kicker}</span>
              </div>

              <h2 className="editorial-heading-1" style={{ marginTop: '8px' }}>
                {story.heading}
              </h2>
            </div>

            {/* Signature Emotional Quote */}
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
              color: 'var(--text-main)',
              lineHeight: 1.45,
              fontStyle: 'italic',
              paddingLeft: '16px',
              borderLeft: '2px solid var(--accent-rose)',
              fontWeight: 400
            }}>
              "{story.quote}"
            </div>

            {/* Narrative Paragraphs */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              fontWeight: 300
            }}>
              {story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Brand Pillars Mini-Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '12px',
              paddingTop: '6px'
            }}>
              {story.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-xs)',
                    padding: '14px 16px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.01em' }}>
                    {pillar.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '4px', lineHeight: 1.5, fontWeight: 300 }}>
                    {pillar.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="story-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
              <button
                onClick={onExploreCollection}
                className="btn-primary story-btn"
              >
                <span>Explore Curated Boutique</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="#visit-store"
                className="btn-secondary story-btn"
              >
                <MapPin size={15} color="var(--accent-rose)" />
                <span>Visit Store in Person</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .story-cta-row {
            flex-direction: column;
          }
          .story-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .story-image-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 10px !important;
          }
          .story-primary-img {
            height: 250px !important;
          }
          .story-secondary-img {
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
};
