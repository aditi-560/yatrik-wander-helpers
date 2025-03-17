
import React, { useState, useEffect } from 'react';
import HeroText from './hero/HeroText';
import HeroAppPreview from './hero/HeroAppPreview';
import { destinations } from './hero/heroData';

const Hero = () => {
  const [currentDestIndex, setCurrentDestIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestIndex((prev) => (prev + 1) % destinations.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToNextDestination = () => {
    setCurrentDestIndex((prev) => (prev + 1) % destinations.length);
  };

  const goToPrevDestination = () => {
    setCurrentDestIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-r from-yatrik-yellow/50 via-yatrik-primary/25 to-yatrik-purple/15 dark:from-yatrik-purple/40 dark:via-yatrik-darkBg dark:to-yatrik-darkBg/90 theme-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <HeroText 
            destinations={destinations}
            currentDestIndex={currentDestIndex}
            setCurrentDestIndex={setCurrentDestIndex}
          />
          
          {/* App preview */}
          <HeroAppPreview 
            destinations={destinations}
            currentDestIndex={currentDestIndex}
            goToPrevDestination={goToPrevDestination}
            goToNextDestination={goToNextDestination}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
