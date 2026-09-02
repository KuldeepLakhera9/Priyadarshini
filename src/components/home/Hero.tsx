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
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(36px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Left Column: High-Fashion Editorial Typography & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Brand Eyebrow */}
            <div className="section-eyebrow">
              <Sparkles size={11} color="var(--accent-gold-dark)" />
              <span>Everyday Elegance, Beautifully Curated</span>
            </div>

            {/* Display Editorial Heading */}
            <h1 className="editorial-display">
              The Poetry of <br />
              <span className="editorial-serif-italic" style={{ color: 'var(--accent-rose)' }}>
                Adornment.
              </span>
            </h1>

            {/* Authentic Brand Voice Subtext */}
            <p className="luxury-subtext" style={{ maxWidth: '520px' }}>
              Beautiful pieces for everyday moments, celebrations and everything in between. Handcrafted Jaipur Lakh bangles, Korean hair accessories, botanical skincare and festive gifts.
            </p>

            {/* Primary Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              paddingTop: '6px',
            }}>
              <button
                onClick={onExploreClick}
                className="btn-primary"
              >
                <span>Explore The Archive</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={createBridalCustomOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--accent-gold)',
                  paddingBottom: '2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-rose)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
              >
                <span>Bridal Consultation</span>
                <ArrowDownRight size={14} color="var(--accent-gold-dark)" />
              </a>
            </div>

            {/* Architectural Stats (Clean, No SaaS Boxes) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border-subtle)',
              marginTop: '12px'
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                  fontWeight: 500,
                  color: 'var(--text-main)',
                  lineHeight: 1.1
                }}>
                  1,000+
                </div>
                <div style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-subtle)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: '4px'
                }}>
                  In-Store Designs
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                  fontWeight: 500,
                  color: 'var(--accent-rose)',
                  lineHeight: 1.1
                }}>
                  Pure Lakh
                </div>
                <div style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-subtle)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: '4px'
                }}>
                  Jaipuri Craft
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                  fontWeight: 500,
                  color: 'var(--accent-gold-dark)',
                  lineHeight: 1.1
                }}>
                  From ₹49
                </div>
                <div style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-subtle)',
                  letterSpacing: '0.12em',
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
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '16px',
              alignItems: 'end',
            }}>
              {/* Primary Tall Editorial Portrait */}
              <div
                className="img-zoom-container"
                style={{
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-elevated)',
                  height: 'clamp(380px, 42vw, 490px)',
                  backgroundColor: 'var(--bg-surface-stone)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop"
                  alt="Jaipur Lakh Bangles Heritage Craft"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Subtle Archival Tag Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(22, 19, 18, 0.82)',
                  backdropFilter: 'blur(6px)',
                  color: '#FAF7F2',
                  fontSize: '0.625rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  padding: '5px 10px',
                  borderRadius: 'var(--radius-xs)'
                }}>
                  Signature Edition
                </div>
              </div>

              {/* Secondary Inset Visuals */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  className="img-zoom-container"
                  style={{
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    height: 'clamp(180px, 20vw, 235px)',
                    backgroundColor: 'var(--bg-surface-stone)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=600&auto=format&fit=crop"
                    alt="Luxury Hair Accessories"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Editorial Caption Card */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xs)',
                  padding: '16px 18px',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-subtle)'
                }}>
                  <div style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-dark)',
                    fontWeight: 700
                  }}>
                    Curated For Her
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    color: 'var(--text-main)',
                    marginTop: '4px',
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
    </section>
  );
};
