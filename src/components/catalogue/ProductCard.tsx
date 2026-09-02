import React from 'react';
import type { Product } from '../../types';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';
import { createProductEnquiryUrl } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="product-card"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all var(--transition-smooth)',
        boxShadow: 'var(--shadow-subtle)',
      }}
    >
      {/* Image Container with Zoom and Badges */}
      <div
        className="img-zoom-container"
        style={{
          width: '100%',
          aspectRatio: '1 / 1.15',
          backgroundColor: '#F5EFEB',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Badges Overlay */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          zIndex: 2
        }}>
          {product.isHeritage && (
            <span className="badge-luxury badge-heritage">
              <Sparkles size={10} />
              Heritage Lakh
            </span>
          )}
          {product.isNewArrival && !product.isHeritage && (
            <span className="badge-luxury badge-new">
              New Arrival
            </span>
          )}
          {discountPercent > 0 && (
            <span style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              backgroundColor: 'var(--accent-rose)',
              color: '#ffffff',
              padding: '2px 6px',
              borderRadius: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Quick View Hover Button */}
        <div
          className="quick-view-overlay"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            right: '10px',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 2,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(6px)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              padding: '8px 12px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
          >
            <Eye size={14} color="var(--accent-rose)" />
            <span>Quick View & Details</span>
          </button>
        </div>
      </div>

      {/* Card Info Details */}
      <div style={{
        padding: '14px 16px 16px',
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
            fontSize: '0.6875rem',
            color: 'var(--text-subtle)',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            <span>{product.subcategory}</span>
            <span style={{ fontWeight: 600, color: 'var(--accent-gold-dark)' }}>{product.code}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--text-main)',
              lineHeight: 1.3,
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              height: '2.6em',
            }}
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Color swatches preview if available */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '6px' }}>
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)' }}>Colors:</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                {product.colors.slice(0, 4).map((c, i) => (
                  <span
                    key={i}
                    title={c.name}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: c.hex,
                      border: '1px solid rgba(0,0,0,0.15)',
                      display: 'inline-block'
                    }}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span style={{ fontSize: '0.625rem', color: 'var(--text-subtle)', lineHeight: '10px' }}>
                    +{product.colors.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Price and WhatsApp Action */}
        <div style={{
          paddingTop: '10px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}>
          {/* Price */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'var(--text-main)'
              }}>
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-subtle)',
                  textDecoration: 'line-through'
                }}>
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <span style={{
              fontSize: '0.625rem',
              color: 'var(--accent-gold-dark)',
              fontWeight: 500,
              textTransform: 'capitalize'
            }}>
              {product.priceMode === 'pair' ? 'Per Pair' : product.priceMode === 'set' ? 'Full Set' : product.priceMode === 'box' ? 'Curated Box' : product.priceMode === 'starting_at' ? 'Starting from' : 'Piece'}
            </span>
          </div>

          {/* Direct WhatsApp Enquiry Button */}
          <a
            href={createProductEnquiryUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-subtle"
            title="Ask availability on WhatsApp"
            style={{
              padding: '7px 10px',
              fontSize: '0.75rem',
              whiteSpace: 'nowrap',
              gap: '5px'
            }}
          >
            <MessageCircle size={14} />
            <span>Enquire</span>
          </a>
        </div>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }
        @media (hover: hover) {
          .quick-view-overlay {
            opacity: 0;
            transform: translateY(6px);
          }
          .product-card:hover .quick-view-overlay {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (hover: none) {
          .quick-view-overlay {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
