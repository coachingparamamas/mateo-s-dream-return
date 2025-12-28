import React from 'react';
import { Sparkles } from 'lucide-react';

const AuthorNote: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-golden/10 via-terracotta/5 to-caribbean/10 rounded-3xl">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-golden/50" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="w-6 h-6 text-terracotta/50" />
            </div>
            
            <div className="text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Nota de la autora
              </h2>
              
              <blockquote className="text-lg md:text-xl text-muted-foreground font-body italic leading-relaxed">
                "Escrito por una pediatra y defensora del bienestar emocional infantil, 
                inspirado en historias reales de familias venezolanas que navegan el cambio 
                con amor y resiliencia. Este libro nació de observar cómo los niños procesan 
                la distancia, la nostalgia y la esperanza—y cómo el amor de una abuela puede 
                convertirse en el puente más fuerte hacia casa."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorNote;
