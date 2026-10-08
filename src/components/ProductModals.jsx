import React from 'react';
import { X, Star, ShoppingCart, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import '../styles/ProductModals.css';

export const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onAddToWishlist }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          title="Fermer"
        >
          <X size={20} />
        </button>

        <div className="modal-body-grid">
          {/* Image du produit */}
          <div className="modal-image-col">
            <div className="modal-product-img-box">
              <img 
                src={product.image} 
                alt={product.title}
              />
              {product.badge && (
                <span className={`modal-product-badge ${product.badge.includes('%') ? 'badge-discount' : 'badge-new'}`}>
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Informations détaillées */}
          <div className="modal-info-col">
            <div className="modal-ratting-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#F5A623" color="#F5A623" />
              ))}
              <span className="modal-reviews-count">({product.reviews || 28} Avis Clients)</span>
            </div>

            <h2 className="modal-product-title">{product.title}</h2>

            <div className="modal-product-pricing">
              <span className="current-price">{product.price}</span>
              {product.oldPrice && <del className="old-price">{product.oldPrice}</del>}
            </div>

            <p className="modal-product-desc">
              {product.description || "Produit certifié 100% frais et de première qualité, sélectionné chez nos meilleurs restaurateurs et producteurs locaux. Préparé et conditionné avec le plus grand soin."}
            </p>

            <div className="modal-category-meta">
              <strong>Catégorie :</strong> <span>{product.category || 'Restaurant & Épicerie'}</span>
            </div>

            <div className="modal-actions-row">
              <div className="quantity-selector">
                <button type="button">-</button>
                <input type="text" defaultValue="1" readOnly />
                <button type="button">+</button>
              </div>

              <button 
                className="theme-btn-1 btn btn-effect-1 btn-modal-cart"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                <ShoppingCart size={17} />
                <span>Ajouter au Panier</span>
              </button>

              <button 
                className="btn-modal-wishlist"
                title="Ajouter aux Favoris"
                onClick={() => {
                  onAddToWishlist(product);
                }}
              >
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddToCartModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-dialog modal-sm-dialog" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          title="Fermer"
        >
          <X size={20} />
        </button>

        <div className="modal-success-content text-center">
          <div className="success-icon-bubble">
            <CheckCircle2 size={38} color="#16A34A" />
          </div>

          <div className="modal-success-product-thumb">
            <img src={product.image} alt={product.title} />
          </div>

          <h4 className="success-product-title">{product.title}</h4>
          <p className="success-msg">Ajouté avec succès à votre panier Bleoum !</p>

          <div className="success-price-badge">{product.price}</div>

          <div className="modal-success-buttons">
            <button 
              className="theme-btn-1 btn btn-effect-1 w-100 mb-2" 
              onClick={onClose}
            >
              Continuer Mes Achats
            </button>
            <a 
              href="#panier" 
              className="btn btn-transparent btn-effect-3 w-100" 
              onClick={onClose}
            >
              Voir Mon Panier & Commander <ArrowRight size={14} className="ms-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WishlistModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-dialog modal-sm-dialog" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          title="Fermer"
        >
          <X size={20} />
        </button>

        <div className="modal-success-content text-center">
          <div className="success-icon-bubble wishlist-bubble">
            <Heart size={36} fill="#E68A00" color="#E68A00" />
          </div>

          <div className="modal-success-product-thumb">
            <img src={product.image} alt={product.title} />
          </div>

          <h4 className="success-product-title">{product.title}</h4>
          <p className="success-msg">Produit ajouté à votre liste de favoris !</p>

          <div className="modal-success-buttons">
            <button 
              className="theme-btn-1 btn btn-effect-1 w-100" 
              onClick={onClose}
            >
              Continuer la Visite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
