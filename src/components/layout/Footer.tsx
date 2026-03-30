import { Phone, Mail, Award, CheckCircle } from 'lucide-react';
import { contactInfo } from '@/data/sessions';
import { horairesSupport } from '@/data/config';
import ScrollToTopLink from '@/components/ScrollToTopLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#082B42] text-white">
      {/* Main footer */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <ScrollToTopLink to="/">
              <img 
                src="/logo.png" 
                alt="CHEMIN DU BUSINESS" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
            </ScrollToTopLink>
            <p className="text-gray-300 text-sm mb-4">
              Organisme de formation spécialisé dans les compétences digitales. 
              Formations certifiantes et professionnelles.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Award className="w-5 h-5 text-[#F5A623]" />
              <span>Certifié Qualiopi</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F5A623]">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <ScrollToTopLink to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Accueil
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/formations" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Nos formations
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/accessibilite" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Accessibilité
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/a-propos" className="text-gray-300 hover:text-white transition-colors text-sm">
                  À propos
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/indicateurs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Indicateurs
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </ScrollToTopLink>
              </li>
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F5A623]">Nos formations</h3>
            <ul className="space-y-2">
              <li>
                <ScrollToTopLink to="/formation-wordpress" className="text-gray-300 hover:text-white transition-colors text-sm">
                  WordPress (Tosa)
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/formation-ia-python" className="text-gray-300 hover:text-white transition-colors text-sm">
                  IA & Python (Tosa)
                </ScrollToTopLink>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <ScrollToTopLink
                to="/contact"
                className="inline-flex items-center gap-2 text-[#F5A623] hover:text-white transition-colors text-sm"
              >
                <CheckCircle className="w-4 h-4" />
                Demander un devis
              </ScrollToTopLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F5A623]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                <div>
                  <a href={`tel:${contactInfo.telephone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors text-sm block">
                    {contactInfo.telephone}
                  </a>
                  {horairesSupport.afficher && (
                    <span className="text-xs text-gray-400">{horairesSupport.texte}</span>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400">
                Référent handicap :<br />
                <a href={`mailto:${contactInfo.emailHandicap}`} className="hover:text-white transition-colors">
                  {contactInfo.emailHandicap}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs text-center md:text-left">
              {currentYear} LE CONSULTANT IT (CHEMIN DU BUSINESS) - SIREN : 932 365 083 - NDA : 11770926377
            </p>
            <div className="flex items-center gap-4">
              <ScrollToTopLink to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-xs">
                Mentions légales
              </ScrollToTopLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
