
import React from 'react';
import { Download, MapPin, Route, Navigation } from 'lucide-react';

const steps = [
  {
    icon: <Download className="h-12 w-12 text-white" />,
    title: "Download Yatrik",
    description: "Get started by downloading the Yatrik app on your iOS or Android device.",
    bgColor: "bg-yatrik-primary"
  },
  {
    icon: <MapPin className="h-12 w-12 text-white" />,
    title: "Choose your destination",
    description: "Select your travel destination or allow the app to detect your current location.",
    bgColor: "bg-yatrik-secondary"
  },
  {
    icon: <Route className="h-12 w-12 text-white" />,
    title: "Create your journey",
    description: "Plan your perfect route with personalized points of interest and attractions.",
    bgColor: "bg-yatrik-primary"
  },
  {
    icon: <Navigation className="h-12 w-12 text-white" />,
    title: "Start exploring",
    description: "Follow the real-time navigation and enjoy your independent travel adventure.",
    bgColor: "bg-yatrik-secondary"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-yatrik-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yatrik-tertiary/30 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-primary">Simple process</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yatrik-dark mb-4">
            How Yatrik works
          </h2>
          <p className="text-lg text-slate-600">
            Getting started with Yatrik is easy. Follow these simple steps and you'll be exploring like a local in no time.
          </p>
        </div>
        
        <div className="relative">
          {/* Steps connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* For even items, swap the order on desktop */}
                <div className={`md:col-span-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm relative">
                    {/* Number indicator */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-yatrik-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-yatrik-dark mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
                
                <div className={`hidden md:flex md:col-span-1 ${index % 2 !== 0 ? 'md:order-1 justify-end' : 'justify-start'}`}>
                  <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center shadow-lg`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Mobile only icon */}
                <div className="flex md:hidden justify-center mt-4">
                  <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
