import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  MoreHorizontal,
  Plus, 
  Minus, 
  ShoppingBag, 
  SlidersHorizontal, 
  X, 
  UtensilsCrossed, 
  Store, 
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { allCategories, allProducts } from '../data/allProductsData';
import { getCategoryIconUrl } from '../utils/categoryIcons';
import { useModernAnimations } from '../utils/modernAnimations';
import '../styles/CoursesPage.css';

const CoursesPage = ({ 
  onQuickView, 
  cartCount = 0, 
  setCartCount 
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedType = searchParams.get('type') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [productQuantities, setProductQuantities] = useState({});

  const categoryScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleTypeChange = (type) => {
    setSelectedCategory('all');
    if (type === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ type });
    }
  };

  // Réinitialisation des animations modernes lors du changement de filtre
  useModernAnimations([selectedType, selectedCategory]);

  // Filter categories based on selectedType
  const filteredCategories = useMemo(() => {
    if (selectedType === 'all') return allCategories;
    return allCategories.filter(cat => cat.type === 'all' || cat.type === selectedType);
  }, [selectedType]);

  // Check scroll positions for left/right arrows
  const checkScroll = useCallback(() => {
    if (categoryScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoryScrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    const el = categoryScrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [checkScroll, filteredCategories]);

  const handleScrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  // Filter products based on search, type, and category
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Search filter
      const matchesSearch = searchQuery.trim() === '' || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Type filter
      const matchesType = selectedType === 'all' || product.type === selectedType;

      // Category filter
      const matchesCat = selectedCategory === 'all' || product.categoryId === selectedCategory;

      return matchesSearch && matchesType && matchesCat;
    });
  }, [searchQuery, selectedType, selectedCategory]);

  const handleIncrement = (product) => {
    const newQty = (productQuantities[product.id] || 0) + 1;
    setProductQuantities(prev => ({
      ...prev,
      [product.id]: newQty
    }));
    if (setCartCount) {
      setCartCount(prev => prev + 1);
    }
  };

  const handleDecrement = (product) => {
    const currentQty = productQuantities[product.id] || 0;
    if (currentQty > 0) {
      const newQty = currentQty - 1;
      setProductQuantities(prev => ({
        ...prev,
        [product.id]: newQty
      }));
      if (setCartCount && cartCount > 0) {
        setCartCount(prev => Math.max(0, prev - 1));
      }
    }
  };

  const totalCartPrice = useMemo(() => {
    return Object.entries(productQuantities).reduce((sum, [id, qty]) => {
      const prod = allProducts.find(p => p.id === Number(id));
      if (prod && qty > 0) {
        return sum + (prod.priceNum * qty);
      }
      return sum;
    }, 0);
  }, [productQuantities]);

  const totalCartItems = useMemo(() => {
    return Object.values(productQuantities).reduce((sum, qty) => sum + qty, 0);
  }, [productQuantities]);

  return (
    <div className="courses-page-wrapper">
      
      {/* SECTION BANNIÈRE DE TITRE, RECHERCHE RAPIDE ET FILTRES DE CATÉGORIE */}
      <div className="courses-hero-filters-strip">
        <div className="container">
          
          <div className="courses-header-strip-flex">
            {/* Titre & Sous-titre */}
            <div className="courses-title-area">
              <h1 className="courses-main-title">Faire Mes Courses & Commandes</h1>
              <p className="courses-subtitle-desc">
                Retrouvez l'ensemble de nos menus restaurants et produits d'épicerie frais livrés chez vous.
              </p>
            </div>

            {/* Barre de Recherche Rapide Intégrée */}
            <div className="courses-search-bar-wrapper">
              <div className="courses-live-search-box">
                <Search size={16} className="search-input-icon" />
                <input 
                  type="text" 
                  placeholder="Rechercher un plat, légume, produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="courses-search-input"
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="search-clear-btn"
                    onClick={() => setSearchQuery('')}
                    title="Effacer la recherche"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Onglets de Type Principal : Tous / Restaurants / Boutiques */}
          <div className="courses-type-tabs-flex">
            <button 
              type="button"
              className={`type-tab-pill ${selectedType === 'all' ? 'active' : ''}`}
              onClick={() => handleTypeChange('all')}
            >
              <SlidersHorizontal size={15} />
              <span>Tout ({allProducts.length})</span>
            </button>

            <button 
              type="button"
              className={`type-tab-pill ${selectedType === 'restaurant' ? 'active' : ''}`}
              onClick={() => handleTypeChange('restaurant')}
            >
              <UtensilsCrossed size={15} />
              <span>Restaurants ({allProducts.filter(p => p.type === 'restaurant').length})</span>
            </button>

            <button 
              type="button"
              className={`type-tab-pill ${selectedType === 'boutique' ? 'active' : ''}`}
              onClick={() => handleTypeChange('boutique')}
            >
              <Store size={15} />
              <span>Boutiques ({allProducts.filter(p => p.type === 'boutique').length})</span>
            </button>
          </div>

          {/* Défilement horizontal des Catégories avec flèches de navigation & indicateur */}
          <div className="courses-category-carousel-container">
            {canScrollLeft && (
              <button 
                type="button"
                className="courses-cat-nav-btn courses-cat-nav-prev"
                onClick={() => handleScrollCategories('left')}
                title="Défiler vers la gauche"
                aria-label="Catégories précédentes"
              >
                <ChevronLeft size={18} />
              </button>
            )}

            <div 
              className={`courses-category-scroll-wrapper ${canScrollRight ? 'has-overflow-right' : ''} ${canScrollLeft ? 'has-overflow-left' : ''}`}
              ref={categoryScrollRef}
            >
              <div className="courses-category-scroll-track">
                {filteredCategories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  const iconUrl = getCategoryIconUrl(cat.name, cat.type === 'boutique' ? 'boutique' : 'restaurant');
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`courses-category-vertical-card ${isActive ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat.id)}
                      title={cat.name}
                    >
                      <div className="courses-cat-card-img-wrap">
                        <img 
                          src={iconUrl} 
                          alt={cat.name} 
                          className="courses-cat-card-img" 
                          loading="lazy" 
                        />
                      </div>
                      <span className="courses-cat-card-name">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {canScrollRight && (
              <button 
                type="button"
                className="courses-cat-nav-btn courses-cat-nav-next"
                onClick={() => handleScrollCategories('right')}
                title="Défiler vers la droite pour voir d'autres catégories"
                aria-label="Catégories suivantes"
              >
                <ChevronRight size={18} />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* 3. GRILLE DES PRODUITS (Design POS) */}
      <div className="courses-products-grid-section pt-30 pb-70">
        <div className="container">
          
          
          {filteredProducts.length === 0 ? (
            <div className="courses-empty-state text-center py-60">
              <ShoppingBag size={54} color="#D1D5DB" className="mb-15" />
              <h3>Aucun produit trouvé</h3>
              <p>Essayez de modifier votre recherche ou sélectionnez une autre catégorie.</p>
              <button 
                type="button" 
                className="btn-reset-filters"
                onClick={() => {
                  setSearchQuery('');
                  handleTypeChange('all');
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {filteredProducts.map((product) => {
                const qty = productQuantities[product.id] || 0;

                return (
                  <div 
                    key={product.id} 
                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 mb-20"
                  >
                    <div className="courses-pos-product-card">
                      
                      {/* Image du Produit avec bouton [...] */}
                      <div className="pos-card-img-wrap">
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="pos-card-img"
                          onClick={() => onQuickView(product)}
                        />

                        {product.badge && (
                          <span className={`pos-card-badge ${product.badge.includes('%') ? 'badge-discount' : 'badge-new'}`}>
                            {product.badge}
                          </span>
                        )}

                        {/* Bouton [...] Détails / Aperçu rapide */}
                        <button 
                          type="button" 
                          className="pos-card-more-btn"
                          title="Voir les détails"
                          onClick={() => onQuickView(product)}
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </div>

                      {/* Corps de la carte */}
                      <div className="pos-card-body">
                        <h4 
                          className="pos-card-title"
                          onClick={() => onQuickView(product)}
                        >
                          {product.title}
                        </h4>

                        {/* Ligne Prix & Compteur Stepper [-] [qty] [+] */}
                        <div className="pos-card-bottom-row">
                          <div className="pos-card-price">
                            {product.price}
                          </div>

                          <div className="pos-card-stepper-wrap">
                            <button 
                              type="button" 
                              className={`pos-stepper-btn btn-minus ${qty === 0 ? 'disabled' : ''}`}
                              onClick={() => handleDecrement(product)}
                              disabled={qty === 0}
                              aria-label="Diminuer la quantité"
                            >
                              <Minus size={13} />
                            </button>

                            <span 
                              key={qty}
                              className={`pos-stepper-qty ${qty > 0 ? 'qty-active' : ''}`}
                            >
                              {qty}
                            </span>

                            <button 
                              type="button" 
                              className="pos-stepper-btn btn-plus"
                              onClick={() => handleIncrement(product)}
                              aria-label="Augmenter la quantité"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* 4. BARRE FLOTTANTE DE COMMANDE EN BAS D'ÉCRAN */}
      {totalCartItems > 0 && (
        <div className="courses-floating-cart-bar">
          <div className="container">
            <div className="floating-cart-inner">
              <div className="floating-cart-info">
                <div className="floating-cart-icon-box">
                  <ShoppingBag size={20} />
                  <span className="floating-cart-badge">{totalCartItems}</span>
                </div>
                <div>
                  <span className="floating-cart-label">Total Panier :</span>
                  <strong className="floating-cart-total">{totalCartPrice.toLocaleString('fr-FR')} FCFA</strong>
                </div>
              </div>

              <div className="floating-cart-actions">
                <button 
                  type="button" 
                  className="btn-floating-checkout"
                  onClick={() => {
                    alert(`Commande de ${totalCartItems} article(s) pour un total de ${totalCartPrice.toLocaleString('fr-FR')} FCFA prête pour la livraison !`);
                  }}
                >
                  <span>Valider Ma Commande</span>
                  <Check size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
