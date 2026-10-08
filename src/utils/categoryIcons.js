// Utility to get verified Icons8 illustrations (same as app-bleoun)
const ICONS8_BASE = 'https://img.icons8.com/color/96';

export const KEYWORD_RULES = [
  { keywords: ['pain', 'viennoiserie', 'boulangerie', 'baguette', 'croissant', 'brioche'], icon: 'croissant.png' },
  { keywords: ['cafe', 'café', 'the', 'thé', 'coffee', 'tea', 'infusion', 'espresso', 'cappuccino'], icon: 'coffee.png' },
  { keywords: ['burger', 'fast-food', 'fast food', 'frite', 'hotdog', 'street-food'], icon: 'hamburger.png' },
  { keywords: ['sandwich', 'panini', 'wrap', 'chawarma', 'shawarma', 'tacos'], icon: 'sandwich.png' },
  { keywords: ['pizza', 'pate', 'pâtes', 'lasagne', 'spaghetti', 'italien'], icon: 'pizza.png' },
  { keywords: ['grillade', 'barbecue', 'bbq', 'braise', 'brochette', 'grill', 'rotissoire'], icon: 'grill.png' },
  { keywords: ['boucherie', 'viande', 'steak', 'boeuf', 'bœuf', 'porc', 'mouton', 'agneau', 'charcuterie'], icon: 'steak.png' },
  { keywords: ['poulet', 'volaille', 'coq', 'dinde'], icon: 'chicken.png' },
  { keywords: ['poisson', 'mer', 'crabe', 'crevette', 'fruits de mer', 'saumon', 'thon'], icon: 'crab.png' },
  { keywords: ['local', 'beninois', 'béninois', 'africain', 'sauce', 'gombo', 'crincrin', 'piron', 'telibo', 'agoussi', 'plat', 'repas', 'terroir'], icon: 'curry.png' },
  { keywords: ['fruit', 'legume', 'légume', 'frais', 'salade', 'tomate', 'vegetal', 'bio', 'naturel', 'marche'], icon: 'natural-food.png' },
  { keywords: ['epicerie', 'épicerie', 'vivrier', 'vivre', 'riz', 'farine', 'huile', 'conserve', 'cereale'], icon: 'grocery-shelf.png' },
  { keywords: ['lait', 'laitier', 'yaourt', 'fromage', 'beurre', 'creme', 'crème', 'dairy'], icon: 'milk-carton.png' },
  { keywords: ['epice', 'épice', 'condiment', 'piment', 'arome', 'arôme', 'bouillon', 'ail', 'poivre', 'sel', 'sauce'], icon: 'salt-shaker.png' },
  { keywords: ['cocktail', 'alcool', 'biere', 'bière', 'vin', 'bar', 'aperitif'], icon: 'cocktail.png' },
  { keywords: ['boisson', 'jus', 'soda', 'eau', 'pack', 'canette', 'bouteille', 'bissap', 'baobab'], icon: 'soda-can.png' },
  { keywords: ['patisserie', 'pâtisserie', 'dessert', 'gateau', 'gâteau', 'crepe', 'crêpe', 'douceur', 'chocolat', 'tarte'], icon: 'cake.png' },
  { keywords: ['glace', 'creme glacee', 'crème glacée', 'sorbet', 'cornet'], icon: 'ice-cream-cone.png' },
  { keywords: ['tous les plats', 'tous les repas', 'tous'], icon: 'restaurant.png' },
  { keywords: ['tous les rayons', 'tous les produits', 'boutique'], icon: 'shopping-bag.png' }
];

function normalizeText(text) {
  if (!text) return '';
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function getCategoryIconUrl(name = '', type = 'restaurant') {
  const cleanName = normalizeText(name);
  for (const rule of KEYWORD_RULES) {
    const match = rule.keywords.some((kw) => cleanName.includes(normalizeText(kw)));
    if (match) {
      return `${ICONS8_BASE}/${rule.icon}`;
    }
  }
  if (type === 'boutique') {
    return `${ICONS8_BASE}/shopping-bag.png`;
  }
  return `${ICONS8_BASE}/restaurant.png`;
}
