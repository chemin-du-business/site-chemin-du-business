import { useState, useRef } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/data/emailjs';

interface ContactFormProps {
  defaultType?: string;
  showTitle?: boolean;
}

const ContactForm = ({ defaultType = 'informations', showTitle = true }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    formation: '',
    typeDemande: defaultType,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Préparer les données pour EmailJS avec les noms exacts des variables
      const templateParams = {
        from_name: `${formData.prenom} ${formData.nom}`,
        from_email: formData.email,
        telephone: formData.telephone || 'Non renseigné',
        formation: formationOptions.find(opt => opt.value === formData.formation)?.label || 'Non spécifiée',
        type_demande: typeOptions.find(opt => opt.value === formData.typeDemande)?.label || formData.typeDemande,
        message: formData.message || 'Aucun message',
        reply_to: formData.email
      };

      console.log('Envoi EmailJS avec params:', templateParams);

      const result = await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        templateParams,
        emailjsConfig.PUBLIC_KEY
      );

      console.log('Résultat EmailJS:', result);
      setIsSubmitted(true);
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        formation: '',
        typeDemande: defaultType,
        message: ''
      });
    } catch (err: any) {
      console.error('Erreur EmailJS:', err);
      console.error('Détails:', err.text || err.message);
      setError(`Erreur: ${err.text || err.message || 'Problème de connexion'}. Vérifiez votre template EmailJS.`);
    } finally {
      setIsLoading(false);
    }
  };

  const typeOptions = [
    { value: 'informations', label: 'Demande d\'informations' },
    { value: 'devis', label: 'Demande de devis' },
    { value: 'inscription', label: 'Demande d\'inscription' },
    { value: 'rdv', label: 'Prise de rendez-vous' }
  ];

  const formationOptions = [
    { value: '', label: 'Sélectionnez une formation' },
    { value: 'wordpress', label: 'WordPress (Tosa)' },
    { value: 'ia-python', label: 'IA & Python (Tosa)' },
    { value: 'autre', label: 'Autre / Je ne sais pas encore' }
  ];

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Votre demande a été envoyée
        </h3>
        <p className="text-green-700">
          Nous vous recontacterons dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {showTitle && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0B3D5C] mb-2">
            Formulaire de contact
          </h3>
          <p className="text-gray-600 text-sm">
            Remplissez le formulaire ci-dessous, nous vous recontacterons rapidement.
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          <p className="font-medium mb-1">Erreur d'envoi</p>
          <p>{error}</p>
          <p className="mt-2 text-xs">
            Vérifiez que votre template EmailJS contient les variables : from_name, from_email, telephone, formation, type_demande, message
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="input-field"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="input-field"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Adresse email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="input-field"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Numéro de téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="input-field"
            placeholder="01 23 45 67 89"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Formation souhaitée
          </label>
          <select
            name="formation"
            value={formData.formation}
            onChange={handleChange}
            disabled={isLoading}
            className="input-field"
          >
            {formationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type de demande
          </label>
          <select
            name="typeDemande"
            value={formData.typeDemande}
            onChange={handleChange}
            disabled={isLoading}
            className="input-field"
          >
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          disabled={isLoading}
          className="input-field resize-none"
          placeholder="Décrivez votre demande..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Envoyer ma demande
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Nous vous recontactons dans les meilleurs délais.
      </p>
    </form>
  );
};

export default ContactForm;
