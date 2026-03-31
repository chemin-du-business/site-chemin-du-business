import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Award, Clock, Monitor, CheckCircle, Users, BookOpen, Target, Wrench, FileText, GraduationCap, Briefcase, Wallet, Timer, Accessibility, TrendingUp, Star, MessageSquare } from 'lucide-react';
import SessionSidebar from '@/components/SessionSidebar';
import { prochainesSessions, indicateurs, contactInfo } from '@/data/sessions';
import { calendlyLink } from '@/data/config';

const FormationWordPress = () => {
  const wordpressSessions = prochainesSessions.filter(s => s.formation.includes('WordPress'));

  const objectifs = [
    'Comprendre le fonctionnement de WordPress',
    'Installer et configurer un site web',
    'Créer des pages et des articles',
    'Gérer les médias et les menus',
    'Installer et personnaliser des thèmes et extensions',
    'Créer une boutique en ligne avec WooCommerce',
    'Comprendre les différences entre WordPress et Shopify',
    'Mettre en ligne et administrer un site web'
  ];

  const programme = [
    { titre: 'Introduction à WordPress', description: 'Présentation de WordPress, son écosystème et ses cas d\'usage' },
    { titre: 'Création de pages et contenus', description: 'Gestion des pages, articles, catégories et tags' },
    { titre: 'Gestion des médias et menus', description: 'Importation d\'images, création de galeries et organisation des menus' },
    { titre: 'Installation de thèmes et plugins', description: 'Personnalisation visuelle et ajout de fonctionnalités' },
    { titre: 'Initiation à WooCommerce', description: 'Création d\'une boutique en ligne simple' },
    { titre: 'Ouverture e-commerce', description: 'Comparaison WordPress / Shopify pour les projets e-commerce' },
    { titre: 'Mise en ligne du site', description: 'Hébergement, nom de domaine et mise en production' }
  ];

  const debouches = [
    'Création de sites web pour son activité',
    'Freelance WordPress',
    'Création de boutique en ligne',
    'Gestion et administration de sites web'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
              <Award className="w-4 h-4 text-[#F5A623]" />
              <span>Certification Tosa – RS6965</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Créer et gérer un site web avec WordPress
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Cette formation permet de créer un site web professionnel avec WordPress et de comprendre les premières logiques du e-commerce, notamment avec WooCommerce, avec une ouverture sur Shopify pour comparer les solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?type=devis" className="btn-primary flex items-center justify-center gap-2">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-orange flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Box Section */}
      <section className="py-8 bg-white border-b">
        <div className="section-container">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F5A623]" />
                <div>
                  <span className="text-sm text-gray-500">Durée</span>
                  <p className="font-medium text-[#0B3D5C]">5 heures (1 jour)</p>
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
                  <span className="text-sm text-gray-500">Certification</span>
                  <p className="font-medium text-[#0B3D5C]">RS6965 – Niveau 1</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-[#F5A623]" />
                <div>
                  <span className="text-sm text-gray-500">Prix</span>
                  <p className="font-medium text-[#0B3D5C]">Sur devis</p>
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
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#0B3D5C]" />
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
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Public concerné</h2>
                </div>
                <div className="info-box">
                  <p className="text-gray-700">
                    Débutants, entrepreneurs, freelances, salariés en reconversion, demandeurs d'emploi
                  </p>
                </div>
              </div>

              {/* Prérequis */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Prérequis</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Savoir utiliser un ordinateur</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Naviguer sur internet</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Disposer d'un ordinateur et d'une connexion internet</span>
                  </li>
                </ul>
              </div>

              {/* Programme */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Programme</h2>
                </div>
                <div className="space-y-4">
                  {programme.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[#0B3D5C] text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-[#0B3D5C] mb-1">{item.titre}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Méthodes pédagogiques */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Méthodes pédagogiques</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">Apports théoriques courts</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">Exercices pratiques sur WordPress</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">Démonstrations en direct</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">Mise en situation</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg md:col-span-2">
                    <p className="text-gray-700">Feedback individualisé</p>
                  </div>
                </div>
              </div>

              {/* Moyens techniques */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Moyens techniques</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Microsoft Teams</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Google Drive</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">WordPress en ligne ou hébergé</span>
                </div>
              </div>

              {/* Évaluation */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B3D5C]">Évaluation</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Exercices pratiques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Quiz</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span className="text-gray-700">Certification Tosa WordPress (niveau 1)</span>
                  </li>
                </ul>
              </div>

              {/* Débouchés */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#0B3D5C]" />
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
                {/* Certification Card */}
                <div className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] rounded-xl p-6 text-white">
                  <Award className="w-10 h-10 text-[#F5A623] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Certification</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    RS6965 – Créer et gérer des sites web avec WordPress (Tosa) – Niveau 1
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2EC4B6]" />
                    <span>Certification reconnue par l'État</span>
                  </div>
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
                        <span className="font-semibold text-[#0B3D5C]">{indicateurs.satisfaction} / 5</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Réussite</span>
                      <span className="font-semibold text-[#0B3D5C]">{indicateurs.reussite}%</span>
                    </div>
                  </div>
                </div>

                {/* Prochaines sessions */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <Calendar className="w-10 h-10 text-[#F5A623] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0B3D5C] mb-4">Prochaines sessions</h3>
                  <div className="space-y-3">
                    {wordpressSessions.length > 0 ? (
                      wordpressSessions.map((session) => (
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

                {/* Délais d'accès */}
                <div className="bg-amber-50 rounded-xl p-6">
                  <Timer className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="text-base font-semibold text-[#0B3D5C] mb-2">Délais d'accès</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Inscription jusqu'à 15 jours avant la formation</li>
                    <li>• CPF : délai légal minimum de 11 jours</li>
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
              <Link to="/contact?type=devis" className="btn-primary flex items-center justify-center gap-2">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationWordPress;
