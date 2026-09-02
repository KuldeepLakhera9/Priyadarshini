import { useState, useEffect } from 'react';
import type { Product, ProductCategory } from './types';
import { PRODUCTS } from './data/products';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { NavigationDrawer } from './components/layout/NavigationDrawer';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

import { Hero } from './components/home/Hero';
import { CategoryGrid } from './components/home/CategoryGrid';
import { HeritageBangles } from './components/home/HeritageBangles';
import { BrandStory } from './components/home/BrandStory';
import { SeasonalCollections } from './components/home/SeasonalCollections';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { NewArrivals } from './components/home/NewArrivals';
import { PriceTiers } from './components/home/PriceTiers';
import { GiftingSection } from './components/home/GiftingSection';
import { WhyShopWithUs } from './components/home/WhyShopWithUs';
import { InstagramShowcase } from './components/home/InstagramShowcase';
import { WholesaleBanner } from './components/home/WholesaleBanner';
import { StoreVisit } from './components/home/StoreVisit';

import { CatalogueView } from './components/catalogue/CatalogueView';
import { ProductModal } from './components/catalogue/ProductModal';
import { SearchModal } from './components/catalogue/SearchModal';
import { trackConversionEvent } from './utils/analytics';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalogue'>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedPriceTier, setSelectedPriceTier] = useState<string | undefined>(undefined);
  
  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // View navigation helpers
  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedCategory('all');
    setSelectedPriceTier(undefined);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCatalogue = (category: ProductCategory = 'all', priceTier?: string) => {
    setSelectedCategory(category);
    setSelectedPriceTier(priceTier);
    setCurrentView('catalogue');
    trackConversionEvent('category_viewed', { category, priceTier });
    window.location.hash = category !== 'all' ? `shop/${category}` : 'shop';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProduct = (product: Product) => {
    setActiveProduct(product);
    trackConversionEvent('product_viewed', { product_id: product.id, name: product.name, price: product.price });
    window.location.hash = `product/${product.id}`;
  };

  const handleCloseProduct = () => {
    setActiveProduct(null);
    if (window.location.hash.startsWith('#product/')) {
      window.location.hash = currentView === 'catalogue' ? (selectedCategory !== 'all' ? `shop/${selectedCategory}` : 'shop') : '';
    }
  };

  // Deep Link Routing on hash changes (e.g. from QR codes or Instagram bio)
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      if (hash === 'new-arrivals') {
        navigateToCatalogue('new-arrivals');
      } else if (hash === 'best-sellers') {
        navigateToCatalogue('best-sellers');
      } else if (hash.startsWith('shop/')) {
        const cat = hash.replace('shop/', '') as ProductCategory;
        navigateToCatalogue(cat);
      } else if (hash === 'shop') {
        navigateToCatalogue('all');
      } else if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '');
        const matched = PRODUCTS.find(p => p.id === prodId || p.code.toLowerCase() === prodId.toLowerCase());
        if (matched) {
          setActiveProduct(matched);
        }
      } else if (hash === 'visit-store') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('visit-store');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };

    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, []);

  // Keyboard shortcut (Escape to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsDrawerOpen(false);
        handleCloseProduct();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Luxury Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onSelectCategory={(catId) => navigateToCatalogue(catId as ProductCategory)}
        onNavigateHome={navigateToHome}
      />

      {/* 3. Navigation Drawer for Mobile & Tablet */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectCategory={(catId) => navigateToCatalogue(catId as ProductCategory)}
        onSelectPriceTier={(tierId) => navigateToCatalogue('all', tierId)}
      />

      {/* 4. Main Page Content */}
      <main style={{ flex: 1 }}>
        {currentView === 'home' ? (
          <>
            <Hero onExploreClick={() => navigateToCatalogue('all')} />
            
            <CategoryGrid
              onSelectCategory={(catId) => navigateToCatalogue(catId as ProductCategory)}
            />

            <HeritageBangles
              onExploreBangles={() => navigateToCatalogue('lakh-bangles')}
            />

            <BrandStory
              onExploreCollection={() => navigateToCatalogue('all')}
            />

            <SeasonalCollections
              onSelectCollection={() => navigateToCatalogue('all')}
            />

            <NewArrivals
              onQuickView={handleOpenProduct}
              onViewAllCatalogue={() => navigateToCatalogue('new-arrivals')}
            />

            <FeaturedProducts
              onQuickView={handleOpenProduct}
              onViewAllCatalogue={() => navigateToCatalogue('all')}
            />

            <PriceTiers
              onSelectPriceTier={(tierId) => navigateToCatalogue('all', tierId)}
            />

            <GiftingSection
              onExploreGifts={() => navigateToCatalogue('gifts')}
            />

            <WhyShopWithUs />

            <InstagramShowcase />

            <WholesaleBanner />

            <StoreVisit />
          </>
        ) : (
          <CatalogueView
            initialCategory={selectedCategory}
            initialPriceTier={selectedPriceTier}
            onQuickView={handleOpenProduct}
            onBackToHome={navigateToHome}
          />
        )}
      </main>

      {/* 5. Luxury Architectural Footer */}
      <Footer
        onSelectCategory={(catId) => navigateToCatalogue(catId as ProductCategory)}
      />

      {/* 6. Mobile Bottom Action App Bar */}
      <MobileNav
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateCatalogue={() => navigateToCatalogue('all')}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 7. Floating WhatsApp Concierge Widget */}
      <FloatingWhatsApp />

      {/* 8. Deep Product Detail Modal with WhatsApp Sharing */}
      <ProductModal
        product={activeProduct}
        onClose={handleCloseProduct}
        onSelectProduct={handleOpenProduct}
      />

      {/* 9. Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleOpenProduct}
      />
    </div>
  );
}

export default App;
