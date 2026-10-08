import React from 'react';
import { UtensilsCrossed, Store, Truck, ShieldCheck } from 'lucide-react';
import '../styles/FeatureBarSection.css';

const featuresList = [
  {
    id: 1,
    icon: UtensilsCrossed,
    title: 'Restaurants Partenaires',
    desc: 'Menus chauds et cuisine préparée à la commande',
    cardClass: 'feature-card-amber',
    iconColor: '#EA580C'
  },
  {
    id: 2,
    icon: Store,
    title: 'Boutiques & Épiceries',
    desc: 'Vivres, légumes frais et courses de proximité',
    cardClass: 'feature-card-green',
    iconColor: '#059669'
  },
  {
    id: 3,
    icon: Truck,
    title: 'Livraison Express',
    desc: 'Suivi de commande en direct à votre porte',
    cardClass: 'feature-card-purple',
    iconColor: '#7C3AED'
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Qualité 100% Sécurisée',
    desc: 'Paiement Mobile Money & assistance 7j/7',
    cardClass: 'feature-card-blue',
    iconColor: '#0284C7'
  }
];

const FeatureBarSection = () => {
  return (
    <section id="a-propos" className="ltn__feature-area feature-bar-section pt-50 pb-50">
      <div className="container">
        <div className="row g-4">
          {featuresList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-12">
                <div className={`feature-individual-card ${item.cardClass}`}>
                  <div 
                    className="feature-card-icon-wrap" 
                    style={{ color: item.iconColor }}
                  >
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                  <div className="feature-card-text-wrap">
                    <h4 className="feature-card-title">{item.title}</h4>
                    <p className="feature-card-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBarSection;
