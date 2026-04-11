import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { calendlyLink } from '@/data/config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Formations', path: '/formations' },
    { label: 'Accessibilité', path: '/accessibilite' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Indicateurs', path: '/indicateurs' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Fonction pour scroll en haut de page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyLink,
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#0B3D5C] text-white py-2">
        <div className="section-container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:0184801909" className="flex items-center gap-1 hover:text-[#F5A623] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">01 84 80 19 09</span>
            </a>
            <a href="mailto:contact@chemindubusiness.fr" className="flex items-center gap-1 hover:text-[#F5A623] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">contact@chemindubusiness.fr</span>
            </a>
          </div>
          <div className="text-xs opacity-80">
            Organisme de formation certifié Qualiopi
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="CHEMIN DU BUSINESS" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={scrollToTop}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-[#0B3D5C] bg-[#0B3D5C]/10'
                    : 'text-gray-700 hover:text-[#0B3D5C] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="btn-secondary text-sm py-2 px-4"
            >
              Demander des informations
            </Link>
            <button
              type="button"
              onClick={openCalendly}
              className="btn-primary text-sm py-2 px-4"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="section-container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-[#0B3D5C] bg-[#0B3D5C]/10'
                    : 'text-gray-700 hover:text-[#0B3D5C] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
              <Link
                to="/contact"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
                className="btn-secondary text-center text-sm py-2"
              >
                Demander des informations
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  openCalendly();
                }}
                className="btn-primary text-center text-sm py-2"
              >
                Prendre rendez-vous
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;