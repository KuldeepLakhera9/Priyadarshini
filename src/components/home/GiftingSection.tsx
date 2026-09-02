import { Gift, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

interface GiftingSectionProps {
  onExploreGifts: () => void;
}

export const GiftingSection: React.FC<GiftingSectionProps> = ({ onExploreGifts }) => {
  return (
    <section id="gifting" style={{
      paddingTop: 'clamp(56px, 7vw, 90px)',
      paddingBottom: 'clamp(56px, 7vw, 90px)',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center'
        }}>
          {/* Left Column: Visual Hamper Presentation */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-elevated)',
              position: 'relative',
              backgroundColor: '#FAF4EB'
            }}>
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop"
                alt="Festive Gifting & Bridal Hampers"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(25, 21, 20, 0.1) 0%, rgba(25, 21, 20, 0.7) 100%)'
              }} />

              {/* Floating Testimonial/Tag */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-rose)', fontWeight: 700, fontSize: '0.75rem' }}>
                  <Heart size={14} fill="var(--accent-rose)" />
                  <span>Custom Festive & Wedding Favours</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                  "Pre-packaged aesthetic boxes containing bangles, scrunchies, and fragrance for Karwa Chauth, Diwali & Mehendi."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Gifting Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div className="section-eyebrow">
                <Gift size={12} />
                <span>The Gifting Studio</span>
              </div>

              <h2 className="editorial-heading-1" style={{ marginTop: '8px' }}>
                Thoughtful Gifts, <br />
                <span style={{ fontStyle: 'italic', color: 'var(--accent-rose)', fontWeight: 400 }}>
                  Lovingly Packaged.
                </span>
              </h2>
            </div>

            <p className="luxury-subtext">
              Whether celebrating a birthday, seeking bridesmaids' return favors, or preparing festive hampers, we create charming gift boxes customized to your chosen budget.
            </p>

            {/* Gifting Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
              {[
                'Bespoke Bridal Favor Boxes (Bangles + Scrunchies + Attar)',
                'Sweet 16 Pastel Birthday Gift Kits (Under ₹299)',
                'Festive Corporate & Family Return Hampers',
                'Complimentary personalized calligraphy gift message card'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--accent-rose)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '10px' }}>
              <button
                onClick={onExploreGifts}
                className="btn-primary"
              >
                <span>Browse Gift Hampers</span>
              </button>

              <a
                href={createGeneralEnquiryUrl('Custom Gifting Box')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={17} />
                <span>Custom Bulk Gifting on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
