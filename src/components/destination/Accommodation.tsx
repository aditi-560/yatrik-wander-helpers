
import React from 'react';
import { Building, Hotel } from 'lucide-react';

interface AccommodationProps {
  accommodationInfo: string;
}

const Accommodation: React.FC<AccommodationProps> = ({ accommodationInfo }) => {
  if (!accommodationInfo) return null;
  
  return (
    <section className="py-12 bg-gradient-to-r from-yatrik-tertiary/10 to-white dark:from-yatrik-tertiary/5 dark:to-yatrik-darkBg/90 theme-transition">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 dark:bg-yatrik-darkCard/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-transparent dark:border-yatrik-darkBorder/30 theme-transition">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-yatrik-dark dark:text-white theme-transition">
              <Hotel className="h-5 w-5 text-yatrik-tertiary mr-3" />
              Where to Stay
            </h2>
            <p className="text-slate-700 dark:text-gray-300 theme-transition">{accommodationInfo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
