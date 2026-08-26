// Fichier de configuration des sessions - Facilement modifiable
// Format des dates : "JJ/MM/AAAA"

export interface Session {
  id: string;
  formation: string;
  date: string;
  modalite: 'Distanciel' | 'Présentiel' | 'Hybride';
  statut: 'disponible' | 'complet' | 'demande';
  places?: number;
}

export const prochainesSessions: Session[] = [
  {
    id: 'wp-001',
    formation: 'WordPress (Tosa)',
    date: '15/08/2026',
    modalite: 'Distanciel',
    statut: 'complet'
  },
  {
    id: 'ia-001',
    formation: 'Python (Tosa)',
    date: '15/08/2026',
    modalite: 'Distanciel',
    statut: 'complet'
  },
  {
    id: 'wp-004',
    formation: 'WordPress (Tosa)',
    date: '19/09/2026',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 15
  },
  {
    id: 'ia-004',
    formation: 'Python (Tosa)',
    date: '19/09/2026',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 15
  },
  {
    id: 'wp-005',
    formation: 'WordPress (Tosa)',
    date: '24/10/2026',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 15
  },
  {
    id: 'ia-005',
    formation: 'Python (Tosa)',
    date: '24/10/2026',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 15
  },
  {
    id: 'wp-006',
    formation: 'WordPress (Tosa)',
    date: '28/11/2026',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 15
  },
  {
    id: 'ia-006',
    formation: 'Python (Tosa)',
    date: '28/11/2026',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 15
  }
];

// Indicateurs de résultats - Facilement modifiables
export const indicateurs = {
  satisfaction: '9,1', // Taux de satisfaction (/10) - WordPress 9,1/10, Python 9,3/10, Global 9,1/10 (inchangé, échantillon élargi : n=88)
  niveau1Garanti: 100, // % d'apprenants évalués qui valident au moins le Niveau 1 Tosa (socle garanti)
  depassementNiveau1: '23,5', // % d'apprenants qui dépassent le Niveau 1 Tosa (WordPress) - socle garanti
  recommandation: '97,7', // Taux de recommandation (%)
  derniereMiseAJour: '18/08/2026'
};

// Informations de contact
export const contactInfo = {
  email: 'contact@chemindubusiness.fr',
  telephone: '01 84 80 19 09',
  adresse: '15 rue de Magellan, 77700 Serris',
  emailHandicap: 'handicap@chemindubusiness.fr'
};

// Informations légales
export const legalInfo = {
  denomination: 'LE CONSULTANT IT',
  nomCommercial: 'CHEMIN DU BUSINESS',
  siret: '932 365 083',
  nda: '11770926377',
  adresse: '15 rue de Magellan, 77700 Serris'
};
