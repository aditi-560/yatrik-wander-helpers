
import React from 'react';
import { MapPin, Navigation, Route, Compass, Wifi, Map, Globe, Headphones, Download, Lightbulb, Bluetooth } from 'lucide-react';

const features = [
  {
    title: "Personalized Experience",
    description: "Customized travel recommendations based on your preferences and interests.",
    icon: <Lightbulb className="h-10 w-10 text-white p-2 bg-yatrik-yellow rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-yellow/10 to-yatrik-yellow/5"
  },
  {
    title: "Seamless Navigation",
    description: "Step-by-step directions to your destination, including public transport options.",
    icon: <Navigation className="h-10 w-10 text-white p-2 bg-yatrik-purple rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-purple/10 to-yatrik-purple/5"
  },
  {
    title: "Engaging Audio Guides", 
    description: "Insightful audio guides that narrate the history and culture of your destination.",
    icon: <Headphones className="h-10 w-10 text-white p-2 bg-yatrik-blue rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-blue/10 to-yatrik-blue/5"
  },
  {
    title: "Offline Access",
    description: "Download maps and guides for offline access, so you can explore without an internet connection.",
    icon: <Download className="h-10 w-10 text-white p-2 bg-yatrik-green rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-green/10 to-yatrik-green/5"
  },
  {
    title: "Smart Suggestions",
    description: "Real-time recommendations on nearby attractions, restaurants, and events.",
    icon: <Lightbulb className="h-10 w-10 text-white p-2 bg-yatrik-primary rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-primary/10 to-yatrik-primary/5"
  },
  {
    title: "Bluetooth Compatibility",
    description: "Connect Yatrik to your car's Bluetooth system or headphones for a hands-free, immersive experience.",
    icon: <Bluetooth className="h-10 w-10 text-white p-2 bg-yatrik-secondary rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-secondary/10 to-yatrik-secondary/5"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-yatrik-darkBg text-yatrik-darkText dark:text-white">

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-yatrik-yellow/20 to-yatrik-purple/20 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-dark">Key Features</p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Explore India with powerful travel tools
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
