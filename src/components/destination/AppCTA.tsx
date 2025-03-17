
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, ChevronRight, Smartphone } from 'lucide-react';

interface AppCTAProps {
  destinationName: string;
}

const AppCTA: React.FC<AppCTAProps> = ({ destinationName }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-yatrik-tertiary/10 to-white dark:from-yatrik-darkBg dark:to-yatrik-darkBg theme-transition">
      <div className="container mx-auto px-4">
        <div className="bg-white/90 dark:bg-yatrik-darkCard/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
              Explore {destinationName} with the Yatrik App
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Download our mobile app for offline maps, audio guides, and personalized recommendations for your spiritual journey.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/in/app/yatrik/id6636484336" className="app-download-btn ios-btn">
              <Apple className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.mytoursapp.android.app9539&pcampaignid=web_share&pli=1" className="app-download-btn android-btn dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
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

export default AppCTA;
