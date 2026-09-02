import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';

export const InstagramShowcase: React.FC = () => {
  const instaPosts = [
    {
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600&auto=format&fit=crop',
      caption: 'Jaipuri bridal lakh stacks ready for the wedding season 🌸✨ #LakhBangles #BridalStyle',
      likes: '342'
    },
    {
      image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=600&auto=format&fit=crop',
      caption: 'Parisian marble hair claws for effortless daily updos 🤎 #HairAccessories #Chic',
      likes: '289'
    },
    {
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
      caption: 'Kundan polki openable kadas with micro gold polish ✨ In-store now! #FestiveBangles',
      likes: '415'
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
      caption: 'Steam-distilled Kannauj Desi Gulab mist for morning glow 🌹 #SkincareEssentials',
      likes: '512'
    }
  ];

  return (
    <section style={{
      paddingTop: 'clamp(56px, 7vw, 84px)',
      paddingBottom: 'clamp(56px, 7vw, 84px)',
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
              <InstagramIcon size={14} color="var(--accent-rose)" />
              <span>{BRAND_CONFIG.contact.instagramHandle}</span>
            </div>

            <h2 className="editorial-heading-1" style={{ marginTop: '6px' }}>
              Follow Our Latest Finds
            </h2>

            <p className="luxury-subtext" style={{ maxWidth: '520px', marginTop: '4px' }}>
              Discover styling inspiration, new in-store arrivals, customer unboxings, and behind-the-scenes craft stories.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--text-main)',
              color: '#FFFFFF',
              padding: '12px 22px',
              borderRadius: 'var(--radius-xs)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none'
            }}
          >
            <InstagramIcon size={16} color="#FFFFFF" />
            <span>Follow on Instagram</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Post Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
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
                backgroundColor: '#FAF4EB'
              }}
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="insta-img"
              />

              {/* Hover Overlay with caption & icon */}
              <div
                className="insta-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(25, 21, 20, 0.75)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#FFFFFF',
                  transition: 'opacity 0.2s ease',
                  opacity: 0,
                }}
              >
                <div style={{ alignSelf: 'flex-end' }}>
                  <InstagramIcon size={20} color="#FFFFFF" />
                </div>
                <div style={{ fontSize: '0.8125rem', lineHeight: 1.4 }}>
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
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};
