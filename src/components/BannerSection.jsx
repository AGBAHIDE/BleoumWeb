import React from 'react';
import '../styles/BannerSection.css';

const BannerSection = ({ onNavigateToCourses }) => {
  return (
    <section className="ltn__banner-area banner-promo-section pt-30 pb-50">
      <div className="container">
        <div className="row">
          
          {/* Bannière Grande Gauche (Jus & Boissons / Resto) */}
          <div className="col-lg-6 col-md-12 mb-30">
            <div className="banner-card-promo banner-card-large-promo bg-soft-sage">
              <div className="banner-text-wrapper">
                <span className="banner-serif-subtitle">Jus Frais &</span>
                <h3 className="banner-bold-title">Saveurs Boissons</h3>
                
                <div className="banner-bullet-list">
                  <span>100% NATUREL</span>
                  <span>- SANS SUCRE AJOUTÉ</span>
                  <span>PRODUITS DU TERROIR</span>
                </div>

                <button 
                  type="button" 
                  className="banner-action-pill-btn"
                  onClick={onNavigateToCourses}
                >
                  Commander →
                </button>
              </div>

              <div className="banner-img-large-box">
                <img 
                  src="/images/jus_fruit.png" 
                  alt="Jus Naturels et Fruits Frais" 
                  className="banner-floating-img-large" 
                />
              </div>
            </div>
          </div>

          {/* Deux Bannières Droite Empilées */}
          <div className="col-lg-6 col-md-12">
            
            {/* Bannière Haut Droite (Vivres & Épicerie / Boutique) */}
            <div 
              className="banner-card-promo banner-card-small-promo bg-soft-neutral mb-30"
              style={{ cursor: 'pointer' }}
              onClick={onNavigateToCourses}
            >
              <div className="banner-small-img-box">
                <img 
                  src="/images/shawamar.png" 
                  alt="Vivres Frais et Fruits Secs" 
                  className="banner-floating-img-small" 
                />
              </div>

              <div className="banner-small-text-box text-left">
                <h4 className="banner-small-heading">
                  Jusqu'à -15% sur les <br />
                  <strong>Fast-food</strong>
                </h4>
                <div className="banner-price-tag">
                  <span className="price-prefix">Dès </span>
                  <span className="price-value">1 500</span>
                  <span className="price-currency"> FCFA</span>
                </div>
              </div>
            </div>

            {/* Bannière Bas Droite (Menus & Cocktails / Resto) */}
            <div className="banner-card-promo banner-card-small-promo bg-soft-neutral mb-30">
              <div className="banner-small-text-box">
                <h4 className="banner-small-heading">
                  -50% sur les Menus & <br />
                  <strong>Cocktails Mangue</strong>
                </h4>
                <button 
                  type="button" 
                  className="banner-action-pill-btn"
                  onClick={onNavigateToCourses}
                >
                  Commander →
                </button>
              </div>

              <div className="banner-small-img-box">
                <img 
                  src="/images/mango.png" 
                  alt="Cocktails Mangue et Jus Frais" 
                  className="banner-floating-img-small" 
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;
