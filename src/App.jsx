import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import ScrollToTop from './components/ScrollToTop';
import { QuickViewModal, AddToCartModal, WishlistModal } from './components/ProductModals';

// Remet le scroll en haut lors d'un changement de route (sauf s'il s'agit d'une ancre #)
function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  // Gestion d'état global pour les modales interactives
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(2);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setCartCount(prev => prev + 1);
    setIsAddToCartOpen(true);
  };

  const handleAddToWishlist = (product) => {
    setSelectedProduct(product);
    setWishlistCount(prev => prev + 1);
    setIsWishlistOpen(true);
  };

  return (
    <div className="bleoum-app-root">
      <ScrollToTopOnRoute />

      {/* 1. NAVBAR COMMUNE : Partagée par la page d'accueil et la page de courses */}
      <Navbar 
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* 2. ROUTES : Différenciation de la page d'accueil (/) et de courses (/courses) */}
      <div className="page-transition-wrapper">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            } 
          />
          <Route 
            path="/courses" 
            element={
              <CoursesPage 
                onQuickView={handleQuickView}
                cartCount={cartCount}
                setCartCount={setCartCount}
                onAddToCart={handleAddToCart}
              />
            } 
          />
          {/* Redirection automatique vers l'accueil si route inconnue */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* 3. FOOTER ÉPURÉ SUR FOND BLANC : Présent sur toutes les pages */}
      <Footer />

      {/* Modales Interactives Globales */}
      <QuickViewModal 
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
      />

      <AddToCartModal 
        product={selectedProduct}
        isOpen={isAddToCartOpen}
        onClose={() => setIsAddToCartOpen(false)}
      />

      <WishlistModal 
        product={selectedProduct}
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />

      {/* Bouton Fixe Retour en Haut de Page */}
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
