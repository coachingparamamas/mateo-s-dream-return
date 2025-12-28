import React from 'react';
import mateoDreaming from '@/assets/mateo-dreaming.jpg';
import llanosVenezuela from '@/assets/llanos-venezuela.jpg';
import orinocoTepuyes from '@/assets/orinoco-tepuyes.jpg';
import caballosTurpial from '@/assets/caballos-turpial.jpg';

const dreams = [
  {
    id: 1,
    image: mateoDreaming,
    title: 'El viaje comienza',
    description: 'Mateo cierra los ojos y la melodía lo envuelve, llevándolo a un lugar mágico.',
    alt: 'Ilustración de Mateo durmiendo mientras comienza a soñar con Venezuela, rodeado de estrellas y hojas tropicales',
  },
  {
    id: 2,
    image: llanosVenezuela,
    title: 'Los Llanos venezolanos',
    description: 'Descubre los vastos llanos dorados con chigüires y corocoras rosadas.',
    alt: 'Ilustración de los llanos venezolanos con chigüires, un lago azul y corocoras rosadas volando bajo el sol',
  },
  {
    id: 3,
    image: orinocoTepuyes,
    title: 'El Orinoco y los Tepuyes',
    description: 'Mateo vuela sobre el majestuoso río Orinoco junto al Espíritu de la Sabana.',
    alt: 'Ilustración de Mateo volando con el Espíritu de la Sabana sobre el río Orinoco, con tepuyes y cascadas de fondo',
  },
  {
    id: 4,
    image: caballosTurpial,
    title: 'Caballos y el Turpial',
    description: 'Ve caballos corriendo libres y escucha el canto del turpial, el ave nacional.',
    alt: 'Ilustración de Mateo volando sobre caballos corriendo en los llanos mientras un turpial canta',
  },
];

const DreamCarousel: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Los sueños de Mateo
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Cada noche, mientras su abuela le canta "Mi querencia", Mateo viaja en sueños a Venezuela...
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dreams.map((dream, index) => (
            <div
              key={dream.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dream.image}
                  alt={dream.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {dream.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {dream.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamCarousel;
