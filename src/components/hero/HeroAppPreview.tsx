
import React from 'react';
import { ChevronLeft, ChevronRight, Globe, MapPin, Route } from 'lucide-react';

type Destination = {
  name: string;
  nickname: string;
  image: string;
  color: string;
  id: string;
};

type HeroAppPreviewProps = {
  destinations: Destination[];
  currentDestIndex: number;
  goToPrevDestination: () => void;
  goToNextDestination: () => void;
};

const HeroAppPreview = ({ 
  destinations, 
  currentDestIndex, 
  goToPrevDestination, 
  goToNextDestination 
}: HeroAppPreviewProps) => {
  const currentDestination = destinations[currentDestIndex];

  return (
    <div className="flex-1 relative">
      <div className="relative z-10 bg-white dark:bg-yatrik-darkCard p-2 rounded-3xl shadow-xl max-w-xs mx-auto transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
        <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 relative aspect-[9/16]">
          {destinations.map((dest, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentDestIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={dest.image} 
                alt={`Yatrik app preview showing ${dest.name}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Navigation controls */}
          <NavigationControls 
            goToPrevDestination={goToPrevDestination}
            goToNextDestination={goToNextDestination}
          />
          
          {/* Current destination indicator */}
          <DestinationIndicator 
            destinations={destinations}
            currentDestIndex={currentDestIndex}
          />
          
          {/* Destination info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="text-white">
              <h3 className="font-bold">{currentDestination.name}</h3>
              <p className="text-xs opacity-90">{currentDestination.nickname}</p>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yatrik-yellow to-yatrik-orange text-yatrik-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
          NEW
        </div>
      </div>
      
      {/* Floating destinations */}
      <FloatingDestinations destinations={destinations} />
      
      {/* Background decoration */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yatrik-yellow/30 via-yatrik-primary/20 to-yatrik-blue/30 rounded-full blur-3xl"></div>
    </div>
  );
};

const NavigationControls = ({ goToPrevDestination, goToNextDestination }) => (
  <>
    <div className="absolute inset-y-0 left-2 flex items-center">
      <button 
        onClick={goToPrevDestination} 
        className="bg-white/70 hover:bg-white dark:bg-yatrik-darkBg/70 dark:hover:bg-yatrik-darkBg backdrop-blur-sm p-1.5 rounded-full shadow-md transition-all duration-300 hover:scale-110"
        aria-label="Previous destination"
      >
        <ChevronLeft className="h-5 w-5 text-yatrik-dark dark:text-white" />
      </button>
    </div>
    <div className="absolute inset-y-0 right-2 flex items-center">
      <button 
        onClick={goToNextDestination} 
        className="bg-white/70 hover:bg-white dark:bg-yatrik-darkBg/70 dark:hover:bg-yatrik-darkBg backdrop-blur-sm p-1.5 rounded-full shadow-md transition-all duration-300 hover:scale-110"
        aria-label="Next destination"
      >
        <ChevronRight className="h-5 w-5 text-yatrik-dark dark:text-white" />
      </button>
    </div>
  </>
);

const DestinationIndicator = ({ destinations, currentDestIndex }) => (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
    {destinations.map((_, index) => (
      <div 
        key={index} 
        className={`h-1.5 rounded-full transition-all duration-300 ${
          index === currentDestIndex 
            ? 'w-6 bg-yatrik-yellow' 
            : 'w-1.5 bg-white/70'
        }`}
      />
    ))}
  </div>
);

const FloatingDestinations = ({ destinations }) => (
  <>
    <div className="absolute top-20 -left-8 bg-gradient-to-r from-yatrik-green to-yatrik-blue text-white p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '0.5s' }}>
      <MapPin className="h-5 w-5 text-white" />
      <span className="text-sm font-medium">{destinations[0].name}</span>
    </div>
    <div className="absolute bottom-24 -right-8 bg-gradient-to-r from-yatrik-primary to-yatrik-purple text-white p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '1s' }}>
      <Route className="h-5 w-5 text-white" />
      <span className="text-sm font-medium">{destinations[1].name}</span>
    </div>
    <div className="absolute bottom-4 -left-4 bg-gradient-to-r from-yatrik-yellow to-yatrik-orange text-yatrik-dark p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '1.5s' }}>
      <Globe className="h-5 w-5 text-yatrik-dark" />
      <span className="text-sm font-medium">{destinations[4].name}</span>
    </div>
  </>
);

export default HeroAppPreview;
