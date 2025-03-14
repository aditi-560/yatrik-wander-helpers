
import React from 'react';
import { Sparkles, Sun, Info, Plane, Train, Bus, DollarSign } from 'lucide-react';

interface OverviewProps {
  description: string;
  bestTimeToVisit?: string;
  history?: string;
  howToReach?: {
    byAir?: string;
    byRail?: string;
    byRoad?: string;
  };
  budget?: string;
}

const DestinationOverview: React.FC<OverviewProps> = ({
  description,
  bestTimeToVisit,
  history,
  howToReach,
  budget
}) => {
  return (
    <section className="py-16 bg-gradient-to-r from-yatrik-yellow/10 via-yatrik-primary/5 to-yatrik-blue/10 dark:from-yatrik-yellow/5 dark:via-yatrik-primary/3 dark:to-yatrik-blue/5 theme-transition">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-yatrik-darkCard rounded-xl shadow-lg p-8 border-t-4 border-yatrik-yellow transform hover:scale-[1.01] transition-all duration-300 theme-transition">
            <div className="flex flex-wrap items-center mb-8 gap-2">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-6 w-6 text-yatrik-yellow mr-3" />
                  <h2 className="text-2xl font-bold dark:text-white">Overview</h2>
                </div>
                <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-4">{description}</p>
              </div>
            </div>
            
            {bestTimeToVisit && (
              <div className="mb-6 p-4 bg-yatrik-blue/10 dark:bg-yatrik-blue/5 rounded-lg flex items-start">
                <Sun className="h-5 w-5 text-yatrik-blue mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">Best Time to Visit</h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm">{bestTimeToVisit}</p>
                </div>
              </div>
            )}
            
            {history && (
              <div className="mb-6 p-4 bg-yatrik-yellow/10 dark:bg-yatrik-yellow/5 rounded-lg flex items-start">
                <Info className="h-5 w-5 text-yatrik-yellow mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">Historical Significance</h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm">{history}</p>
                </div>
              </div>
            )}
            
            {howToReach && (
              <div className="mb-6 bg-yatrik-green/10 dark:bg-yatrik-green/5 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3 dark:text-white">How to Reach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {howToReach.byAir && (
                    <div className="flex items-start">
                      <Plane className="h-5 w-5 text-yatrik-green mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm dark:text-white">By Air</h4>
                        <p className="text-slate-700 dark:text-gray-300 text-xs">{howToReach.byAir}</p>
                      </div>
                    </div>
                  )}
                  {howToReach.byRail && (
                    <div className="flex items-start">
                      <Train className="h-5 w-5 text-yatrik-purple mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm dark:text-white">By Rail</h4>
                        <p className="text-slate-700 dark:text-gray-300 text-xs">{howToReach.byRail}</p>
                      </div>
                    </div>
                  )}
                  {howToReach.byRoad && (
                    <div className="flex items-start">
                      <Bus className="h-5 w-5 text-yatrik-primary mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm dark:text-white">By Road</h4>
                        <p className="text-slate-700 dark:text-gray-300 text-xs">{howToReach.byRoad}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {budget && (
              <div className="mb-6 p-4 bg-yatrik-primary/10 dark:bg-yatrik-primary/5 rounded-lg flex items-start">
                <DollarSign className="h-5 w-5 text-yatrik-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">Budget Considerations</h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm">{budget}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationOverview;
