import { useState, useMemo } from 'react';
import type { Product, ProductCategory } from '../../types';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../catalogue/ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  onQuickView: (product: Product) => void;
  onViewAllCatalogue: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onQuickView,
  onViewAllCatalogue,
}) => {
  const [activeTab, setActiveTab] = useState<ProductCategory>('all');

  const filteredItems = useMemo(() => {
    let items = PRODUCTS.filter(p => p.isFeatured || p.isBestSeller);
    if (activeTab !== 'all') {
      items = items.filter(p => p.category === activeTab);
    }
    return items.slice(0, 8);
  }, [activeTab]);

  return (
    <section id="featured-collection" style={{
      paddingTop: 'clamp(56px, 7vw, 90px)',
      paddingBottom: 'clamp(56px, 7vw, 90px)',
      backgroundColor: '#FAF7F2',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '36px',
          gap: '8px'
        }}>
          <div className="section-eyebrow">
            <Sparkles size={12} />
            <span>Curated Showcase</span>
          </div>

          <h2 className="editorial-heading-1">
            Featured Boutique Highlights
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '560px' }}>
            Our most loved hand-picked bangles, viral hair accents, pure fragrances, and self-care favorites.
          </p>

          {/* Filter Tabs */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '20px'
          }}>
            {[
              { id: 'all', label: 'All Highlights' },
              { id: 'lakh-bangles', label: 'Lakh Bangles' },
              { id: 'fancy-bangles', label: 'Fancy & Bridal' },
              { id: 'hair-accessories', label: 'Hair Accessories' },
              { id: 'beauty-skincare', label: 'Beauty & Skincare' },
              { id: 'gifts-hampers', label: 'Gifts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProductCategory)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: activeTab === tab.id ? '1px solid var(--text-main)' : '1px solid var(--border-subtle)',
                  backgroundColor: activeTab === tab.id ? 'var(--text-main)' : '#FFFFFF',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-muted)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {filteredItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* View All Catalogue CTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '48px'
        }}>
          <button
            onClick={onViewAllCatalogue}
            className="btn-secondary"
            style={{
              padding: '14px 36px',
              fontSize: '0.875rem'
            }}
          >
            <span>Explore Complete Catalogue (1,000+ Designs)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
