
import React from 'react';
import { Info } from 'lucide-react';

const tips = [
  "Best time to visit is between October and March for pleasant weather.",
  "Dress modestly when visiting temples (covered shoulders and knees).",
  "Remove shoes before entering any temple.",
  "Avoid taking photographs inside temple sanctums unless permitted.",
  "Try the local prasad (sacred food offerings) and sweets.",
  "Consider hiring a local guide for deeper insights into the spiritual significance."
];

const TipsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-yatrik-darkCard rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yatrik-dark dark:text-white">Travel Tips for Pilgrims</h2>
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 bg-yatrik-yellow/20 p-1 rounded-full">
                      <Info className="h-4 w-4 text-yatrik-yellow" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1542645547-62a28e7ad8fe" 
                alt="Mathura Temple" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
