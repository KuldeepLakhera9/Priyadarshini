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
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>(initialPriceTier || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');

  // Active Category Meta
  const currentCategoryInfo = CATEGORIES.find(c => c.id === selectedCategory);

  // Determine if current category is Bangles (to show size filter)
  const isBanglesCategory =
    selectedCategory === 'lakh-bangles' ||
    selectedCategory === 'fancy-bangles' ||
    selectedCategory === 'traditional-bangles';

  // Subcategories available for active category
  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'all') return [];
    return currentCategoryInfo?.subcategories || [];
  }, [selectedCategory, currentCategoryInfo]);

  // Unique colors available in current category products
  const availableColors = useMemo(() => {
    const colorSet = new Set<string>();
    PRODUCTS.forEach(p => {
      if (selectedCategory === 'all' || p.category === selectedCategory) {
        const cols = p.colors || p.colours || [];
        cols.forEach(c => colorSet.add(c.name));
      }
    });
    return Array.from(colorSet);
  }, [selectedCategory]);

  // Filtered Products List
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // 1. Category Filter
    if (selectedCategory === 'new-arrivals') {
      list = list.filter(p => p.isNew || p.isNewArrival || p.tags.includes('New Arrival'));
    } else if (selectedCategory === 'best-sellers') {
      list = list.filter(p => p.isBestSeller || p.tags.includes('Best Seller'));
    } else if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    // 2. Subcategory Filter
    if (selectedSubcategory !== 'all') {
      list = list.filter(p => p.subcategory.toLowerCase() === selectedSubcategory.toLowerCase());
    }

    // 3. Price Tier Filter
    if (selectedPriceTier === 'under-99') {
      list = list.filter(p => p.price !== undefined && p.price <= 99);
    } else if (selectedPriceTier === 'under-199') {
      list = list.filter(p => p.price !== undefined && p.price <= 199);
    } else if (selectedPriceTier === 'under-299') {
      list = list.filter(p => p.price !== undefined && p.price <= 299);
    } else if (selectedPriceTier === 'under-499') {
      list = list.filter(p => p.price !== undefined && p.price <= 499);
    }

    // 4. Size Filter (Context aware for bangles)
    if (selectedSize !== 'all') {
      list = list.filter(p => p.sizes && p.sizes.includes(selectedSize));
    }

    // 5. Color Filter
    if (selectedColor !== 'all') {
      list = list.filter(p => {
        const cols = p.colors || p.colours || [];
        return cols.some(c => c.name.toLowerCase() === selectedColor.toLowerCase());
      });
    }

    // 6. Search Query (Tolerant & price keyword aware)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();

      // Check for price query like "under 200", "under 100", "under 300"
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
          return inName || inCode || inSub || inCat || inTags || inDesc || inMat;
        });
      }
    }

    // 7. Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => (a.price || 9999) - (b.price || 9999));
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.isNew || b.isNewArrival ? 1 : 0) - (a.isNew || a.isNewArrival ? 1 : 0));
    }

    return list;
  }, [
    selectedCategory,
    selectedSubcategory,
    selectedPriceTier,
    selectedSize,
    selectedColor,
    searchQuery,
    sortBy,
  ]);

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedPriceTier('all');
    setSelectedSize('all');
    setSelectedColor('all');
    setSearchQuery('');
  };

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
            <span>Return to Boutique</span>
          </button>

          <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)', fontWeight: 600 }}>
            Showing {filteredProducts.length} Designs
          </span>
        </div>

        {/* Page Title & Search Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '28px'
        }}>
          <div>
            <h1 className="editorial-heading-1" style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.65rem)' }}>
              {selectedCategory === 'all'
                ? 'Complete Boutique Archive'
                : selectedCategory === 'new-arrivals'
                ? 'New Weekly Arrivals'
                : selectedCategory === 'best-sellers'
                ? 'Curated Best Sellers'
                : currentCategoryInfo?.label || 'Curated Collection'}
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 300, maxWidth: '640px' }}>
              {currentCategoryInfo?.description ||
                'Explore handcrafted Jaipur Lakh, bridal choodas, Parisian hair accents, and restorative botanical beauty.'}
            </p>
          </div>

          {/* Search Input in catalogue */}
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
              placeholder="Search or try 'under 200'..."
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

        {/* Category Selector Pills (All 10 Categories) */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '16px',
        }} className="hide-scrollbar">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSubcategory('all');
            }}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid',
              borderColor: selectedCategory === 'all' ? 'var(--text-main)' : 'var(--border-subtle)',
              backgroundColor: selectedCategory === 'all' ? 'var(--text-main)' : '#FFFFFF',
              color: selectedCategory === 'all' ? '#FFFFFF' : 'var(--text-main)',
              fontSize: '0.75rem',
              letterSpacing: '0.04em',
              fontWeight: selectedCategory === 'all' ? 600 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            All Collections
          </button>

          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedSubcategory('all');
                setSelectedSize('all');
              }}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? 'var(--accent-rose)' : 'var(--border-subtle)',
                backgroundColor: selectedCategory === cat.id ? 'var(--accent-rose-subtle)' : '#FFFFFF',
                color: selectedCategory === cat.id ? 'var(--accent-rose)' : 'var(--text-main)',
                fontSize: '0.75rem',
                letterSpacing: '0.04em',
                fontWeight: selectedCategory === cat.id ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              {cat.id === 'lakh-bangles' && <Sparkles size={11} />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Context-Aware Filter & Sort Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xs)',
          border: '1px solid var(--border-subtle)',
          padding: '16px 20px',
          marginBottom: '28px',
          boxShadow: 'var(--shadow-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {/* Subcategory Pills (if available for selected category) */}
          {availableSubcategories.length > 0 && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              overflowX: 'auto',
              paddingBottom: '4px'
            }} className="hide-scrollbar">
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-subtle)', letterSpacing: '0.12em', textTransform: 'uppercase', flexShrink: 0, marginRight: '4px' }}>
                Type:
              </span>
              <button
                onClick={() => setSelectedSubcategory('all')}
                style={{
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid',
                  borderColor: selectedSubcategory === 'all' ? 'var(--text-main)' : 'var(--border-subtle)',
                  backgroundColor: selectedSubcategory === 'all' ? 'var(--text-main)' : '#FAF7F2',
                  color: selectedSubcategory === 'all' ? '#FFFFFF' : 'var(--text-muted)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                All
              </button>
              {availableSubcategories.map(sub => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid',
                    borderColor: selectedSubcategory === sub ? 'var(--accent-gold-dark)' : 'var(--border-subtle)',
                    backgroundColor: selectedSubcategory === sub ? 'var(--accent-gold-light)' : '#FAF7F2',
                    color: selectedSubcategory === sub ? 'var(--accent-gold-dark)' : 'var(--text-muted)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Context-Aware Controls: Bangle Sizes, Price Tiers, and Sorting */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            paddingTop: availableSubcategories.length > 0 ? '12px' : '0',
            borderTop: availableSubcategories.length > 0 ? '1px solid var(--border-subtle)' : 'none'
          }}>
            {/* Left Filter Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {/* Bangle Size Filter (ONLY SHOWN FOR BANGLES) */}
              {isBanglesCategory && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Wrist Size:
                  </span>
                  {['all', '2.2', '2.4', '2.6', '2.8'].map(sz => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid',
                        borderColor: selectedSize === sz ? 'var(--accent-rose)' : 'var(--border-subtle)',
                        backgroundColor: selectedSize === sz ? 'var(--accent-rose)' : '#FFFFFF',
                        color: selectedSize === sz ? '#FFFFFF' : 'var(--text-main)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {sz === 'all' ? 'All Sizes' : sz}
                    </button>
                  ))}
                </div>
              )}

              {/* Price Tier Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Budget:
                </span>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'under-99', label: '<₹99' },
                  { id: 'under-199', label: '<₹199' },
                  { id: 'under-299', label: '<₹299' },
                  { id: 'under-499', label: '<₹499' }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedPriceTier(t.id)}
                    style={{
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid',
                      borderColor: selectedPriceTier === t.id ? 'var(--accent-gold-dark)' : 'var(--border-subtle)',
                      backgroundColor: selectedPriceTier === t.id ? 'var(--accent-gold-light)' : '#FFFFFF',
                      color: selectedPriceTier === t.id ? 'var(--accent-gold-dark)' : 'var(--text-main)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Color Filter (Context aware if colors available) */}
              {availableColors.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Shade:
                  </span>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    style={{
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: selectedColor !== 'all' ? 'var(--accent-rose-subtle)' : '#FFFFFF',
                      color: selectedColor !== 'all' ? 'var(--accent-rose)' : 'var(--text-main)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <option value="all">All Shades</option>
                    {availableColors.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Right: Sort dropdown */}
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
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* In-Store Showroom Notice Banner */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xs)',
          padding: '12px 18px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>• In-Store Discovery: </span>
            <span>Can't find an exact color match or size? Our physical store carries 1,000+ unlisted designs.</span>
          </div>
          <a
            href={createGeneralEnquiryUrl('Catalogue Custom Request')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent-rose)',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              marginLeft: '12px'
            }}
          >
            Ask on WhatsApp ↗
          </a>
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
              No direct online match found
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '520px', fontWeight: 300, lineHeight: 1.6 }}>
              Couldn't find what you're looking for? Ask us directly on WhatsApp — we may have the exact color, design or bridal set available in our physical boutique.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <button
                onClick={resetAllFilters}
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.75rem' }}
              >
                Reset All Filters
              </button>
              <a
                href={createGeneralEnquiryUrl(`Custom Search: ${searchQuery || selectedCategory}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '10px 20px', fontSize: '0.75rem' }}
              >
                <MessageCircle size={14} />
                <span>Ask Us on WhatsApp</span>
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
