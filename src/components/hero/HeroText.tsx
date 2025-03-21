
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Destination = {
  name: string;
  nickname: string;
  image: string;
  color: string;
  id: string;
};

type HeroTextProps = {
  destinations: Destination[];
  currentDestIndex: number;
  setCurrentDestIndex: (index: number) => void;
};

const HeroText = ({ destinations, currentDestIndex, setCurrentDestIndex }: HeroTextProps) => {
  const currentDestination = destinations[currentDestIndex];
  
  return (
    <div className="flex-1 space-y-6 text-center md:text-left">
      <div className={`inline-block ${currentDestination.color} px-4 py-1.5 rounded-md transition-colors duration-500`}>
        <p className="text-sm font-medium text-yatrik-dark dark:text-white">Travel without limits</p>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-yatrik-dark dark:text-white leading-tight">
        Explore India on your own terms with <span className="bg-gradient-to-r from-yatrik-yellow via-yatrik-orange to-yatrik-primary text-transparent bg-clip-text text-7xl md:text-8xl lg:text-9xl block mt-2">Yatrik</span>
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0">
        Your personal travel companion that helps you navigate unfamiliar destinations in India with confidence. No guides, no restrictions—just you and your adventure.
      </p>
      
      {/* Popular Destinations */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {destinations.map((destination, index) => (
          <Link 
            key={index} 
            to={`/destinations/${destination.id}`}
            className={`${index === currentDestIndex ? 'bg-yatrik-yellow text-yatrik-dark' : 'bg-white/80 dark:bg-yatrik-darkCard/80'} 
              backdrop-blur-sm rounded-md px-3 py-1 text-sm font-medium border border-yatrik-yellow/30 
              flex items-center gap-1 cursor-pointer transition-all duration-300 hover:shadow-md`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentDestIndex(index);
            }}
          >
            <MapPin className={`h-3 w-3 ${index === currentDestIndex ? 'text-yatrik-dark' : 'text-yatrik-yellow'}`} />
            <span className={index === currentDestIndex ? 'text-yatrik-dark' : 'text-yatrik-dark/80 dark:text-white'}>
              {destination.name}
            </span>
          </Link>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
        <a href="https://apps.apple.com/in/app/yatrik/id6636484336" target="_blank" rel="noopener noreferrer">
        <Button className="bg-gradient-to-r from-yatrik-purple to-yatrik-blue text-white px-8 py-6 text-lg shadow-lg hover:shadow-yatrik-purple/50 hover:shadow-md transition-all duration-300">
          Download Now
        </Button>
        </a>
        <Link to={`/destinations/${destinations[currentDestIndex].id}`}>
        <Button 
            className="bg-gradient-to-r from-yatrik-primary to-yatrik-purple text-white font-bold border-0 px-8 py-6 text-lg w-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-400/40 hover:shadow-md"
          >
            Explore {destinations[currentDestIndex].name}
          </Button>
        </Link>
      </div>
      
      {/* Rating badges */}
      <RatingBadges />
    </div>
  );
};

const RatingBadges = () => (
  <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
    <div className="flex items-center bg-white/80 dark:bg-yatrik-darkCard/80 backdrop-blur-sm rounded-md px-4 py-2 shadow-sm">
      <div className="flex text-yatrik-yellow">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-200">4.9/5 • 10k+ ratings</span>
    </div>
    <div className="bg-white/80 dark:bg-yatrik-darkCard/80 backdrop-blur-sm rounded-md px-4 py-2 shadow-sm">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">100k+ active explorers</span>
    </div>
  </div>
);

export default HeroText;
