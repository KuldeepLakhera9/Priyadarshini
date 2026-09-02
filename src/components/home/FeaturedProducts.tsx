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
      paddingTop: 'clamp(64px, 8vw, 100px)',
      paddingBottom: 'clamp(64px, 8vw, 100px)',
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
          marginBottom: '40px',
          gap: '12px'
        }}>
          <div className="section-eyebrow">
            <Sparkles size={11} color="var(--accent-gold-dark)" />
            <span>Curated Selection</span>
          </div>

          <h2 className="editorial-heading-1">
            Featured Boutique Highlights
          </h2>

          <p className="luxury-subtext" style={{ maxWidth: '540px' }}>
            Hand-selected heirloom bangles, viral acetate hair accessories, and restorative beauty rituals.
          </p>

          {/* Minimalist Filter Tabs */}
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
              { id: 'fancy-bangles', label: 'Bridal Sets' },
              { id: 'hair-accessories', label: 'Hair Accents' },
              { id: 'beauty-skincare', label: 'Beauty & Skin' },
              { id: 'gifts-hampers', label: 'Gifting' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProductCategory)}
                style={{
                  padding: '7px 18px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? 'var(--text-main)' : 'var(--border-subtle)',
                  backgroundColor: activeTab === tab.id ? 'var(--text-main)' : '#FFFFFF',
                  color: activeTab === tab.id ? '#FAF7F2' : 'var(--text-muted)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
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
          marginTop: '52px'
        }}>
          <button
            onClick={onViewAllCatalogue}
            className="btn-secondary"
          >
            <span>Explore Complete Boutique Archive</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
