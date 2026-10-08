import React, { useState } from 'react';
import { ShoppingCart, Star, RotateCw } from 'lucide-react';
import '../styles/ProductsSection.css';

const productsList = [
  {
    id: 1,
    title: 'Fruits bio frais (Bananes & Fraises)',
    category: 'Fruits',
    price: '6,52 €',
    rating: '3.4',
    stock: '01',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Oranges biologiques fraîches entières',
    category: 'Fruits',
    price: '8,52 €',
    rating: '3.4',
    stock: '01',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Ananas biologique frais entier',
    category: 'Fruits',
    price: '8,52 €',
    rating: '3.4',
    stock: '01',
    image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Mangue biologique fraîche découpée',
    category: 'Fruits',
    price: '6,52 €',
    rating: '3.4',
    stock: '01',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: 'Pack de boissons fraîches & sodas',
    category: 'Eau & Boissons',
    price: '6,52 €',
    rating: '3.4',
    stock: '01',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    title: 'Tomates fraîches biologiques de jardin',
    category: 'Légumes',
    price: '6,52 €',
    rating: '3.4',
    stock: '01',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    title: 'Sélection de snacks & chips croustillants',
    category: 'Snacks',
    price: '6,52 €',
    rating: '3.4',
    stock: '01',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    title: 'Assortiment ail, oignons & épices fraîches',
    category: 'Légumes',
    price: '6,52 €',
    rating: '3.4',
    stock: '01',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=400&q=80',
  },
];

const categoryTabs = [
  { id: 'all', label: 'Légumes', icon: '🥗' },
  { id: 'meats', label: 'Viandes Fraîches', icon: '🥩' },
  { id: 'fruits', label: 'Fruits', icon: '🍎', active: true },
  { id: 'fish', label: 'Poissons Frais', icon: '🐟' },
  { id: 'drinks', label: 'Eau & Boissons', icon: '🧃' },
  { id: 'snacks', label: 'Snacks', icon: '🍿' },
];

const ProductsSection = () => {
  const [selectedTab, setSelectedTab] = useState('Fruits');

  return (
    <>
      {/* --- Bannière Promo de la semaine (Image 2 haut) --- */}
      <section className="weekly-promo-banner-wrapper">
        <div className="container">
          <div className="weekly-promo-banner">
            {/* Assiette gastronomique à gauche */}
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=350&q=80" 
              alt="Assiette repas équilibré" 
              className="promo-left-dish"
            />

            {/* Contenu textuel central */}
            <div className="promo-center-content">
              <div className="promo-start-price">À partir de 04,69 €</div>
              <h3 className="promo-main-heading">
                Obtenez la meilleure réduction pour l'offre de la semaine !
              </h3>
              <button className="promo-shop-now-btn">
                <span>Acheter Maintenant</span>
                <ShoppingCart size={15} />
              </button>
            </div>

            {/* Fruits et rhubarbe découpés à droite */}
            <img 
              src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=400&q=80" 
              alt="Fruits et agrumes frais" 
              className="promo-right-fruits"
            />
          </div>
        </div>
      </section>

      {/* --- Section Meilleurs Produits les Plus Vendus (Image 2) --- */}
      <section className="best-products-section">
        <div className="container">
          {/* En-tête de section */}
          <div className="products-header-block">
            <h2 className="products-section-title">
              Meilleurs <span className="accent-orange">Produits les Plus Vendus</span>
            </h2>
            <p className="products-section-desc">
              Si vous souhaitez profiter de votre vie avec un corps sain et un esprit sain, 
              vous êtes les bienvenus dans notre espace de shopping, nous servons une épicerie de qualité pour vous.
            </p>
          </div>

          {/* Onglets de filtrage par catégorie */}
          <div className="product-filter-tabs-bar">
            {categoryTabs.map((tab) => (
              <div
                key={tab.label}
                className={`filter-tab-item ${selectedTab === tab.label ? 'active' : ''}`}
                onClick={() => setSelectedTab(tab.label)}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            ))}
          </div>

          {/* Grille des 8 produits */}
          <div className="products-cards-grid">
            {productsList.map((product) => (
              <div key={product.id} className="product-item-card">
                <div className="product-card-img-wrap">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-item-img"
                  />
                </div>

                {/* Ligne métadonnées : Stock / Prix / Note */}
                <div className="product-meta-row">
                  <div className="product-stock-tag">
                    <span className="stock-dot"></span>
                    <span>{product.stock}</span>
                  </div>
                  <span className="product-price-highlight">{product.price}</span>
                  <div className="product-rating-box">
                    <Star size={13} fill="#D97706" color="#D97706" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Titre du produit */}
                <h3 className="product-card-title">{product.title}</h3>

                {/* Bouton Ajouter au Panier */}
                <button className="btn-add-to-cart">
                  <span>Ajouter au Panier</span>
                  <ShoppingCart size={14} color="#1F2937" />
                </button>
              </div>
            ))}
          </div>

          {/* Bouton Charger Plus */}
          <div className="load-more-center-wrap">
            <button className="btn-load-more">
              <RotateCw size={16} />
              <span>Charger Plus</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
