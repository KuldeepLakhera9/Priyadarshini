import { useState, useMemo } from 'react';
import type { Product } from '../../types';
import { PRODUCTS } from '../../data/products';
import { Search, X, MessageCircle } from 'lucide-react';
import { createProductEnquiryUrl } from '../../utils/whatsapp';

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

  const popularTags = ['All', 'Lakh Bangles', 'Bridal', 'Claws', 'Scrunchies', 'Perfume', 'Nail Paint', 'Under ₹99'];

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (activeTag !== 'All') {
      if (activeTag === 'Lakh Bangles') {
        list = list.filter(p => p.category === 'lakh-bangles');
      } else if (activeTag === 'Bridal') {
        list = list.filter(p => p.tags.includes('Bridal Pick') || p.subcategory.includes('Bridal'));
      } else if (activeTag === 'Claws') {
        list = list.filter(p => p.subcategory.toLowerCase().includes('claw'));
      } else if (activeTag === 'Scrunchies') {
        list = list.filter(p => p.subcategory.toLowerCase().includes('scrunchie'));
      } else if (activeTag === 'Perfume') {
        list = list.filter(p => p.category === 'fragrance');
      } else if (activeTag === 'Nail Paint') {
        list = list.filter(p => p.subcategory.toLowerCase().includes('nail'));
      } else if (activeTag === 'Under ₹99') {
        list = list.filter(p => p.price <= 99);
      }
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
      );
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
      padding: '16px',
      paddingTop: '60px',
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

      {/* Search Container Card */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        maxHeight: '80vh',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
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
          <Search size={20} color="var(--accent-rose)" />
          <input
            type="text"
            placeholder="Search bangles, hair claws, scrunchies, face wash..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--text-main)'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', color: 'var(--text-subtle)', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              padding: '6px 12px',
              background: 'none',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.75rem',
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
                borderRadius: 'var(--radius-full)',
                border: activeTag === tag ? '1px solid var(--accent-rose)' : '1px solid var(--border-subtle)',
                backgroundColor: activeTag === tag ? 'var(--accent-rose-light)' : '#FAF7F2',
                color: activeTag === tag ? 'var(--accent-rose)' : 'var(--text-muted)',
                fontSize: '0.75rem',
                fontWeight: activeTag === tag ? 600 : 400,
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
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '8px' }}>
                No direct catalogue match found
              </p>
              <p style={{ fontSize: '0.8125rem' }}>
                We have 500+ additional offline designs in store! Ask our stylist on WhatsApp.
              </p>
              <a
                href={createProductEnquiryUrl({
                  id: 'search-custom',
                  code: 'SEARCH-CUSTOM',
                  name: `Custom Search: ${query}`,
                  category: 'all',
                  categoryLabel: 'Custom',
                  subcategory: 'Custom',
                  price: 0,
                  priceMode: 'starting_at',
                  images: [],
                  description: '',
                  details: [],
                  tags: [],
                  stockStatus: 'in_stock'
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ marginTop: '16px', display: 'inline-flex' }}
              >
                <MessageCircle size={16} />
                <span>Enquire "{query}" on WhatsApp</span>
              </a>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                Showing {filteredProducts.length} Items
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
                    padding: '10px 12px',
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
                      style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {product.name}
                      </div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', display: 'flex', gap: '8px' }}>
                        <span>{product.subcategory}</span>
                        <span>•</span>
                        <span style={{ fontWeight: 600, color: 'var(--accent-gold-dark)' }}>{product.code}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      ₹{product.price}
                    </div>
                    <div style={{ fontSize: '0.625rem', color: 'var(--accent-rose)', fontWeight: 600 }}>
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
