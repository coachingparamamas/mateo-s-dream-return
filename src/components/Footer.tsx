import React from 'react';
import { Heart, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-starlight py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Charitable note */}
          <div className="text-center mb-10 p-6 bg-terracotta/10 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-terracotta" />
              <span className="font-display font-bold text-starlight">
                Comprometidos con la niñez venezolana
              </span>
            </div>
            <p className="text-starlight/70 font-body text-sm">
              El 10% de las ganancias apoya iniciativas para niños venezolanos 
              en contextos migratorios vulnerables.
            </p>
          </div>
          
          {/* Links and social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-starlight/20">
            <div className="font-display text-2xl font-bold">
              El sueño de regresar
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-starlight/70 hover:text-golden transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-starlight/70 hover:text-golden transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-starlight/70 hover:text-golden transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-8 text-center">
            <p className="text-starlight/50 text-sm font-body">
              © {new Date().getFullYear()} El sueño de regresar. Todos los derechos reservados.
            </p>
            <p className="text-starlight/30 text-xs mt-2 font-body">
              Hecho con amor para las familias venezolanas del mundo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
