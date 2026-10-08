import React, { useState } from 'react';
import { Eye, ShoppingCart, Heart } from 'lucide-react';
import { getCategoryIconUrl } from '../utils/categoryIcons';
import WordDropTitle from './WordDropTitle';
import '../styles/ProductsTabSection.css';

// Catégories BOUTIQUES Uniquement (Section : Produits & Menus en Vedette -> Commerces & Boutiques)
const boutiqueCategories = [
  { id: 'all', name: 'Tous les Rayons' },
  { id: 'legumes', name: 'Fruits & Légumes' },
  { id: 'epicerie', name: 'Épicerie & Vivres' },
  { id: 'boulangerie', name: 'Pains & Viennoiseries' },
  { id: 'poissons', name: 'Poissons & Mer' },
  { id: 'boucherie', name: 'Boucherie & Viandes' },
  { id: 'laitiers', name: 'Produits Laitiers' },
  { id: 'epices', name: 'Condiments & Épices' }
];

const boutiqueProductsData = {
  all: [
    {
      id: 201,
      title: 'Tomates Bio Grappe du Jardin',
      category: 'Fruits & Légumes',
      categoryId: 'legumes',
      price: '1 200 FCFA / kg',
      badge: '-19%',
      image: '/images/boutique/boutique-tomatoes.jpg',
      description: 'Tomates bien mûres et juteuses cultivées sans pesticides par nos maraîchers locaux.'
    },
    {
      id: 202,
      title: 'Miel Pur de Fleurs Sauvages 500g',
      category: 'Épicerie & Vivres',
      categoryId: 'epicerie',
      price: '3 500 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-honey.jpg',
      description: 'Miel artisanal de forêt 100% naturel, sans sucre ajouté ni conservateur.'
    },
    {
      id: 203,
      title: 'Carottes Croquantes du Terroir',
      category: 'Fruits & Légumes',
      categoryId: 'legumes',
      price: '900 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-carrots.jpg',
      description: 'Bottes de carottes fraîches du jour, idéales pour salades et jus vitaminés.'
    },
    {
      id: 204,
      title: 'Riz Parfumé Supérieur 5 kg',
      category: 'Épicerie & Vivres',
      categoryId: 'epicerie',
      price: '5 200 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-rice.jpg',
      description: 'Riz sélectionné grain long parfumé, texture légère et saveur délicate.'
    },
    {
      id: 205,
      title: 'Baguettes Tradition & Épis Dorés',
      category: 'Pains & Viennoiseries',
      categoryId: 'boulangerie',
      price: '500 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-baguette.jpg',
      description: 'Pains artisanaux pétris chaque matin et cuits au four à sole traditionnel.'
    },
    {
      id: 206,
      title: 'Capitaine Frais Entier du Jour',
      category: 'Poissons & Mer',
      categoryId: 'poissons',
      price: '3 800 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-fish.jpg',
      description: 'Poisson frais pêché de la nuit, nettoyé et prêt à être cuisiné.'
    },
    {
      id: 207,
      title: 'Morceaux de Bœuf Frais Sélection',
      category: 'Boucherie & Viandes',
      categoryId: 'boucherie',
      price: '3 500 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-beef.jpg',
      description: 'Viande de bœuf tendre coupée à la demande par nos maîtres bouchers.'
    },
    {
      id: 208,
      title: 'Huile Pure de Tournesol 1L',
      category: 'Épicerie & Vivres',
      categoryId: 'epicerie',
      price: '1 600 FCFA',
      badge: '-19%',
      image: '/images/boutique/boutique-oil.jpg',
      description: 'Huile végétale raffinée de qualité supérieure pour toutes vos fritures et cuissons.'
    }
  ],
  legumes: [
    {
      id: 201,
      title: 'Tomates Bio Grappe du Jardin',
      category: 'Fruits & Légumes',
      categoryId: 'legumes',
      price: '1 200 FCFA / kg',
      badge: '-19%',
      image: '/images/boutique/boutique-tomatoes.jpg',
      description: 'Tomates bien mûres et juteuses cultivées sans pesticides par nos maraîchers locaux.'
    },
    {
      id: 203,
      title: 'Carottes Croquantes du Terroir',
      category: 'Fruits & Légumes',
      categoryId: 'legumes',
      price: '900 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-carrots.jpg',
      description: 'Bottes de carottes fraîches du jour, idéales pour salades et jus vitaminés.'
    },
    {
      id: 209,
      title: 'Panier Primeur Fraîcheur Hebdo',
      category: 'Fruits & Légumes',
      categoryId: 'legumes',
      price: '8 500 FCFA',
      badge: '-25%',
      image: '/images/boutique/boutique-veg-basket.jpg',
      description: 'Panier complet de 6 kg de légumes et aromates essentiels pour toute la famille.'
    },
    {
      id: 210,
      title: 'Assortiment Poivrons Multicolores',
      category: 'Fruits & Légumes',
      categoryId: 'legumes',
      price: '1 500 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-peppers.jpg',
      description: 'Poivrons rouges, jaunes et verts très aromatiques pour vos sauces et plats.'
    }
  ],
  epicerie: [
    {
      id: 202,
      title: 'Miel Pur de Fleurs Sauvages 500g',
      category: 'Épicerie & Vivres',
      categoryId: 'epicerie',
      price: '3 500 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-honey.jpg',
      description: 'Miel artisanal de forêt 100% naturel, sans sucre ajouté ni conservateur.'
    },
    {
      id: 204,
      title: 'Riz Parfumé Supérieur 5 kg',
      category: 'Épicerie & Vivres',
      categoryId: 'epicerie',
      price: '5 200 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-rice.jpg',
      description: 'Riz sélectionné grain long parfumé, texture légère et saveur délicate.'
    },
    {
      id: 208,
      title: 'Huile Pure de Tournesol 1L',
      category: 'Épicerie & Vivres',
      categoryId: 'epicerie',
      price: '1 600 FCFA',
      badge: '-19%',
      image: '/images/boutique/boutique-oil.jpg',
      description: 'Huile végétale raffinée de qualité supérieure pour toutes vos fritures et cuissons.'
    },
    {
      id: 211,
      title: 'Farine de Blé Supérieure 1 kg',
      category: 'Épicerie & Vivres',
      categoryId: 'epicerie',
      price: '900 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-flour.jpg',
      description: 'Farine fine idéale pour pâtisseries, crêpes et pains faits maison.'
    }
  ],
  boulangerie: [
    {
      id: 205,
      title: 'Baguettes Tradition & Épis Dorés',
      category: 'Pains & Viennoiseries',
      categoryId: 'boulangerie',
      price: '500 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-baguette.jpg',
      description: 'Pains artisanaux pétris chaque matin et cuits au four à sole traditionnel.'
    },
    {
      id: 212,
      title: 'Croissants Pur Beurre (Lot de 4)',
      category: 'Pains & Viennoiseries',
      categoryId: 'boulangerie',
      price: '1 800 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-croissant.jpg',
      description: 'Viennoiseries croustillantes pur beurre avec un feuilletage fondant.'
    },
    {
      id: 213,
      title: 'Pain de Mie Complet Artisanal',
      category: 'Pains & Viennoiseries',
      categoryId: 'boulangerie',
      price: '1 200 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-bread.jpg',
      description: 'Pain complet tranché riche en fibres pour vos petits déjeuners équilibrés.'
    },
    {
      id: 214,
      title: 'Brioche Moelleuse Tressée',
      category: 'Pains & Viennoiseries',
      categoryId: 'boulangerie',
      price: '2 200 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-brioche.jpg',
      description: 'Brioche dorée au sucre perlé, ultra moelleuse pour toute la famille.'
    }
  ],
  poissons: [
    {
      id: 206,
      title: 'Capitaine Frais Entier du Jour',
      category: 'Poissons & Mer',
      categoryId: 'poissons',
      price: '3 800 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-fish.jpg',
      description: 'Poisson frais pêché de la nuit, nettoyé et prêt à être cuisiné.'
    },
    {
      id: 215,
      title: 'Crevettes Fraîches de Mer 1 kg',
      category: 'Poissons & Mer',
      categoryId: 'poissons',
      price: '6 500 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-shrimp.jpg',
      description: 'Grosses crevettes fraîches idéales pour sauces, grillades et sautés.'
    },
    {
      id: 216,
      title: 'Filets de Saumon Frais',
      category: 'Poissons & Mer',
      categoryId: 'poissons',
      price: '7 500 FCFA / kg',
      badge: '-19%',
      image: '/images/boutique/boutique-salmon.jpg',
      description: 'Pavés de saumon sans arêtes riches en oméga-3 et saveurs marines.'
    },
    {
      id: 217,
      title: 'Crabes Frais de Lagune',
      category: 'Poissons & Mer',
      categoryId: 'poissons',
      price: '4 500 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-crab.jpg',
      description: 'Crabes vivants sélectionnés pour enrichir vos sauces traditionnelles.'
    }
  ],
  boucherie: [
    {
      id: 207,
      title: 'Morceaux de Bœuf Frais Sélection',
      category: 'Boucherie & Viandes',
      categoryId: 'boucherie',
      price: '3 500 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-beef.jpg',
      description: 'Viande de bœuf tendre coupée à la demande par nos maîtres bouchers.'
    },
    {
      id: 218,
      title: 'Poulet Fermier Entier Prêt à Cuire',
      category: 'Boucherie & Viandes',
      categoryId: 'boucherie',
      price: '3 200 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-chicken.jpg',
      description: 'Volaille fermière élevée en plein air, nettoyée et prête pour le four.'
    },
    {
      id: 219,
      title: 'Côtelettes d’Agneau Fraîches',
      category: 'Boucherie & Viandes',
      categoryId: 'boucherie',
      price: '5 500 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-lamb.jpg',
      description: 'Côtelettes tendres parfaites pour les grillades et rôtis savoureux.'
    },
    {
      id: 220,
      title: 'Saucisses & Merguez Artisanales',
      category: 'Boucherie & Viandes',
      categoryId: 'boucherie',
      price: '2 800 FCFA / kg',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-sausages.jpg',
      description: 'Préparations bouchères fraîches 100% pur bœuf et épices fines.'
    }
  ],
  laitiers: [
    {
      id: 221,
      title: 'Pack Lait Entier Fermier 6x1L',
      category: 'Produits Laitiers',
      categoryId: 'laitiers',
      price: '5 400 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-milk.jpg',
      description: 'Lait entier pasteurisé de qualité supérieure pour petits et grands.'
    },
    {
      id: 222,
      title: 'Fromage Gouda & Emmental 250g',
      category: 'Produits Laitiers',
      categoryId: 'laitiers',
      price: '2 200 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-cheese.jpg',
      description: 'Fromages affinés à pâte pressée, doux et fondants en bouche.'
    },
    {
      id: 223,
      title: 'Beurre Doux Artisanal 250g',
      category: 'Produits Laitiers',
      categoryId: 'laitiers',
      price: '1 600 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-butter.jpg',
      description: 'Beurre traditionnel riche en goût pour tartines et cuisine gourmande.'
    },
    {
      id: 224,
      title: 'Yaourts Brassés Nature (Pack de 8)',
      category: 'Produits Laitiers',
      categoryId: 'laitiers',
      price: '2 000 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-yoghurt.jpg',
      description: 'Yaourts onctueux préparés avec du lait frais sans conservateur.'
    }
  ],
  epices: [
    {
      id: 225,
      title: 'Piment Rouge Pur Moulu 200g',
      category: 'Condiments & Épices',
      categoryId: 'epices',
      price: '1 000 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-chili.jpg',
      description: 'Piment du terroir séché et moulu artisanalement pour relever vos plats.'
    },
    {
      id: 226,
      title: 'Mélange d’Épices Secrètes du Chef',
      category: 'Condiments & Épices',
      categoryId: 'epices',
      price: '1 500 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-spices.jpg',
      description: 'Assortiment aromatique exclusif pour marinades, viandes et sauces.'
    },
    {
      id: 227,
      title: 'Ail & Gingembre Frais Pilé 250g',
      category: 'Condiments & Épices',
      categoryId: 'epices',
      price: '1 200 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-garlic.jpg',
      description: 'Pâte fraîche prête à l’emploi pour parfumer toutes vos préparations.'
    },
    {
      id: 228,
      title: 'Moutarde & Sauces Locales Piquantes',
      category: 'Condiments & Épices',
      categoryId: 'epices',
      price: '1 400 FCFA',
      badge: 'Nouveau',
      image: '/images/boutique/boutique-sauce.jpg',
      description: 'Sauces de table artisanales pour accompagner grillades et snacks.'
    }
  ]
};

