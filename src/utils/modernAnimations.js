/**
 * =========================================================
 * BLEOUM SERVICE - MOTEUR D'ANIMATION MODERNE (PUR JAVASCRIPT & REACT)
 * =========================================================
 * Ce module gère :
 * 1. L'apparition fluide au défilement (IntersectionObserver Scroll Reveal)
 * 2. L'effet de bascule 3D interactive (Magnetic 3D Tilt & Glow Card)
 * 3. L'onde tactile au clic (Ripple Effect)
 * 4. L'effet parallaxe flottant suivant la souris
 * 5. Le compteur de chiffres dynamique (CountUp)
 * 6. L'élévation dynamique du Header au défilement
 */

import { useEffect } from 'react';
import '../styles/modernAnimations.css';

/**
 * 1. SCROLL REVEAL OBSERVER
 * Observe l'entrée des éléments dans l'écran et applique une transition fluide en cascade.
 */
export function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const revealSelectors = [
    '.feature-individual-card',
    '.ltn__product-item',
    '.courses-pos-product-card',
    '.banner-card-promo',
    '.deals-img-box',
    '.call-to-action-inner',
    '.caferio-testimonial-card',
    '.app-download-card',
    '.newsletter-grid-wrap',
    '.footer-caferio-widget',
    '.section-title-area',
    '.section-heading-caferio',
    '.categories-pill-scroll-wrapper',
    '.courses-hero-filters-strip'
  ];

  const elements = document.querySelectorAll(revealSelectors.join(', '));
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        
        // Si c'est un élément d'une grille, calcul du décalage en cascade
        const parent = el.parentElement;
        if (parent && parent.children.length > 1) {
          const index = Array.from(parent.children).indexOf(el);
          const delay = Math.min(index * 70, 350); // max 350ms
          el.style.transitionDelay = `${delay}ms`;
        }

        el.classList.add('is-revealed');
        obs.unobserve(el); // Ne s'exécute qu'une fois pour une performance optimale
      }
    });
  }, observerOptions);

  elements.forEach((el) => {
    if (!el.classList.contains('is-revealed')) {
      if (!el.classList.contains('reveal-up') && 
          !el.classList.contains('reveal-left') && 
          !el.classList.contains('reveal-right') && 
          !el.classList.contains('reveal-zoom')) {
        el.classList.add('reveal-up');
      }
      observer.observe(el);
    }
  });

  return () => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
}

/**
 * 2. 3D TILT & GLOW INTERACTIF
 * Applique une inclinaison 3D soyeuse et un halo lumineux suivant le curseur.
 */
export function initInteractiveTilt() {
  if (typeof window === 'undefined' || window.innerWidth < 992) return () => {};

  const tiltCardSelectors = [
    '.caferio-testimonial-card',
    '.feature-individual-card',
    '.deals-img-box',
    '.banner-card-promo',
    '.category-pill-card'
  ];

  const cards = document.querySelectorAll(tiltCardSelectors.join(', '));
  const cleanupFns = [];

  cards.forEach((card) => {
    card.classList.add('modern-tilt-card', 'glow-card-interactive');

    let isHovered = false;
    let rafId = null;

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseMove = (e) => {
      if (!isHovered) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Position relative pour le gradient radial
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Calcul des angles d'inclinaison 3D (doux : max 6 degrés)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px)`;
      });
    };

    const onMouseLeave = () => {
      isHovered = false;
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove, { passive: true });
    card.addEventListener('mouseleave', onMouseLeave);

    cleanupFns.push(() => {
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    });
  });

  return () => {
    cleanupFns.forEach((fn) => fn());
  };
}

/**
 * 3. RIPPLE EFFECT SUR LES BOUTONS
 * Génère une onde d'eau circulaire lumineuse au clic.
 */
