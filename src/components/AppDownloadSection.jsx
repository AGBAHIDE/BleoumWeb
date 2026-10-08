import React from 'react';
import { Play, Sparkles, Star, ShoppingBag, Search, MapPin, Heart, Plus } from 'lucide-react';
import '../styles/AppAndFooter.css';

const AppDownloadSection = () => {
  return (
    <section className="app-download-section-wrap">
      <div className="container">
        <div className="app-download-card">
          {/* Contenu gauche */}
          <div className="app-download-content">
            <span className="app-pre-badge">APPLICATION MOBILE</span>
            <h2>
              Téléchargez l'Application Gratuite<br />
              Pour Android Et iPhone
            </h2>
            
            <p className="app-download-desc">
              Découvrez Bleoum Service, la plateforme tout-en-un pour commander 
              vos repas de restaurant et vos courses de marché avec suivi en temps réel.
            </p>

            <div className="app-buttons-flex">
              {/* Bouton Google Play */}
              <a href="#playstore" className="app-store-pill btn-google-play">
                <Play size={22} fill="#FFFFFF" />
                <div>
                  <div className="store-sub-text">Disponible sur</div>
                  <div className="store-main-title">Google Play</div>
                </div>
              </a>

              {/* Bouton App Store */}
              <a href="#appstore" className="app-store-pill btn-apple-store">
                <span className="apple-logo-icon">🍏</span>
                <div>
                  <div className="store-sub-text">Télécharger sur</div>
                  <div className="store-main-title">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Un seul smartphone ultra-réaliste qui flotte en permanence */}
          <div className="app-single-phone-container">
            <div className="realistic-phone-wrapper">
              
              {/* Boutons latéraux physiques du châssis */}
              <div className="phone-btn-volume-up"></div>
              <div className="phone-btn-volume-down"></div>
              <div className="phone-btn-power"></div>

              {/* Corps du smartphone */}
              <div className="realistic-phone-chassis">
                
                {/* Écran du smartphone */}
                <div className="realistic-phone-screen">
                  
                  {/* Dynamic Island / Encoche caméra */}
                  <div className="phone-dynamic-island">
                    <span className="phone-camera-lens"></span>
                    <span className="phone-sensor-dot"></span>
                  </div>

                  {/* Barre de statut système */}
                  <div className="phone-status-bar">
                    <span className="phone-status-time">12:30</span>
                    <div className="phone-status-icons">
                      <span className="phone-signal-bars">●●●</span>
                      <span className="phone-battery">🔋</span>
                    </div>
                  </div>

                  {/* Interface de l'Application Bleoum */}
                  <div className="phone-app-interface">
                    
                    {/* Header de l'app Bleoum */}
                    <div className="phone-app-header">
                      <div className="phone-app-location">
                        <MapPin size={11} className="phone-loc-icon" />
                        <span>Cotonou, Bénin</span>
                      </div>
                      <div className="phone-app-brand-pill">
                        <span>Bleoum</span>
                      </div>
                    </div>

                    {/* Barre de recherche */}
                    <div className="phone-app-search-box">
                      <Search size={11} className="phone-search-icon" />
                      <span>Plats, restaurants, vivres...</span>
                    </div>

                    {/* Bannière promo dynamique */}
                    <div className="phone-app-promo-banner">
                      <div className="phone-promo-tag">PROMO -20%</div>
                      <div className="phone-promo-text">Livraison Gratuite aujourd'hui</div>
                    </div>

                    {/* Carte Produit Vedette Bleoum */}
                    <div className="phone-app-dish-card">
                      <div className="phone-dish-img-wrap">
                        <img 
                          src="/images/hero-garnished/promo04.png" 
                          alt="Burger Gourmet Bleoum" 
                          className="phone-dish-img"
                        />
                        <span className="phone-dish-badge">Populaire</span>
                      </div>
                      <div className="phone-dish-info">
                        <div className="phone-dish-title-row">
                          <span className="phone-dish-name">Burger Gourmet Deluxe</span>
                          <span className="phone-dish-rate">
                            <Star size={10} fill="#E68A00" color="#E68A00" /> 4.9
                          </span>
                        </div>
                        <div className="phone-dish-meta-row">
                          <span className="phone-dish-price">2 500 F</span>
                          <span className="phone-add-btn">
                            <Plus size={12} />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Barre de navigation inférieure de l'application */}
                    <div className="phone-bottom-nav">
                      <div className="phone-nav-item active">
                        <ShoppingBag size={13} />
                        <span>Accueil</span>
                      </div>
                      <div className="phone-nav-item">
                        <Heart size={13} />
                        <span>Favoris</span>
                      </div>
                      <div className="phone-nav-item">
                        <Sparkles size={13} />
                        <span>Offres</span>
                      </div>
                    </div>

                  </div>

                  {/* Reflet glossy diagonal sur l'écran */}
                  <div className="phone-screen-glare"></div>

                </div>
              </div>

              {/* Ombre portée dynamique sous le smartphone flottant */}
              <div className="phone-floating-shadow"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
