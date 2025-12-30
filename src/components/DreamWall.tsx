import React, { useState, useEffect } from 'react';
import { Music, MapPin, Utensils, Wind, Sparkles, Plus, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

type WallCategory = 'canciones' | 'lugares' | 'sabores' | 'olores' | 'sueños';

interface WallEntry {
  id: string;
  category: WallCategory;
  content: string;
  author_name: string | null;
  created_at: string;
}

const categories = [
  {
    id: 'canciones' as WallCategory,
    title: 'Canciones',
    subtitle: 'Playlist de la querencia',
    icon: Music,
    bgColor: 'from-golden/30 to-terracotta/20',
    borderColor: 'border-golden',
    prompt: '¿Qué canción te recuerda a tu tierra?'
  },
  {
    id: 'lugares' as WallCategory,
    title: 'Lugares',
    subtitle: 'Guía de viaje por Venezuela',
    icon: MapPin,
    bgColor: 'from-caribbean/30 to-golden/20',
    borderColor: 'border-caribbean',
    prompt: '¿Qué lugar de Venezuela te gustaría visitar?'
  },
  {
    id: 'sabores' as WallCategory,
    title: 'Sabores',
    subtitle: 'Recuerdos del paladar',
    icon: Utensils,
    bgColor: 'from-terracotta/30 to-caribbean/20',
    borderColor: 'border-terracotta',
    prompt: '¿Qué sabor te transporta a casa?'
  },
  {
    id: 'olores' as WallCategory,
    title: 'Olores',
    subtitle: 'Aromas de la memoria',
    icon: Wind,
    bgColor: 'from-golden/25 to-terracotta/25',
    borderColor: 'border-golden',
    prompt: '¿Qué olor te hace sentir en tu querencia?'
  },
  {
    id: 'sueños' as WallCategory,
    title: 'Sueños',
    subtitle: 'Viajes nocturnos',
    icon: Sparkles,
    bgColor: 'from-caribbean/25 to-golden/25',
    borderColor: 'border-caribbean',
    prompt: '¿Con qué sueñas de tu tierra?'
  },
];

const DreamWall: React.FC = () => {
  const [entries, setEntries] = useState<WallEntry[]>([]);
  const [activeCategory, setActiveCategory] = useState<WallCategory | null>(null);
  const [newContent, setNewContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch entries on mount
  useEffect(() => {
    fetchEntries();
    
    // Subscribe to realtime updates
    const channel = supabase
      .channel('dream-wall-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'dream_wall_entries'
        },
        (payload) => {
          const newEntry = payload.new as WallEntry;
          setEntries(prev => [newEntry, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from('dream_wall_entries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching entries:', error);
      return;
    }

    setEntries(data || []);
  };

  const handleSubmit = async (category: WallCategory) => {
    if (!newContent.trim()) {
      toast({
        title: "Campo vacío",
        description: "Escribe algo para compartir",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from('dream_wall_entries')
      .insert({
        category,
        content: newContent.trim(),
        author_name: authorName.trim() || null
      });

    if (error) {
      console.error('Error submitting entry:', error);
      toast({
        title: "Error",
        description: "No se pudo guardar tu entrada",
        variant: "destructive"
      });
    } else {
      toast({
        title: "¡Compartido!",
        description: "Tu recuerdo se ha añadido al muro"
      });
      setNewContent('');
      setAuthorName('');
      setActiveCategory(null);
    }

    setIsSubmitting(false);
  };

  const getCategoryEntries = (categoryId: WallCategory) => {
    return entries.filter(entry => entry.category === categoryId);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ivory to-ivory/90 relative overflow-hidden">
      {/* Decorative elements */}
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
            <span className="text-sm font-medium text-terracotta">Construyamos juntos</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-night-sky mb-4">
            Muro de la Querencia
          </h2>
          <p className="text-lg text-night-sky/70 max-w-2xl mx-auto font-body">
            Un espacio para compartir los recuerdos, sueños y sentimientos que nos conectan con nuestra tierra
          </p>
        </div>

        {/* Category walls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => {
            const categoryEntries = getCategoryEntries(category.id);
            const isActive = activeCategory === category.id;

            return (
              <div
                key={category.id}
                className={`
                  relative bg-gradient-to-br ${category.bgColor}
                  border-4 ${category.borderColor} rounded-xl p-5
                  shadow-[4px_4px_0px_0px_rgba(44,62,80,0.2)]
                  transition-all duration-300
                  ${category.id === 'sueños' ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-night-sky/20">
                  <div className="w-10 h-10 bg-ivory/80 rounded-full flex items-center justify-center shadow-sm">
                    <category.icon className="w-5 h-5 text-night-sky" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-night-sky text-lg">{category.title}</h3>
                    <p className="text-xs text-night-sky/60 font-body">{category.subtitle}</p>
                  </div>
                  <span className="ml-auto bg-night-sky/10 px-2 py-1 rounded-full text-xs font-medium text-night-sky">
                    {categoryEntries.length}
                  </span>
                </div>

                {/* Entries list */}
                <div className="space-y-3 max-h-48 overflow-y-auto mb-4 pr-1">
                  {categoryEntries.length === 0 ? (
                    <p className="text-sm text-night-sky/50 italic text-center py-4 font-body">
                      Sé el primero en compartir...
                    </p>
                  ) : (
                    categoryEntries.slice(0, 5).map((entry) => (
                      <div
                        key={entry.id}
                        className="bg-ivory/60 rounded-lg p-3 border border-night-sky/10"
                      >
                        <p className="text-sm text-night-sky font-body leading-relaxed">
                          "{entry.content}"
                        </p>
                        {entry.author_name && (
                          <p className="text-xs text-night-sky/50 mt-1 font-body">
                            — {entry.author_name}
                          </p>
                        )}
                      </div>
                    ))
                  )}
                  {categoryEntries.length > 5 && (
                    <p className="text-xs text-night-sky/50 text-center font-body">
                      +{categoryEntries.length - 5} más
                    </p>
                  )}
                </div>

                {/* Add new entry */}
                {isActive ? (
                  <div className="space-y-3 animate-fade-in-up">
                    <Textarea
                      placeholder={category.prompt}
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      className="min-h-[80px] bg-ivory/80 border-night-sky/20 text-night-sky placeholder:text-night-sky/40 font-body resize-none"
                      maxLength={200}
                    />
                    <Input
                      placeholder="Tu nombre (opcional)"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="bg-ivory/80 border-night-sky/20 text-night-sky placeholder:text-night-sky/40 font-body"
                      maxLength={50}
                    />
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setActiveCategory(null);
                          setNewContent('');
                          setAuthorName('');
                        }}
                        className="flex-1 border-night-sky/30 text-night-sky hover:bg-night-sky/10"
                      >
                        Cancelar
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleSubmit(category.id)}
                        disabled={isSubmitting}
                        className="flex-1 bg-night-sky text-ivory hover:bg-night-sky/90"
                      >
                        <Send className="w-4 h-4 mr-1" />
                        Compartir
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className="w-full border-dashed border-night-sky/30 text-night-sky/70 hover:bg-ivory/50 hover:text-night-sky"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Añadir al muro
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center mt-10">
          <p className="text-sm text-night-sky/50 font-body">
            ✨ Cada recuerdo compartido ayuda a construir un mapa de nuestra querencia colectiva
          </p>
        </div>
      </div>
    </section>
  );
};

export default DreamWall;
