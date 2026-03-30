import { Link } from 'react-router-dom';
import { Accessibility, CheckCircle, Users, FileText, Settings, ExternalLink, Mail } from 'lucide-react';
import { contactInfo } from '@/data/sessions';

const Accessibilite = () => {
  // Fonction pour scroll en haut de page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const accompagnements = [
    {
      titre: 'Analyse des besoins',
      description: 'Étude personnalisée de votre situation et identification des besoins spécifiques pour adapter au mieux la formation.',
      icone: <FileText className="w-6 h-6" />
    },
    {
      titre: 'Adaptation des supports',
      description: 'Modification des supports pédagogiques (polices, contrastes, formats alternatifs) selon vos besoins.',
      icone: <Settings className="w-6 h-6" />
    },
    {
      titre: 'Aménagement des conditions',
      description: 'Adaptation du rythme, des modalités et des conditions de formation pour garantir votre confort d\'apprentissage.',
      icone: <Users className="w-6 h-6" />
    },
    {
      titre: 'Orientation partenaires',
      description: 'Orientation vers des partenaires spécialisés si des besoins complémentaires sont identifiés.',
      icone: <ExternalLink className="w-6 h-6" />
    }
  ];

  const partenaires = [
    { nom: 'AGEFIPH', description: 'Association de gestion du fonds pour l\'insertion professionnelle des personnes handicapées' },
    { nom: 'CAP EMPLOI', description: 'Réseau spécialisé dans l\'accompagnement des personnes handicapées vers l\'emploi' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6B5B95] to-[#4A3F6B] text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
              <Accessibility className="w-4 h-4" />
              <span>Accessibilité</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Accessibilité et accompagnement des personnes en situation de handicap
            </h1>
            <p className="text-lg text-purple-100 leading-relaxed">
              CHEMIN DU BUSINESS propose un accompagnement personnalisé pour les personnes en situation de handicap.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Chaque situation est étudiée individuellement afin de proposer des solutions adaptées, en lien avec les besoins de l'apprenant et les contraintes pédagogiques de la formation.
            </p>
          </div>
        </div>
      </section>

      {/* Référent handicap */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 text-center">
                  <div className="w-24 h-24 rounded-full bg-[#6B5B95]/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-[#6B5B95]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0B3D5C]">Référent handicap</h2>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-gray-600 mb-4">
                    Notre référent handicap est à votre écoute pour étudier vos besoins et proposer les adaptations nécessaires.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`mailto:${contactInfo.emailHandicap}`}
                      className="flex items-center gap-2 text-[#6B5B95] hover:text-[#0B3D5C] transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      {contactInfo.emailHandicap}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accompagnements */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              Notre accompagnement
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous mettons en place des solutions adaptées à chaque situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {accompagnements.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#6B5B95]/10 flex items-center justify-center mb-4 text-[#6B5B95]">
                  {item.icone}
                </div>
                <h3 className="text-lg font-semibold text-[#0B3D5C] mb-2">{item.titre}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              Partenaires mobilisables
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous travaillons en lien avec des organismes spécialisés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {partenaires.map((partenaire, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#2EC4B6]" />
                  <h3 className="text-lg font-semibold text-[#0B3D5C]">{partenaire.nom}</h3>
                </div>
                <p className="text-gray-600 text-sm">{partenaire.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B3D5C]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Accessibility className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous avez des questions sur l'accessibilité ?
            </h2>
            <p className="text-blue-100 mb-8">
              Contactez notre référent handicap pour discuter de vos besoins spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contactInfo.emailHandicap}`}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contacter le référent handicap
              </a>
              <Link to="/contact" onClick={scrollToTop} className="btn-outline-orange flex items-center justify-center gap-2">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibilite;
