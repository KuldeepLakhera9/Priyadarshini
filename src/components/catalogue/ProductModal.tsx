import { useState } from 'react';
import type { Product } from '../../types';
import { PRODUCTS } from '../../data/products';
import { BRAND_CONFIG } from '../../config/brand';
import { ProductCard } from './ProductCard';
import { X, MessageCircle, Sparkles, Check, Share2, MapPin, Ruler, Maximize2 } from 'lucide-react';
import { createProductEnquiryUrl, formatProductPrice, getProductCtaLabel } from '../../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onSelectProduct }) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0
      ? product.colors[0].name
      : product.colours && product.colours.length > 0
      ? product.colours[0].name
      : ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : ''
  );
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Available colors (handles both colors & colours field)
  const availableColors = product.colors || product.colours || [];

  // Related products recommendation engine
  const relatedProductsList: Product[] = (() => {
    if (product.relatedProducts && product.relatedProducts.length > 0) {
      const explicit = PRODUCTS.filter(p => product.relatedProducts?.includes(p.id));
      if (explicit.length > 0) return explicit.slice(0, 3);
    }
    // Fallback: match by same category or subcategory
    return PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
  })();

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

  const ctaText = getProductCtaLabel(product, 'modal');

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
          backgroundColor: 'rgba(22, 19, 18, 0.82)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Fullscreen Image Lightbox if toggled */}
      {isFullscreen && (
        <div
          onClick={() => setIsFullscreen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 130,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out'
          }}
        >
          <img
            src={product.images[activeImageIndex] || product.images[0]}
            alt={product.name}
            style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain' }}
          />
          <button
            onClick={() => setIsFullscreen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: '#FFFFFF',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <X size={28} />
          </button>
        </div>
      )}

      {/* Main Modal Card */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          maxHeight: '92vh',
          backgroundColor: '#FAF7F2',
          borderRadius: 'var(--radius-xs)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-modal)',
          overflowY: 'auto',
          zIndex: 111,
          animation: 'fadeIn 0.25s ease-out',
          display: 'flex',
          flexDirection: 'column',
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
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(4px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
        >
          <X size={18} />
        </button>

        {/* Top Two-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        }}>
          {/* Left Column: Gallery */}
          <div style={{
            padding: 'clamp(20px, 4vw, 32px)',
            backgroundColor: 'var(--bg-canvas-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {/* Main Display Image */}
            <div style={{
              width: '100%',
              aspectRatio: '4 / 5',
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              position: 'relative',
              border: '1px solid var(--border-subtle)',
              cursor: 'zoom-in'
            }}
            onClick={() => setIsFullscreen(true)}
            >
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
                  style={{ position: 'absolute', top: '14px', left: '14px' }}
                >
                  <Sparkles size={11} />
                  Jaipur Lakh Craft
                </span>
              )}

              {/* Fullscreen button indicator */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(true);
                }}
                title="Fullscreen view"
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(22, 19, 18, 0.75)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 'var(--radius-xs)',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Maximize2 size={14} />
              </button>
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

            {/* In-Store Showroom Notice */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xs)',
              padding: '14px 16px',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-gold-dark)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                <span>Physical Boutique Showroom</span>
              </div>
              <div style={{ lineHeight: 1.5, fontWeight: 300 }}>
                This is a digital showcase. Our physical store houses over 1,000+ additional designs, color palettes, and custom wrist fits.
              </div>
            </div>
          </div>

          {/* Right Column: Product Specs & Direct WhatsApp Enquiry */}
          <div style={{
            padding: 'clamp(24px, 4vw, 36px)',
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
                marginBottom: '8px'
              }}>
                <span style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: 'var(--accent-gold-dark)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase'
                }}>
                  {product.categoryLabel} • {product.subcategory}
                </span>
                <span style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'monospace',
                  backgroundColor: 'var(--bg-surface-stone)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--text-muted)'
                }}>
                  CODE: {product.code}
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.45rem, 2.6vw, 1.95rem)',
                fontWeight: 500,
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
                  fontWeight: 600,
                  color: 'var(--text-main)'
                }}>
                  {formatProductPrice(product)}
                </span>

                {product.originalPrice && (
                  <span style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-subtle)',
                    textDecoration: 'line-through'
                  }}>
                    ₹{product.originalPrice}
                  </span>
                )}

                <span style={{
                  fontSize: '0.6875rem',
                  color: product.availability === 'limited' ? 'var(--accent-rose)' : 'var(--status-instock)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginLeft: 'auto'
                }}>
                  {product.availability === 'limited' ? '• Limited Pieces' : product.availability === 'in_store_only' ? '• In Store Only' : '• Available in Store'}
                </span>
              </div>

              {/* Short Useful Description */}
              <div style={{ marginTop: '16px', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65, fontWeight: 300 }}>
                <p>{product.description}</p>
                {product.story && (
                  <p style={{ marginTop: '8px', fontStyle: 'italic', color: 'var(--accent-gold-dark)', fontSize: '0.8125rem' }}>
                    "{product.story}"
                  </p>
                )}
              </div>

              {/* Material if specified */}
              {product.material && (
                <div style={{ marginTop: '14px', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', gap: '6px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Material:</span>
                  <span>{product.material}</span>
                </div>
              )}

              {/* Color selection ONLY if product has colors */}
              {availableColors.length > 0 && (
                <div style={{ marginTop: '18px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>
                    Available Shade: <span style={{ color: 'var(--accent-rose)', fontWeight: 700 }}>{selectedColor}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {availableColors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-xs)',
                          border: selectedColor === c.name ? '1.5px solid var(--accent-rose)' : '1px solid var(--border-medium)',
                          backgroundColor: '#FFFFFF',
                          cursor: 'pointer',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      >
                        <span style={{
                          width: '11px',
                          height: '11px',
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

              {/* Size selection ONLY if product has sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div style={{ marginTop: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Select Size: <span style={{ color: 'var(--accent-rose)', fontWeight: 700 }}>{selectedSize}</span>
                    </span>
                    <a
                      href={createProductEnquiryUrl(product, selectedColor, 'Size Guide')}
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
                          border: selectedSize === sz ? '1.5px solid var(--text-main)' : '1px solid var(--border-medium)',
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

              {/* Product Highlights bullet details */}
              {product.details && product.details.length > 0 && (
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Specifications & Highlights
                  </div>
                  <ul style={{ paddingLeft: '16px', fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300 }}>
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
                  fontSize: '0.8125rem',
                  justifyContent: 'center',
                }}
              >
                <MessageCircle size={18} />
                <span>{ctaText}</span>
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
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  <MapPin size={14} color="var(--accent-rose)" />
                  <span>Check In Boutique</span>
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
                  <Share2 size={14} />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Related Products & Cross-Selling */}
        {relatedProductsList.length > 0 && (
          <div style={{
            padding: 'clamp(24px, 4vw, 36px)',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: '#FFFFFF'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <div>
                <div style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', fontWeight: 700 }}>
                  Curated Pairings
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2px' }}>
                  You May Also Admire
                </h3>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontStyle: 'italic' }}>
                More styles available in store
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '18px'
            }}>
              {relatedProductsList.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  product={relProduct}
                  onQuickView={(p) => {
                    if (onSelectProduct) {
                      onSelectProduct(p);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
