
import React from 'react';
import { Download, MapPin, Route, Navigation, Globe, Calendar, Compass, Users } from 'lucide-react';

const steps = [
  {
    icon: <Globe className="h-12 w-12 text-white" />,
    title: "Choose Your Destination",
    description: "Select from thousands of destinations across India including Jaipur, Delhi, Mathura, Vrindavan, and Agra.",
    bgColor: "bg-yatrik-primary"
  },
  {
    icon: <Calendar className="h-12 w-12 text-white" />,
    title: "Plan Your Trip",
    description: "Create a personalized itinerary based on your preferences and interests.",
    bgColor: "bg-yatrik-blue"
  },
  {
    icon: <Compass className="h-12 w-12 text-white" />,
    title: "Explore with Confidence",
    description: "Access offline maps, audio guides, and local recommendations as you travel.",
    bgColor: "bg-yatrik-purple"
  },
  {
    icon: <Users className="h-12 w-12 text-white" />,
    title: "Stay Connected",
    description: "Share your journey and connect with fellow travelers exploring India.",
    bgColor: "bg-yatrik-green"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-r from-yatrik-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-yatrik-primary/20 to-yatrik-yellow/20 px-4 py-1.5 rounded-full mb-4">
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
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yatrik-primary via-yatrik-purple to-yatrik-green transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* For even items, swap the order on desktop */}
                <div className={`md:col-span-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm relative">
                    {/* Number indicator */}
                    <div className={`absolute -top-4 -left-4 w-8 h-8 ${step.bgColor} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
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
