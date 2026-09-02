import React from 'react';
import { Sparkles } from 'lucide-react';

export const WhyShopWithUs: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Generational Craftsmanship',
      desc: 'Authentic Jaipur Lakh molded by skilled artisans using organic shellac and non-allergic natural materials, finished with radiant lustre.'
    },
    {
      num: '02',
      title: 'Fresh Weekly Additions',
      desc: 'We refresh our boutique collection every 7 days with trending Korean hair claws, festive jhumkas, and seasonal celebratory suites.'
    },
    {
      num: '03',
      title: 'Accessible Luxury',
      desc: 'Fine craftsmanship and thoughtful curation from ₹49 everyday essentials to ₹899 heirloom bridal choodas, without retail markups.'
    },
    {
      num: '04',
      title: 'Personal Styling & In-Store Touch',
      desc: 'Visit our physical boutique to try on sizes and feel textures in person, or request high-resolution live video previews on WhatsApp.'
    }
  ];

  return (
    <section style={{
      paddingTop: 'clamp(64px, 8vw, 100px)',
      paddingBottom: 'clamp(64px, 8vw, 100px)',
      backgroundColor: '#FAF7F2',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '52px',
          gap: '12px'
        }}>
          <div className="section-eyebrow">
            <Sparkles size={11} color="var(--accent-gold-dark)" />
            <span>The Boutique Ethos</span>
          </div>

          <h2 className="editorial-heading-1">
            Curated With Devotion
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '580px' }}>
            Bridging the gap between age-old Indian artisan heritage, contemporary aesthetics, and warm offline hospitality.
          </p>
        </div>

        {/* Architectural Pillars Grid (No SaaS Icon Circles!) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
        }}>
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                padding: '32px 26px',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                position: 'relative',
                transition: 'all var(--transition-smooth)'
              }}
              className="ethos-card"
            >
              {/* Archival Index Number */}
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--accent-gold)',
                lineHeight: 1
              }}>
                {pillar.num}
              </div>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-main)',
                  lineHeight: 1.25
                }}>
                  {pillar.title}
                </h3>
              </div>

              <p style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                fontWeight: 300
              }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ethos-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }
      `}</style>
    </section>
  );
};
