import React from 'react';
import { Sparkles, ArrowRight, ArrowDownRight } from 'lucide-react';
import { createBridalCustomOrderUrl } from '../../utils/whatsapp';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#FAF7F2',
      paddingTop: 'clamp(36px, 5vw, 68px)',
      paddingBottom: 'clamp(48px, 7vw, 92px)',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(28px, 5vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Left Column: High-Fashion Editorial Typography & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(18px, 3vw, 24px)', minWidth: 0 }}>
            {/* Brand Eyebrow */}
            <div className="section-eyebrow" style={{ flexWrap: 'wrap' }}>
              <Sparkles size={11} color="var(--accent-gold-dark)" />
              <span>Bhawani Peth, Jalgaon • Adornment Studio</span>
            </div>

            {/* Display Editorial Heading */}
            <h1 className="editorial-display" style={{ fontSize: 'clamp(2.15rem, 5.5vw, 4.4rem)', lineHeight: 1.08, wordBreak: 'break-word' }}>
              Priyadarshani <br />
              <span className="editorial-serif-italic" style={{ color: 'var(--accent-rose)' }}>
                Adornment, Beauty & Everyday Elegance.
              </span>
            </h1>

            {/* Authentic Brand Voice Subtext */}
            <p className="luxury-subtext" style={{ maxWidth: '540px' }}>
              Bringing together traditional & fancy bangles, Korean hair accessories, oxidised jewellery, fine fragrances and thoughtful gifts in Bhawani Peth, Jalgaon.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-cta-row" style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              paddingTop: '6px',
            }}>
              <button
                onClick={onExploreClick}
                className="btn-primary hero-btn"
              >
                <span>Explore Collections</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="#visit-store"
                className="btn-secondary hero-btn"
              >
                <span>Visit Our Store</span>
              </a>

              <a
                href={createBridalCustomOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-whatsapp)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 4px',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span>WhatsApp Us</span>
                <ArrowDownRight size={14} />
              </a>
            </div>

            {/* Architectural Stats (Clean, No SaaS Boxes) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(8px, 2vw, 20px)',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
              marginTop: '6px'
            }}>
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)',
                  fontWeight: 500,
                  color: 'var(--text-main)',
                  lineHeight: 1.1
                }}>
                  1,000+
                </div>
                <div style={{
                  fontSize: 'clamp(0.5625rem, 1.2vw, 0.6875rem)',
                  color: 'var(--text-subtle)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: '4px'
                }}>
                  In-Store Designs
                </div>
              </div>

              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)',
                  fontWeight: 500,
                  color: 'var(--accent-rose)',
                  lineHeight: 1.1
                }}>
                  Pure Lakh
                </div>
                <div style={{
                  fontSize: 'clamp(0.5625rem, 1.2vw, 0.6875rem)',
                  color: 'var(--text-subtle)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: '4px'
                }}>
                  Jaipuri Craft
                </div>
              </div>

              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)',
                  fontWeight: 500,
                  color: 'var(--accent-gold-dark)',
                  lineHeight: 1.1
                }}>
                  From ₹49
                </div>
                <div style={{
                  fontSize: 'clamp(0.5625rem, 1.2vw, 0.6875rem)',
                  color: 'var(--text-subtle)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: '4px'
                }}>
                  Accessible Luxury
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Editorial Framing */}
          <div style={{ position: 'relative' }}>
            <div className="hero-image-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '16px',
              alignItems: 'end',
            }}>
              {/* Primary Tall Editorial Portrait */}
              <div
                className="img-zoom-container hero-primary-img"
                style={{
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-elevated)',
                  height: 'clamp(280px, 42vw, 490px)',
                  backgroundColor: 'var(--bg-surface-stone)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative'
                }}
              >
                <img
                  src="/images/products/jaipuri-rani-pink-lakh-kadas.jpg"
                  alt="Jaipur Lakh Bangles Heritage Craft"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Subtle Archival Tag Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(22, 19, 18, 0.82)',
                  backdropFilter: 'blur(6px)',
                  color: '#FAF7F2',
                  fontSize: '0.625rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-xs)'
                }}>
                  Signature Edition
                </div>
              </div>

              {/* Secondary Inset Visuals */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div
                  className="img-zoom-container hero-secondary-img"
                  style={{
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    height: 'clamp(140px, 20vw, 235px)',
                    backgroundColor: 'var(--bg-surface-stone)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <img
                    src="/images/products/korean-pastel-hair-claws.jpg"
                    alt="Korean Pastel Hair Accessories"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Editorial Caption Card */}
                <div className="hero-caption-card" style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xs)',
                  padding: '14px 16px',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-subtle)'
                }}>
                  <div style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-dark)',
                    fontWeight: 700
                  }}>
                    Curated For Her
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                    color: 'var(--text-main)',
                    marginTop: '2px',
                    lineHeight: 1.3
                  }}>
                    "Crafted with devotion for celebratory moments."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-cta-row {
            flex-direction: column;
            align-items: stretch !important;
          }
          .hero-btn {
            width: 100% !important;
          }
          .hero-image-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: 10px !important;
          }
          .hero-primary-img {
            height: 260px !important;
          }
          .hero-secondary-img {
            height: 130px !important;
          }
          .hero-caption-card {
            padding: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};
