
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const cities = ["Jaipur", "Delhi", "Mathura", "Vrindavan", "Agra"];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-yatrik-yellow via-yatrik-orange/80 to-yatrik-primary/70 text-yatrik-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute top-60 right-20 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <MapPin className="h-4 w-4" />
            <p className="text-sm font-medium">Your adventure awaits</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to explore India on your own terms?
          </h2>
          <p className="text-lg md:text-xl text-yatrik-dark/90 mb-8 max-w-2xl mx-auto">
            Download Yatrik today and join thousands of travelers who have discovered the freedom of independent exploration in these amazing destinations and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {cities.map((city, index) => (
              <div key={index} className={`
                ${index % 2 === 0 ? 'bg-white/40' : 'bg-yatrik-dark/10'} 
                backdrop-blur-sm rounded-full px-5 py-2 text-sm font-medium 
                shadow-sm border border-white/30 hover:transform hover:scale-105 
                transition-all duration-300 cursor-pointer
              `}>
                {city === "Mathura" || city === "Vrindavan" ? (
                  <Link to="/mathura-vrindavan" className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {city}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {city}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
            <Button className="bg-white text-yatrik-dark hover:bg-white/90 px-8 py-6 text-lg flex items-center gap-2 shadow-lg group">
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Download for iOS
              <span className="absolute -top-2 -right-2 bg-yatrik-dark text-white text-xs px-2 py-0.5 rounded-full">New</span>
            </Button>
            <Button className="bg-yatrik-dark text-yatrik-yellow hover:bg-yatrik-dark/90 px-8 py-6 text-lg flex items-center gap-2 shadow-lg group">
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Download for Android
            </Button>
          </div>
        </div>
      </div>
      
      {/* Phone mockups */}
      <div className="hidden lg:block absolute -bottom-20 left-10 w-56 h-80 bg-white rounded-3xl shadow-2xl transform rotate-12 border-8 border-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80" 
          alt="App preview" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="hidden lg:block absolute -bottom-24 right-10 w-56 h-80 bg-white rounded-3xl shadow-2xl transform -rotate-12 border-8 border-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80" 
          alt="App preview" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default CallToAction;
