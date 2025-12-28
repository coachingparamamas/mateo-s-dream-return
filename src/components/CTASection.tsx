import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Gift } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-hero-gradient relative overflow-hidden">
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
            <Button variant="heroSecondary" size="xl" className="gap-3">
              <Download className="w-5 h-5" />
              Actividades gratis
            </Button>
          </div>
          
          {/* Free resources preview */}
          <div className="bg-night-sky/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-starlight/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-golden" />
              <span className="text-starlight font-display font-semibold">
                Recursos gratuitos incluyen:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-starlight/70">
              <span className="px-3 py-1 bg-starlight/10 rounded-full">Páginas para colorear</span>
              <span className="px-3 py-1 bg-starlight/10 rounded-full">Diario de sueños</span>
              <span className="px-3 py-1 bg-starlight/10 rounded-full">Letra de "Mi querencia"</span>
              <span className="px-3 py-1 bg-starlight/10 rounded-full">Guía para educadores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
