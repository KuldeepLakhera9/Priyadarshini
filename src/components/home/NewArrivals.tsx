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
      paddingTop: 'clamp(56px, 7vw, 92px)',
      paddingBottom: 'clamp(56px, 7vw, 92px)',
      backgroundColor: 'var(--bg-canvas-subtle)',
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
              <Calendar size={11} color="var(--accent-gold-dark)" />
              <span>Weekly Atelier Additions</span>
            </div>
            <h2 className="editorial-heading-1" style={{ marginTop: '8px' }}>
              Fresh In The Boutique
            </h2>
            <p className="luxury-subtext" style={{ maxWidth: '520px', marginTop: '4px' }}>
              Every week our store receives new artisanal Lakh patterns, Korean accessories, and pure floral distillations.
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
              borderBottom: '1px solid var(--accent-rose)',
              paddingBottom: '2px',
              color: 'var(--accent-rose)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <span>View All New Arrivals</span>
            <ArrowRight size={14} />
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
