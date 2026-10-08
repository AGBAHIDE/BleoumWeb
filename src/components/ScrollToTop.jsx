import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Trigger on mount in case user is already scrolled
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button 
      type="button" 
      className="bleoum-scroll-to-top-btn"
      onClick={scrollToTop}
      title="Remonter en haut de page"
      aria-label="Remonter en haut"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
