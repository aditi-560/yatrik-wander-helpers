
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

interface AppCTAProps {
  destinationName: string;
}

const AppCTA: React.FC<AppCTAProps> = ({ destinationName }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-yatrik-dark to-yatrik-dark/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore {destinationName} with Yatrik</h2>
          <p className="max-w-2xl mx-auto mb-6 text-white/80">
            Download our app for offline maps, audio guides, and more detailed information about {destinationName}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-yatrik-yellow text-yatrik-dark hover:bg-yatrik-yellow/90 flex items-center gap-2 px-6 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="h-5 w-5" />
              Download for iOS
            </Button>
            <Button className="bg-white text-yatrik-dark hover:bg-white/90 flex items-center gap-2 px-6 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="h-5 w-5" />
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
