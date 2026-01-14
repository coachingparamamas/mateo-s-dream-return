import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

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
              <BookOpen className="w-6 h-6 text-terracotta/50" />
            </div>
            
            <div className="text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Sobre las creadoras
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-card/50 rounded-xl">
                  <h3 className="font-display font-bold text-foreground mb-2">
                    Yoly Soledad Pérez Albuysech
                  </h3>
                  <p className="text-muted-foreground font-body italic">
                    Autora del texto
                  </p>
                  <p className="text-sm text-muted-foreground font-body mt-2">
                    Estudiante de Psicología y defensora del bienestar emocional infantil. 
                    Este libro nació de su experiencia acompañando a familias 
                    venezolanas que navegan el cambio con amor y resiliencia.
                  </p>
                </div>
                
                <div className="p-4 bg-card/50 rounded-xl">
                  <h3 className="font-display font-bold text-foreground mb-2">
                    Nerea Jiménez Mesa
                  </h3>
                  <p className="text-muted-foreground font-body italic">
                    Ilustradora
                  </p>
                  <p className="text-sm text-muted-foreground font-body mt-2">
                    Sus ilustraciones capturan la magia y la calidez de los sueños de Mateo, 
                    trayendo a vida los paisajes de Venezuela con ternura y color.
                  </p>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-muted-foreground font-body italic">
                "A mis hijos Andrea, Nicole y Marcos y a todos los hijos de quienes 
                estamos fuera de nuestra querencia"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorNote;
