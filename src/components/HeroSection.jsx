import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';
import '../styles/HeroSection.css';

// Définition de tous les éléments PNG du cadre gourmand et articles de boutique
// Provenant de /images/hero-garnished/
// Les éléments viennent de la GAUCHE ou de la DROITE selon leur position latérale
const GARNISH_ITEMS = [
  // --- HAUT GAUCHE & HAUT DROITE ---
  {
    id: 'top-left-herbs',
    src: '/images/hero-garnished/slider-elements.png',
    alt: 'Herbes aromatiques & ail',
    className: 'item-top-left-herbs',
    delay: 100,
    travelX: -420,
    travelY: 0,
    duration: 1750
  },
  {
    id: 'top-center-spices',
    src: '/images/hero-garnished/slider-elements-center.png',
    alt: 'Épices & romarin frais',
    className: 'item-top-center-spices',
    delay: 650,
    travelX: 0,
    travelY: -280,
    duration: 1650
  },
  {
    id: 'top-right-prod-tomatoes',
    src: '/images/hero-garnished/product-3-11.png',
    alt: 'Jus de fruits, carottes & citron',
    className: 'item-top-right-prod-tomatoes',
    delay: 250,
    travelX: 420,
    travelY: 0,
    duration: 1750
  },
  {
    id: 'top-right-dish-special',
    src: '/images/hero-garnished/hero-6-1-3.png',
    alt: 'Plat signature chef',
    className: 'item-top-right-dish-special',
    delay: 850,
    travelX: 460,
    travelY: 0,
    duration: 1850
  },

  // --- CÔTÉ GAUCHE (Entrent depuis la GAUCHE) ---
  {
    id: 'left-food-dish',
    src: '/images/hero-garnished/food01.png',
    alt: 'Plateau de fruits de mer & huîtres',
    className: 'item-left-food-dish',
    delay: 400,
    travelX: -480,
    travelY: 0,
    duration: 1800
  },
  {
    id: 'left-boutique-prod',
    src: '/images/hero-garnished/product-3-18.png',
    alt: 'Noix de coco & feuilles tropicales',
    className: 'item-left-boutique-prod',
    delay: 950,
    travelX: -420,
    travelY: 0,
    duration: 1850
  },
  {
    id: 'left-boutique-bottle',
    src: '/images/hero-garnished/product-3-7.png',
    alt: 'Burger gourmet & boisson',
    className: 'item-left-boutique-bottle',
    delay: 1450,
    travelX: -440,
    travelY: 0,
    duration: 1900
  },

  // --- CÔTÉ DROIT (Entrent depuis la DROITE) ---
  {
    id: 'right-dish-food06',
    src: '/images/hero-garnished/food06.png',
    alt: 'Assiette gourmande du traiteur',
    className: 'item-right-dish-food06',
    delay: 550,
    travelX: 480,
    travelY: 0,
    duration: 1800
  },

  // --- BAS GAUCHE (Entrent depuis la GAUCHE) ---
  {
    id: 'bottom-left-about-basket',
    src: '/images/hero-garnished/about01.png',
    alt: 'Burger, frites & boisson fraîche',
    className: 'item-bottom-left-about-basket',
    delay: 1150,
    travelX: -500,
    travelY: 0,
    duration: 1900
  },
  {
    id: 'bottom-left-fries',
    src: '/images/hero-garnished/promo03.png',
    alt: 'Poulet doré croustillant',
    className: 'item-bottom-left-fries',
    delay: 1600,
    travelX: -480,
    travelY: 0,
    duration: 1950
  },

  // --- BAS DROIT (Entrent depuis la DROITE) ---
  {
    id: 'bottom-right-chef-plate',
    src: '/images/hero-garnished/ab-8-1.png',
    alt: 'Plat chef & huile d’olive',
    className: 'item-bottom-right-chef-plate',
    delay: 1300,
    travelX: 500,
    travelY: 0,
    duration: 1900
  },
  {
    id: 'bottom-right-grilled-masala',
    src: '/images/hero-garnished/product-3-20.png',
    alt: 'Sac panier de marché & légumes',
    className: 'item-bottom-right-grilled-masala',
    delay: 1750,
    travelX: 480,
    travelY: 0,
    duration: 1950
  }
];

