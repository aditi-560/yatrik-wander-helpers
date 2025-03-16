
import React from 'react';
import { Map, Compass, Headphones, MapPin, Apple, Smartphone, Download } from 'lucide-react';

const steps = [
  {
    icon: <Download className="h-8 w-8 text-white" />,
    title: "Download App",
    description: "Get the Yatrik app for iOS or Android to access offline maps and guides.",
    color: "from-yatrik-yellow to-yatrik-orange"
  },
  {
    icon: <Compass className="h-8 w-8 text-white" />,
    title: "Explore Sacred Sites",
    description: "Discover temples, ghats, and spiritual landmarks with detailed information.",
    color: "from-yatrik-purple to-yatrik-blue"
  },
  {
    icon: <Headphones className="h-8 w-8 text-white" />,
    title: "Audio Guidance",
    description: "Listen to narrated tours and spiritual stories at your own pace.",
    color: "from-yatrik-blue to-yatrik-green"
  },
  {
    icon: <MapPin className="h-8 w-8 text-white" />,
    title: "Hidden Gems",
    description: "Find lesser-known sacred spots and authentic experiences off the tourist path.",
    color: "from-yatrik-green to-yatrik-yellow"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-yatrik-light/50 to-white dark:from-yatrik-darkBg/90 dark:to-yatrik-darkBg theme-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-yatrik-primary/10 to-yatrik-purple/20 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-primary dark:text-yatrik-primary">Simple Process</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yatrik-dark dark:text-white mb-4">
            How Yatrik Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            Four simple steps to enhance your spiritual journey across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connect the dots between steps */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-yatrik-yellow via-yatrik-purple to-yatrik-green hidden lg:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`bg-white dark:bg-yatrik-darkCard rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 z-10 border border-transparent hover:border-yatrik-yellow/30 dark:hover:border-yatrik-primary/30`}>
              <div className={`flex justify-center mb-6`}>
                <div className={`bg-gradient-to-r ${step.color} rounded-full p-5 shadow-lg`}>
                  {step.icon}
                </div>
                <div className="absolute mt-16 text-2xl font-bold text-yatrik-yellow dark:text-yatrik-yellow">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-yatrik-dark dark:text-white mb-3 text-center">{step.title}</h3>
              <p className="text-slate-600 dark:text-gray-300 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-yatrik-dark dark:text-white mb-6">Get started with Yatrik today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="flex items-center gap-2 rounded-lg py-3 px-6 bg-gradient-to-r from-yatrik-yellow to-yatrik-orange text-yatrik-dark font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              <Apple className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            
            <a href="#" className="flex items-center gap-2 rounded-lg py-3 px-6 bg-gradient-to-r from-yatrik-purple to-yatrik-blue text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
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
