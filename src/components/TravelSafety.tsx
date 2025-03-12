
import React from 'react';
import { Phone, Shield, Car, MapPin, Globe, Bell } from 'lucide-react';

const safetyFeatures = [
  {
    title: "Emergency Contacts",
    description: "Quick access to local emergency numbers and embassy contacts for your destination.",
    icon: <Phone className="h-10 w-10 text-white p-2 bg-yatrik-primary rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-primary/10 to-yatrik-primary/5"
  },
  {
    title: "Health Guidelines",
    description: "Up-to-date health and safety protocols for different destinations across India.",
    icon: <Shield className="h-10 w-10 text-white p-2 bg-yatrik-blue rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-blue/10 to-yatrik-blue/5"
  },
  {
    title: "Safe Transportation",
    description: "Verified transportation options and safety tips for different modes of travel.",
    icon: <Car className="h-10 w-10 text-white p-2 bg-yatrik-purple rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-purple/10 to-yatrik-purple/5"
  },
  {
    title: "Parking Locations",
    description: "Easy access to public parking locations and safety tips for different destinations.",
    icon: <MapPin className="h-10 w-10 text-white p-2 bg-yatrik-green rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-green/10 to-yatrik-green/5"
  },
  {
    title: "Local Insights",
    description: "Round-the-clock access to travel support and emergency assistance.",
    icon: <Globe className="h-10 w-10 text-white p-2 bg-yatrik-yellow rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-yellow/10 to-yatrik-yellow/5"
  },
  {
    title: "Travel Alerts",
    description: "Real-time updates on local events, weather, and safety situations affecting your travel.",
    icon: <Bell className="h-10 w-10 text-white p-2 bg-yatrik-secondary rounded-xl" />,
    bgColor: "bg-gradient-to-br from-yatrik-secondary/10 to-yatrik-secondary/5"
  }
];

const TravelSafety = () => {
  return (
    <section id="safety" className="py-16 md:py-24 bg-gradient-to-r from-white to-yatrik-light/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-yatrik-blue/20 to-yatrik-green/20 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-dark">Travel confidently</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yatrik-dark mb-4">
            Travel safety made simple
          </h2>
          <p className="text-lg text-slate-600">
            Experience India's beauty with peace of mind. Yatrik provides essential safety features to ensure your journey is as secure as it is memorable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {safetyFeatures.map((feature, index) => (
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

export default TravelSafety;
