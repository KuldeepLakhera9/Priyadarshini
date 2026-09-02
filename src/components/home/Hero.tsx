import React from 'react';
import { Sparkles, MessageCircle, ArrowDownRight, Compass } from 'lucide-react';
import { createGeneralEnquiryUrl, createBridalCustomOrderUrl } from '../../utils/whatsapp';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#FAF7F2',
      paddingTop: 'clamp(24px, 4vw, 48px)',
      paddingBottom: 'clamp(40px, 6vw, 72px)',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      {/* Background Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(197, 168, 128, 0.18) 0%, rgba(250, 247, 242, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
        }}>
          {/* Left Column: Editorial Headline & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Boutique Badge */}
            <div>
              <div className="section-eyebrow">
                <Sparkles size={12} />
                <span>Boutique Digital Showroom</span>
              </div>
            </div>

            {/* Main Luxury Heading */}
            <h1 className="editorial-heading-hero">
              Where Heritage <br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent-rose)', fontWeight: 400 }}>
                Meets Modern
              </span> Elegance.
            </h1>

            {/* Subheading Positioning */}
            <p className="luxury-subtext" style={{ maxWidth: '520px' }}>
              Handcrafted Jaipur Lakh & Bridal Bangles, Korean Hair Accessories, Artisanal Fragrances, and Everyday Beauty Essentials — curated for the graceful woman.
            </p>

            {/* Primary Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              paddingTop: '8px',
            }}>
              <button
                onClick={onExploreClick}
                className="btn-primary"
                style={{ flexGrow: 0 }}
              >
                <Compass size={18} />
                <span>Explore Catalogue</span>
              </button>

              <a
                href={createGeneralEnquiryUrl('Hero Banner')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flexGrow: 0 }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Custom Bridal Matching Sub-CTA */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              paddingTop: '8px',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)'
            }}>
              <span style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>Bride-to-be?</span>
              <a
                href={createBridalCustomOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-main)',
                  textDecoration: 'underline',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Request Custom Color & Bangle Sizing on WhatsApp
                <ArrowDownRight size={14} color="var(--accent-rose)" />
              </a>
            </div>

            {/* Three Pillar Metric Tickers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
              marginTop: '12px'
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  1,000+
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Offline Designs
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-rose)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Jaipur Lakh Craft
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-gold-dark)' }}>
                  ₹49+
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Affordable Luxe
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Grid */}
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '16px',
              position: 'relative'
            }}>
              {/* Main Feature Image */}
              <div
                className="img-zoom-container"
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-elevated)',
                  height: '420px',
                  backgroundColor: '#EFE8DF'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop"
                  alt="Jaipur Lakh Bangles Heritage Craft"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Stacked Secondary Visuals */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  className="img-zoom-container"
                  style={{
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    height: '198px',
                    backgroundColor: '#EFE8DF'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=600&auto=format&fit=crop"
                    alt="Luxury Hair Accessories"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div
                  className="img-zoom-container"
                  style={{
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    height: '206px',
                    backgroundColor: '#EFE8DF'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop"
                    alt="Beauty & Skincare Essentials"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Luxury Tag Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              left: '20px',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xs)',
              padding: '12px 18px',
              boxShadow: '0 10px 25px rgba(25, 21, 20, 0.1)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 3
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-rose-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={16} color="var(--accent-rose)" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Offline Store & WhatsApp Concierge
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                  Try in store or order via WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
