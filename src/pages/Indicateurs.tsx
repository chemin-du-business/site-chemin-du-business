import { Star, Users, Award, Calendar, CheckCircle, FileText } from 'lucide-react';
import { indicateurs } from '@/data/sessions';

const Indicateurs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Indicateurs de résultats
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Découvrez les résultats de nos formations, basés sur les retours et résultats de nos apprenants.
            </p>
          </div>
        </div>
      </section>

      {/* Main Indicateurs */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Satisfaction */}
            <div className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] rounded-2xl p-8 text-center text-white">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-[#F5A623]" />
              </div>
              <div className="text-5xl font-bold mb-2">{indicateurs.satisfaction}</div>
              <div className="text-2xl text-blue-200 mb-4">/ 5</div>
              <h2 className="text-xl font-semibold mb-2">Taux de satisfaction</h2>
              <p className="text-blue-100 text-sm">
                Basé sur les évaluations des apprenants à l'issue de nos formations
              </p>
            </div>

            {/* Réussite */}
            <div className="bg-gradient-to-br from-[#2EC4B6] to-[#1A9A8E] rounded-2xl p-8 text-center text-white">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">{indicateurs.reussite}%</div>
              <div className="text-2xl text-teal-100 mb-4">de réussite</div>
              <h2 className="text-xl font-semibold mb-2">Taux de réussite</h2>
              <p className="text-teal-100 text-sm">
                Taux de certification obtenue par nos apprenants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Détails */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-8 text-center">
              Méthodologie de calcul
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#0B3D5C]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B3D5C]">Taux de satisfaction</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Le taux de satisfaction est calculé sur la base des questionnaires d'évaluation remplis par les apprenants à l'issue de chaque formation.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FileText className="w-4 h-4" />
                  <span>Questionnaires anonymes</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B3D5C]">Taux de réussite</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Le taux de réussite correspond au pourcentage d'apprenants ayant obtenu leur certification Tosa à l'issue de la formation.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>Certifications Tosa officielles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement qualité */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#F5A623]/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-[#F5A623]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              Notre engagement qualité
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              CHEMIN DU BUSINESS s'engage à maintenir un haut niveau de qualité dans toutes nos formations. 
              Nos indicateurs sont régulièrement mis à jour pour refléter fidèlement la satisfaction et 
              la réussite de nos apprenants.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">Certifié Qualiopi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dernière mise à jour */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 text-sm mb-1">Dernière mise à jour des indicateurs</p>
              <p className="text-[#0B3D5C] font-semibold">{indicateurs.derniereMiseAJour}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Indicateurs;
