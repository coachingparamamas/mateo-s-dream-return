import React from 'react';
import { Check } from 'lucide-react';

const reasons = [
  {
    title: 'Visibiliza a los niños migrantes',
    description: 'Ayuda a los niños a sentirse vistos y orgullosos de sus raíces, sin importar dónde vivan.',
  },
  {
    title: 'Fortalece lazos familiares',
    description: 'Promueve la conexión intergeneracional a través de la narración, las canciones y los recuerdos compartidos.',
  },
  {
    title: 'Preserva tradiciones venezolanas',
    description: 'Mantiene viva la cultura venezolana en la diáspora, transmitiendo costumbres a las nuevas generaciones.',
  },
  {
    title: 'Herramienta educativa',
    description: 'Ideal para educadores, bibliotecarios y terapeutas que trabajan con niños migrantes y sus familias.',
  },
];

const WhyItMatters: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-terracotta/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué importa esta historia?
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Un libro que hace la diferencia en la vida de familias migrantes.
            </p>
          </div>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