// Configuration des feuilles en déplacement permanent (chute continue du haut vers le bas)
const FALLING_LEAVES = [
  { id: 'leaf-1', src: '/images/hero-garnished/hero-6-leaf-1.png', left: '12%', duration: '9.5s', delay: '0s', size: 38 },
  { id: 'leaf-2', src: '/images/hero-garnished/hero-6-leaf-2.png', left: '28%', duration: '11.2s', delay: '2.4s', size: 32 },
  { id: 'leaf-3', src: '/images/hero-garnished/hero-6-leaf-3.png', left: '46%', duration: '8.8s', delay: '5.1s', size: 28 },
  { id: 'leaf-4', src: '/images/hero-garnished/hero-6-leaf-4.png', left: '62%', duration: '12.0s', delay: '1.2s', size: 42 },
  { id: 'leaf-5', src: '/images/hero-garnished/hero-6-leaf-1.png', left: '78%', duration: '10.4s', delay: '3.8s', size: 34 },
  { id: 'leaf-6', src: '/images/hero-garnished/hero-6-leaf-3.png', left: '88%', duration: '9.0s', delay: '6.7s', size: 30 },
  { id: 'leaf-7', src: '/images/hero-garnished/hero-6-leaf-2.png', left: '38%', duration: '11.8s', delay: '7.5s', size: 36 }
];

const HeroSection = ({ onNavigateToCourses }) => {
  // État stockant les IDs des éléments ayant atterri à leur place fixe
  const [landedItems, setLandedItems] = useState({});

  useEffect(() => {
    // Animation JS fluide avec entrée cadencée (gauche / droite) pour chaque image
    const timers = [];

    GARNISH_ITEMS.forEach((item) => {
      const timer = setTimeout(() => {
        setLandedItems((prev) => ({ ...prev, [item.id]: true }));
      }, item.delay);
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const handleActionClick = (e) => {
    e.preventDefault();
    if (onNavigateToCourses) {
      onNavigateToCourses();
    }
  };

  return (
    <section className="bleoum-garnished-hero">
      
      {/* =========================================================
         1. FEUILLES EN DÉPLACEMENT PERMANENT (ENTRANT HAUT -> SORTANT BAS)
         ========================================================= */}
      <div className="hero-falling-leaves-container" aria-hidden="true">
        {FALLING_LEAVES.map((leaf) => (
          <div
            key={leaf.id}
            className="hero-falling-leaf-wrapper"
            style={{
              left: leaf.left,
              animationDuration: leaf.duration,
              animationDelay: leaf.delay,
              width: `${leaf.size}px`
            }}
          >
            <img
              src={leaf.src}
              alt=""
              className="hero-falling-leaf-img"
            />
          </div>
        ))}
      </div>

      {/* =========================================================
         2. CADRE D'INGRÉDIENTS PNG ANIMÉS PAR JS DEPUIS LA GAUCHE OU LA DROITE
         Entrée lente échelonnée vers leur place fixe
         ========================================================= */}
      <div className="hero-dense-garnished-frame" aria-hidden="true">
        {GARNISH_ITEMS.map((item) => {
          const isLanded = !!landedItems[item.id];
          
          // Style d'animation JS fluide venant de la gauche (travelX négatif) ou droite (travelX positif)
          const dynamicStyle = {
            transform: isLanded 
              ? 'translate3d(0, 0, 0)' 
              : `translate3d(${item.travelX || 0}px, ${item.travelY || 0}px, 0)`,
            opacity: isLanded ? 1 : 0,
            transition: `transform ${item.duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${item.duration * 0.85}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
            willChange: 'transform, opacity'
          };

          return (
            <div 
              key={item.id} 
              className={`garnish-dense-item ${item.className}`}
              style={dynamicStyle}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="dense-img" 
              />
            </div>
          );
        })}
      </div>

      {/* =========================================================
         3. CONTENU CENTRAL (ORANGE-JAUNE BLEOUM & TEXTE DU USER)
         ========================================================= */}
      <div className="container position-relative hero-center-wrapper">
        <div className="hero-center-box">
          
          {/* Sur-titre script / badge doré */}
          <div className="hero-sub-script-badge anim-fade-down">
            <Sparkles size={16} className="hero-sparkle-icon" />
            <span>Bienvenue sur Bleoum Service</span>
          </div>

          {/* Grand Titre Centré modifié par l'utilisateur */}
          <h1 className="hero-main-title anim-zoom-in">
            Faites votre course en <span className="hero-title-orange-accent"> 1 Seul Clic</span>
          </h1>

          {/* Boutons d'Action Centrés aux Couleurs Orange-Jaune de Bleoum */}
          <div className="hero-buttons-action-row anim-fade-up-delay">
            <a 
              href="#courses" 
              className="btn-bleoum-hero-primary"
              onClick={handleActionClick}
            >
              <span>Commander Maintenant</span>
              <ArrowRight size={17} className="btn-arrow-icon" />
            </a>

            <a 
              href="#courses" 
              className="btn-bleoum-hero-outline"
              onClick={handleActionClick}
            >
              <ShoppingBag size={16} />
              <span>Faire Mes Courses</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
