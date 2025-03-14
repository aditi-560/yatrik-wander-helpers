
import React from 'react';
import { Map, Compass, Headphones, MapPin, Apple, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: <Map className="h-6 w-6 text-yatrik-primary" />,
    title: "Download App",
    description: "Get the Yatrik app for iOS or Android to access offline maps and guides."
  },
  {
    icon: <Compass className="h-6 w-6 text-yatrik-primary" />,
    title: "Explore Sacred Sites",
    description: "Discover temples, ghats, and spiritual landmarks with detailed information."
  },
  {
    icon: <Headphones className="h-6 w-6 text-yatrik-primary" />,
    title: "Audio Guidance",
    description: "Listen to narrated tours and spiritual stories at your own pace."
  },
  {
    icon: <MapPin className="h-6 w-6 text-yatrik-primary" />,
    title: "Hidden Gems",
    description: "Find lesser-known sacred spots and authentic experiences off the tourist path."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-gradient-to-br from-yatrik-light/50 to-white dark:from-yatrik-darkBg/90 dark:to-yatrik-darkBg theme-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-yatrik-primary/10 dark:bg-yatrik-primary/20 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-primary dark:text-yatrik-primary">Simple Process</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yatrik-dark dark:text-white mb-4">
            How Yatrik Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            Four simple steps to enhance your spiritual journey across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card dark:border-yatrik-primary/70 transition-transform duration-300 hover:-translate-y-2">
              <div className="step-icon-container">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-yatrik-dark dark:text-white mb-2">{step.title}</h3>
              <p className="text-slate-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="app-download-btn ios-btn">
              <Apple className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            
            <a href="#" className="app-download-btn android-btn dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
              <Smartphone className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
