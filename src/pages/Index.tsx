import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import DreamCarousel from '@/components/DreamCarousel';
import BookDescription from '@/components/BookDescription';
import WhyItMatters from '@/components/WhyItMatters';
import Curiosidades from '@/components/Curiosidades';
import DreamJournal from '@/components/DreamJournal';
import AuthorNote from '@/components/AuthorNote';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>El sueño de regresar | Cuento infantil venezolano sobre migración e identidad</title>
        <meta 
          name="description" 
          content="Un cuento ilustrado sobre Mateo, un niño venezolano que sueña con su tierra cada noche gracias al amor de su abuela. Historia de identidad cultural, migración y lazos intergeneracionales." 
        />
        <meta name="keywords" content="cuento infantil venezolano, migración y niños, identidad cultural, abuela y nieto, libro bilingüe migración, Mi querencia para niños, libro para niños migrantes, tradiciones venezolanas" />
        <meta property="og:title" content="El sueño de regresar | Cuento infantil venezolano" />
        <meta property="og:description" content="Cada noche, una canción lo lleva a casa. Un libro ilustrado sobre identidad, memoria y el amor que trasciende distancias." />
        <meta property="og:type" content="book" />
        <link rel="canonical" href="https://elsuenodegresar.com" />
      </Helmet>
      
      <main>
        <HeroSection />
        <DreamCarousel />
        <BookDescription />
        <WhyItMatters />
        <Curiosidades />
        <DreamJournal />
        <AuthorNote />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
