import React from 'react';
import dreamJoropo from '@/assets/dream-joropo.jpg';
import dreamOrinoco from '@/assets/dream-orinoco.jpg';
import dreamArepas from '@/assets/dream-arepas.jpg';

const dreams = [
  {
    id: 1,
    image: dreamJoropo,
    title: 'Bailando joropo',
    description: 'Bajo cielos estrellados, Mateo danza al ritmo de su tierra.',
    alt: 'Ilustración de un niño venezolano bailando joropo tradicional bajo un cielo estrellado',
  },
  {
    id: 2,
    image: dreamOrinoco,
    title: 'El río Orinoco',
    description: 'Camina junto a las aguas que guardan los secretos de Venezuela.',
    alt: 'Ilustración del majestuoso río Orinoco al atardecer con vegetación tropical',
  },
  {
    id: 3,
    image: dreamArepas,
    title: 'Arepas del budare',
    description: 'El aroma de casa viaja en cada mordida.',
    alt: 'Ilustración de arepas tradicionales venezolanas cocinándose en un budare',
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dreams.map((dream, index) => (
            <div
              key={dream.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dream.image}
                  alt={dream.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {dream.title}
                </h3>
                <p className="text-muted-foreground font-body">
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
