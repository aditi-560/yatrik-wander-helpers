
import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface TravelTipsProps {
  tips: string[];
}

const TravelTips: React.FC<TravelTipsProps> = ({ tips }) => {
  if (!tips || tips.length === 0) return null;
  
  return (
    <section className="py-12 bg-white dark:bg-yatrik-darkBg theme-transition">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-yatrik-blue/10 to-yatrik-yellow/10 dark:from-yatrik-blue/5 dark:to-yatrik-yellow/5 rounded-xl p-8 shadow-sm theme-transition">
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center text-yatrik-dark dark:text-white theme-transition">
              <Star className="h-5 w-5 text-yatrik-yellow mr-2" />
              Travel Tips
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start bg-white/60 dark:bg-yatrik-darkCard/60 p-3 rounded-lg shadow-sm theme-transition">
                  <MapPin className="h-5 w-5 text-yatrik-yellow mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-gray-300 text-sm theme-transition">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
