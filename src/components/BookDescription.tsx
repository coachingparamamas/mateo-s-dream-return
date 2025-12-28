import React from 'react';
import { Heart, Music, Users } from 'lucide-react';

const BookDescription: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Sobre el libro
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              <span className="text-foreground font-semibold">"El sueño de regresar"</span> es la historia de Mateo, 
              un niño venezolano que emigra a un nuevo país, como miles de niños lo han hecho en los últimos años. 
              Aunque está lejos de casa, Mateo nunca deja atrás a Venezuela, gracias a su abuela Margarita. 
              Cada noche, ella le canta <span className="text-terracotta italic">"Mi querencia"</span>, 
              y mientras se duerme, Mateo sueña con su tierra: baila joropo bajo cielos estrellados, 
              saborea arepas recién hechas, camina junto al Orinoco, y conoce Las Posadas, 
              La Cruz de Mayo y otras tradiciones queridas.
            </p>
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
