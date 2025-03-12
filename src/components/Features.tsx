
import React from 'react';
import { MapPin, Navigation, Route, Compass, Wifi, Map, Globe, Mountain, MessageSquare, Info } from 'lucide-react';

const features = [
  {
    title: "Explore Jaipur",
    description: "Navigate the Pink City with ease. Discover palaces, forts, and vibrant markets with detailed information and custom routes.",
    icon: <MapPin className="h-10 w-10 text-white p-2 bg-yatrik-yellow rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-yellow/10 to-yatrik-yellow/5"
  },
  {
    title: "Discover Delhi",
    description: "From ancient monuments to modern marvels, navigate the historic and contemporary attractions of India's capital city.",
    icon: <Map className="h-10 w-10 text-white p-2 bg-yatrik-purple rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-purple/10 to-yatrik-purple/5"
  },
  {
    title: "Experience Mathura & Vrindavan",
    description: "Follow in the footsteps of Lord Krishna. Explore temples, ghats, and the spiritual heritage of these twin cities.",
    icon: <Route className="h-10 w-10 text-white p-2 bg-yatrik-blue rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-blue/10 to-yatrik-blue/5"
  },
  {
    title: "Visit Agra",
    description: "Navigate the home of the Taj Mahal with ease. Discover monuments, gardens, and hidden gems of the Mughal era.",
    icon: <Compass className="h-10 w-10 text-white p-2 bg-yatrik-green rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-green/10 to-yatrik-green/5"
  },
  {
    title: "Offline Maps",
    description: "Download maps for your destination and navigate without internet connection. Perfect for areas with poor connectivity.",
    icon: <Wifi className="h-10 w-10 text-white p-2 bg-yatrik-primary rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-primary/10 to-yatrik-primary/5"
  },
  {
    title: "Local Insights",
    description: "Access helpful information about local customs, transportation options, and safety tips for all your Indian destinations.",
    icon: <Info className="h-10 w-10 text-white p-2 bg-yatrik-secondary rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-secondary/10 to-yatrik-secondary/5"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-yatrik-yellow/20 to-yatrik-purple/20 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-dark">Popular destinations</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yatrik-dark mb-4">
            Explore India's most iconic destinations
          </h2>
          <p className="text-lg text-slate-600">
            Yatrik puts all the tools you need to explore India's rich cultural heritage right in your pocket, eliminating the need for expensive tour guides or bulky travel books.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${feature.bgColor}`}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-yatrik-dark mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
