import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Clock, Monitor, CheckCircle, Users, BookOpen, Target, Wrench, FileText, GraduationCap, Briefcase, Wallet, Timer, Accessibility, TrendingUp, Star, MessageSquare, Cpu, Code, Shield, Hourglass, User, Compass, LineChart, ClipboardCheck } from 'lucide-react';
import SessionSidebar from '@/components/SessionSidebar';
import { prochainesSessions, indicateurs, contactInfo } from '@/data/sessions';
import { calendlyLink } from '@/data/config';

const FormationIAPython = () => {
  const iaSessions = prochainesSessions.filter(s => s.formation.includes('Python'));

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

  const objectifs = [
    'Identifier les principaux usages de l\'intelligence artificielle',
    'Distinguer différents usages et outils d\'IA',
    'Identifier un environnement d\'exécution Python',
    'Créer et exécuter un script Python simple',
    'Déclarer et manipuler des variables',
    'Utiliser des types de données simples',
    'Réaliser des opérations simples',
    'Utiliser une condition dans un programme',
    'Utiliser une boucle simple',
    'Créer et manipuler une liste de données',
    'Traiter des informations simples avec Python',
    'Créer un script permettant d\'automatiser une tâche élémentaire',
    'Identifier une erreur simple dans un script',
    'Corriger une instruction simple avec accompagnement',
    'Vérifier le résultat produit par un programme',
    'Identifier les principes généraux de fonctionnement d\'un agent IA'
  ];

  const programme = [
    { titre: 'Introduction à l\'intelligence artificielle', description: 'Identifier les principes et les principaux usages de l\'intelligence artificielle', duree: '20 min' },
    { titre: 'Découvrir les bases de Python', description: 'Créer et exécuter un premier programme Python utilisant des instructions simples', duree: '40 min' },
    { titre: 'Conditions, boucles et données', description: 'Utiliser des structures élémentaires de programmation pour traiter des informations avec Python', duree: '40 min' },
    { titre: 'Manipulation simple de données', description: 'Manipuler et traiter un ensemble simple de données avec Python', duree: '25 min' },
    { titre: 'Automatiser une tâche simple avec Python', description: 'Créer un script Python permettant d\'automatiser une tâche élémentaire', duree: '35 min' },
    { titre: 'Découverte des agents IA', description: 'Identifier le fonctionnement général et les principaux usages d\'un agent IA', duree: '20 min' }
  ];

  const methodesPedagogiques = [
    'Démonstrations en direct',
    'Exercices pratiques Python',
    'Manipulations individuelles',
    'Cas concrets',
    'Mises en situation',
    'Démonstrations d\'outils IA',
    'Partage d\'écran',
    'Accompagnement individualisé',
    'Corrections en direct',
    'Feedback du formateur',
    'Questions / réponses'
  ];

  const etapesEvaluation = [
    { icone: Compass, titre: 'Positionnement initial', description: 'Identifier le niveau de départ avant le démarrage des apprentissages' },
    { icone: LineChart, titre: 'Évaluation continue', description: 'Observer les compétences pendant les exercices tout au long du parcours' },
    { icone: ClipboardCheck, titre: 'Évaluation finale pratique', description: 'Partager son écran, présenter son code et exécuter son programme en fin de formation' },
    { icone: Award, titre: 'Évaluation Tosa Python – Niveau 1', description: 'Réalisable dans les 12 mois suivant l\'entrée en formation' }
  ];

  const debouches = [
    'Automatisation de tâches professionnelles',
    'Utilisation de l\'IA en entreprise',
    'Amélioration de la productivité',
    'Développement de scripts simples'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
              <Award className="w-4 h-4 text-[#F5A623]" />
              <span>Évaluation Tosa – RS6962 Niveau 1</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Programmer et automatiser des tâches avec Python
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Découvrez les fondamentaux de la programmation avec Python et initiez-vous à l'automatisation de tâches simples. Le parcours propose également une introduction aux usages de l'intelligence artificielle et au fonctionnement des agents IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={openCalendly}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Box Section */}
      <section className="py-8 bg-white border-b">
        <div className="section-container">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F5A623]" />
                <div>
                  <span className="text-sm text-gray-500">Durée</span>
                  <p className="font-medium text-[#0B3D5C]">4 heures</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Hourglass className="w-5 h-5 text-[#F5A623]" />
                <div>
                  <span className="text-sm text-gray-500">Horaires</span>
                  <p className="font-medium text-[#0B3D5C]">14h00 – 18h00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-[#F5A623]" />
                <div>
                  <span className="text-sm text-gray-500">Format</span>
                  <p className="font-medium text-[#0B3D5C]">Distanciel</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#F5A623]" />
                <div>
                  <span className="text-sm text-gray-500">Évaluation</span>
                  <p className="font-medium text-[#0B3D5C]">RS6962 – Niveau 1</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-[#F5A623]" />
                <div>
                  <span className="text-sm text-gray-500">Prix</span>
                  <p className="font-medium text-[#0B3D5C]">1 600 € TTC</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t text-center">
              <span className="text-sm text-gray-500">Financement : </span>
              <span className="font-medium text-[#0B3D5C]">CPF / Personnel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Objectifs */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Objectifs</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {objectifs.map((objectif, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{objectif}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Public */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Public concerné</h2>
                </div>
                <div className="info-box">
                  <p className="text-gray-700">
                    Débutants sans expérience en programmation, entrepreneurs, porteurs de projet, freelances, salariés, personnes en reconversion professionnelle, étudiants et demandeurs d'emploi — et plus largement à toute personne souhaitant découvrir Python, l'automatisation et les usages professionnels de l'intelligence artificielle.
                  </p>
                </div>
              </div>

              {/* Prérequis */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Prérequis</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Aucune connaissance préalable en programmation n'est nécessaire</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Utiliser les fonctions courantes d'un ordinateur</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Naviguer sur Internet</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Disposer d'un ordinateur et d'une connexion Internet stable</span>
                  </li>
                </ul>
              </div>

              {/* Programme */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Programme</h2>
                </div>
                <div className="space-y-4">
                  {programme.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[#2EC4B6] text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="font-medium text-[#0B3D5C]">{item.titre}</h3>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{item.duree}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Méthodes pédagogiques */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Méthodes pédagogiques</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {methodesPedagogiques.map((methode, index) => (
                    <div
                      key={index}
                      className={`p-4 bg-teal-50 rounded-lg ${
                        index === methodesPedagogiques.length - 1 && methodesPedagogiques.length % 2 !== 0
                          ? 'md:col-span-2'
                          : ''
                      }`}
                    >
                      <p className="text-gray-700">{methode}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moyens techniques */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Moyens techniques</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Classe virtuelle en direct</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Microsoft Teams</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Environnement Python en ligne</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Outils d'intelligence artificielle</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Supports pédagogiques numériques</span>
                </div>
              </div>

              {/* Évaluation */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Évaluation</h2>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Le parcours comporte quatre temps d'évaluation complémentaires, du positionnement initial à l'évaluation TOSA Python – Niveau 1.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {etapesEvaluation.map((etape, index) => {
                    const Icone = etape.icone;
                    return (
                      <div key={index} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-9 h-9 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center flex-shrink-0">
                          <Icone className="w-4 h-4 text-[#2EC4B6]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#0B3D5C] text-sm mb-1">{etape.titre}</h3>
                          <p className="text-xs text-gray-600">{etape.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Débouchés */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Débouchés</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {debouches.map((debouche, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{debouche}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Évaluation Card */}
                <div className="bg-gradient-to-br from-[#2EC4B6] to-[#1A9A8E] rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-8 h-8" />
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Évaluation Tosa</h3>
                  <p className="text-teal-100 text-sm mb-4">
                    Test Tosa RS6962 – Programmer et automatiser des tâches avec Python – Niveau 1 validé
                  </p>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span>RS6962 enregistré à France Compétences</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Hourglass className="w-4 h-4 text-white" />
                    <span>Réalisable dans les 12 mois suivant l'entrée en formation</span>
                  </div>
                </div>

                {/* Formateur Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-[#F5A623]" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#0B3D5C]">Gracia Kumbu Voka</h3>
                      <p className="text-xs text-gray-500">Entrepreneur et formateur</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Spécialisé dans le digital, l'entrepreneuriat, le e-commerce, l'intelligence artificielle et Python, il accompagne les apprenants dans le développement de compétences numériques concrètes.
                  </p>
                </div>

                {/* Indicateurs Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <TrendingUp className="w-10 h-10 text-[#2EC4B6] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0B3D5C] mb-4">Indicateurs</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Satisfaction</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                        <span className="font-semibold text-[#0B3D5C]">{indicateurs.satisfaction} / 10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Niveau 1 garanti</span>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-[#F5A623]" />
                        <span className="font-semibold text-[#0B3D5C]">{indicateurs.niveau1Garanti}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Dépassement Niveau 1</span>
                      <span className="font-semibold text-[#0B3D5C]">{indicateurs.depassementNiveau1}%</span>
                    </div>
                  </div>
                </div>

                {/* Prochaines sessions */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <Calendar className="w-10 h-10 text-[#F5A623] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0B3D5C] mb-4">Prochaines sessions</h3>
                  <div className="space-y-3">
                    {iaSessions.length > 0 ? (
                      iaSessions.map((session) => (
                        <SessionSidebar key={session.id} session={session} />
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">Sessions sur demande</p>
                    )}
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <Link 
                      to="/contact" 
                      className="btn-primary w-full text-center text-sm py-3"
                    >
                      Demander des informations
                    </Link>
                  </div>
                </div>

                {/* Accessibilité */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <Accessibility className="w-8 h-8 text-[#6B5B95] mb-3" />
                  <h3 className="text-base font-semibold text-[#0B3D5C] mb-2">Accessibilité</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Formation accessible aux personnes en situation de handicap.
                  </p>
                  <a 
                    href={`mailto:${contactInfo.emailHandicap}`}
                    className="text-sm text-[#6B5B95] hover:underline"
                  >
                    {contactInfo.emailHandicap}
                  </a>
                </div>

                {/* Accès à la formation */}
                <div className="bg-amber-50 rounded-xl p-6">
                  <Timer className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="text-base font-semibold text-[#0B3D5C] mb-2">Accès à la formation</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• L'inscription se fait directement auprès de notre organisme de formation, en prenant contact sur le site, par téléphone ou par email. Avant l'entrée en formation, vous recevez toutes les informations et documents nécessaires à votre participation.</li>
                    <li>• Inscription jusqu'à 15 jours avant la formation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="w-12 h-12 text-[#F5A623] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#0B3D5C] mb-4">
              Vous avez des questions ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est à votre disposition pour vous accompagner dans votre projet de formation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={openCalendly}
                className="btn-primary flex items-center justify-center gap-2"
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

export default FormationIAPython;