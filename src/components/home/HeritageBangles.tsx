import React from 'react';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { createBridalCustomOrderUrl } from '../../utils/whatsapp';

interface HeritageBanglesProps {
  onExploreBangles: () => void;
}

export const HeritageBangles: React.FC<HeritageBanglesProps> = ({ onExploreBangles }) => {
  return (
    <section id="heritage-bangles" style={{
      backgroundColor: '#161312',
      color: '#FAF7F2',
      paddingTop: 'clamp(64px, 8vw, 108px)',
      paddingBottom: 'clamp(64px, 8vw, 108px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 7vw, 84px)',
          alignItems: 'center'
        }}>
          {/* Left Column: Visual Monograph Frame */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
              border: '1px solid rgba(191, 163, 124, 0.25)',
              position: 'relative',
              backgroundColor: '#1C1817'
            }}>
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop"
                alt="Handcrafted Jaipur Lakh Bangles"
                style={{ width: '100%', height: 'clamp(380px, 44vw, 520px)', objectFit: 'cover', display: 'block' }}
              />

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(0deg, rgba(22, 19, 18, 0.85) 0%, rgba(22, 19, 18, 0.15) 60%)',
              }} />

              {/* Inside Caption Monograph */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                backgroundColor: 'rgba(22, 19, 18, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '18px 22px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid rgba(191, 163, 124, 0.3)',
              }}>
                <div style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  The Artisan Signature
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  color: '#FFFFFF',
                  lineHeight: 1.3
                }}>
                  "Pure natural shellac molded over charcoal embers, studded with hand-cut crystals."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Craft Story (No SaaS icons!) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            <div>
              <div className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>
                <Sparkles size={11} color="var(--accent-gold)" />
                <span>Signature Heritage • Priyadarshani</span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.12,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginTop: '10px'
              }}>
                The Bangle Edit <br />
                <span className="editorial-serif-italic" style={{ color: 'var(--accent-champagne)' }}>
                  Colour, Craftsmanship & Celebration.
                </span>
              </h2>
            </div>

            <p style={{
              fontSize: '1rem',
              color: '#D4CBC2',
              lineHeight: 1.75,
              fontWeight: 300
            }}>
              Bangles are the heartbeat of Priyadarshani. From hand-sculpted Jaipur Lakh kadas and velvet chooris to openable crystal kadas and celebratory bridal choodas — each set is curated to bring color, texture, and festive joy to your wrists.
            </p>

            {/* Monograph Craft Steps — Elegant Roman Numerals */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingTop: '8px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '18px',
                paddingBottom: '14px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--accent-gold)',
                  fontWeight: 600,
                  flexShrink: 0
                }}>
                  I.
                </span>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                    100% Pure Organic Shellac
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#A69B90', marginTop: '2px', lineHeight: 1.5 }}>
                    Non-allergic, skin-safe resin heat-shaped on traditional wooden spindles with mirror polish.
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '18px',
                paddingBottom: '14px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--accent-gold)',
                  fontWeight: 600,
                  flexShrink: 0
                }}>
                  II.
                </span>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                    Bespoke Lehenga & Saree Matching
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#A69B90', marginTop: '2px', lineHeight: 1.5 }}>
                    Send your bridal outfit photo on WhatsApp for color-coordinated kadas and velvet choodas.
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '18px'
              }}>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--accent-gold)',
                  fontWeight: 600,
                  flexShrink: 0
                }}>
                  III.
                </span>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                    Flawless Size Calibration
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#A69B90', marginTop: '2px', lineHeight: 1.5 }}>
                    Sizes 2.2, 2.4, 2.6, 2.8 and custom fittings available in-store and via video consultation.
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '12px' }}>
              <button
                onClick={onExploreBangles}
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  color: '#161312',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-xs)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 18px rgba(191, 163, 124, 0.3)'
                }}
              >
                <span>View Lakh Collection</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={createBridalCustomOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF'
                }}
              >
                <MessageCircle size={16} />
                <span>Bridal Consultation on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
