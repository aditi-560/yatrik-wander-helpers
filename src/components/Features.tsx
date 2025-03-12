
import React from 'react';
import { MapPin, Navigation, Route, Compass, Wifi, Map, Globe, Mountain, MessageSquare, Info } from 'lucide-react';

const features = [
  {
    title: "Real-time GPS Navigation",
    description: "Find your way in unfamiliar territories with precise turn-by-turn directions, even in remote locations.",
    icon: <Navigation className="h-10 w-10 text-yatrik-primary p-2 bg-yatrik-tertiary/30 rounded-xl" />
  },
  {
    title: "Offline Maps",
    description: "Download maps for your destination and navigate without internet connection. Perfect for international travel.",
    icon: <Map className="h-10 w-10 text-yatrik-primary p-2 bg-yatrik-tertiary/30 rounded-xl" />
  },
  {
    title: "Custom Routes",
    description: "Create personalized travel routes based on your interests, time available, and travel style.",
    icon: <Route className="h-10 w-10 text-yatrik-primary p-2 bg-yatrik-tertiary/30 rounded-xl" />
  },
  {
    title: "Points of Interest",
    description: "Discover hidden gems, popular attractions, and local favorites around you with detailed information.",
    icon: <MapPin className="h-10 w-10 text-yatrik-primary p-2 bg-yatrik-tertiary/30 rounded-xl" />
  },
  {
    title: "AR Navigation",
    description: "Use augmented reality to visualize directions overlaid on your camera view for intuitive navigation.",
    icon: <Compass className="h-10 w-10 text-yatrik-primary p-2 bg-yatrik-tertiary/30 rounded-xl" />
  },
  {
    title: "Travel Insights",
    description: "Access helpful information about local customs, transportation options, and safety tips for your destination.",
    icon: <Info className="h-10 w-10 text-yatrik-primary p-2 bg-yatrik-tertiary/30 rounded-xl" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yatrik-tertiary/30 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-primary">Powerful features</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yatrik-dark mb-4">
            Everything you need for independent travel
          </h2>
          <p className="text-lg text-slate-600">
            Yatrik puts all the tools you need right in your pocket, eliminating the need for expensive tour guides or bulky travel books.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
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
