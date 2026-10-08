import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/AppAndFooter.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-strip-section">
      <div className="container">
        <div className="newsletter-grid-wrap">
          <div className="newsletter-left-col">
            <span className="newsletter-badge">OFFRES & CODES PROMO</span>
            <h2>Abonnez-vous à Notre Newsletter</h2>
            <p>
              Recevez chaque semaine les nouveautés des chefs partenaires, 
              les arrivages du marché frais et nos réductions exclusives.
            </p>

            <form className="newsletter-form-pill" onSubmit={handleSubscribe}>
              <div className="newsletter-input-group">
                <Mail size={19} className="newsletter-mail-icon" />
                <input 
                  type="email" 
                  className="newsletter-email-input" 
                  placeholder="Entrez votre adresse email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="newsletter-submit-pill">
                {subscribed ? (
                  <>
                    <CheckCircle size={16} />
                    <span>Inscrit avec succès !</span>
                  </>
                ) : (
                  <>
                    <span>S'abonner</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="newsletter-right-col">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80" 
              alt="Panier marché frais" 
              className="newsletter-bag-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
