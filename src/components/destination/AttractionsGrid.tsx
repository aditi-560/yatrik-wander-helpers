
import React from 'react';
import { Heart } from 'lucide-react';

interface Attraction {
  name: string;
  description: string;
  image: string;
}

interface AttractionsGridProps {
  attractions: Attraction[];
}

const AttractionsGrid: React.FC<AttractionsGridProps> = ({ attractions }) => {
  return (
    <section className="py-16 bg-white dark:bg-yatrik-darkBg theme-transition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center relative inline-block">
            <span className="relative z-10 text-yatrik-dark dark:text-white theme-transition">Must Visit Places</span>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-yatrik-yellow/30 dark:bg-yatrik-yellow/20 -z-0"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-yatrik-darkCard rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-gray-100 dark:border-gray-800 theme-transition"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 right-3 bg-yatrik-yellow text-yatrik-dark font-medium px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  <Heart className="h-3 w-3 mr-1 text-yatrik-primary" />
                  Must Visit
                </div>
              </div>
              <div className="p-5 border-t-4 border-yatrik-yellow">
                <h3 className="text-xl font-bold mb-2 text-yatrik-dark dark:text-white theme-transition">{attraction.name}</h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm theme-transition">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsGrid;
