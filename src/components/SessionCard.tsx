import { Calendar, Monitor, Users, CheckCircle, Clock } from 'lucide-react';
import type { Session } from '@/data/sessions';

interface SessionCardProps {
  session: Session;
}

const SessionCard = ({ session }: SessionCardProps) => {
  const getStatutBadge = () => {
    switch (session.statut) {
      case 'disponible':
        return (
          <span className="badge-disponible flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Places disponibles
          </span>
        );
      case 'complet':
        return (
          <span className="badge-complet">
            Complet
          </span>
        );
      case 'demande':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
            <Clock className="w-3 h-3 mr-1" />
            Sur demande
          </span>
        );
      default:
        return null;
    }
  };

  const getModaliteIcon = () => {
    switch (session.modalite) {
      case 'Distanciel':
        return <Monitor className="w-4 h-4" />;
      case 'Présentiel':
        return <Users className="w-4 h-4" />;
      case 'Hybride':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#0B3D5C]/10 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6 text-[#0B3D5C]" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">{session.formation}</h4>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#F5A623]" />
                {session.date}
              </span>
              <span className="flex items-center gap-1.5">
                {getModaliteIcon()}
                {session.modalite}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 mt-2 sm:mt-0">
          {getStatutBadge()}
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
