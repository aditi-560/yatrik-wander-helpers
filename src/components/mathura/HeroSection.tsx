
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-yatrik-yellow/30 via-yatrik-orange/20 to-white dark:to-yatrik-darkBg"></div>
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600095326825-220dda1575f4')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/80 dark:bg-yatrik-darkCard/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-yatrik-primary" />
            <p className="text-sm font-medium dark:text-white">Holy Places</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-yatrik-dark dark:text-white">
            Explore the Divine Land of <span className="text-yatrik-yellow text-5xl md:text-7xl">Mathura & Vrindavan</span>
          </h1>
          <p className="text-lg md:text-xl text-yatrik-dark/80 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the sacred birthplace of Lord Krishna and experience the spiritual essence of these holy cities with Yatrik as your guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark px-8 py-6 text-lg">
              Start Exploring
            </Button>
            <Button variant="outline" className="border-yatrik-yellow text-yatrik-dark dark:text-yatrik-yellow hover:bg-yatrik-yellow/10 px-8 py-6 text-lg">
              View on Map
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
