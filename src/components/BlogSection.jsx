import React from 'react';
import { User, Tag, Calendar, ArrowRight } from 'lucide-react';
import '../styles/BlogSection.css';

const blogArticles = [
  {
    id: 1,
    title: 'Top 10 des Spécialités Culinaires à Goûter Absolument',
    category: 'Restaurants & Saveurs',
    author: 'Admin Bleoum',
    date: '12 Octobre 2026',
    image: '/images/1_2.jpg',
    excerpt: "Découvrez notre sélection des plats les plus savoureux préparés par les grands chefs de nos restaurants partenaires."
  },
  {
    id: 2,
    title: 'Comment Bien Choisir Ses Fruits & Légumes de Saison',
    category: 'Conseils & Fraîcheur',
    author: 'Chef Primeur',
    date: '08 Octobre 2026',
    image: '/images/2_2.jpg',
    excerpt: "Tous les secrets de nos maraîchers locaux pour reconnaître les fruits mûrs à point et préserver leurs vitamines."
  },
  {
    id: 3,
    title: 'La Livraison Éco-Responsable au Service de Vos Papilles',
    category: 'Actualités & Services',
    author: 'Équipe Bleoum',
    date: '02 Octobre 2026',
    image: '/images/3.jpg',
    excerpt: "Comment nous optimisons nos trajets pour vous livrer des repas fumants tout en réduisant l’empreinte carbone."
  }
];

const BlogSection = () => {
  return (
    <section className="ltn__blog-area pt-85 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">// Actualités & Blog</h6>
              <h1 className="section-title">Dernières Actualités & Conseils</h1>
            </div>
          </div>
        </div>

        <div className="row">
          {blogArticles.map((article) => (
            <div key={article.id} className="col-lg-4 col-md-6 mb-30">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="#blog-details">
                    <img src={article.image} alt={article.title} />
                  </a>
                </div>

                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#author">
                          <User size={13} className="me-1" />
                          {article.author}
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#tag">
                          <Tag size={13} className="me-1" />
                          {article.category}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <h3 className="ltn__blog-title">
                    <a href="#blog-details">{article.title}</a>
                  </h3>

                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <Calendar size={13} className="me-1" />
                          {article.date}
                        </li>
                      </ul>
                    </div>

                    <div className="ltn__blog-btn">
                      <a href="#blog-details">
                        Lire plus <ArrowRight size={13} className="ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
