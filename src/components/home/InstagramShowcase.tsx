import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';
import { trackConversionEvent } from '../../utils/analytics';

export const InstagramShowcase: React.FC = () => {
  const instaPosts = [
    {
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600&auto=format&fit=crop',
      caption: 'Jaipuri bridal Lakh stacks handcrafted for the festive season 🌸✨',
      tag: '#LakhBangles'
    },
    {
      image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=600&auto=format&fit=crop',
      caption: 'French cellulose acetate claws for effortless daily Parisian hair updos 🤎',
      tag: '#HairAccents'
    },
    {
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
      caption: 'Kundan polki openable kadas with micro-gold antique finish ✨',
      tag: '#BridalJewels'
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
      caption: 'Steam-distilled Kannauj Desi Gulab mist for natural morning skin hydration 🌹',
      tag: '#BotanicalGlow'
    }
  ];

  return (
    <section style={{
      paddingTop: 'clamp(56px, 7vw, 92px)',
      paddingBottom: 'clamp(56px, 7vw, 92px)',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '36px'
        }}>
          <div>
            <div className="section-eyebrow">
              <InstagramIcon size={12} color="var(--accent-gold-dark)" />
              <span>{BRAND_CONFIG.contact.instagramHandle}</span>
            </div>

            <h2 className="editorial-heading-1" style={{ marginTop: '8px' }}>
              Follow Our Latest Finds
            </h2>

            <p className="luxury-subtext" style={{ maxWidth: '520px', marginTop: '4px' }}>
              New arrivals, styling inspiration and beautiful finds from our store.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href={BRAND_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversionEvent('instagram_clicked', { source: 'homepage_section' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--text-main)',
                color: '#FFFFFF',
                padding: '12px 22px',
                borderRadius: 'var(--radius-xs)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)'
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-rose)')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--text-main)')}
            >
              <InstagramIcon size={15} color="#FFFFFF" />
              <span>Follow Us on Instagram</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={createGeneralEnquiryUrl('VIP Broadcast Club')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversionEvent('whatsapp_enquiry_clicked', { source: 'instagram_broadcast' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--accent-whatsapp)',
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: 'var(--radius-xs)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp VIP Drops</span>
            </a>
          </div>
        </div>

        {/* Post Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '18px'
        }}>
          {instaPosts.map((post, idx) => (
            <a
              key={idx}
              href={BRAND_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--radius-xs)',
                overflow: 'hidden',
                display: 'block',
                backgroundColor: 'var(--bg-surface-stone)',
                border: '1px solid var(--border-subtle)'
              }}
              onClick={() => trackConversionEvent('instagram_clicked', { source: 'post_thumbnail', index: idx })}
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
                className="insta-img"
              />

              {/* Hover Overlay with caption */}
              <div
                className="insta-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(22, 19, 18, 0.78)',
                  backdropFilter: 'blur(4px)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#FFFFFF',
                  transition: 'opacity 0.25s ease',
                  opacity: 0,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-champagne)' }}>
                    {post.tag}
                  </span>
                  <InstagramIcon size={18} color="#FFFFFF" />
                </div>
                <div style={{ fontSize: '0.8125rem', lineHeight: 1.45, fontWeight: 300 }}>
                  {post.caption}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .insta-card:hover .insta-overlay {
          opacity: 1;
        }
        .insta-card:hover .insta-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
};
