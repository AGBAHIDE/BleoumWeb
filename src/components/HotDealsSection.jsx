import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import '../styles/HotDealsSection.css';

const HotDealsSection = ({ onNavigateToCourses }) => {
  // Décompte dynamique
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="promotions-section" className="ltn__call-to-action-area ltn__call-to-action-4 section-bg-1 pt-90 pb-90 hot-deals-wrap">
      <div className="container">
        <div className="row align-items-center">
          {/* Image du Pack Gauche */}
          <div className="col-lg-5 col-md-12 mb-40 text-center">
            <div className="deals-img-box">
              <img 
                src="/images/11_1.png" 
                alt="Combo Pack Spécial" 
                className="deals-main-img"
              />
              <div className="deal-discount-circle">
                <span>-35%</span>
                <small>PROMO</small>
              </div>
            </div>
          </div>

          {/* Contenu Décompte Droite */}
          <div className="col-lg-7 col-md-12">
            <div className="call-to-action-inner call-to-action-inner-4">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="deal-sub-badge">
                  <Flame size={16} /> Offre Spéciale du Moment
                </h6>
                <h1 className="section-title">
                  Pack Gourmand Terroir & Miel <br />
                  <span>Combo Épicerie & Resto</span>
                </h1>
                <p className="deal-desc">
                  Profitez de notre panier gourmand complet à prix réduit exceptionnel : assortiment de miels purs, sauces locales et douceurs artisanales sélectionnées avec amour.
                </p>
              </div>

              {/* Compteur interactif */}
              <div className="ltn__countdown ltn__countdown-3">
                <div className="countdown-box">
                  <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="countdown-label">Jours</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-box">
                  <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="countdown-label">Heures</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-box">
                  <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="countdown-label">Mins</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-box">
                  <span className="countdown-number countdown-seconds">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="countdown-label">Secs</span>
                </div>
              </div>

              <div className="btn-wrapper mt-35">
                <a 
                  href="#courses" 
                  className="theme-btn-1 btn btn-effect-1 text-uppercase btn-deal-cta"
                  onClick={(e) => {
                    if (onNavigateToCourses) {
                      e.preventDefault();
                      onNavigateToCourses();
                    }
                  }}
                >
                  <span>Profiter de l'Offre</span>
                  <ArrowRight size={17} className="ms-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsSection;
