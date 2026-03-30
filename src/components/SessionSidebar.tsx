import { Calendar, Monitor, Users, CheckCircle, Clock } from 'lucide-react';
import type { Session } from '@/data/sessions';

interface SessionSidebarProps {
  session: Session;
}

const SessionSidebar = ({ session }: SessionSidebarProps) => {
  const getStatutBadge = () => {
    switch (session.statut) {
      case 'disponible':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Places dispo
          </span>
        );
      case 'complet':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
            Complet
          </span>
        );
      case 'demande':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
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
        return <Monitor className="w-3.5 h-3.5" />;
      case 'Présentiel':
        return <Users className="w-3.5 h-3.5" />;
      case 'Hybride':
        return <Monitor className="w-3.5 h-3.5" />;
      default:
        return <Monitor className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Calendar className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
          <span className="text-sm font-medium text-gray-800 truncate">{session.date}</span>
        </div>
        {getStatutBadge()}
      </div>
      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
        {getModaliteIcon()}
        <span>{session.modalite}</span>
      </div>
    </div>
  );
};

export default SessionSidebar;
