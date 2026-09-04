import React, { useState } from 'react';
import type { Product } from '../../types';
import { MessageCircle, Eye } from 'lucide-react';
import { createProductEnquiryUrl, formatProductPrice } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSecondaryImage = product.images.length > 1;

  // Determine badge
  let badgeText = '';
  let badgeClass = 'badge-heritage';
  if (product.isHeritage) {
    badgeText = 'Jaipur Lakh';
    badgeClass = 'badge-heritage';
  } else if (product.isBestSeller) {
    badgeText = 'Bestseller';
    badgeClass = 'badge-luxury';
  } else if (product.isNew || product.isNewArrival) {
    badgeText = 'New Arrival';
    badgeClass = 'badge-new';
  } else if (product.availability === 'limited') {
    badgeText = 'Limited';
    badgeClass = 'badge-luxury';
  }

  return (
    <div
      className="luxury-product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xs)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all var(--transition-smooth)',
        boxShadow: 'var(--shadow-subtle)',
      }}
    >
      {/* 4:5 Portrait Image Container */}
      <div
        className="img-zoom-container"
        style={{
          width: '100%',
          aspectRatio: '4 / 5',
          backgroundColor: 'var(--bg-surface-stone)',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={() => onQuickView(product)}
      >
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
            opacity: isHovered && hasSecondaryImage ? 0 : 1,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        {/* Secondary Cross-fade Image if available */}
        {hasSecondaryImage && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        )}

        {/* Quiet Luxury Badge */}
        {badgeText && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            zIndex: 2
          }}>
            <span className={`badge-luxury ${badgeClass}`}>
              {badgeText}
            </span>
          </div>
        )}

        {/* Quick View & WhatsApp Slide-up Overlay */}
        <div
          className="card-hover-actions"
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            gap: '6px',
            zIndex: 3,
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              padding: '10px 12px',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
            }}
          >
            <Eye size={13} color="var(--accent-rose)" />
            <span>Quick View</span>
          </button>

          <a
            href={createProductEnquiryUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--accent-whatsapp)',
              border: 'none',
              color: '#FFFFFF',
              padding: '10px 14px',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(28, 77, 56, 0.2)'
            }}
            title="Enquire on WhatsApp"
          >
            <MessageCircle size={13} />
            <span className="card-enquire-label">Enquire</span>
          </a>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="product-card-body" style={{
        padding: 'clamp(12px, 2.5vw, 18px)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        gap: '10px',
      }}>
        <div>
          {/* Subcategory & Code */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.625rem',
            color: 'var(--text-subtle)',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 600
          }}>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '65%' }}>{product.subcategory}</span>
            <span style={{ color: 'var(--accent-gold-dark)' }}>{product.code}</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.05rem)',
              fontWeight: 500,
              color: 'var(--text-main)',
              lineHeight: 1.3,
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              height: '2.6em',
              transition: 'color var(--transition-fast)'
            }}
            title={product.name}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-rose)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
          >
            {product.name}
          </h3>

          {/* Swatches preview if available */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {product.colors.slice(0, 4).map((c, i) => (
                  <span
                    key={i}
                    title={c.name}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: c.hex,
                      border: '1px solid rgba(0,0,0,0.1)',
                      display: 'inline-block'
                    }}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span style={{ fontSize: '0.5625rem', color: 'var(--text-subtle)', lineHeight: '8px' }}>
                    +{product.colors.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div style={{
          paddingTop: '10px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '4px'
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              fontWeight: 600,
              color: 'var(--text-main)'
            }}>
              {formatProductPrice(product)}
            </span>
            {product.originalPrice && (
              <span style={{
                fontSize: '0.6875rem',
                color: 'var(--text-subtle)',
                textDecoration: 'line-through'
              }}>
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <span style={{
            fontSize: '0.5625rem',
            color: product.availability === 'limited' ? 'var(--accent-rose)' : 'var(--accent-gold-dark)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}>
            {product.availability === 'limited' ? 'Limited' : product.availability === 'in_store_only' ? 'In-Store' : 'In Stock'}
          </span>
        </div>
      </div>

      <style>{`
        .luxury-product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }
        @media (hover: hover) {
          .card-hover-actions {
            opacity: 0;
            transform: translateY(8px);
          }
          .luxury-product-card:hover .card-hover-actions {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (hover: none) {
          .card-hover-actions {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 640px) {
          .card-hover-actions {
            bottom: 6px !important;
            left: 6px !important;
            right: 6px !important;
            gap: 4px !important;
          }
          .card-hover-actions button, .card-hover-actions a {
            padding: 7px 8px !important;
            font-size: 0.625rem !important;
          }
          .card-enquire-label {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