export function initRippleEffect() {
  if (typeof window === 'undefined') return () => {};

  const buttonSelectors = [
    '.btn-garnished-hero-primary',
    '.btn-garnished-hero-outline',
    '.btn-hero-primary',
    '.btn-hero-outline',
    '.banner-action-pill-btn',
    '.caferio-book-btn',
    '.newsletter-submit-pill',
    '.cart-capsule-btn',
    '.category-pill-card',
    '.btn-floating-checkout',
    '.btn-deal-cta'
  ];

  const onGlobalClick = (e) => {
    const btn = e.target.closest(buttonSelectors.join(', '));
    if (!btn) return;

    btn.classList.add('ripple-host');

    // Supprime les anciennes vagues restantes
    const existing = btn.querySelector('.modern-ripple-wave');
    if (existing) existing.remove();

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const wave = document.createElement('span');
    wave.classList.add('modern-ripple-wave');

    // Si le bouton est clair, on utilise une onde ambrée
    const isLightBtn = btn.classList.contains('btn-hero-outline') || btn.classList.contains('category-pill-card');
    if (isLightBtn) {
      wave.classList.add('modern-ripple-wave-dark');
    }

    wave.style.width = `${size}px`;
    wave.style.height = `${size}px`;
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;

    btn.appendChild(wave);

    setTimeout(() => {
      wave.remove();
    }, 650);
  };

  document.addEventListener('click', onGlobalClick);
  return () => {
    document.removeEventListener('click', onGlobalClick);
  };
}

/**
 * 4. PARALLAXE FLOTTANT AU MOUVEMENT DE SOURIS
 * Fait réagir doucement les éléments décoratifs et badges au curseur.
 */
export function initParallaxMouse() {
  if (typeof window === 'undefined' || window.innerWidth < 992) return () => {};

  const heroSection = document.querySelector('.bleoum-garnished-hero, .bleoum-hero-container');
  if (!heroSection) return () => {};

  const floatingElements = heroSection.querySelectorAll('.garnish-item, .hero-caferio-floating-elem, .hero-top-pill-badge');
  if (floatingElements.length === 0) return () => {};

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  const onMouseMove = (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouseX = (e.clientX - rect.left - rect.width / 2) * 0.025;
    mouseY = (e.clientY - rect.top - rect.height / 2) * 0.025;
  };

  const updateParallax = () => {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    floatingElements.forEach((el, idx) => {
      const factor = (idx % 4 + 1) * 0.4;
      el.style.transform = `translate3d(${currentX * factor}px, ${currentY * factor}px, 0)`;
    });

    rafId = requestAnimationFrame(updateParallax);
  };

  heroSection.addEventListener('mousemove', onMouseMove, { passive: true });
  rafId = requestAnimationFrame(updateParallax);

  return () => {
    heroSection.removeEventListener('mousemove', onMouseMove);
    if (rafId) cancelAnimationFrame(rafId);
  };
}

/**
 * 5. COMPTEUR DE CHIFFRES ANIMÉ (COUNT-UP)
 */
export function initCounterAnimations() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const countItems = document.querySelectorAll('[data-counter-target]');
  if (countItems.length === 0) return () => {};

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target') || '0');
        const duration = 1800; // ms
        const startTime = performance.now();
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const prefix = el.getAttribute('data-counter-prefix') || '';

        const animateCounter = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          // Courbe easeOutExpo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = Math.floor(easeProgress * target);
          el.textContent = `${prefix}${current.toLocaleString('fr-FR')}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(animateCounter);
          } else {
            el.textContent = `${prefix}${target.toLocaleString('fr-FR')}${suffix}`;
          }
        };

        requestAnimationFrame(animateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  countItems.forEach((el) => observer.observe(el));

  return () => {
    countItems.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
}

/**
 * 6. INITIALISATEUR GLOBAL
 * Lance l'ensemble des modules d'animation et retourne une fonction de nettoyage globale.
 */
export function initAllModernAnimations() {
  const cleanups = [
    initScrollReveal(),
    initInteractiveTilt(),
    initRippleEffect(),
    initParallaxMouse(),
    initCounterAnimations()
  ];

  return () => {
    cleanups.forEach((fn) => {
      if (typeof fn === 'function') fn();
    });
  };
}

/**
 * 7. HOOK REACT PERSONNALISÉ useModernAnimations
 * À appeler dans les composants pages pour relancer proprement les animations après un rendu d'état.
 */
export function useModernAnimations(deps = []) {
  useEffect(() => {
    const cleanup = initAllModernAnimations();
    return () => {
      cleanup();
    };
  }, deps);
}

export default {
  initScrollReveal,
  initInteractiveTilt,
  initRippleEffect,
  initParallaxMouse,
  initCounterAnimations,
  initAllModernAnimations,
  useModernAnimations
};
