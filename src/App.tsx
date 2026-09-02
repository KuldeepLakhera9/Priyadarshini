import { useState, useEffect } from 'react';
import type { Product, ProductCategory } from './types';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { NavigationDrawer } from './components/layout/NavigationDrawer';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

import { Hero } from './components/home/Hero';
import { CategoryGrid } from './components/home/CategoryGrid';
import { HeritageBangles } from './components/home/HeritageBangles';
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

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalogue'>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedPriceTier, setSelectedPriceTier] = useState<string | undefined>(undefined);
  
  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Scroll to top on view change
  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedCategory('all');
    setSelectedPriceTier(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCatalogue = (category: ProductCategory = 'all', priceTier?: string) => {
    setSelectedCategory(category);
    setSelectedPriceTier(priceTier);
    setCurrentView('catalogue');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut (Escape to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsDrawerOpen(false);
        setActiveProduct(null);
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

            <FeaturedProducts
              onQuickView={(p) => setActiveProduct(p)}
              onViewAllCatalogue={() => navigateToCatalogue('all')}
            />

            <NewArrivals
              onQuickView={(p) => setActiveProduct(p)}
              onViewAllCatalogue={() => navigateToCatalogue('all')}
            />

            <PriceTiers
              onSelectPriceTier={(tierId) => navigateToCatalogue('all', tierId)}
            />

            <GiftingSection
              onExploreGifts={() => navigateToCatalogue('gifts-hampers')}
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
            onQuickView={(p) => setActiveProduct(p)}
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

      {/* 8. Deep Product Detail Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />

      {/* 9. Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setActiveProduct(p)}
      />
    </div>
  );
}

export default App;
