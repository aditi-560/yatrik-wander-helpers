
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yatrik-primary to-yatrik-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin your spiritual journey today</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Download Yatrik for free and experience a new way to explore India's spiritual landmarks with ease and confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="app-download-btn ios-btn">
            <Download className="h-5 w-5" />
            Download for iOS
          </Button>
          <Button className="app-download-btn android-btn">
            <Download className="h-5 w-5" />
            Download for Android
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
