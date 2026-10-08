import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '../styles/CategoriesSection.css';

const categoriesData = [
  {
    id: 1,
    name: 'Légumes',
    count: '269 articles',
    theme: 'card-theme-vegetables',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=220&q=80',
  },
  {
    id: 2,
    name: 'Viandes Fraîches',
    count: '202 articles',
    theme: 'card-theme-meats',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=220&q=80',
  },
  {
    id: 3,
    name: 'Fruits',
    count: '269 articles',
    theme: 'card-theme-fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=220&q=80',
  },
  {
    id: 4,
    name: 'Poissons Frais',
    count: '269 articles',
    theme: 'card-theme-fish',
    image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=220&q=80',
  },
  {
    id: 5,
    name: 'Eau & Boissons',
    count: '269 articles',
    theme: 'card-theme-drinks',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=220&q=80',
  },
  {
    id: 6,
    name: 'Snacks',
    count: '269 articles',
    theme: 'card-theme-snacks',
    image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=220&q=80',
  },
];

const CategoriesSection = () => {
  return (
    <section className="top-categories-section">
      <div className="container">
        {/* Titre et sous-titre de la section */}
        <div className="categories-header-block">
          <h2 className="categories-section-title">
            Top <span className="accent-orange">Meilleures Ventes</span> Catégories
          </h2>
          <p className="categories-section-desc">
            Si vous souhaitez profiter de votre vie avec un corps sain et un esprit sain, 
            vous êtes les bienvenus dans notre espace de shopping, nous servons une épicerie de qualité pour vous.
          </p>
        </div>

        {/* Grille des cartes pastel */}
        <div className="categories-slider-grid">
          {categoriesData.map((category) => (
            <div 
              key={category.id} 
              className={`category-slider-card ${category.theme}`}
            >
              <div className="category-img-container">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="category-preview-image"
                  style={{ borderRadius: '12px' }}
                />
              </div>
              <h3 className="category-card-name">{category.name}</h3>
              <span className="category-card-items-count">{category.count}</span>
            </div>
          ))}
        </div>

        {/* Boutons de navigation du carrousel (flèches rondes) */}
        <div className="carousel-nav-controls">
          <button className="carousel-nav-btn btn-prev" title="Précédent">
            <ArrowLeft size={18} />
          </button>
          <button className="carousel-nav-btn btn-next" title="Suivant">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
