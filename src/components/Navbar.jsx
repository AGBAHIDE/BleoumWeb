import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X 
} from 'lucide-react';
import BleoumLogo from './BleoumLogo';
import '../styles/Navbar.css';

const Navbar = ({ 
  cartCount = 3, 
  wishlistCount = 2,
  onNavigateToHome,
  onNavigateToCourses,
  onOpenWishlist
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [manualTab, setManualTab] = useState(null);
  const activeTab = location.pathname.startsWith('/courses') 
    ? 'Boutique & Resto' 
    : (manualTab || 'Accueil');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Redirection ou défilement fluide vers une section
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const headerOffset = 70;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const goToHome = () => {
    setManualTab('Accueil');
    if (onNavigateToHome) {
      onNavigateToHome();
    }
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToCourses = (type = 'all') => {
    setManualTab('Boutique & Resto');
    if (onNavigateToCourses) {
      onNavigateToCourses();
    }
    if (type !== 'all') {
      navigate(`/courses?type=${type}`);
    } else {
      navigate('/courses');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { 
      id: 'home',
      name: 'Accueil', 
      onClick: goToHome,
      hasDropdown: false 
    },
    { 
      id: 'best-sellers',
      name: 'Meilleures Ventes', 
      onClick: () => {
        setManualTab('Meilleures Ventes');
        scrollToSection('meilleures-ventes');
      },
      hasDropdown: true,
      dropdownItems: [
        {
          label: '🍽️ Plats Populaires Restos',
          action: () => {
            setManualTab('Meilleures Ventes');
            scrollToSection('restaurants-section');
          }
        },
        {
          label: '🛒 Top Produits Boutiques',
          action: () => {
            setManualTab('Meilleures Ventes');
            scrollToSection('meilleures-ventes');
          }
        }
      ]
    },
    { 
      id: 'shop-resto',
      name: 'Boutique & Resto', 
      onClick: () => goToCourses('all'),
      hasDropdown: true,
      dropdownItems: [
        {
          label: '✨ Faire Toutes Mes Courses',
          action: () => goToCourses('all')
        },
        {
          label: '🍽️ Menus & Plats Restaurants',
          action: () => goToCourses('restaurant')
        },
        {
          label: '🛒 Rayon Épicerie & Vivres',
          action: () => goToCourses('boutique')
        }
      ]
    },
    { 
      id: 'promos',
      name: 'Promotions', 
      onClick: () => {
        setManualTab('Promotions');
        scrollToSection('promotions-section');
      },
      hasDropdown: false 
    },
    { 
      id: 'contact',
      name: 'Contact', 
      onClick: () => {
        setManualTab('Contact');
        scrollToSection('contact-section');
      },
      hasDropdown: false 
    },
    { 
      id: 'about',
      name: 'À Propos', 
      onClick: () => {
        setManualTab('À Propos');
        scrollToSection('a-propos');
      },
      hasDropdown: false 
    }
  ];

  const handleNavClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="compact-navbar">
          {/* Côté gauche : Logo */}
          <div className="navbar-brand-section">
            <div 
              style={{ cursor: 'pointer' }}
              onClick={goToHome}
              title="Bleoum Service - Accueil"
            >
              <BleoumLogo height={48} />
            </div>
          </div>

          {/* Centre : Liens de navigation Desktop avec Dropdowns Interactifs */}
          <nav className="nav-menu-center d-none d-lg-flex">
            <ul className="nav-links-list">
              {navItems.map((item) => {
                const isItemActive = activeTab === item.name;
                const isDropdownOpen = openDropdown === item.id;

                return (
                  <li 
                    key={item.id}
                    className={`nav-link-item-wrapper ${isItemActive ? 'active' : ''}`}
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div 
                      className={`nav-link-item ${isItemActive ? 'active' : ''}`}
                      onClick={() => handleNavClick(item)}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown 
                          size={14} 
                          className={`nav-chevron-icon ${isDropdownOpen ? 'rotated' : ''}`} 
                        />
                      )}
                    </div>

                    {/* Menu Déroulant Desktop */}
                    {item.hasDropdown && isDropdownOpen && (
                      <div className="nav-custom-dropdown-menu">
                        {item.dropdownItems.map((sub, idx) => (
                          <div 
                            key={idx} 
                            className="dropdown-custom-item"
                            onClick={(e) => {
                              e.stopPropagation();
                              sub.action();
                              setOpenDropdown(null);
                            }}
                          >
                            <div className="dropdown-item-title">{sub.label}</div>
                            <div className="dropdown-item-desc">{sub.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Côté droit : Favoris + Panier + Hamburger Toggle Mobile */}
          <div className="nav-right-actions">
            <button 
              type="button" 
              className="circle-icon-btn" 
              title="Mes Favoris"
              onClick={onOpenWishlist}
            >
              <Heart size={18} />
              <span className="icon-badge-dot">{wishlistCount}</span>
            </button>

            <button 
              type="button" 
              className="cart-capsule-btn" 
              title="Faire mes courses & voir mon panier"
              onClick={() => goToCourses('all')}
            >
              <ShoppingBag size={17} color="#E68A00" />
              <span className="d-none d-sm-inline">{cartCount} Articles</span>
              <span className="d-inline d-sm-none">{cartCount}</span>
            </button>

            {/* Bouton Hamburger Mobile */}
            <button 
              type="button" 
              className="mobile-hamburger-btn d-inline-flex d-lg-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu Mobile"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menu Déroulant Mobile Interactif */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer d-lg-none">
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item-wrap">
                  <div 
                    className={`mobile-nav-item ${activeTab === item.name ? 'active' : ''}`}
                    onClick={() => handleNavClick(item)}
                  >
                    <span>{item.name}</span>
                  </div>

                  {/* Sous-liens Mobile */}
                  {item.hasDropdown && (
                    <div className="mobile-sublinks-box">
                      {item.dropdownItems.map((sub, idx) => (
                        <div 
                          key={idx} 
                          className="mobile-sublink-item"
                          onClick={() => {
                            sub.action();
                            setMobileMenuOpen(false);
                          }}
                        >
                          {sub.label}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
