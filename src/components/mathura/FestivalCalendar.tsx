
import React from 'react';
import { Calendar } from 'lucide-react';

interface FestivalProps {
  name: string;
  date: string;
  description: string;
}

const festivals: FestivalProps[] = [
  {
    name: "Janmashtami",
    date: "August/September",
    description: "Celebrating the birth of Lord Krishna with grand festivities across Mathura and Vrindavan."
  },
  {
    name: "Holi",
    date: "March",
    description: "Experience the most colorful and vibrant celebration of Holi in the land of Krishna."
  },
  {
    name: "Radhashtami",
    date: "September",
    description: "Celebrating the appearance day of Radha Rani with special ceremonies in temples."
  },
  {
    name: "Govardhan Puja",
    date: "October/November",
    description: "Commemorating Lord Krishna's lifting of Govardhan Hill to protect the villagers."
  },
  {
    name: "Braj Mahotsav",
    date: "February/March",
    description: "A five-day cultural festival showcasing the rich heritage of the Braj region."
  },
  {
    name: "Krishna Jhulan Yatra",
    date: "August",
    description: "The swing festival where deities of Radha and Krishna are placed on decorated swings."
  }
];

const FestivalCalendar = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yatrik-yellow/20 via-yatrik-primary/10 to-yatrik-blue/10 dark:from-yatrik-yellow/10 dark:via-yatrik-primary/5 dark:to-yatrik-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/80 dark:bg-yatrik-darkCard/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <Calendar className="h-4 w-4 text-yatrik-primary" />
            <p className="text-sm font-medium dark:text-white">Sacred Celebrations</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yatrik-dark dark:text-white">Festival Calendar</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Plan your visit around these vibrant festivals to experience the true spiritual and cultural essence of Mathura and Vrindavan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((festival, index) => (
            <div key={index} className="bg-white dark:bg-yatrik-darkCard rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2 text-yatrik-dark dark:text-white">{festival.name}</h3>
              <div className="flex items-center mb-3 text-yatrik-yellow">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{festival.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{festival.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalCalendar;
