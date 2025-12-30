import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Gift, X, Palette, Music } from 'lucide-react';

const coloringPages = [
  {
    title: 'El Espíritu de la Sabana',
    file: '/downloads/colorear-espiritu-sabana.png',
    preview: '/downloads/colorear-espiritu-sabana.png',
  },
  {
    title: 'Mateo y Venezuela',
    file: '/downloads/colorear-mateo-venezuela.png',
    preview: '/downloads/colorear-mateo-venezuela.png',
  },
  {
    title: 'La Guacamaya y las Orquídeas',
    file: '/downloads/colorear-guacamaya.png',
    preview: '/downloads/colorear-guacamaya.png',
  },
];

const CTASection: React.FC = () => {
  const [showDownloads, setShowDownloads] = useState(false);

  // Listen for custom event from hero button
  useEffect(() => {
    const handleOpenDownloads = () => {
      setShowDownloads(true);
    };
    
    window.addEventListener('openDownloads', handleOpenDownloads);
    return () => window.removeEventListener('openDownloads', handleOpenDownloads);
  }, []);

  const handleDownload = (file: string, title: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cta-section" className="py-16 md:py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-starlight rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-starlight mb-6">
            Lleva esta historia a tu hogar
          </h2>
          
          <p className="text-lg md:text-xl text-starlight/80 font-body mb-10 max-w-2xl mx-auto">
            Pre-ordena la edición ilustrada o descarga recursos gratuitos para compartir 
            con tu familia, aula o comunidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="gap-3">
              <BookOpen className="w-5 h-5" />
              Pre-ordenar el libro ilustrado
            </Button>
            <Button 
              variant="heroSecondary" 
              size="xl" 
              className="gap-3"
              onClick={() => setShowDownloads(!showDownloads)}
            >
              <Download className="w-5 h-5" />
              Actividades gratis
            </Button>
          </div>

          {/* Downloads Modal/Panel */}
          {showDownloads && (
            <div className="mb-8 bg-card/95 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-golden/30 shadow-2xl animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-golden" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Páginas para colorear
                  </h3>
                </div>
                <button 
                  onClick={() => setShowDownloads(false)}
                  className="p-1 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {coloringPages.map((page, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-xl overflow-hidden border border-border hover:border-golden/50 transition-all hover:shadow-lg"
                  >
                    <div className="aspect-[3/4] bg-white p-2">
                      <img 
                        src={page.preview} 
                        alt={page.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-3 bg-muted/50">
                      <p className="text-sm font-medium text-foreground mb-2 truncate">
                        {page.title}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full gap-2 text-xs"
                        onClick={() => handleDownload(page.file, page.title)}
                      >
                        <Download className="w-3 h-3" />
                        Descargar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 italic">
                ¡Imprime y colorea estos dibujos inspirados en el libro!
              </p>
            </div>
          )}
          
          {/* Free resources preview */}
          <div className="bg-night-sky/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-starlight/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-golden" />
              <span className="text-starlight font-display font-semibold">
                Recursos gratuitos incluyen:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-starlight/70 mb-6">
              <span className="px-3 py-1 bg-starlight/10 rounded-full">Páginas para colorear</span>
              <span className="px-3 py-1 bg-starlight/10 rounded-full">Diario de sueños</span>
              <span className="px-3 py-1 bg-starlight/10 rounded-full">Guía para educadores</span>
            </div>
            
            {/* Mi querencia embedded video */}
            <div className="mt-2">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Music className="w-4 h-4 text-golden" />
                <span className="text-starlight font-medium">Escucha "Mi querencia"</span>
              </div>
              <div className="aspect-video max-w-md mx-auto rounded-xl overflow-hidden border border-golden/30 shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/NXpkBhteGIQ?si=Rd5nz8RgKneAHRMx" 
                  title="Mi querencia - YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
