import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

interface GiftingSectionProps {
  onExploreGifts: () => void;
}

export const GiftingSection: React.FC<GiftingSectionProps> = ({ onExploreGifts }) => {
  return (
    <section id="gifting" style={{
      paddingTop: 'clamp(64px, 8vw, 108px)',
      paddingBottom: 'clamp(64px, 8vw, 108px)',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(32px, 6vw, 84px)',
          alignItems: 'center'
        }}>
          {/* Left Column: Visual Hamper Presentation */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-elevated)',
              position: 'relative',
              backgroundColor: 'var(--bg-surface-stone)',
              border: '1px solid var(--border-subtle)'
            }}>
              <img
                src="/images/products/crystal-pearl-saree-pins.jpg"
                alt="The Gifting Atelier Curations"
                style={{ width: '100%', height: 'clamp(380px, 42vw, 500px)', objectFit: 'cover' }}
              />

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(22, 19, 18, 0.75) 100%)'
              }} />

              {/* Inset Quote Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(8px)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold-dark)',
                  fontWeight: 700
                }}>
                  The Boutique Touch
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  color: 'var(--text-main)',
                  marginTop: '4px',
                  lineHeight: 1.35
                }}>
                  "Every gift is nestled in textured keepsake boxes with satin ribbons and personalized calligraphy notes."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Curation Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div className="section-eyebrow">
                <Sparkles size={11} color="var(--accent-gold-dark)" />
                <span>The Gifting Atelier</span>
              </div>

              <h2 className="editorial-heading-1" style={{ marginTop: '10px' }}>
                Something Cherished, <br />
                <span className="editorial-serif-italic" style={{ color: 'var(--accent-rose)' }}>
                  Lovingly Curated.
                </span>
              </h2>
            </div>

            <p className="luxury-subtext">
              Whether celebrating a milestone birthday, assembling bespoke return favors for a Sangeet, or creating a thoughtful token of affection, our atelier curates memorable gift boxes tailored to your exact budget.
            </p>

            {/* Gifting Architectural Points (No generic green checkboxes!) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingTop: '6px'
            }}>
              <div style={{
                paddingBottom: '14px',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.02em' }}>
                  Bridal & Mehendi Favor Suites
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.5, fontWeight: 300 }}>
                  Curated pairings of Jaipur Lakh kadas, mulberry satin scrunchies, and attar vials in coordinated celebratory tones.
                </div>
              </div>

              <div style={{
                paddingBottom: '14px',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.02em' }}>
                  Birthday & Sweet-Sixteen Edits
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.5, fontWeight: 300 }}>
                  Aesthetic Korean hair accessories, French acetate claws, and mist elixirs under ₹299.
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.02em' }}>
                  Bespoke Calligraphy & Packaging
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.5, fontWeight: 300 }}>
                  Each gift box includes complimentary handwritten cards and reusable eco-luxury keepsake packaging.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="gifting-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '12px' }}>
              <button
                onClick={onExploreGifts}
                className="btn-primary gifting-btn"
              >
                <span>Explore Gift Hampers</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={createGeneralEnquiryUrl('Custom Gifting Atelier')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp gifting-btn"
              >
                <MessageCircle size={16} />
                <span>Custom Bulk Hamper Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .gifting-cta-row {
            flex-direction: column;
          }
          .gifting-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
