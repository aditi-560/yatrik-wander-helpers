
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, Smartphone } from 'lucide-react';

interface CallToActionProps {
  isMathuraPage?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ isMathuraPage = false }) => {
  return (
    <section className={`py-16 ${isMathuraPage ? 'bg-white dark:bg-yatrik-darkBg' : 'bg-yatrik-light dark:bg-yatrik-darkBg'} theme-transition`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white dark:bg-yatrik-darkCard rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yatrik-dark dark:text-white">
            Ready to Start Your Spiritual Journey?
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Download the Yatrik app today and explore sacred places across India with detailed guides, maps, and spiritual insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/in/app/yatrik/id6636484336" target="_blank" rel="noopener noreferrer" className="app-download-btn ios-btn">
              <Apple className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.mytoursapp.android.app9539&pcampaignid=web_share&pli=1" target="_blank" rel="noopener noreferrer" className="app-download-btn android-btn dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
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

export default CallToAction;
