import type { Product } from '../../types';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../catalogue/ProductCard';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewArrivalsProps {
  onQuickView: (product: Product) => void;
  onViewAllCatalogue: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  onQuickView,
  onViewAllCatalogue,
}) => {
  const newArrivals = PRODUCTS.filter(p => p.isNewArrival || p.tags.includes('New Arrival')).slice(0, 4);

  return (
    <section id="new-arrivals" style={{
      paddingTop: 'clamp(56px, 7vw, 84px)',
      paddingBottom: 'clamp(56px, 7vw, 84px)',
      backgroundColor: '#FAF4EB',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        {/* Header with Fresh Drops Note */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '36px'
        }}>
          <div>
            <div className="section-eyebrow">
              <Calendar size={12} />
              <span>Refreshed Weekly</span>
            </div>
            <h2 className="editorial-heading-1" style={{ marginTop: '6px' }}>
              Fresh Boutique Arrivals
            </h2>
            <p className="luxury-subtext" style={{ maxWidth: '520px', marginTop: '4px' }}>
              Every week we introduce new handcrafted bangles, Korean aesthetic accessories, and skincare innovations.
            </p>
          </div>

          <button
            onClick={onViewAllCatalogue}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--accent-rose)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            <span>View All New Arrivals</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Grid of New Arrivals */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
