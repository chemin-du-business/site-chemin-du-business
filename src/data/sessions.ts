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
    date: '15/04/2025',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 8
  },
  {
    id: 'wp-002',
    formation: 'WordPress (Tosa)',
    date: '12/05/2025',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 10
  },
  {
    id: 'wp-003',
    formation: 'WordPress (Tosa)',
    date: '09/06/2025',
    modalite: 'Distanciel',
    statut: 'demande',
  },
  {
    id: 'ia-001',
    formation: 'IA & Python (Tosa)',
    date: '22/04/2025',
    modalite: 'Hybride',
    statut: 'disponible',
    places: 6
  },
  {
    id: 'ia-002',
    formation: 'IA & Python (Tosa)',
    date: '19/05/2025',
    modalite: 'Distanciel',
    statut: 'disponible',
    places: 8
  },
  {
    id: 'ia-003',
    formation: 'IA & Python (Tosa)',
    date: '16/06/2025',
    modalite: 'Hybride',
    statut: 'demande',
  }
];

// Indicateurs de résultats - Facilement modifiables
export const indicateurs = {
  satisfaction: 4.5,
  reussite: 100,
  derniereMiseAJour: '01/03/2025'
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
