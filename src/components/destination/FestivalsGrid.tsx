
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface Festival {
  name: string;
  month: string;
  description: string;
}

interface FestivalsGridProps {
  festivals: Festival[];
}

const FestivalsGrid: React.FC<FestivalsGridProps> = ({ festivals }) => {
  if (!festivals || festivals.length === 0) return null;
  
  return (
    <section className="py-16 bg-gradient-to-br from-yatrik-yellow/20 to-yatrik-primary/10 dark:from-yatrik-yellow/10 dark:to-yatrik-primary/5 theme-transition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-4">
            <Calendar className="h-4 w-4 mr-2 text-yatrik-yellow" />
            <span className="text-sm font-medium dark:text-white">Sacred Celebrations</span>
          </div>
          <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">
            Festivals & Celebrations
          </h2>
          <p className="text-slate-700 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the vibrant cultural heritage through these traditional celebrations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((festival, index) => (
            <div 
              key={index} 
              className="bg-white/90 dark:bg-yatrik-darkCard/90 backdrop-blur-sm rounded-xl p-6 shadow-md border-l-4 border-yatrik-yellow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-yatrik-yellow/70 theme-transition"
            >
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-yatrik-yellow/20 dark:bg-yatrik-yellow/10 text-yatrik-dark dark:text-yatrik-yellow mb-3">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{festival.month}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{festival.name}</h3>
              <p className="text-slate-700 dark:text-gray-400 text-sm">{festival.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalsGrid;
