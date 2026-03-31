// Configuration du site - facilement modifiable

// ============================================
// CONFIGURATION VIDEO
// ============================================
// 
// OPTION 1 - YouTube/Vimeo (RECOMMANDÉ):
//   embedUrl: "https://www.youtube.com/embed/VIDEO_ID"
//   type: "embed"
//
// OPTION 2 - Vidéo MP4 hébergée:
//   embedUrl: "https://votresite.com/video.mp4"
//   type: "mp4"
//
// OPTION 3 - Vidéo locale (dans public/videos/):
//   embedUrl: "/videos/ma-video.mp4"
//   type: "mp4"
//
// ⚠️ IMPORTANT: Les fichiers .mov ne fonctionnent pas sur Chrome!
//   Convertissez en .mp4 avant d'uploader.
//   Outils: CloudConvert.com, HandBrake, ou QuickTime Player (Exporter)

export const videoConfig = {
  // URL de la vidéo
  embedUrl: "/videos/download.mp4", // ← Remplace par ton lien
  
  // Type de vidéo: "embed" (YouTube/Vimeo) ou "mp4" (fichier direct)
  type: "mp4",
  
  // Titre de la section vidéo
  title: "Découvrez CHEMIN DU BUSINESS",
  
  // Description sous la vidéo
  description: "Apprenez-en plus sur notre approche pédagogique et nos formations."
};

// ============================================
// HORAIRES DU SUPPORT TÉLÉPHONIQUE
// ============================================
export const horairesSupport = {
  // true pour afficher les horaires, false pour masquer
  afficher: true,
  
  // Texte des horaires (court, pour le footer)
  texte: "Lun-Sam 8h-20h30",
  
  // Texte détaillé (pour la page contact)
  texteDetaille: "Lundi au Samedi, de 8h00 à 20h30. Sans interruption."
};

// ============================================
// LIEN CALENDLY POUR LES RENDEZ-VOUS
// ============================================
export const calendlyLink = "https://calendly.com/contact-chemindubusiness/reservez-votre-rendez-vous-gratuit";
