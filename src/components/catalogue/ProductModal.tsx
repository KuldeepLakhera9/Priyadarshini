import { useState } from 'react';
import type { Product } from '../../types';
import { BRAND_CONFIG } from '../../config/brand';
import { X, MessageCircle, Sparkles, Check, Share2, MapPin, ShieldCheck, Ruler } from 'lucide-react';
import { createProductEnquiryUrl } from '../../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0].name : ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : ''
  );
  const [copied, setCopied] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} | ${BRAND_CONFIG.brandName}`,
        text: `Check out ${product.name} (Code: ${product.code}) at ${BRAND_CONFIG.brandName}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 110,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(25, 21, 20, 0.75)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal Card */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          backgroundColor: '#FAF7F2',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-modal)',
          overflowY: 'auto',
          zIndex: 111,
          animation: 'fadeIn 0.25s ease-out',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        }}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(4px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <X size={20} />
        </button>

        {/* Left Column: Gallery */}
        <div style={{
          padding: '24px',
          backgroundColor: '#F5EFEB',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Main Display Image */}
          <div style={{
            width: '100%',
            aspectRatio: '1 / 1.1',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            position: 'relative',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            {product.isHeritage && (
              <span
                className="badge-luxury badge-heritage"
                style={{ position: 'absolute', top: '12px', left: '12px' }}
              >
                <Sparkles size={11} />
                Artisanal Lakh Craft
              </span>
            )}
          </div>

          {/* Thumbnail Strip if multiple images */}
          {product.images.length > 1 && (
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    border: activeImageIndex === idx ? '2px solid var(--accent-rose)' : '1px solid var(--border-subtle)',
                    padding: 0,
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}

          {/* Boutique In-Store Trust Callout */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xs)',
            padding: '12px 14px',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-rose)', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>100% In-Store Verified Quality</span>
            </div>
            <div>
              Visit our boutique to try on sizes or request a WhatsApp live video demo before ordering.
            </div>
          </div>
        </div>

        {/* Right Column: Product Specs & Direct WhatsApp Enquiry */}
        <div style={{
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div>
            {/* Top metadata */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px'
            }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--accent-gold-dark)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                {product.categoryLabel} • {product.subcategory}
              </span>
              <span style={{
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                backgroundColor: 'var(--bg-stone)',
                padding: '2px 8px',
                borderRadius: '3px',
                color: 'var(--text-muted)'
              }}>
                CODE: {product.code}
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
              fontWeight: 600,
              color: 'var(--text-main)',
              lineHeight: 1.25,
              marginBottom: '12px'
            }}>
              {product.name}
            </h2>

            {/* Price section */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--text-main)'
              }}>
                ₹{product.price}
              </span>

              {product.originalPrice && (
                <span style={{
                  fontSize: '1rem',
                  color: 'var(--text-subtle)',
                  textDecoration: 'line-through'
                }}>
                  ₹{product.originalPrice}
                </span>
              )}

              {discountPercent > 0 && (
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  backgroundColor: 'var(--accent-rose)',
                  padding: '2px 8px',
                  borderRadius: '3px'
                }}>
                  {discountPercent}% OFF
                </span>
              )}

              <span style={{
                fontSize: '0.8125rem',
                color: 'var(--accent-gold-dark)',
                fontWeight: 500,
                marginLeft: 'auto'
              }}>
                ({product.priceMode === 'pair' ? 'Per Pair' : product.priceMode === 'set' ? 'Full Set' : product.priceMode === 'box' ? 'Gift Box' : product.priceMode === 'starting_at' ? 'Starting Price' : 'Piece'})
              </span>
            </div>

            {/* Description */}
            <div style={{ marginTop: '16px', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <p>{product.description}</p>
              {product.story && (
                <p style={{ marginTop: '8px', fontStyle: 'italic', color: 'var(--accent-gold-dark)', fontSize: '0.8125rem' }}>
                  "{product.story}"
                </p>
              )}
            </div>

            {/* Color selection if available */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginTop: '18px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Available Shade / Variant: <span style={{ color: 'var(--accent-rose)', fontWeight: 700 }}>{selectedColor}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-xs)',
                        border: selectedColor === c.name ? '2px solid var(--accent-rose)' : '1px solid var(--border-medium)',
                        backgroundColor: '#FFFFFF',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: c.hex,
                        border: '1px solid rgba(0,0,0,0.1)'
                      }} />
                      <span>{c.name}</span>
                      {selectedColor === c.name && <Check size={12} color="var(--accent-rose)" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selection if available */}
            {product.sizes && product.sizes.length > 0 && (
              <div style={{ marginTop: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    Select Bangle Size: <span style={{ color: 'var(--accent-rose)', fontWeight: 700 }}>{selectedSize}</span>
                  </span>
                  <a
                    href={createProductEnquiryUrl(product, selectedColor, 'Size Guide Request')}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.6875rem', color: 'var(--accent-gold-dark)', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '3px' }}
                  >
                    <Ruler size={12} />
                    Need size help?
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      style={{
                        minWidth: '46px',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-xs)',
                        border: selectedSize === sz ? '2px solid var(--text-main)' : '1px solid var(--border-medium)',
                        backgroundColor: selectedSize === sz ? 'var(--text-main)' : '#FFFFFF',
                        color: selectedSize === sz ? '#FFFFFF' : 'var(--text-main)',
                        cursor: 'pointer',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        textAlign: 'center'
                      }}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bullet Details */}
            {product.details && product.details.length > 0 && (
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-main)', marginBottom: '8px' }}>
                  Product Highlights
                </div>
                <ul style={{ paddingLeft: '18px', fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {product.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px' }}>
            <a
              href={createProductEnquiryUrl(product, selectedColor, selectedSize)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                width: '100%',
                padding: '14px 20px',
                fontSize: '0.9375rem',
                justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)'
              }}
            >
              <MessageCircle size={20} />
              <span>Enquire & Order on WhatsApp</span>
            </a>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px' }}>
              <a
                href="#visit-store"
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}
              >
                <MapPin size={15} color="var(--accent-rose)" />
                <span>Check In Physical Store</span>
              </a>

              <button
                onClick={handleShare}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  gap: '6px'
                }}
              >
                <Share2 size={15} />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
