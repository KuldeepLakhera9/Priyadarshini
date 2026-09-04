import { useState, useMemo } from 'react';
import type { Product } from '../../types';
import { PRODUCTS } from '../../data/products';
import { Search, X, MessageCircle } from 'lucide-react';
import { createGeneralEnquiryUrl, formatProductPrice } from '../../utils/whatsapp';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string>('All');

  const popularTags = [
    'All',
    'Lakh Bangles',
    'Bridal Choodas',
    'Acetate Claws',
    'Silk Scrunchies',
    'Perfume & Attar',
    'Nail Paint',
    'Under ₹99',
    'Under ₹199'
  ];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeTag !== 'All') {
      if (activeTag === 'Lakh Bangles') {
        list = list.filter(p => p.category === 'lakh-bangles');
      } else if (activeTag === 'Bridal Choodas') {
        list = list.filter(p => p.tags.includes('Bridal Pick') || p.subcategory.includes('Bridal'));
      } else if (activeTag === 'Acetate Claws') {
        list = list.filter(p => p.subcategory.toLowerCase().includes('claw'));
      } else if (activeTag === 'Silk Scrunchies') {
        list = list.filter(p => p.subcategory.toLowerCase().includes('scrunchie'));
      } else if (activeTag === 'Perfume & Attar') {
        list = list.filter(p => p.category === 'fragrance');
      } else if (activeTag === 'Nail Paint') {
        list = list.filter(p => p.subcategory.toLowerCase().includes('nail'));
      } else if (activeTag === 'Under ₹99') {
        list = list.filter(p => p.price !== undefined && p.price <= 99);
      } else if (activeTag === 'Under ₹199') {
        list = list.filter(p => p.price !== undefined && p.price <= 199);
      }
    }

    if (query.trim()) {
      const q = query.toLowerCase().trim();

      // Check for price search query like "under 200", "under 100", "under 300"
      const priceMatch = q.match(/under\s*(\d+)/);
      if (priceMatch && priceMatch[1]) {
        const maxP = parseInt(priceMatch[1], 10);
        list = list.filter(p => p.price !== undefined && p.price <= maxP);
      } else {
        list = list.filter(p => {
          const inName = p.name.toLowerCase().includes(q);
          const inCode = p.code.toLowerCase().includes(q);
          const inSub = p.subcategory.toLowerCase().includes(q);
          const inCat = p.categoryLabel.toLowerCase().includes(q);
          const inTags = p.tags.some(t => t.toLowerCase().includes(q));
          const inDesc = p.description.toLowerCase().includes(q);
          const inMat = p.material ? p.material.toLowerCase().includes(q) : false;
          // Also check color names
          const inColors = (p.colors || p.colours || []).some(c => c.name.toLowerCase().includes(q));
          return inName || inCode || inSub || inCat || inTags || inDesc || inMat || inColors;
        });
      }
    }

    return list;
  }, [query, activeTag]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 120,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 'clamp(8px, 2.5vw, 16px)',
      paddingTop: 'clamp(16px, 4vw, 60px)',
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
          backgroundColor: 'rgba(22, 19, 18, 0.78)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Search Container Card */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        maxHeight: 'calc(100dvh - 32px)',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xs)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-modal)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 121,
        animation: 'fadeIn 0.2s ease-out'
      }}>
        {/* Search Input Bar */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: '#FAF7F2'
        }}>
          <Search size={18} color="var(--accent-gold-dark)" />
          <input
            type="text"
            placeholder="Search 'red bangles', 'lakh', 'hair clips', 'under 200'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              color: 'var(--text-main)'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', color: 'var(--text-subtle)', cursor: 'pointer' }}
            >
              <X size={15} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              padding: '5px 10px',
              background: 'none',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.6875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            ESC
          </button>
        </div>

        {/* Quick Tag Chips */}
        <div style={{
          padding: '12px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          backgroundColor: '#FFFFFF'
        }} className="hide-scrollbar">
          {popularTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                padding: '5px 12px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid',
                borderColor: activeTag === tag ? 'var(--text-main)' : 'var(--border-subtle)',
                backgroundColor: activeTag === tag ? 'var(--text-main)' : '#FAF7F2',
                color: activeTag === tag ? '#FFFFFF' : 'var(--text-muted)',
                fontSize: '0.6875rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontWeight: activeTag === tag ? 600 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 20px' }}>
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '6px', color: 'var(--text-main)' }}>
                Couldn't find what you're looking for?
              </p>
              <p style={{ fontSize: '0.8125rem', fontWeight: 300, maxWidth: '440px', margin: '0 auto', lineHeight: 1.5 }}>
                Ask us on WhatsApp — we may have more designs, sizes, or matching colors available in our offline store.
              </p>
              <a
                href={createGeneralEnquiryUrl(`Search Inquiry: ${query}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ marginTop: '16px', display: 'inline-flex' }}
              >
                <MessageCircle size={15} />
                <span>Ask Us on WhatsApp</span>
              </a>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.625rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px', fontWeight: 600 }}>
                Found {filteredProducts.length} Items
              </div>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: '#FAF7F2',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    gap: '12px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#FAF7F2';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={product.images[0]}
                      alt=""
                      style={{ width: '46px', height: '46px', objectFit: 'cover', borderRadius: '2px' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {product.name}
                      </div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', display: 'flex', gap: '8px', marginTop: '2px' }}>
                        <span>{product.subcategory}</span>
                        <span>•</span>
                        <span style={{ fontWeight: 600, color: 'var(--accent-gold-dark)' }}>{product.code}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {formatProductPrice(product)}
                    </div>
                    <div style={{ fontSize: '0.625rem', color: 'var(--accent-rose)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      View Details ↗
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
