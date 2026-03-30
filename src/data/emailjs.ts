// Configuration EmailJS
// Ces valeurs sont fournies par EmailJS dashboard

// ============================================
// OPTION 1: Gmail SMTP (RECOMMANDÉ)
// ============================================
// 1. Va dans EmailJS → Services → Add New Service
// 2. Choisis "Gmail" (PAS "Google")
// 3. Connecte ton compte Gmail
// 4. Copie le Service ID ici :
export const emailjsConfig = {
  SERVICE_ID: 'service_vgfhyfe',  // Gmail SMTP
  TEMPLATE_ID: 'template_drupfam',
  PUBLIC_KEY: 'HtOrhSJ1hBRrv-sm2'
};

// ============================================
// OPTION 2: Si Gmail SMTP ne marche pas,
// utiliser SendGrid (gratuit et fiable)
// ============================================
// 1. Crée un compte sur sendgrid.com
// 2. Vérifie ton email d'expéditeur
// 3. Crée un service EmailJS avec SendGrid
// 4. Copie le Service ID ici
