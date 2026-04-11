import { useEffect } from 'react';
import { Award, Building2, Phone, Mail, FileText, ArrowRight, Users, Target, Lightbulb, TrendingUp, Clock } from 'lucide-react';
import { legalInfo, contactInfo } from '@/data/sessions';
import { horairesSupport, calendlyLink } from '@/data/config';

const APropos = () => {
  const valeurs = [
    {
      titre: 'Pratique',
      description: 'Nos formations sont orientées vers la mise en pratique immédiate des compétences acquises.',
      icone: <Target className="w-6 h-6" />
    },
    {
      titre: 'Clarté pédagogique',
      description: 'Une approche pédagogique structurée et progressive pour faciliter l\'apprentissage.',
      icone: <Lightbulb className="w-6 h-6" />
    },
    {
      titre: 'Autonomie',
      description: 'Nous visons l\'autonomie progressive de chaque apprenant dans son domaine de formation.',
      icone: <TrendingUp className="w-6 h-6" />
    }
  ];

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
              À propos
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Découvrez CHEMIN DU BUSINESS, organisme de formation spécialisé dans les compétences digitales.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-6">
                Notre approche
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                CHEMIN DU BUSINESS est un organisme de formation spécialisé dans les compétences digitales.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre approche repose sur la pratique, la clarté pédagogique et l'autonomie progressive de l'apprenant. Nous accompagnons les entrepreneurs, salariés, demandeurs d'emploi et porteurs de projet dans le développement de compétences pratiques et directement applicables.
              </p>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <Award className="w-6 h-6 text-[#F5A623]" />
                <span className="text-[#0B3D5C] font-medium">Organisme de formation certifié Qualiopi</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/logo.png" 
                alt="CHEMIN DU BUSINESS" 
                className="max-w-full h-auto max-h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              Nos valeurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {valeurs.map((valeur, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#0B3D5C]/10 flex items-center justify-center mx-auto mb-4 text-[#0B3D5C]">
                  {valeur.icone}
                </div>
                <h3 className="text-lg font-semibold text-[#0B3D5C] mb-2">{valeur.titre}</h3>
                <p className="text-gray-600 text-sm">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations légales */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-8 text-center">
              Informations légales
            </h2>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Dénomination</span>
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.denomination}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Nom commercial</span>
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.nomCommercial}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">SIREN</span>
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.siret}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">NDA (Numéro de Déclaration d'Activité)</span>
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.nda}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-8">
              Contact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
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
                  <p className="text-xs text-gray-500 mt-1">{horairesSupport.texte}</p>
                )}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
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

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#0B3D5C]/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-[#0B3D5C]" />
                </div>
                <span className="text-sm text-gray-500">Horaires</span>
                <p className="font-medium text-[#0B3D5C] text-sm">
                  {horairesSupport.texteDetaille}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B3D5C]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Une question ?
            </h2>
            <p className="text-blue-100 mb-8">
              Notre équipe est à votre disposition pour vous accompagner
            </p>
            <button
              type="button"
              onClick={openCalendly}
              className="btn-primary inline-flex items-center gap-2"
            >
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;