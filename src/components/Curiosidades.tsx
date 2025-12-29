import React, { useState } from 'react';
import { Bird, TreePine, PawPrint, Heart, ChevronDown, ChevronUp } from 'lucide-react';

interface CuriosidadCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CuriosidadCard: React.FC<CuriosidadCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-golden/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-golden/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center gap-4 text-left hover:bg-golden/5 transition-colors"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-golden/20 to-terracotta/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground italic">{subtitle}</p>
          )}
        </div>
        <div className="text-golden">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 space-y-4 text-muted-foreground font-body leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Curiosidades: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-terracotta/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-golden/10 text-golden rounded-full text-sm font-medium mb-4">
              🌿 Notas de la autora
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              El mundo mágico de El sueño de regresar
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Descubre los personajes, criaturas y símbolos que habitan en los sueños de Mateo
            </p>
          </div>

          {/* Curiosidades Cards */}
          <div className="space-y-4">
            {/* El Loro Parlanchín */}
            <CuriosidadCard
              icon={<Bird className="w-6 h-6 text-caribbean" />}
              title="El Loro Parlanchín"
              subtitle="Ara ararauna, la guacamaya de cielo y sol"
              defaultOpen={true}
            >
              <p>
                El Loro Parlanchín está inspirado en la <strong>guacamaya azul y amarilla</strong> (Ara ararauna), 
                una de las aves más icónicas y queridas de Venezuela. Con su pecho dorado como el sol del mediodía 
                y sus alas intensamente azules —como el cielo sobre los llanos al atardecer—, esta guacamaya es 
                un símbolo vivo de libertad, resistencia y belleza silvestre.
              </p>
              <p>
                A diferencia de otras guacamayas del trópico, la ararauna anida en los árboles más altos de los 
                bosques ribereños y los llanos, vuela en parejas inseparables y emite gritos potentes que resuenan 
                a kilómetros de distancia: no son ruido, sino comunicación ancestral, una forma de decir 
                <em>"aquí estoy, esta es mi tierra"</em>.
              </p>
              <p>
                Aunque en la naturaleza no imitan el habla humana con facilidad, en el mundo de Mateo sí lo hace 
                —no por magia arbitraria, sino porque en los sueños de quien extraña profundamente su querencia, 
                los guardianes de la memoria aprenden lo que el corazón necesita escuchar.
              </p>
              <blockquote className="border-l-4 border-golden pl-4 italic text-foreground/80 my-4">
                "Cuando una guacamaya como ella pasa volando en silencio, algo importante va a suceder."
                <footer className="text-sm text-muted-foreground mt-1">— Creencia de los viejos llaneros</footer>
              </blockquote>
              <p className="text-foreground font-medium">
                Hoy, en este cuento, no vuela en silencio. Hoy habla. 
                Porque el regreso a la querencia es, sin duda, algo muy importante.
              </p>
            </CuriosidadCard>

            {/* El Espíritu de la Sabana */}
            <CuriosidadCard
              icon={<TreePine className="w-6 h-6 text-terracotta" />}
              title="El Espíritu de la Sabana"
              subtitle="Raíces míticas y guardianes de la tierra"
            >
              <p>
                El Espíritu de la Sabana no es una invención aislada: nace de la <strong>cosmovisión indígena</strong> de 
                los pueblos llaneros y andinos, especialmente de las tradiciones yekuana, piaroa y warao, para quienes 
                la tierra no es un recurso, sino un ser vivo con espíritu, memoria y voluntad.
              </p>
              <p>Este personaje recoge rasgos de varias figuras mitológicas:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>María Lionza</strong>, la diosa de la montaña, símbolo de equilibrio entre lo femenino, 
                  lo natural y lo espiritual. Una mujer que monta una danta y custodia la armonía entre humanos y naturaleza.
                </li>
                <li>
                  <strong>El Mohan</strong> (también llamado Mohaína), un espíritu de la selva en la mitología andina y llanera, 
                  que se aparece a quienes están en trance o en momentos de profunda conexión con la tierra.
                </li>
                <li>
                  <strong>La Madre Sabana</strong>, una presencia invisible que calma las tormentas, guía a los animales 
                  perdidos y susurra en el viento del bajareque.
                </li>
              </ul>
              <p>
                El Espíritu no tiene rostro fijo —Mateo lo percibe como luz, como movimiento, como una voz sin sonido— 
                porque representa algo más grande que un individuo: es la <strong>memoria geográfica de Venezuela</strong>, 
                el eco de sus ríos, de sus árboles, de sus ancestros.
              </p>
            </CuriosidadCard>

            {/* Animales */}
            <CuriosidadCard
              icon={<PawPrint className="w-6 h-6 text-golden" />}
              title="Animales de las ilustraciones"
              subtitle="Testigos vivos de una biodiversidad amenazada"
            >
              <p>
                En cada escena del viaje de Mateo, aparecen animales autóctonos de Venezuela —no como fondo decorativo, 
                sino como protagonistas silenciosos de la historia:
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="p-4 bg-golden/5 rounded-xl">
                  <h4 className="font-display font-bold text-foreground mb-1">El Turpial</h4>
                  <p className="text-sm italic mb-2">Icterus icterus</p>
                  <p>
                    Ave nacional de Venezuela, cuyo canto es tan característico que los antiguos decían que 
                    <em>"anunciaba el amanecer antes que el sol"</em>.
                  </p>
                </div>

                <div className="p-4 bg-terracotta/5 rounded-xl">
                  <h4 className="font-display font-bold text-foreground mb-1">La Danta de Montaña</h4>
                  <p className="text-sm italic mb-2">Tapirus pinchaque</p>
                  <p>
                    En peligro crítico de extinción, presente en los páramos andinos —símbolo de resistencia y quietud sagrada.
                  </p>
                </div>

                <div className="p-4 bg-caribbean/5 rounded-xl">
                  <h4 className="font-display font-bold text-foreground mb-1">El Cunaguaro</h4>
                  <p className="text-sm italic mb-2">Leopardus pardalis</p>
                  <p>
                    El felino rayado y manchado más extendido de Venezuela. Solitario, nocturno y extremadamente sigiloso. 
                    Sus ojos brillan como brasas en la oscuridad, y en muchas tradiciones indígenas se le considera 
                    un <strong>guardián de los umbrales</strong>: entre lo humano y lo silvestre, entre el día y la noche.
                  </p>
                </div>

                <div className="p-4 bg-golden/5 rounded-xl">
                  <h4 className="font-display font-bold text-foreground mb-1">El Chigüire</h4>
                  <p className="text-sm italic mb-2">Hydrochoerus hydrochaeris</p>
                  <p>
                    El roedor más grande del mundo. En Venezuela lo llamamos así; en otras latitudes, capibara. 
                    Más allá de los memes, el chigüire es una pieza clave en los ecosistemas acuáticos y un 
                    <strong> símbolo vivo de convivencia, adaptación y calma en medio del caos</strong> —como los venezolanos mismos.
                  </p>
                </div>
              </div>

              <p className="mt-4 p-4 bg-foreground/5 rounded-xl text-sm">
                <strong>⚠️ Dato importante:</strong> Venezuela alberga más del 70% de las especies endémicas de los 
                Andes Tropicales, y casi 300 especies están en peligro de extinción. Cuidar la memoria de la tierra 
                —como hace Mateo— implica también cuidar a quienes todavía la habitan.
              </p>
            </CuriosidadCard>

            {/* La Querencia */}
            <CuriosidadCard
              icon={<Heart className="w-6 h-6 text-terracotta" />}
              title="La querencia no es nostalgia"
              subtitle="Es resistencia"
            >
              <p>
                Este cuento nació de una certeza: cuando el exilio duele, los niños no necesitan solo consuelo. 
                <strong> Necesitan mapas del alma.</strong>
              </p>
              <p>
                Mateo no viaja para escapar de su presente, sino para reconocerse. Y en ese reconocimiento 
                —en el canto del turpial, en el vuelo de Blanquita, en la mirada del Espíritu— está la semilla 
                de una identidad que ninguna frontera puede arrancar.
              </p>
              <blockquote className="border-l-4 border-terracotta pl-4 italic text-foreground my-4 text-lg">
                Porque querencia no es solo el lugar de donde vienes.<br />
                Es el lugar al que vuelves… cada vez que eliges recordar.
              </blockquote>
            </CuriosidadCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curiosidades;
