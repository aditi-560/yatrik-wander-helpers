
import React from 'react';
import { Utensils } from 'lucide-react';

interface CuisineItem {
  name: string;
  description: string;
}

interface LocalCuisineProps {
  destinationName: string;
  cuisineItems: CuisineItem[];
}

const LocalCuisine: React.FC<LocalCuisineProps> = ({ destinationName, cuisineItems }) => {
  if (!cuisineItems || cuisineItems.length === 0) return null;
  
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-yatrik-darkBg dark:to-gray-900 theme-transition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-4">
            <Utensils className="h-4 w-4 mr-2 text-yatrik-primary" />
            <span className="text-sm font-medium text-yatrik-dark dark:text-white theme-transition">Local Delicacies</span>
          </div>
          <h2 className="text-3xl font-bold text-center mb-2 text-yatrik-dark dark:text-white theme-transition">
            Taste of {destinationName}
          </h2>
          <p className="text-slate-700 dark:text-gray-300 max-w-2xl mx-auto theme-transition">
            Explore the local flavors and culinary treasures that define the food culture of {destinationName}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cuisineItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/90 dark:bg-yatrik-darkCard/90 backdrop-blur-sm rounded-xl p-6 shadow-md border-l-4 border-yatrik-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-yatrik-primary/70 theme-transition"
            >
              <h3 className="text-xl font-bold mb-2 text-yatrik-dark dark:text-white theme-transition">{item.name}</h3>
              <p className="text-slate-700 dark:text-gray-300 text-sm theme-transition">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalCuisine;
