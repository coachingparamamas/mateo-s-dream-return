import React from 'react';
import { Sparkles, Feather, Music, Wind, Bird } from 'lucide-react';

const dreamPrompts = [
  {
    question: "¿Con qué animal de tu tierra soñarías?",
    subtext: "¿Qué te diría?",
    icon: Bird,
    rotation: "-2deg",
    bgColor: "from-golden/20 to-terracotta/10",
  },
  {
    question: "Si pudieras volar como la guacamaya azul y amarilla…",
    subtext: "¿a qué lugar irías primero?",
    icon: Feather,
    rotation: "1deg",
    bgColor: "from-caribbean/20 to-golden/10",
  },
  {
    question: "¿Qué canción te cantaría tu abuela en el sueño?",
    subtext: null,
    icon: Music,
    rotation: "-1deg",
    bgColor: "from-terracotta/20 to-caribbean/10",
  },
  {
    question: "¿Qué olor te haría saber que estás en tu querencia?",
    subtext: null,
    icon: Wind,
    rotation: "2deg",
    bgColor: "from-golden/15 to-terracotta/15",
  },
];

const DreamJournal: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ivory to-ivory/90 relative overflow-hidden">
      {/* Decorative scattered elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-3 h-3 bg-golden/30 rounded-full" />
        <div className="absolute top-20 right-[15%] w-2 h-2 bg-caribbean/30 rounded-full" />
        <div className="absolute bottom-20 left-[20%] w-4 h-4 bg-terracotta/20 rounded-full" />
        <div className="absolute bottom-10 right-[25%] w-2 h-2 bg-golden/40 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-golden/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-golden" />
            <span className="text-sm font-medium text-terracotta">Tu historia también importa</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-night-sky mb-4">
            Diario de Sueños
          </h2>
          <p className="text-lg text-night-sky/70 max-w-2xl mx-auto font-body">
            Un muro de viñetas para crear tus propias historias. ¿Qué sueños te llevan a tu querencia?
          </p>
        </div>

        {/* Comic panel wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {dreamPrompts.map((prompt, index) => (
            <div
              key={index}
              className="group relative"
              style={{ transform: `rotate(${prompt.rotation})` }}
            >
              {/* Comic panel frame */}
              <div className={`
                relative bg-gradient-to-br ${prompt.bgColor} 
                border-4 border-night-sky/80 rounded-lg p-6 md:p-8
                shadow-[6px_6px_0px_0px_rgba(44,62,80,0.3)]
                hover:shadow-[8px_8px_0px_0px_rgba(44,62,80,0.4)]
                transition-all duration-300 hover:scale-[1.02]
                min-h-[180px] flex flex-col justify-center
              `}>
                {/* Corner decorations - comic style */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-night-sky/80 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-night-sky/80 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-night-sky/80 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-night-sky/80 rounded-br-lg" />

                {/* Icon bubble */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-ivory border-3 border-night-sky/80 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <prompt.icon className="w-5 h-5 text-night-sky" />
                </div>

                {/* Question text */}
                <div className="text-center">
                  <p className="font-display text-lg md:text-xl font-bold text-night-sky leading-relaxed mb-2">
                    {prompt.question}
                  </p>
                  {prompt.subtext && (
                    <p className="font-body text-base md:text-lg text-night-sky/80 italic">
                      {prompt.subtext}
                    </p>
                  )}
                </div>

                {/* Writing lines hint */}
                <div className="mt-4 space-y-2 opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="h-px bg-night-sky/30 w-full" />
                  <div className="h-px bg-night-sky/30 w-3/4 mx-auto" />
                  <div className="h-px bg-night-sky/30 w-1/2 mx-auto" />
                </div>
              </div>

              {/* Panel number */}
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-night-sky text-ivory rounded-full flex items-center justify-center font-display font-bold text-sm shadow-md">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-block bg-night-sky/5 border-2 border-dashed border-night-sky/30 rounded-xl px-8 py-6 max-w-lg">
            <p className="font-body text-night-sky/70 text-sm md:text-base">
              ✨ Imprime estas viñetas y crea tu propio diario de sueños. 
              <span className="block mt-1 font-medium text-terracotta">
                ¡Cada historia merece ser contada!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamJournal;
