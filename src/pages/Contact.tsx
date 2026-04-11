import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Phone, Mail, Clock, MessageSquare, Calendar, Users, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/data/sessions';
import { horairesSupport, calendlyLink } from '@/data/config';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  
  const getDefaultType = () => {
    switch (typeParam) {
      case 'rdv': return 'rdv';
      case 'devis': return 'devis';
      case 'inscription': return 'inscription';
      default: return 'informations';
    }
  };

  const getTitle = () => {
    switch (typeParam) {
      case 'rdv': return 'Prendre rendez-vous';
      case 'devis': return 'Demander un devis';
      case 'inscription': return 'Demander une inscription';
      default: return 'Contact';
    }
  };

  const getSubtitle = () => {
    switch (typeParam) {
      case 'rdv': 
        return 'Choisissez la formation qui vous intéresse et indiquez la date souhaitée pour un échange.';
      case 'devis': 
        return 'Demandez un devis personnalisé pour la formation de votre choix.';
      case 'inscription': 
        return 'Remplissez le formulaire pour demander votre inscription à une formation.';
      default: 
        return 'Vous souhaitez obtenir des informations, demander un devis, connaître les prochaines dates ou prendre rendez-vous ? Utilisez le formulaire ci-dessous.';
    }
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {getTitle()}
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              {getSubtitle()}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto -mt-20 relative z-10">
            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B3D5C]/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#0B3D5C]" />
              </div>
              <span className="text-sm text-gray-500">Téléphone</span>
              <a 
                href={`tel:${contactInfo.telephone.replace(/\s/g, '')}`}
                className="block font-medium text-[#0B3D5C] hover:text-[#F5A623] transition-colors"
              >
                {contactInfo.telephone}
              </a>
              {horairesSupport.afficher && (
                <p className="text-xs text-gray-500 mt-1">{horairesSupport.texteDetaille}</p>
              )}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B3D5C]/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#0B3D5C]" />
              </div>
              <span className="text-sm text-gray-500">Email</span>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="block font-medium text-[#0B3D5C] hover:text-[#F5A623] transition-colors text-sm"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <ContactForm defaultType={getDefaultType()} showTitle={false} />
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Clock className="w-8 h-8 text-[#F5A623] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0B3D5C] mb-2">Délais de réponse</h3>
                  <p className="text-gray-600 text-sm">
                    Nous vous recontactons dans les meilleurs délais, généralement sous 24 à 48 heures ouvrées.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <MessageSquare className="w-8 h-8 text-[#2EC4B6] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0B3D5C] mb-2">Types de demandes</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                      Demande d'informations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                      Demande de devis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                      Demande d'inscription
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                      Prise de rendez-vous
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Calendar className="w-8 h-8 text-[#0B3D5C] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0B3D5C] mb-2">Prochaines sessions</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Consultez nos prochaines dates de formation et réservez votre place.
                  </p>
                  <Link 
                    to="/"
                    className="text-[#0B3D5C] hover:text-[#F5A623] transition-colors text-sm font-medium"
                  >
                    Voir les sessions →
                  </Link>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <Users className="w-8 h-8 text-[#6B5B95] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0B3D5C] mb-2">Accessibilité</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Questions sur l'accessibilité pour les personnes en situation de handicap ?
                  </p>
                  <a 
                    href={`mailto:${contactInfo.emailHandicap}`}
                    className="text-[#6B5B95] hover:underline text-sm"
                  >
                    {contactInfo.emailHandicap}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rendez-vous spécifique */}
      {typeParam !== 'rdv' && (
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <Calendar className="w-12 h-12 text-[#F5A623] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0B3D5C] mb-4">
                Vous préférez prendre rendez-vous ?
              </h2>
              <p className="text-gray-600 mb-8">
                Choisissez la formation qui vous intéresse et indiquez la date souhaitée pour un échange personnalisé.
              </p>
              <button
                type="button"
                onClick={openCalendly}
                className="btn-primary inline-flex items-center gap-2"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Contact;