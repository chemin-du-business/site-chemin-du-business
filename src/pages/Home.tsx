import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Accessibility, Wallet, Calendar, Star, TrendingUp, CheckCircle, Globe, Cpu } from 'lucide-react';
import SessionCard from '@/components/SessionCard';
import VideoSection from '@/components/VideoSection';
import { prochainesSessions, indicateurs } from '@/data/sessions';
import { calendlyLink } from '@/data/config';

const Home = () => {
  const nextSessions = prochainesSessions.slice(0, 3);

  // Fonction pour scroll en haut de page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Chargement du CSS Calendly
    const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Chargement du script Calendly
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
      <section className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] text-white py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Award className="w-4 h-4 text-[#F5A623]" />
              <span>Organisme de formation certifié Qualiopi</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 ml-2">
              <Wallet className="w-4 h-4 text-[#2EC4B6]" />
              <span>Formations éligibles au financement CPF </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Formations digitales professionnelles et certifiantes
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Développez des compétences concrètes, immédiatement mobilisables dans votre activité professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/formations" onClick={scrollToTop} className="btn-primary text-center flex items-center justify-center gap-2">
                Découvrir les formations
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={openCalendly}
                className="btn-outline-orange text-center"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Formations Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              Nos formations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos formations certifiantes, conçues pour développer des compétences concrètes et applicables rapidement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Formation WordPress */}
            <div className="card-formation">
              <div className="w-14 h-14 rounded-xl bg-[#0B3D5C]/10 flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-[#0B3D5C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3D5C] mb-2">
                Créer et gérer un site web avec WordPress
              </h3>
              <span className="badge-certification mb-4 inline-block">Certification Tosa</span>
              <p className="text-gray-600 mb-4 text-sm">
                Créez un site web professionnel et gérez-le en autonomie. Certification RS6965 – Niveau 1.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4" />
                <span>5 heures (1 jour)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/formation-wordpress" onClick={scrollToTop} className="btn-secondary text-sm text-center py-2">
                  Voir la formation
                </Link>
                <Link to="/contact?type=devis" onClick={scrollToTop} className="btn-outline-orange text-sm text-center py-2">
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Formation IA & Python */}
            <div className="card-formation">
              <div className="w-14 h-14 rounded-xl bg-[#2EC4B6]/10 flex items-center justify-center mb-4">
                <Cpu className="w-7 h-7 text-[#2EC4B6]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3D5C] mb-2">
                Intelligence Artificielle & Python – Initiation
              </h3>
              <span className="badge-certification mb-4 inline-block">Certification Tosa</span>
              <p className="text-gray-600 mb-4 text-sm">
                Comprenez l'IA et automatisez des tâches simples avec Python. Certification RS6962 – Niveau 1.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4" />
                <span>5 heures (1 jour)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/formation-ia-python" onClick={scrollToTop} className="btn-secondary text-sm text-center py-2">
                  Voir la formation
                </Link>
                <Link to="/contact?type=devis" onClick={scrollToTop} className="btn-outline-orange text-sm text-center py-2">
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicateurs Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              Nos indicateurs de résultats
            </h2>
            <p className="text-gray-600">
              Des résultats qui témoignent de la qualité de nos formations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] rounded-2xl p-8 text-white text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#F5A623]" />
              </div>
              <div className="text-4xl font-bold mb-2">{indicateurs.satisfaction} / 5</div>
              <p className="text-blue-100">Taux de satisfaction</p>
            </div>

            <div className="bg-gradient-to-br from-[#2EC4B6] to-[#1A9A8E] rounded-2xl p-8 text-white text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{indicateurs.reussite}%</div>
              <p className="text-teal-100">Taux de réussite</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/indicateurs" onClick={scrollToTop} className="text-[#0B3D5C] hover:text-[#F5A623] transition-colors font-medium inline-flex items-center gap-2">
              Voir le détail des indicateurs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Accessibilité Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#6B5B95]/10 flex items-center justify-center mx-auto mb-4">
                    <Accessibility className="w-10 h-10 text-[#6B5B95]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0B3D5C]">Accessibilité</h2>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-gray-600 mb-4">
                    Nos formations sont accessibles aux personnes en situation de handicap.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Un référent dédié est disponible pour étudier les besoins et proposer des adaptations personnalisées.
                  </p>
                  <Link to="/accessibilite" onClick={scrollToTop} className="btn-secondary text-sm inline-block">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financement Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              Financement
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos formations sont accessibles via différents modes de financement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-blue-50">
              <div className="w-14 h-14 rounded-full bg-[#0B3D5C]/10 flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-7 h-7 text-[#0B3D5C]" />
              </div>
              <h3 className="font-semibold text-[#0B3D5C] mb-2">CPF</h3>
              <p className="text-sm text-gray-600">Compte Personnel de Formation</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-teal-50">
              <div className="w-14 h-14 rounded-full bg-[#2EC4B6]/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-[#2EC4B6]" />
              </div>
              <h3 className="font-semibold text-[#0B3D5C] mb-2">Personnel</h3>
              <p className="text-sm text-gray-600">Financement individuel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prochaines sessions Section */}
      <section className="py-16 bg-[#0B3D5C]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Prochaines sessions
            </h2>
            <p className="text-blue-100">
              Inscrivez-vous à l'une de nos prochaines sessions de formation
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {nextSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contact" onClick={scrollToTop} className="btn-primary inline-flex items-center gap-2 px-8 py-3">
              Demander des informations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              Prêt à développer vos compétences ?
            </h2>
            <p className="text-gray-600 mb-8">
              Contactez-nous pour obtenir plus d'informations ou prendre rendez-vous
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

export default Home;