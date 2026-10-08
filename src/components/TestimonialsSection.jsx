import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import { BlackAvatarSVG } from './BlackAvatarSVG';
import '../styles/TestimonialsSection.css';

const N = testimonialsData.length;
// Triplement de la liste pour assurer un défilement infini fluide
const extendedList = [...testimonialsData, ...testimonialsData, ...testimonialsData];

const TestimonialsSection = () => {
  const viewportRef = useRef(null);
  const [dimensions, setDimensions] = useState({ cardWidth: 360, gap: 24, cardsPerView: 3 });
  const [currentIndex, setCurrentIndex] = useState(N); // Démarre au bloc central
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Calcul dynamique et réactif des largeurs de cartes selon la taille d'écran
  const updateDimensions = useCallback(() => {
    if (!viewportRef.current) return;
    const width = viewportRef.current.clientWidth;
    let cardsPerView = 3;
    let gap = 24;

    if (width < 640) {
      cardsPerView = 1;
      gap = 16;
    } else if (width < 992) {
      cardsPerView = 2;
      gap = 20;
    } else {
      cardsPerView = 3;
      gap = 24;
    }

    const cardWidth = (width - (cardsPerView - 1) * gap) / cardsPerView;
    setDimensions({ cardWidth, gap, cardsPerView });
  }, []);

  useEffect(() => {
    updateDimensions();
    const handleResize = () => updateDimensions();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateDimensions]);

  // Translation vers la DROITE : Les cartes entrent par la GAUCHE et sortent par la DROITE
  const slideToRight = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  }, []);

  // Translation vers la GAUCHE (flèche inverse)
  const slideToLeft = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, []);

  // Défilement automatique continu (autoplay) sans toucher à la flèche
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      slideToRight();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, slideToRight]);

  // Réinitialisation instantanée et invisible à la fin de la transition pour la boucle infinie
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex <= 0) {
      setCurrentIndex(currentIndex + N);
    } else if (currentIndex >= 2 * N) {
      setCurrentIndex(currentIndex - N);
    }
  };

  const handleDotClick = (dotIdx) => {
    const currentModulo = ((currentIndex % N) + N) % N;
    const diff = dotIdx - currentModulo;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - diff);
  };

  const step = dimensions.cardWidth + dimensions.gap;
  const translateX = -(currentIndex * step);
  const activeDot = ((currentIndex % N) + N) % N;

  return (
    <section 
      id="avis-clients" 
      className="caferio-testimonials-section pt-90 pb-90"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Forme de fond ondulée blanche Caferio */}
      <div className="caferio-bg-shape white"></div>

      <div className="container position-relative">
        
        {/* En-tête de section style Caferio */}
        <div className="section-heading-caferio text-center mb-50">
          <span className="caferio-sub-badge">TÉMOIGNAGES & AVIS</span>
          <h2 className="caferio-section-title">
            Ce Que Disent <span>Nos Clients</span>
          </h2>
          <p className="caferio-section-desc">
            Découvrez les retours authentiques de notre communauté qui savoure chaque jour nos repas et courses de proximité.
          </p>
        </div>

        {/* Viewport du Slider sans aucun fondu */}
        <div className="caferio-testimonials-viewport" ref={viewportRef}>
          <div 
            className="caferio-testimonials-track"
            style={{
              gap: `${dimensions.gap}px`,
              transform: `translateX(${translateX}px)`,
              transition: isTransitioning 
                ? 'transform 0.65s cubic-bezier(0.2, 0.9, 0.3, 1)' 
                : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedList.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="caferio-testimonial-slide"
                style={{ width: `${dimensions.cardWidth}px` }}
              >
                <div className="caferio-testimonial-card">
                  
                  {/* Icône de citation en filigrane */}
                  <div className="card-quote-bg">
                    <Quote size={46} />
                  </div>

                  {/* Profil utilisateur : Avatar personnes noires + Nom + Rôle */}
                  <div className="testi-user-header">
                    <div className="testi-avatar-wrap">
                      <BlackAvatarSVG id={item.id} size={58} />
                      <span className="testi-verified-dot" title="Client Vérifié">
                        <CheckCircle2 size={13} />
                      </span>
                    </div>
                    <div className="testi-user-meta">
                      <h4 className="testi-user-name">{item.name}</h4>
                      <span className="testi-user-role">{item.role}</span>
                      <span className="testi-tag-badge">{item.tag}</span>
                    </div>
                  </div>

                  {/* Étoiles de notation dorées */}
                  <div className="testi-rating-stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FF9D2D" color="#FF9D2D" />
                    ))}
                    <span className="rating-score">5.0</span>
                  </div>

                  {/* Texte du témoignage */}
                  <p className="testi-quote-text">
                    "{item.text}"
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contrôles de navigation : Flèches et Puces interactives */}
        <div className="caferio-testi-controls">
          <button 
            type="button" 
            className="caferio-testi-arrow prev" 
            onClick={slideToLeft}
            aria-label="Faire glisser vers la gauche"
            title="Glisser vers la gauche"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="caferio-testi-dots">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`caferio-testi-dot ${activeDot === idx ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Aller au témoignage ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            type="button" 
            className="caferio-testi-arrow next" 
            onClick={slideToRight}
            aria-label="Faire glisser vers la droite (entrée gauche, sortie droite)"
            title="Glisser vers la droite (Entrée par la gauche)"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
