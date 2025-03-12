
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-yatrik-yellow via-yatrik-orange/90 to-yatrik-primary/90 text-yatrik-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <MapPin className="h-4 w-4" />
            <p className="text-sm font-medium">Your adventure awaits</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to explore India on your own terms?
          </h2>
          <p className="text-lg md:text-xl text-yatrik-dark/90 mb-8 max-w-2xl mx-auto">
            Download Yatrik today and join thousands of travelers who have discovered the freedom of independent exploration in Jaipur, Delhi, Mathura, Vrindavan, Agra and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Jaipur', 'Delhi', 'Mathura', 'Vrindavan', 'Agra'].map((city, index) => (
              <div key={index} className="bg-white/30 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium">
                {city}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-yatrik-dark hover:bg-white/90 px-8 py-6 text-lg">
              Download for iOS
            </Button>
            <Button className="bg-yatrik-dark text-yatrik-yellow hover:bg-yatrik-dark/90 px-8 py-6 text-lg">
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
