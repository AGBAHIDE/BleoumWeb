import React, { useState } from 'react';
import { Eye, ShoppingCart, Heart } from 'lucide-react';
import { getCategoryIconUrl } from '../utils/categoryIcons';
import WordDropTitle from './WordDropTitle';
import '../styles/ProductsTabSection.css';

// Catégories RESTAURANTS Uniquement (Section : Les Incontournables de Bleoum)
const restaurantCategories = [
  { id: 'all', name: 'Tous les Plats' },
  { id: 'fastfood', name: 'Fast-Food & Burgers' },
  { id: 'grillades', name: 'Grillades & Barbecue' },
  { id: 'pizzas', name: 'Pizzas & Pâtes' },
  { id: 'locaux', name: 'Plats Locaux & Terroir' },
  { id: 'desserts', name: 'Pâtisserie & Desserts' },
  { id: 'boissons', name: 'Boissons & Cocktails' },
  { id: 'cafes', name: 'Cafés & Thés' }
];

const restaurantProductsData = {
  all: [
    {
      id: 101,
      title: 'Cheese Burger Gourmet & Frites',
      category: 'Fast-Food & Burgers',
      categoryId: 'fastfood',
      price: '3 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-burger.jpg',
      description: 'Burger artisanal avec pain brioché moelleux, steak haché 100% pur bœuf, cheddar fondant et frites dorées.'
    },
    {
      id: 102,
      title: 'Cheese Pizza Fondante au Feu de Bois',
      category: 'Pizzas & Pâtes',
      categoryId: 'pizzas',
      price: '4 800 FCFA',
      badge: '-19%',
      image: '/images/dishes/dish-pizza.jpg',
      description: 'Pizza cuite au feu de bois, mozzarella filante généreuse, sauce tomate mijotée et basilic frais.'
    },
    {
      id: 103,
      title: 'Poulet Rôti Doré & Frites Maison',
      category: 'Grillades & Barbecue',
      categoryId: 'grillades',
      price: '4 500 FCFA',
      badge: '-25%',
      image: '/images/dishes/dish-chicken.jpg',
      description: 'Poulet fermier rôti avec ses épices locales secrètes, servi bien chaud avec frites croustillantes.'
    },
    {
      id: 104,
      title: 'Steak Grillé & Sauce Forestière',
      category: 'Grillades & Barbecue',
      categoryId: 'grillades',
      price: '6 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-steak.jpg',
      description: 'Pièce de viande tendre grillée à point et nappée de sauce maison parfumée.'
    },
    {
      id: 105,
      title: 'Frites Croustillantes & Sauces Dips',
      category: 'Fast-Food & Burgers',
      categoryId: 'fastfood',
      price: '1 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-fries.jpg',
      description: 'Portion généreuse de frites fraîches servie avec sauces ketchup et mayonnaise piquante.'
    },
    {
      id: 106,
      title: 'Poulet Croustillant Frit Épicé',
      category: 'Grillades & Barbecue',
      categoryId: 'grillades',
      price: '4 200 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-friedchicken.jpg',
      description: 'Morceaux de poulet panés ultra croustillants marinés aux épices cajun.'
    },
    {
      id: 107,
      title: 'Plateau Shawarma & Wraps Toastés',
      category: 'Fast-Food & Burgers',
      categoryId: 'fastfood',
      price: '3 000 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-shawarma.jpg',
      description: 'Wraps et shawarmas chauds garnis de viandes savoureuses, crudités et sauce blanche.'
    },
    {
      id: 108,
      title: 'Assiette Pâtes Crémeuses & Émincés',
      category: 'Pizzas & Pâtes',
      categoryId: 'pizzas',
      price: '4 200 FCFA',
      badge: '-19%',
      image: '/images/dishes/dish-pasta.jpg',
      description: 'Pâtes al dente préparées selon la tradition, sauce crémeuse parfumée et parmesan.'
    }
  ],
  fastfood: [
    {
      id: 101,
      title: 'Cheese Burger Gourmet & Frites',
      category: 'Fast-Food & Burgers',
      categoryId: 'fastfood',
      price: '3 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-burger.jpg',
      description: 'Burger artisanal avec pain brioché moelleux, steak haché 100% pur bœuf, cheddar fondant et frites dorées.'
    },
    {
      id: 105,
      title: 'Frites Croustillantes & Sauces Dips',
      category: 'Fast-Food & Burgers',
      categoryId: 'fastfood',
      price: '1 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-fries.jpg',
      description: 'Portion généreuse de frites fraîches servie avec sauces ketchup et mayonnaise piquante.'
    },
    {
      id: 107,
      title: 'Plateau Shawarma & Wraps Toastés',
      category: 'Fast-Food & Burgers',
      categoryId: 'fastfood',
      price: '3 000 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-shawarma.jpg',
      description: 'Wraps et shawarmas chauds garnis de viandes savoureuses, crudités et sauce blanche.'
    },
    {
      id: 109,
      title: 'Double Burger Bacon & Cheddar',
      category: 'Fast-Food & Burgers',
      categoryId: 'fastfood',
      price: '4 200 FCFA',
      badge: '-19%',
      image: '/images/dishes/dish-burger2.jpg',
      description: 'Double portion de steak haché de bœuf, tranches de bacon grillé et double cheddar fondu.'
    }
  ],
  grillades: [
    {
      id: 103,
      title: 'Poulet Rôti Doré & Frites Maison',
      category: 'Grillades & Barbecue',
      categoryId: 'grillades',
      price: '4 500 FCFA',
      badge: '-25%',
      image: '/images/dishes/dish-chicken.jpg',
      description: 'Poulet fermier rôti avec ses épices locales secrètes, servi bien chaud avec frites croustillantes.'
    },
    {
      id: 104,
      title: 'Steak Grillé & Sauce Forestière',
      category: 'Grillades & Barbecue',
      categoryId: 'grillades',
      price: '6 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-steak.jpg',
      description: 'Pièce de viande tendre sélectionnée chez notre boucher partenaire, grillée à point et nappée de sauce maison.'
    },
    {
      id: 106,
      title: 'Poulet Croustillant Frit Épicé',
      category: 'Grillades & Barbecue',
      categoryId: 'grillades',
      price: '4 200 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-friedchicken.jpg',
      description: 'Morceaux de poulet panés ultra croustillants marinés aux épices cajun.'
    },
    {
      id: 110,
      title: 'Poisson Braisé & Alloco Doré',
      category: 'Grillades & Barbecue',
      categoryId: 'grillades',
      price: '5 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-fish.jpg',
      description: 'Poisson frais mariné et braisé au feu de bois avec bananes plantains frites.'
    }
  ],
  pizzas: [
    {
      id: 102,
      title: 'Cheese Pizza Fondante au Feu de Bois',
      category: 'Pizzas & Pâtes',
      categoryId: 'pizzas',
      price: '4 800 FCFA',
      badge: '-19%',
      image: '/images/dishes/dish-pizza.jpg',
      description: 'Pizza cuite au feu de bois, mozzarella filante généreuse, sauce tomate mijotée et basilic frais.'
    },
    {
      id: 111,
      title: 'Pizza Margherita Basilic & Olives',
      category: 'Pizzas & Pâtes',
      categoryId: 'pizzas',
      price: '4 200 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-pizza2.jpg',
      description: 'Recette traditionnelle italienne avec mozzarella de bufflonne et feuilles de basilic frais.'
    },
    {
      id: 108,
      title: 'Assiette Pâtes Crémeuses & Émincés',
      category: 'Pizzas & Pâtes',
      categoryId: 'pizzas',
      price: '4 200 FCFA',
      badge: '-19%',
      image: '/images/dishes/dish-pasta.jpg',
      description: 'Pâtes al dente préparées selon la tradition, sauce crémeuse parfumée et parmesan.'
    },
    {
      id: 112,
      title: 'Lasagne Maison au Bœuf & Béchamel',
      category: 'Pizzas & Pâtes',
      categoryId: 'pizzas',
      price: '4 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-lasagna.jpg',
      description: 'Couches généreuses de pâte fraîche, sauce bolognaise mijotée et béchamel fondante gratinée.'
    }
  ],
  locaux: [
    {
      id: 113,
      title: 'Riz Gras Parfumé & Poulet Braisé',
      category: 'Plats Locaux & Terroir',
      categoryId: 'locaux',
      price: '3 800 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-chicken.jpg',
      description: 'Riz mijoté aux légumes et épices du terroir accompagné d’une cuisse de poulet braisée.'
    },
    {
      id: 114,
      title: 'Poisson Braisé & Alloco Doré',
      category: 'Plats Locaux & Terroir',
      categoryId: 'locaux',
      price: '5 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-fish.jpg',
      description: 'Poisson frais mariné et braisé au feu de bois avec bananes plantains frites.'
    },
    {
      id: 115,
      title: 'Salade Fraîcheur Avocat & Crudités',
      category: 'Plats Locaux & Terroir',
      categoryId: 'locaux',
      price: '2 800 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-salad.jpg',
      description: 'Salade croquante vitaminée avec tomates cerises, avocat frais et vinaigrette artisanale.'
    },
    {
      id: 104,
      title: 'Steak Grillé & Sauce Forestière',
      category: 'Plats Locaux & Terroir',
      categoryId: 'locaux',
      price: '6 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-steak.jpg',
      description: 'Pièce de viande tendre sélectionnée chez notre boucher partenaire, grillée à point et nappée de sauce maison.'
    }
  ],
  desserts: [
    {
      id: 116,
      title: 'Gaufres Moelleuses & Fruits Rouges',
      category: 'Pâtisserie & Desserts',
      categoryId: 'desserts',
      price: '2 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-dessert.jpg',
      description: 'Gaufre liégeoise croustillante nappée de chocolat fondu et fruits frais de saison.'
    },
    {
      id: 117,
      title: 'Moelleux au Chocolat Cœur Coulant',
      category: 'Pâtisserie & Desserts',
      categoryId: 'desserts',
      price: '2 200 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-choc-cake.jpg',
      description: 'Gâteau fondant pur cacao accompagné d’une boule de glace vanille.'
    },
    {
      id: 118,
      title: 'Donuts Glaçage Fraise & Pépites',
      category: 'Pâtisserie & Desserts',
      categoryId: 'desserts',
      price: '1 800 FCFA',
      badge: '-19%',
      image: '/images/dishes/dish-donuts.jpg',
      description: 'Donuts moelleux et dorés avec nappage gourmand sucré.'
    },
    {
      id: 119,
      title: 'Crêpes Gourmandes Banane & Chocolat',
      category: 'Pâtisserie & Desserts',
      categoryId: 'desserts',
      price: '2 000 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-crepes.jpg',
      description: 'Duo de crêpes faites maison garnies de rondelles de banane et sauce chocolat.'
    }
  ],
  boissons: [
    {
      id: 120,
      title: 'Cocktail Frais Mangue & Passion',
      category: 'Boissons & Cocktails',
      categoryId: 'boissons',
      price: '1 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-juice-mango.jpg',
      description: 'Jus 100% naturel sans sucre ajouté pressé à la minute avec des fruits frais du terroir.'
    },
    {
      id: 121,
      title: 'Pur Jus de Bissap & Menthe Fraîche',
      category: 'Boissons & Cocktails',
      categoryId: 'boissons',
      price: '1 200 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-bissap.jpg',
      description: 'Boisson rafraîchissante traditionnelle infusée aux fleurs d’hibiscus et feuilles de menthe.'
    },
    {
      id: 122,
      title: 'Jus d’Orange Pressé à Froid',
      category: 'Boissons & Cocktails',
      categoryId: 'boissons',
      price: '1 500 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-orange-juice.jpg',
      description: 'Pur jus d’oranges sélectionnées vitaminé et gorgé de fraîcheur.'
    },
    {
      id: 123,
      title: 'Cocktail Detox Concombre & Citron',
      category: 'Boissons & Cocktails',
      categoryId: 'boissons',
      price: '1 800 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-green-juice.jpg',
      description: 'Boisson tonique et purifiante élaborée avec des ingrédients 100% naturels.'
    }
  ],
  cafes: [
    {
      id: 124,
      title: 'Espresso Torréfié Pur Arabica',
      category: 'Cafés & Thés',
      categoryId: 'cafes',
      price: '1 200 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-espresso.jpg',
      description: 'Café intense préparé à la pression avec des grains fraîchement moulus.'
    },
    {
      id: 125,
      title: 'Cappuccino Mousseux & Cacao',
      category: 'Cafés & Thés',
      categoryId: 'cafes',
      price: '1 800 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-cappuccino.jpg',
      description: 'Espresso velouté surmonté d’une mousse de lait onctueuse et saupoudré de chocolat.'
    },
    {
      id: 126,
      title: 'Thé Vert Infusé à la Menthe',
      category: 'Cafés & Thés',
      categoryId: 'cafes',
      price: '1 200 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-mint-tea.jpg',
      description: 'Infusion bien chaude de feuilles de thé vert et menthe fraîche du jardin.'
    },
    {
      id: 127,
      title: 'Café Glacé Caramel & Crème',
      category: 'Cafés & Thés',
      categoryId: 'cafes',
      price: '2 000 FCFA',
      badge: 'Nouveau',
      image: '/images/dishes/dish-iced-coffee.jpg',
      description: 'Café rafraîchissant avec coulis de caramel fondant et glaçons.'
    }
  ]
};

const ProductsTabSection = ({ onQuickView, onAddToCart, onAddToWishlist }) => {
  const [activeTab, setActiveTab] = useState('all');

  const currentProducts = restaurantProductsData[activeTab] || restaurantProductsData.all;

  return (
    <section id="restaurants-section" className="ltn__product-tab-area ltn__product-gutter pt-80 pb-70">
      <div className="container">
        {/* Titre de la Section Restaurants */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <WordDropTitle text="Découvrez les Plats Incontournables" className="section-title" />
            </div>

            {/* Barre de Catégories Horizontales avec Icônes Icons8 */}
            <div className="categories-pill-scroll-wrapper mb-40">
              <div className="categories-pill-scroll-track">
                {restaurantCategories.map((cat) => {
                  const isActive = activeTab === cat.id;
                  const iconUrl = getCategoryIconUrl(cat.name, 'restaurant');
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`category-pill-card ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveTab(cat.id)}
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

            {/* Grille des Plats de Restaurants */}
            <div className="tab-content">
              <div className="row">
                {currentProducts.map((product) => (
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

                        {/* Barre d'action au survol sans fond blanc */}
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

export default ProductsTabSection;
