
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Globe, Route } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 hero-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block bg-yatrik-tertiary/30 px-4 py-1.5 rounded-full">
              <p className="text-sm font-medium text-yatrik-primary">Travel without limits</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-yatrik-dark leading-tight">
              Explore the world on your own terms with <span className="text-yatrik-primary">Yatrik</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto md:mx-0">
              Your personal travel companion that helps you navigate unfamiliar destinations with confidence. No guides, no restrictions—just you and your adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Button className="bg-yatrik-primary hover:bg-yatrik-secondary text-white px-8 py-6 text-lg">
                Download Now
              </Button>
              <Button variant="outline" className="border-yatrik-primary text-yatrik-primary hover:bg-yatrik-primary/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
            
            {/* Rating badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                <div className="flex text-amber-400">
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
            <div className="relative z-10 bg-white p-2 rounded-3xl shadow-xl max-w-xs mx-auto animate-float">
              <div className="rounded-2xl overflow-hidden border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                  alt="Yatrik app preview showing a map interface" 
                  className="w-full aspect-[9/16] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-yatrik-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                NEW
              </div>
            </div>
            
            {/* Floating features */}
            <div className="absolute top-20 -left-8 bg-white p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '0.5s' }}>
              <MapPin className="h-5 w-5 text-yatrik-primary" />
              <span className="text-sm font-medium">Real-time location</span>
            </div>
            <div className="absolute bottom-24 -right-8 bg-white p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '1s' }}>
              <Route className="h-5 w-5 text-yatrik-primary" />
              <span className="text-sm font-medium">Personalized routes</span>
            </div>
            <div className="absolute bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg hidden md:flex items-center space-x-2 animate-float" style={{ animationDelay: '1.5s' }}>
              <Globe className="h-5 w-5 text-yatrik-primary" />
              <span className="text-sm font-medium">Offline maps</span>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yatrik-tertiary/40 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
