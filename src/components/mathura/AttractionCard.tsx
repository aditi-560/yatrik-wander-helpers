
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock } from 'lucide-react';

export interface AttractionProps {
  name: string;
  description: string;
  image: string;
  location: string;
  visitDuration: string;
  rating: number;
  tags: string[];
}

const AttractionCard = ({ attraction }: { attraction: AttractionProps }) => {
  return (
    <div className="bg-white dark:bg-yatrik-darkCard rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 dark:border-yatrik-darkBorder">
      <div className="relative">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="w-full h-64 object-cover" 
        />
        <div className="absolute top-4 right-4 bg-yatrik-yellow text-yatrik-dark font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <Star className="h-3 w-3" />
          {attraction.rating}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-white" />
            <span className="text-white text-sm">{attraction.location}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-yatrik-dark dark:text-white">{attraction.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{attraction.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {attraction.tags.map((tag, index) => (
            <span key={index} className="bg-yellow-50 dark:bg-yatrik-yellow/20 text-yatrik-dark/80 dark:text-yatrik-yellow text-xs px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-yatrik-yellow" />
            <span>{attraction.visitDuration}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-yatrik-yellow text-yatrik-dark dark:text-yatrik-yellow hover:bg-yatrik-yellow/10"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
