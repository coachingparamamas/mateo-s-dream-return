import React from 'react';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/Star';
import heroIllustration from '@/assets/hero-illustration.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      <StarField count={80} />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <p className="text-golden font-display font-semibold text-sm md:text-base uppercase tracking-widest">
              Un cuento ilustrado para niños
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-starlight leading-tight">
              El sueño de{' '}
              <span className="text-gradient-warm">regresar</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-starlight/80 font-body italic max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              "Cada noche, una canción lo lleva a casa"
            </p>
            
            <p className="text-starlight/70 text-base md:text-lg max-w-lg mx-auto lg:mx-0 font-body leading-relaxed animate-fade-in-up animation-delay-300">
              Una historia tierna sobre identidad, memoria y el amor que trasciende distancias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up animation-delay-400">
              <Button variant="hero" size="xl">
                Pre-ordenar el libro
              </Button>
              <Button variant="heroSecondary" size="xl">
                Descargar actividades gratis
              </Button>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="flex-1 relative animate-fade-in-up animation-delay-300">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-golden/20 rounded-3xl blur-2xl" />
              <img
                src={heroIllustration}
                alt="Ilustración de Mateo y su Abuela Margarita bajo un cielo estrellado, abrazados con ternura mientras las estrellas brillan sobre ellos"
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
