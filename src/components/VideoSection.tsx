import { AlertCircle } from 'lucide-react';
import { videoConfig } from '@/data/config';

const VideoSection = () => {
  const { embedUrl, type, title, description } = videoConfig;

  // Vérifier si c'est un fichier .mov (non supporté par Chrome)
  const isMovFile = embedUrl.toLowerCase().endsWith('.mov');

  // Vérifier si c'est un fichier vidéo local (mp4, webm, etc.)
  const isVideoFile = embedUrl.match(/\.(mp4|webm|ogg)$/i);

  // Vérifier si c'est YouTube
  const isYouTube = embedUrl.includes('youtube.com') || embedUrl.includes('youtu.be');
  
  // Vérifier si c'est Vimeo
  const isVimeo = embedUrl.includes('vimeo.com');

  // Convertir URL YouTube standard en URL embed si nécessaire
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
  };

  // Convertir URL Vimeo en URL embed si nécessaire
  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.match(/vimeo\.com\/(\d+)/);
    return videoId ? `https://player.vimeo.com/video/${videoId[1]}` : url;
  };

  const getEmbedUrl = () => {
    if (isYouTube) return getYouTubeEmbedUrl(embedUrl);
    if (isVimeo) return getVimeoEmbedUrl(embedUrl);
    return embedUrl;
  };

  // Afficher un avertissement pour les fichiers .mov
  if (isMovFile) {
    return (
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
                {title}
              </h2>
              <p className="text-gray-600">
                {description}
              </p>
            </div>
            
            {/* Message d'erreur pour .mov */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 text-center">
              <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Format vidéo non supporté
              </h3>
              <p className="text-amber-700 mb-4">
                Les fichiers <strong>.mov</strong> ne sont pas compatibles avec tous les navigateurs.
              </p>
              <div className="bg-white rounded-xl p-6 text-left max-w-2xl mx-auto">
                <h4 className="font-semibold text-gray-800 mb-3">Pour corriger :</h4>
                <ol className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#0B3D5C]">1.</span>
                    <span>Convertissez votre fichier .mov en .mp4</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#0B3D5C]">2.</span>
                    <span>Outils recommandés :</span>
                  </li>
                </ol>
                <ul className="mt-3 ml-6 space-y-1 text-sm">
                  <li>
                    <a 
                      href="https://cloudconvert.com/mov-to-mp4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0B3D5C] hover:underline"
                    >
                      → CloudConvert (en ligne, gratuit)
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-600">→ QuickTime Player (Mac) : Fichier → Exporter</span>
                  </li>
                  <li>
                    <a 
                      href="https://handbrake.fr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0B3D5C] hover:underline"
                    >
                      → HandBrake (Windows/Mac, gratuit)
                    </a>
                  </li>
                </ul>
                <li className="flex items-start gap-2 mt-3 text-sm">
                  <span className="font-bold text-[#0B3D5C]">3.</span>
                  <span>Uploadez le fichier .mp4 et mettez à jour le lien dans <code className="bg-gray-100 px-1 rounded">src/data/config.ts</code></span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-4">
              {title}
            </h2>
            <p className="text-gray-600">
              {description}
            </p>
          </div>

          {/* Lecteur vidéo - SANS fond noir */}
          <div className="flex justify-center">
            {type === 'embed' || isYouTube || isVimeo ? (
              // Embed YouTube/Vimeo - ratio 16:9
              <div className="w-full max-w-4xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={getEmbedUrl()}
                    title={title}
                    className="absolute inset-0 w-full h-full rounded-2xl shadow-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : isVideoFile ? (
              // Lecteur HTML5 pour MP4/WebM/OGG - SANS barres noires
              <video
                controls
                className="max-w-full max-h-[80vh] rounded-2xl shadow-xl"
                poster="/logo.png"
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              >
                <source src={embedUrl} type={`video/${embedUrl.split('.').pop()?.toLowerCase()}`} />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            ) : (
              // Fallback
              <div className="w-full max-w-4xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={embedUrl}
                    title={title}
                    className="absolute inset-0 w-full h-full rounded-2xl shadow-xl"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>


        </div>
      </div>
    </section>
  );
};

export default VideoSection;
