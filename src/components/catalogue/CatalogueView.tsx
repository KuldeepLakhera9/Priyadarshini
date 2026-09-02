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
  const [selectedTag] = useState<string>('all');

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
      paddingTop: '28px',
      paddingBottom: '90px',
    }}>
      <div className="container-custom">
        {/* Navigation Breadcrumb & Back button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px'
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
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'var(--accent-rose)',
              cursor: 'pointer',
              padding: '6px 0'
            }}
          >
            <ArrowLeft size={15} />
            <span>Back to Boutique</span>
          </button>

          <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)', fontWeight: 600 }}>
            {filteredProducts.length} Curated Designs
          </span>
        </div>

        {/* Page Title & Search Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div>
            <h1 className="editorial-heading-1" style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.65rem)' }}>
              {selectedCategory === 'all'
                ? 'Complete Boutique Archive'
                : CATEGORIES.find(c => c.id === selectedCategory)?.label || 'Product Collection'}
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 300 }}>
              Handcrafted Jaipur Lakh, bridal suites, Parisian hair accessories, and restorative beauty.
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
            padding: '9px 14px',
            width: '100%',
            maxWidth: '320px',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            <Search size={15} color="var(--accent-gold-dark)" />
            <input
              type="text"
              placeholder="Search within archive..."
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
          borderRadius: 'var(--radius-xs)',
          border: '1px solid var(--border-subtle)',
          padding: '18px 22px',
          marginBottom: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          {/* Category Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto' }} className="hide-scrollbar">
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-subtle)', letterSpacing: '0.12em', textTransform: 'uppercase', flexShrink: 0, marginRight: '4px' }}>
              Collection:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid',
                borderColor: selectedCategory === 'all' ? 'var(--text-main)' : 'var(--border-subtle)',
                backgroundColor: selectedCategory === 'all' ? 'var(--text-main)' : '#FAF7F2',
                color: selectedCategory === 'all' ? '#FFFFFF' : 'var(--text-main)',
                fontSize: '0.6875rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
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
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat.id ? 'var(--accent-rose)' : 'var(--border-subtle)',
                  backgroundColor: selectedCategory === cat.id ? 'var(--accent-rose-subtle)' : '#FAF7F2',
                  color: selectedCategory === cat.id ? 'var(--accent-rose)' : 'var(--text-main)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontWeight: selectedCategory === cat.id ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {cat.id === 'lakh-bangles' && <Sparkles size={10} />}
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
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            {/* Price Tier Filter Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto' }} className="hide-scrollbar">
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-subtle)', letterSpacing: '0.12em', textTransform: 'uppercase', flexShrink: 0, marginRight: '4px' }}>
                Curated Tier:
              </span>
              {[
                { id: 'all', label: 'All Tiers' },
                { id: 'under-99', label: 'The Petite Edit (Under ₹99)' },
                { id: 'under-199', label: 'Daily Signature (Under ₹199)' },
                { id: 'under-299', label: 'Statement (Under ₹299)' },
                { id: 'under-499', label: 'Festive Suite (Under ₹499)' }
              ].map(tier => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedPriceFilter(tier.id)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid',
                    borderColor: selectedPriceFilter === tier.id ? 'var(--accent-gold-dark)' : 'var(--border-subtle)',
                    backgroundColor: selectedPriceFilter === tier.id ? 'var(--accent-gold-light)' : '#FFFFFF',
                    color: selectedPriceFilter === tier.id ? 'var(--accent-gold-dark)' : 'var(--text-muted)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.04em',
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
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  padding: '6px 12px',
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
                <option value="featured">Featured Curation</option>
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
            borderRadius: 'var(--radius-xs)',
            border: '1px solid var(--border-subtle)',
            padding: '64px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Sparkles size={28} color="var(--accent-rose)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-main)' }}>
              No matches found for current filters
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '480px', fontWeight: 300 }}>
              We have over 500 unlisted offline designs in our boutique. Contact our family styling team on WhatsApp to request photos and size fittings.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceFilter('all');
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
                <MessageCircle size={14} />
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
