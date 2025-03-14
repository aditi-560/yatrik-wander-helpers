
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/80 dark:bg-yatrik-darkCard/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-yatrik-yellow mb-2">12+</h3>
            <p className="text-gray-600 dark:text-gray-300">Major Temples</p>
          </div>
          <div className="bg-white/80 dark:bg-yatrik-darkCard/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-yatrik-yellow mb-2">5000+</h3>
            <p className="text-gray-600 dark:text-gray-300">Years of History</p>
          </div>
          <div className="bg-white/80 dark:bg-yatrik-darkCard/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-yatrik-yellow mb-2">20+</h3>
            <p className="text-gray-600 dark:text-gray-300">Sacred Ghats</p>
          </div>
          <div className="bg-white/80 dark:bg-yatrik-darkCard/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-yatrik-yellow mb-2">1M+</h3>
            <p className="text-gray-600 dark:text-gray-300">Annual Visitors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
