import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Este libro le dio a mi hija palabras para expresar lo que sentía. Ahora pide que le cantemos "Mi querencia" cada noche.',
    author: 'María Elena',
    role: 'Madre venezolana en España',
  },
  {
    quote: 'Una herramienta invaluable para trabajar con niños migrantes. Las ilustraciones abren conversaciones que antes eran difíciles.',
    author: 'Dra. Carmen Rodríguez',
    role: 'Psicóloga infantil',
  },
  {
    quote: 'Lo usamos en nuestra biblioteca como puente entre culturas. Los niños se reconocen en Mateo, sean o no venezolanos.',
    author: 'Instituto Cervantes',
    role: 'Programa de literatura infantil',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen las familias
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 bg-card rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-terracotta/20" />
              
              <blockquote className="text-foreground font-body leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
