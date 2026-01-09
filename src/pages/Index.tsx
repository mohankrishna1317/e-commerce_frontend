import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import HistorySection from '@/components/sections/HistorySection';
import NatureSection from '@/components/sections/NatureSection';
import CultureSection from '@/components/sections/CultureSection';
import GallerySection from '@/components/sections/GallerySection';
import LocationSection from '@/components/sections/LocationSection';
import FooterSection from '@/components/sections/FooterSection';

import { useState } from 'react';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <NatureSection />
      <CultureSection />
      <GallerySection />
      <LocationSection />
      <FooterSection />
    </main>
  );
};

export default Index;
