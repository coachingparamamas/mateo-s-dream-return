import React from 'react';
import { Heart, Music, Users, Sparkles } from 'lucide-react';
import bookCover from '@/assets/book-cover.jpg';

const BookDescription: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Book Cover */}
            <div className="relative animate-fade-in-up">
              <div className="absolute -inset-4 bg-terracotta/10 rounded-3xl blur-xl" />
              <img
                src={bookCover}
                alt="Portada del libro El sueño de regresar mostrando a Mateo rodeado de hojas verdes y mariposas"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Description */}
            <div className="text-center lg:text-left animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                <Sparkles className="w-5 h-5 text-golden" />
                <span className="text-sm font-display font-semibold text-golden uppercase tracking-wider">
                  Sobre el libro
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Una historia de amor, raíces y sueños
              </h2>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                <span className="text-foreground font-semibold">"El sueño de regresar"</span> es la historia de Mateo, 
                un niño venezolano que emigra a un nuevo país. Aunque está lejos de casa, 
                Mateo nunca deja atrás a Venezuela, gracias a su abuela Margarita.
              </p>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                Cada noche, ella le canta <span className="text-terracotta italic">"Mi querencia"</span>, 
                y mientras se duerme, Mateo emprende un viaje mágico guiado por el Espíritu de la Sabana 
                y un loro parlanchín. Juntos le muestran los paisajes, las historias y las maravillas 
                de Venezuela, la tierra que habita en su memoria.
              </p>
              
              <div className="mt-6 p-4 bg-terracotta/5 rounded-xl border border-terracotta/10">
                <p className="text-sm text-muted-foreground font-body italic">
                  Escrito por <span className="text-foreground font-semibold">Yoly Soledad Pérez Albuysech</span><br/>
                  Ilustrado por <span className="text-foreground font-semibold">Nerea Jiménez Mesa</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-terracotta/5 hover:bg-terracotta/10 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                Identidad Cultural
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Celebra las raíces y tradiciones venezolanas con amor y respeto.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-caribbean/5 hover:bg-caribbean/10 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-caribbean/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-caribbean" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                Lazos Intergeneracionales
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                El poder del amor entre abuelos y nietos trasciende cualquier distancia.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-golden/5 hover:bg-golden/10 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-golden/10 flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-golden" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                Memoria y Esperanza
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                El regreso no siempre es físico, pero siempre es emocional y espiritual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDescription;
