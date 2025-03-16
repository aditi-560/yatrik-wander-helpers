
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Globe, Route, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinationsList } from '@/data/destinations';

const destinations = [
  { 
    name: "Jaipur", 
    nickname: "Pink City",
    image: "https://images.pexels.com/photos/12931430/pexels-photo-12931430.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    color: "bg-yatrik-yellow/20",
    id: "jaipur"
  },
  { 
    name: "Delhi", 
    nickname: "Heart of India",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80",
    color: "bg-yatrik-blue/20",
    id: "delhi"
  },
  { 
    name: "Mathura", 
    nickname: "Birthplace of Krishna",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Vishram_Ghat.jpg",
    color: "bg-yatrik-green/20",
    id: "mathura-vrindavan"
  },
  { 
    name: "Vrindavan", 
    nickname: "Land of Krishna",
    image: "https://images.pexels.com/photos/11969919/pexels-photo-11969919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color: "bg-yatrik-primary/20",
    id: "mathura-vrindavan"
  },
  { 
    name: "Agra", 
    nickname: "City of Taj Mahal",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80",
    color: "bg-yatrik-secondary/20",
    id: "agra"
  }
];

const Hero = () => {
  const [currentDestIndex, setCurrentDestIndex] = useState(0);
  const currentDestination = destinations[currentDestIndex];

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
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-r from-yatrik-yellow/50 via-yatrik-primary/30 to-yatrik-blue/20">

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className={`inline-block ${currentDestination.color} px-4 py-1.5 rounded-full transition-colors duration-500`}>
              <p className="text-sm font-medium text-yatrik-dark">Travel without limits</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-yatrik-dark leading-tight">
              Explore India on your own terms with <span className="text-yatrik-yellow">Yatrik</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto md:mx-0">
              Your personal travel companion that helps you navigate unfamiliar destinations in India with confidence. No guides, no restrictions—just you and your adventure.
            </p>
            
            {/* Popular Destinations */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {destinations.map((destination, index) => (
                <Link 
                  key={index} 
                  to={`/destinations/${destination.id}`}
                  className={`${index === currentDestIndex ? 'bg-yatrik-yellow text-yatrik-dark' : 'bg-white/80'} 
                    backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium border border-yatrik-yellow/30 
                    flex items-center gap-1 cursor-pointer transition-all duration-300`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentDestIndex(index);
                  }}
                >
                  <MapPin className={`h-3 w-3 ${index === currentDestIndex ? 'text-yatrik-dark' : 'text-yatrik-yellow'}`} />
                  <span className={index === currentDestIndex ? 'text-yatrik-dark' : 'text-yatrik-dark/80'}>
                    {destination.name}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark px-8 py-6 text-lg">
                Download Now
              </Button>
              <Link to={`/destinations/${destinations[currentDestIndex].id}`}>
                <Button 
                  className="bg-yatrik-purple hover:bg-yatrik-purple/90 text-white border-0 px-8 py-6 text-lg w-full shadow-lg transition-all duration-300 hover:shadow-yatrik-purple/40 hover:shadow-md dark:text-white dark:border-0 dark:hover:bg-yatrik-purple/80"
                >
                  Explore {destinations[currentDestIndex].name}
                </Button>
              </Link>
            </div>
            
            {/* Rating badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                <div className="flex text-yatrik-yellow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-slate-700">4.9/5 • 10k+ ratings</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-slate-700">100k+ active explorers</span>
              </div>
            </div>
          </div>
          
          {/* App preview */}
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white p-2 rounded-3xl shadow-xl max-w-xs mx-auto">
              <div className="rounded-2xl overflow-hidden border border-slate-100 relative aspect-[9/16]">
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
                <div className="absolute inset-y-0 left-2 flex items-center">
                  <button 
                    onClick={goToPrevDestination} 
                    className="bg-white/70 hover:bg-white backdrop-blur-sm p-1.5 rounded-full shadow-md"
                  >
                    <ChevronLeft className="h-5 w-5 text-yatrik-dark" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <button 
                    onClick={goToNextDestination} 
                    className="bg-white/70 hover:bg-white backdrop-blur-sm p-1.5 rounded-full shadow-md"
                  >
                    <ChevronRight className="h-5 w-5 text-yatrik-dark" />
                  </button>
                </div>
                
                {/* Current destination indicator */}
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
                
                {/* Destination info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white">
                    <h3 className="font-bold">{currentDestination.name}</h3>
                    <p className="text-xs opacity-90">{currentDestination.nickname}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yatrik-yellow text-yatrik-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                NEW
              </div>
            </div>
            
            {/* Floating destinations */}
            <div className="absolute top-20 -left-8 bg-yatrik-green text-white p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '0.5s' }}>
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-sm font-medium">{destinations[0].name}</span>
            </div>
            <div className="absolute bottom-24 -right-8 bg-yatrik-primary text-white p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '1s' }}>
              <Route className="h-5 w-5 text-white" />
              <span className="text-sm font-medium">{destinations[1].name}</span>
            </div>
            <div className="absolute bottom-4 -left-4 bg-yatrik-yellow text-yatrik-dark p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '1.5s' }}>
              <Globe className="h-5 w-5 text-yatrik-dark" />
              <span className="text-sm font-medium">{destinations[4].name}</span>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yatrik-yellow/30 via-yatrik-primary/20 to-yatrik-blue/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
