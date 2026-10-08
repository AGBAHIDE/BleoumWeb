import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureBarSection from '../components/FeatureBarSection';
import BannerSection from '../components/BannerSection';
import ProductsTabSection from '../components/ProductsTabSection';
import HotDealsSection from '../components/HotDealsSection';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AppDownloadSection from '../components/AppDownloadSection';
import NewsletterSection from '../components/NewsletterSection';
import { useModernAnimations } from '../utils/modernAnimations';

const HomePage = ({
  onNavigateToCourses,
  onQuickView,
  onAddToCart,
  onAddToWishlist
}) => {
  const navigate = useNavigate();

  // Déclencheur des animations modernes (Scroll reveal, 3D tilt, Ripple, etc.)
  useModernAnimations();

  const handleNavigateToCourses = () => {
    if (onNavigateToCourses) {
      onNavigateToCourses();
    } else {
      navigate('/courses');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page-container">
      <main>
        {/* 1. Hero Carrousel animé avec images directes sur fond blanc pur */}
        <HeroSection onNavigateToCourses={handleNavigateToCourses} />

        {/* 2. Barre des 4 Avantages / Engagements de qualité */}
        <FeatureBarSection />

        {/* 3. Bannières Promo 3 blocs */}
        <BannerSection onNavigateToCourses={handleNavigateToCourses} />

        {/* 4. Section Produits à Onglets (Repas & Plats Restaurants) */}
        <ProductsTabSection 
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />

        {/* 5. Section Offres Spéciales avec Décompte interactif */}
        <HotDealsSection onNavigateToCourses={handleNavigateToCourses} />

        {/* 6. Section Produits en Vedette (Boutiques & Épicerie) */}
        <FeaturedProductsSection 
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />

        {/* 7. Témoignages & Avis Clients avec photos réelles */}
        <TestimonialsSection />

        {/* 8. Téléchargement Application Android & iPhone */}
        <AppDownloadSection />

        {/* 9. Abonnement à la Newsletter */}
        <NewsletterSection />
      </main>
    </div>
  );
};

export default HomePage;
