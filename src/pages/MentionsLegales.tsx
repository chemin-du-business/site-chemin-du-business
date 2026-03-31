import { Building2, MapPin, FileText, Award, Mail, Phone, Globe, Server } from 'lucide-react';
import { legalInfo, contactInfo } from '@/data/sessions';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B3D5C] to-[#1A5A7A] text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Mentions légales
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Informations légales concernant le site et l'organisme de formation CHEMIN DU BUSINESS.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Éditeur du site */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#0B3D5C]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3D5C]">Éditeur du site</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500">Dénomination sociale</span>
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.denomination}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Nom commercial</span>
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.nomCommercial}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">SIREN</span>
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.siret}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">NDA</span>
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.nda}</p>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Adresse</span>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#0B3D5C] flex-shrink-0 mt-0.5" />
                    <p className="font-medium text-[#0B3D5C]">{legalInfo.adresse}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-500">Email</span>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#0B3D5C]" />
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="font-medium text-[#0B3D5C] hover:text-[#F5A623] transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Téléphone</span>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#0B3D5C]" />
                      <a 
                        href={`tel:${contactInfo.telephone.replace(/\s/g, '')}`}
                        className="font-medium text-[#0B3D5C] hover:text-[#F5A623] transition-colors"
                      >
                        {contactInfo.telephone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#F5A623]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3D5C]">Certification</h2>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-green-800">Certifié Qualiopi</span>
                </div>
                <p className="text-gray-700 text-sm">
                  CHEMIN DU BUSINESS est un organisme de formation certifié Qualiopi, 
                  garantissant le respect des critères qualité définis par la loi pour 
                  les actions de formation.
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-[#0B3D5C]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3D5C]">Hébergement</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-[#0B3D5C] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0B3D5C] mb-2">Hébergement statique</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Le site est hébergé sur une infrastructure cloud sécurisée 
                      assurant la disponibilité et la performance du service.
                    </p>
                    <p className="text-gray-500 text-xs">
                      L'hébergement est conforme aux normes de sécurité en vigueur 
                      pour la protection des données personnelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#0B3D5C]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3D5C]">Propriété intellectuelle</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, 
                  photographies, images, vidéos, sons, plans, logos, marques, etc.) 
                  est la propriété exclusive de CHEMIN DU BUSINESS ou de ses partenaires. 
                  Ces éléments sont protégés par les lois relatives à la propriété intellectuelle.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-4">
                  Toute reproduction, représentation, modification, publication, 
                  adaptation de tout ou partie des éléments du site, quel que soit 
                  le moyen ou le procédé utilisé, est interdite, sauf autorisation 
                  écrite préalable de CHEMIN DU BUSINESS.
                </p>
              </div>
            </div>

            {/* Données personnelles */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#0B3D5C]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3D5C]">Données personnelles</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Les informations collectées via les formulaires de contact sont 
                  utilisées uniquement dans le cadre de la relation commerciale 
                  entre CHEMIN DU BUSINESS et les utilisateurs. Ces données ne 
                  sont ni vendues ni transmises à des tiers.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-4">
                  Conformément à la loi « Informatique et Libertés » et au RGPD, 
                  vous disposez d'un droit d'accès, de rectification et de suppression 
                  des données vous concernant. Pour exercer ces droits, contactez-nous 
                  à l'adresse email : {contactInfo.email}
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0B3D5C]/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#0B3D5C]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B3D5C]">Cookies</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                  Ces cookies ne collectent pas de données personnelles et sont utilisés 
                  uniquement pour améliorer l'expérience utilisateur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
