import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Award, Clock, FileText, Users } from 'lucide-react';
import { calendlyLink } from '@/data/config';

const Formations = () => {
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

  const formations = [
    {
      id: 'wordpress',
      titre: 'Créer et gérer un site web avec WordPress',
      certification: 'Tosa',
      rs: 'RS6965',
      niveau: 'Niveau 1',
      duree: '5 heures',
      dureeText: '1 jour',
      objectif: 'Créer un site web professionnel et le gérer en autonomie',
      public: 'Débutants, entrepreneurs, freelances, salariés en reconversion',
      icone: '🌐',
      couleur: 'blue'
    },
    {
      id: 'ia-python',
      titre: 'Intelligence Artificielle & Python – Initiation',
      certification: 'Tosa',
      rs: 'RS6962',
      niveau: 'Niveau 1',
      duree: '5 heures',
      dureeText: '1 jour',
      objectif: 'Comprendre l\'IA et automatiser des tâches simples',
      public: 'Débutants, entrepreneurs, freelances, salariés',
      icone: '🤖',
      couleur: 'teal'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Nos formations
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Découvrez nos formations certifiantes orientées pratique, conçues pour développer des compétences concrètes et applicables rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* Formations List */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {formations.map((formation) => (
              <div key={formation.id} className="card-formation flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    formation.couleur === 'blue' ? 'bg-[#0B3D5C]/10' : 'bg-[#2EC4B6]/10'
                  }`}>
                    <span className="text-3xl">{formation.icone}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#0B3D5C] mb-1">
                      {formation.titre}
                    </h2>
                    <span className="badge-certification">
                      Certification {formation.certification}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Durée :</span>
                      <span className="text-gray-600 ml-1">{formation.duree} ({formation.dureeText})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Award className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Certification :</span>
                      <span className="text-gray-600 ml-1">{formation.rs} – {formation.niveau}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Objectif :</span>
                      <span className="text-gray-600 ml-1">{formation.objectif}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Public :</span>
                      <span className="text-gray-600 ml-1">{formation.public}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Link 
                    to={`/formation-${formation.id}`}
                    onClick={scrollToTop}
                    className="btn-secondary text-sm text-center py-2 flex-1"
                  >
                    Voir la formation
                  </Link>
                  <Link 
                    to="/contact?type=devis"
                    onClick={scrollToTop}
                    className="btn-outline-orange text-sm text-center py-2 flex-1"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#F5A623]/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-[#F5A623]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B3D5C] mb-4">
              Vous ne savez pas quelle formation choisir ?
            </h2>
            <p className="text-gray-600 mb-8">
              Nos conseillers sont à votre écoute pour vous aider à identifier la formation la plus adaptée à vos besoins et à votre projet professionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={scrollToTop} className="btn-primary flex items-center justify-center gap-2">
                Demander des informations
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={openCalendly}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;