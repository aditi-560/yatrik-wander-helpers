
import React from 'react';
import AttractionCard, { AttractionProps } from './AttractionCard';

interface AttractionsSectionProps {
  attractions: AttractionProps[];
}

const AttractionsSection = ({ attractions }: AttractionsSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yatrik-dark dark:text-white">Must-Visit Attractions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover these sacred places that embody the divine essence of Krishna's birthplace and playground.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <AttractionCard key={index} attraction={attraction} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
