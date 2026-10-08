import React from 'react';
import { 
  Users, 
  RotateCcw, 
  Leaf, 
  ShieldCheck, 
  Calendar, 
  Bookmark, 
  Share2, 
  ArrowRight, 
  MessageSquare,
  Star
} from 'lucide-react';
import '../styles/MarketAndNews.css';

const articlesList = [
  {
    id: 1,
    title: 'Les super-aliments que vous devriez consommer',
    date: '28/10/24',
    comments: '8.5k',
    excerpt: "Une fois que vous avez identifié vos besoins nutritionnels clés, il est temps d'intégrer des super-aliments vivants dans votre quotidien.",
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Bienfaits pour la santé des aliments crus & vivants',
    date: '28/10/24',
    comments: '8.5k',
    excerpt: "L'alimentation vivante permet de conserver un maximum d'enzymes actives pour détoxifier et revitaliser votre corps naturellement.",
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'Conseils pour bien faire mûrir vos fruits de saison',
    date: '28/10/24',
    comments: '8.5k',
    excerpt: "Des astuces pratiques de nos primeurs pour laisser vos mangues, ananas et avocats développer tous leurs arômes sucrés.",
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
  },
];

const MarketAndNews = () => {
  return (
    <>
      {/* --- Section Marché Ouvert (Image 3 Haut) --- */}
      <section className="open-market-section">
        <div className="container">
          <div className="open-market-grid">
            {/* Colonne gauche : Panier riche avec blob et badge avis */}
            <div className="market-visual-wrapper">
              <div className="market-blob-shape"></div>

              {/* Badge avis clients flottant */}
              <div className="market-rating-badge floating-badge">
                <div className="market-rating-avatar-group">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
                    alt="Client" 
                    className="rating-avatar-mini" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" 
                    alt="Client" 
                    className="rating-avatar-mini" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" 
                    alt="Client" 
                    className="rating-avatar-mini" 
                  />
                  <span className="avatar-plus-dot">+</span>
                </div>
                <div>
                  <div className="rating-score-text">
                    <Star size={14} fill="#F5A623" color="#F5A623" />
                    <span>4.9</span>
                    <span className="rating-reviews-sub">(33k Avis)</span>
                  </div>
                </div>
              </div>

              {/* Image panier riche de légumes et pain */}
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=650&q=80" 
                alt="Panier de légumes et produits frais du terroir" 
                className="market-basket-img"
              />
            </div>

            {/* Colonne droite : Titre + grille 2x2 des garanties */}
            <div className="market-content-col">
              <h2>Nous n'achetons pas sur le marché ouvert</h2>
              
              <p className="market-lead-desc">
                Si vous souhaitez profiter de votre vie avec un corps sain et un esprit sain, 
                vous êtes les bienvenus dans notre espace shopping. Nous sélectionnons nos produits 
                directement auprès des meilleurs producteurs et restaurants certifiés.
              </p>

              {/* Grille 2x2 des 4 piliers */}
              <div className="market-features-2x2">
                {/* Pilier 1 */}
                <div className="trust-pillar-card card-pillar-partner">
                  <div className="pillar-icon-box">
                    <Users size={20} color="#F5A623" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Partenaire de confiance</h4>
                    <p className="pillar-subtext">Producteurs et restaurants locaux rigoureusement audités.</p>
                  </div>
                </div>

                {/* Pilier 2 */}
                <div className="trust-pillar-card card-pillar-return">
                  <div className="pillar-icon-box">
                    <RotateCcw size={20} color="#E68A00" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Politique de retour</h4>
                    <p className="pillar-subtext">Remplacement immédiat ou remboursement garanti.</p>
                  </div>
                </div>

                {/* Pilier 3 */}
                <div className="trust-pillar-card card-pillar-organic">
                  <div className="pillar-icon-box">
                    <Leaf size={20} color="#F5A623" />
                  </div>
                  <div>
                    <h4 className="pillar-title">100% Biologique</h4>
                    <p className="pillar-subtext">Produits naturels cueillis à maturité sans additifs.</p>
                  </div>
                </div>

                {/* Pilier 4 */}
                <div className="trust-pillar-card card-pillar-secure">
                  <div className="pillar-icon-box">
                    <ShieldCheck size={20} color="#E68A00" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Paiement Sécurisé</h4>
                    <p className="pillar-subtext">Transactions protégées par cryptage bancaire 256 bits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section Actualités / News Feeds (Image 3 Bas) --- */}
      <section className="news-feeds-section">
        <div className="container">
          <div className="news-header-center">
            <h2 className="news-section-title">
              Nos Dernières <span className="accent-orange">Actualités</span>
            </h2>
            <p className="news-section-desc">
              Découvrez nos articles, recettes et conseils d'experts pour une alimentation saine, 
              savoureuse et équilibrée au quotidien.
            </p>
          </div>

          {/* Grille des 3 articles */}
          <div className="news-cards-grid">
            {articlesList.map((article) => (
              <article key={article.id} className="news-single-card">
                <div className="news-thumb-img-wrap">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="news-thumb-img" 
                  />
                </div>

                <div className="news-body-content">
                  <div className="news-meta-top">
                    <div className="news-date-item">
                      <Calendar size={14} color="#F5A623" />
                      <span>{article.date}</span>
                    </div>
                    <div className="news-social-icons">
                      <Bookmark size={15} color="#F5A623" />
                      <Share2 size={15} color="#9CA3AF" />
                    </div>
                  </div>

                  <h3 className="news-article-title">{article.title}</h3>
                  <p className="news-article-excerpt">{article.excerpt}</p>

                  <div className="news-bottom-action-bar">
                    <span className="news-read-more-link">
                      <span>Lire plus</span>
                      <ArrowRight size={14} />
                    </span>
                    <div className="news-comments-count">
                      <MessageSquare size={14} color="#F5A623" />
                      <span>{article.comments} Commentaires</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bouton Parcourir Plus */}
          <div className="news-browse-btn-wrap">
            <button className="btn-browse-more">
              <span>Parcourir Plus</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketAndNews;
