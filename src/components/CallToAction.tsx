
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-yatrik-primary to-yatrik-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <MapPin className="h-4 w-4" />
            <p className="text-sm font-medium">Your adventure awaits</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to explore the world on your own terms?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download Yatrik today and join thousands of travelers who have discovered the freedom of independent exploration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-yatrik-primary hover:bg-white/90 px-8 py-6 text-lg">
              Download for iOS
            </Button>
            <Button className="bg-white text-yatrik-primary hover:bg-white/90 px-8 py-6 text-lg">
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
