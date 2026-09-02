import { useState, useMemo } from 'react';
import type { Product, ProductCategory } from '../../types';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { ProductCard } from './ProductCard';
import { Search, Sparkles, X, ArrowLeft, MessageCircle } from 'lucide-react';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

interface CatalogueViewProps {
  initialCategory?: ProductCategory;
  initialPriceTier?: string;
  onQuickView: (product: Product) => void;
  onBackToHome: () => void;
}

export const CatalogueView: React.FC<CatalogueViewProps> = ({
  initialCategory = 'all',
  initialPriceTier,
  onQuickView,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<string>(initialPriceTier || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Category Filter
    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    // Price Filter
    if (selectedPriceFilter === 'under-99') {
      list = list.filter(p => p.price <= 99);
    } else if (selectedPriceFilter === 'under-199') {
      list = list.filter(p => p.price <= 199);
    } else if (selectedPriceFilter === 'under-299') {
      list = list.filter(p => p.price <= 299);
    } else if (selectedPriceFilter === 'under-499') {
      list = list.filter(p => p.price <= 499);
    }

    // Tag Filter
    if (selectedTag !== 'all') {
      if (selectedTag === 'heritage') list = list.filter(p => p.isHeritage);
      else if (selectedTag === 'new') list = list.filter(p => p.isNewArrival);
      else if (selectedTag === 'bestseller') list = list.filter(p => p.isBestSeller);
      else if (selectedTag === 'bridal') list = list.filter(p => p.tags.includes('Bridal Pick') || p.subcategory.includes('Bridal'));
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
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

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    }

    return list;
  }, [selectedCategory, selectedPriceFilter, selectedTag, searchQuery, sortBy]);

  return (
    <div style={{
      backgroundColor: '#FAF7F2',
      minHeight: '100vh',
      paddingTop: '24px',
      paddingBottom: '80px',
    }}>
      <div className="container-custom">
        {/* Navigation Breadcrumb & Back button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <button
            onClick={onBackToHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--accent-rose)',
              cursor: 'pointer',
              padding: '6px 0'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>

          <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
            Showing {filteredProducts.length} curated designs
          </span>
        </div>

        {/* Page Title & Search Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div>
            <h1 className="editorial-heading-1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              {selectedCategory === 'all'
                ? 'Complete Boutique Catalogue'
                : CATEGORIES.find(c => c.id === selectedCategory)?.label || 'Product Collection'}
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Handpicked Lakh bangles, bridal sets, accessories, and beauty essentials.
            </p>
          </div>

          {/* Quick Search in catalogue */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xs)',
            padding: '8px 14px',
            width: '100%',
            maxWidth: '320px',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            <Search size={16} color="var(--accent-rose)" />
            <input
              type="text"
              placeholder="Search in catalogue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: '0.8125rem',
                flex: 1,
                color: 'var(--text-main)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: 'var(--text-subtle)', cursor: 'pointer' }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Control Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          {/* Category Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto' }} className="hide-scrollbar">
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', flexShrink: 0, marginRight: '4px' }}>
              Category:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: selectedCategory === 'all' ? '1px solid var(--text-main)' : '1px solid var(--border-subtle)',
                backgroundColor: selectedCategory === 'all' ? 'var(--text-main)' : '#FAF7F2',
                color: selectedCategory === 'all' ? '#FFFFFF' : 'var(--text-main)',
                fontSize: '0.75rem',
                fontWeight: selectedCategory === 'all' ? 600 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedCategory === cat.id ? '1px solid var(--accent-rose)' : '1px solid var(--border-subtle)',
                  backgroundColor: selectedCategory === cat.id ? 'var(--accent-rose-light)' : '#FAF7F2',
                  color: selectedCategory === cat.id ? 'var(--accent-rose)' : 'var(--text-main)',
                  fontSize: '0.75rem',
                  fontWeight: selectedCategory === cat.id ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {cat.id === 'lakh-bangles' && <Sparkles size={11} />}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Budget & Sorting Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            paddingTop: '10px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            {/* Price Tier Filter Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto' }} className="hide-scrollbar">
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', flexShrink: 0, marginRight: '4px' }}>
                Budget:
              </span>
              {[
                { id: 'all', label: 'All Prices' },
                { id: 'under-99', label: 'Under ₹99' },
                { id: 'under-199', label: 'Under ₹199' },
                { id: 'under-299', label: 'Under ₹299' },
                { id: 'under-499', label: 'Under ₹499' }
              ].map(tier => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedPriceFilter(tier.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-xs)',
                    border: selectedPriceFilter === tier.id ? '1px solid var(--accent-gold-dark)' : '1px solid var(--border-subtle)',
                    backgroundColor: selectedPriceFilter === tier.id ? 'var(--accent-gold-light)' : '#FFFFFF',
                    color: selectedPriceFilter === tier.id ? 'var(--accent-gold-dark)' : 'var(--text-muted)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tier.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 600 }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: '#FAF7F2',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--text-main)',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Featured & Curated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Additions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            padding: '60px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Sparkles size={32} color="var(--accent-rose)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-main)' }}>
              No matches found for current filters
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '480px' }}>
              We have thousands of offline designs in our physical boutique that are not yet listed online. Contact our team on WhatsApp to find exactly what you are looking for!
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceFilter('all');
                  setSelectedTag('all');
                  setSearchQuery('');
                }}
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.75rem' }}
              >
                Reset Filters
              </button>
              <a
                href={createGeneralEnquiryUrl('Catalogue Filter Search')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '10px 20px', fontSize: '0.75rem' }}
              >
                <MessageCircle size={15} />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
