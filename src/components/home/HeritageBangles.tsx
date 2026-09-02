import { Sparkles, MessageCircle, HeartHandshake, ShieldCheck, Ruler, Palette } from 'lucide-react';
import { createBridalCustomOrderUrl } from '../../utils/whatsapp';

interface HeritageBanglesProps {
  onExploreBangles: () => void;
}

export const HeritageBangles: React.FC<HeritageBanglesProps> = ({ onExploreBangles }) => {
  return (
    <section id="heritage-bangles" style={{
      backgroundColor: '#1E1917',
      color: '#FAF7F2',
      paddingTop: 'clamp(56px, 7vw, 96px)',
      paddingBottom: 'clamp(56px, 7vw, 96px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Decorative Aura */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139, 38, 62, 0.22) 0%, rgba(30, 25, 23, 0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(36px, 6vw, 72px)',
          alignItems: 'center'
        }}>
          {/* Left Column: Visual Story */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              border: '1px solid rgba(197, 168, 128, 0.3)',
              position: 'relative',
              backgroundColor: '#110E0D'
            }}>
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop"
                alt="Handcrafted Jaipur Lakh Bangles"
                style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block' }}
              />

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(0deg, rgba(22, 19, 18, 0.9) 0%, rgba(22, 19, 18, 0.2) 60%)',
              }} />

              {/* Inside Caption Card */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                backgroundColor: 'rgba(26, 22, 21, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid rgba(197, 168, 128, 0.3)',
              }}>
                <div style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  The Artisan Signature
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.125rem',
                  color: '#FFFFFF'
                }}>
                  "Pure Shellac, Precision Heat Shaping & Royal Stones"
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Craftsmanship Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '10px'
              }}>
                <Sparkles size={13} />
                <span>Our Heritage Cornerstone</span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#FFFFFF',
                letterSpacing: '-0.015em'
              }}>
                Tradition, Reimagined <br />
                <span style={{ fontStyle: 'italic', color: '#E4D5C1', fontWeight: 400 }}>
                  For Every Celebration.
                </span>
              </h2>
            </div>

            <p style={{
              fontSize: '1rem',
              color: '#D4CDC5',
              lineHeight: 1.7,
              fontWeight: 300
            }}>
              Lakh bangles carry centuries of Indian royal heritage and auspicious charm. Each kada in our collection is handcrafted by master artisans using organic shellac resin, embedded with micro-cut stones, Kundan polki, and delicate mirrors.
            </p>

            {/* Feature List */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              paddingTop: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 168, 128, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent-gold)'
                }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>100% Skin Friendly</div>
                  <div style={{ fontSize: '0.75rem', color: '#A89E94', marginTop: '2px' }}>Non-allergic natural resin & smooth inner rims.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 38, 62, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#FFA8BD'
                }}>
                  <Palette size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>Outfit Matching</div>
                  <div style={{ fontSize: '0.75rem', color: '#A89E94', marginTop: '2px' }}>Send your lehenga or saree photo on WhatsApp.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 168, 128, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent-gold)'
                }}>
                  <Ruler size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>All Sizes in Stock</div>
                  <div style={{ fontSize: '0.75rem', color: '#A89E94', marginTop: '2px' }}>Sizes 2.2, 2.4, 2.6, 2.8 and custom fittings.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 38, 62, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#FFA8BD'
                }}>
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>Bridal & Return Favours</div>
                  <div style={{ fontSize: '0.75rem', color: '#A89E94', marginTop: '2px' }}>Bulk custom sets for Mehendi & Sangeet.</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '16px' }}>
              <button
                onClick={onExploreBangles}
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  color: '#1A1615',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-xs)',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(197, 168, 128, 0.35)'
                }}
              >
                Explore Lakh Bangles
              </button>

              <a
                href={createBridalCustomOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '14px 24px' }}
              >
                <MessageCircle size={18} />
                <span>Custom Bridal Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
