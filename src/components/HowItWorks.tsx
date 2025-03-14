
import React from 'react';
import { Map, Compass, Headphones, MapPin } from 'lucide-react';

const steps = [
  {
    icon: <Map className="h-6 w-6 text-yatrik-primary" />,
    title: "Download App",
    description: "Get the Yatrik app for iOS or Android to access all features including offline maps."
  },
  {
    icon: <Compass className="h-6 w-6 text-yatrik-primary" />,
    title: "Choose Destination",
    description: "Browse through our curated selection of sacred sites and spiritual destinations."
  },
  {
    icon: <Headphones className="h-6 w-6 text-yatrik-primary" />,
    title: "Explore Freely",
    description: "Follow self-guided tours with audio narration at your own pace and schedule."
  },
  {
    icon: <MapPin className="h-6 w-6 text-yatrik-primary" />,
    title: "Discover Hidden Gems",
    description: "Find lesser-known sacred places and authentic experiences beyond typical tourist spots."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-yatrik-light/50 to-white dark:from-yatrik-darkBg/90 dark:to-yatrik-darkBg theme-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yatrik-primary/10 dark:bg-yatrik-primary/20 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-primary dark:text-yatrik-primary">Easy to use</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yatrik-dark dark:text-white mb-4">
            How Yatrik Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            Four simple steps to transform your spiritual journey across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card dark:border-yatrik-primary/70">
              <div className="step-icon-container">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-yatrik-dark dark:text-white mb-2">{step.title}</h3>
              <p className="text-slate-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
