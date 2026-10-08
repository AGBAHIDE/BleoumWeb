import React, { useEffect, useRef, useState } from 'react';
import '../styles/WordDropTitle.css';

/**
 * Composant WordDropTitle - Animation Option 2 (Dépôt Gravité & Flou Doux)
 * Chaque mot descend verticalement du haut et se dépose à sa place avec un décalage progressif
 */
const WordDropTitle = ({ text, className = '', tag: Tag = 'h1' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Anime une seule fois lors de l'apparition
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <Tag ref={titleRef} className={`word-drop-container ${className} ${isVisible ? 'is-visible' : ''}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word-drop-unit"
          style={{
            transitionDelay: `${index * 85}ms`
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </Tag>
  );
};

export default WordDropTitle;