const FeaturedProductsSection = ({ onQuickView, onAddToCart, onAddToWishlist }) => {
  const [activeBoutiqueTab, setActiveBoutiqueTab] = useState('all');

  const currentBoutiqueProducts = boutiqueProductsData[activeBoutiqueTab] || boutiqueProductsData.all;

  return (
    <section id="meilleures-ventes" className="ltn__product-area ltn__product-gutter pt-80 pb-70">
      <div className="container">
        {/* Titre de la Section Boutiques */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <WordDropTitle text="Et voici les Produits Vedettes des Boutiques" className="section-title" />
            </div>

            {/* Barre de Catégories Horizontales pour Boutiques avec Icônes Icons8 */}
            <div className="categories-pill-scroll-wrapper mb-40">
              <div className="categories-pill-scroll-track">
                {boutiqueCategories.map((cat) => {
                  const isActive = activeBoutiqueTab === cat.id;
                  const iconUrl = getCategoryIconUrl(cat.name, 'boutique');
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`category-pill-card ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveBoutiqueTab(cat.id)}
                    >
                      <span className="category-pill-icon">
                        <img 
                          src={iconUrl} 
                          alt={cat.name} 
                          className="category-pill-icon-img" 
                          loading="lazy" 
                        />
                      </span>
                      <span className="category-pill-name">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grille des Produits Boutiques */}
            <div className="tab-content">
              <div className="row">
                {currentBoutiqueProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mb-20 mb-md-30"
                  >
                    <div className="ltn__product-item ltn__product-item-3">
                      {/* Image & Badges & Actions au survol */}
                      <div className="product-img">
                        <a href="#view" onClick={(e) => { e.preventDefault(); onQuickView(product); }}>
                          <img src={product.image} alt={product.title} />
                        </a>

                        {product.badge && (
                          <div className="product-badge">
                            <ul>
                              <li className={`sale-badge ${product.badge.includes('%') ? 'badge-red' : 'badge-gold'}`}>
                                {product.badge}
                              </li>
                            </ul>
                          </div>
                        )}

                        {/* Actions au survol sans fond blanc */}
                        <div className="product-hover-action">
                          <ul>
                            <li>
                              <button 
                                type="button" 
                                title="Aperçu Rapide" 
                                onClick={() => onQuickView(product)}
                              >
                                <Eye size={17} />
                              </button>
                            </li>
                            <li>
                              <button 
                                type="button" 
                                title="Ajouter au Panier" 
                                onClick={() => onAddToCart(product)}
                              >
                                <ShoppingCart size={17} />
                              </button>
                            </li>
                            <li>
                              <button 
                                type="button" 
                                title="Ajouter aux Favoris" 
                                onClick={() => onAddToWishlist(product)}
                              >
                                <Heart size={17} />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Informations Produit : Aligné à gauche */}
                      <div className="product-info">
                        <h3 className="product-title">
                          <a href="#view" onClick={(e) => { e.preventDefault(); onQuickView(product); }}>
                            {product.title}
                          </a>
                        </h3>

                        <div className="product-price">
                          <span>{product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
