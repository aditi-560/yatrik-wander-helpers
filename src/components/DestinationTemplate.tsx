
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Download, Calendar, Clock, Info, Star, Heart, Sparkles, Cloud, Sun, UmbrellaOff, AlertTriangle, DollarSign, Utensils, Camera, Train, Bus, Plane } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export interface DestinationDetails {
  name: string;
  nickname: string;
  description: string;
  headerImage: string;
  attractions: Array<{
    name: string;
    description: string;
    image: string;
  }>;
  festivals?: Array<{
    name: string;
    month: string;
    description: string;
  }>;
  tips?: Array<string>;
  history?: string;
  bestTimeToVisit?: string;
  howToReach?: {
    byAir?: string;
    byRail?: string;
    byRoad?: string;
  };
  localCuisine?: Array<{
    name: string;
    description: string;
  }>;
  accommodation?: string;
  budget?: string;
}

interface DestinationTemplateProps {
  destination: DestinationDetails;
}

const DestinationTemplate: React.FC<DestinationTemplateProps> = ({ destination }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen bg-background dark:bg-yatrik-darkBg text-foreground dark:text-yatrik-darkText theme-transition"> 
        {/* Hero Section with parallax effect */}
        <section 
          className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: `url(${destination.headerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg">{destination.name}</h1>
            <div className="w-24 h-1 bg-yatrik-yellow mx-auto mb-4"></div>
            <p className="text-2xl md:text-3xl italic drop-shadow-md">{destination.nickname}</p>
          </div>
        </section>

        {/* Destination Overview with enhanced details */}
        <section className="py-16 bg-gradient-to-r from-yatrik-yellow/10 via-yatrik-primary/5 to-yatrik-blue/10 dark:from-yatrik-yellow/5 dark:via-yatrik-primary/3 dark:to-yatrik-blue/5 theme-transition">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-yatrik-darkCard rounded-xl shadow-lg p-8 border-t-4 border-yatrik-yellow transform hover:scale-[1.01] transition-all duration-300 theme-transition">
                <div className="flex flex-wrap items-center mb-8 gap-2">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Sparkles className="h-6 w-6 text-yatrik-yellow mr-3" />
                      <h2 className="text-2xl font-bold">About {destination.name}</h2>
                    </div>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-4">{destination.description}</p>
                  </div>
                </div>
                
                {destination.bestTimeToVisit && (
                  <div className="mb-6 p-4 bg-yatrik-blue/10 dark:bg-yatrik-blue/5 rounded-lg flex items-start">
                    <Sun className="h-5 w-5 text-yatrik-blue mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Best Time to Visit</h3>
                      <p className="text-slate-700 dark:text-gray-300 text-sm">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                )}
                
                {destination.history && (
                  <div className="mb-6 p-4 bg-yatrik-yellow/10 dark:bg-yatrik-yellow/5 rounded-lg flex items-start">
                    <Info className="h-5 w-5 text-yatrik-yellow mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Historical Significance</h3>
                      <p className="text-slate-700 dark:text-gray-300 text-sm">{destination.history}</p>
                    </div>
                  </div>
                )}
                
                {destination.howToReach && (
                  <div className="mb-6 bg-yatrik-green/10 dark:bg-yatrik-green/5 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-3">How to Reach</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {destination.howToReach.byAir && (
                        <div className="flex items-start">
                          <Plane className="h-5 w-5 text-yatrik-green mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-sm">By Air</h4>
                            <p className="text-slate-700 dark:text-gray-300 text-xs">{destination.howToReach.byAir}</p>
                          </div>
                        </div>
                      )}
                      {destination.howToReach.byRail && (
                        <div className="flex items-start">
                          <Train className="h-5 w-5 text-yatrik-purple mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-sm">By Rail</h4>
                            <p className="text-slate-700 dark:text-gray-300 text-xs">{destination.howToReach.byRail}</p>
                          </div>
                        </div>
                      )}
                      {destination.howToReach.byRoad && (
                        <div className="flex items-start">
                          <Bus className="h-5 w-5 text-yatrik-primary mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-sm">By Road</h4>
                            <p className="text-slate-700 dark:text-gray-300 text-xs">{destination.howToReach.byRoad}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {destination.budget && (
                  <div className="mb-6 p-4 bg-yatrik-primary/10 dark:bg-yatrik-primary/5 rounded-lg flex items-start">
                    <DollarSign className="h-5 w-5 text-yatrik-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Budget Considerations</h3>
                      <p className="text-slate-700 dark:text-gray-300 text-sm">{destination.budget}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Must Visit Attractions - Stylish card grid */}
        <section className="py-16 bg-white dark:bg-yatrik-darkBg theme-transition">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center relative inline-block">
                <span className="relative z-10">Must Visit Places</span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-yatrik-yellow/30 dark:bg-yatrik-yellow/20 -z-0"></div>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.attractions.map((attraction, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-yatrik-darkCard rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-gray-100 dark:border-gray-800 theme-transition"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 right-3 bg-yatrik-yellow text-yatrik-dark font-medium px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      <Heart className="h-3 w-3 mr-1 text-yatrik-primary" />
                      Must Visit
                    </div>
                  </div>
                  <div className="p-5 border-t-4 border-yatrik-yellow">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{attraction.name}</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Local Cuisine Section - Only if there are local cuisine items */}
        {destination.localCuisine && destination.localCuisine.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-yatrik-darkBg dark:to-gray-900 theme-transition">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-4">
                  <Utensils className="h-4 w-4 mr-2 text-yatrik-primary" />
                  <span className="text-sm font-medium dark:text-white">Local Delicacies</span>
                </div>
                <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">
                  Taste of {destination.name}
                </h2>
                <p className="text-slate-700 dark:text-gray-400 max-w-2xl mx-auto">
                  Explore the local flavors and culinary treasures that define the food culture of {destination.name}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {destination.localCuisine.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/90 dark:bg-yatrik-darkCard/90 backdrop-blur-sm rounded-xl p-6 shadow-md border-l-4 border-yatrik-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-yatrik-primary/70 theme-transition"
                  >
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{item.name}</h3>
                    <p className="text-slate-700 dark:text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Festivals Section - Only if there are festivals */}
        {destination.festivals && destination.festivals.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-yatrik-yellow/20 to-yatrik-primary/10 dark:from-yatrik-yellow/10 dark:to-yatrik-primary/5 theme-transition">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2 text-yatrik-yellow" />
                  <span className="text-sm font-medium dark:text-white">Sacred Celebrations</span>
                </div>
                <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">
                  Festivals & Celebrations
                </h2>
                <p className="text-slate-700 dark:text-gray-400 max-w-2xl mx-auto">
                  Experience the vibrant cultural heritage through these traditional celebrations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.festivals.map((festival, index) => (
                  <div 
                    key={index} 
                    className="bg-white/90 dark:bg-yatrik-darkCard/90 backdrop-blur-sm rounded-xl p-6 shadow-md border-l-4 border-yatrik-yellow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-yatrik-yellow/70 theme-transition"
                  >
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-yatrik-yellow/20 dark:bg-yatrik-yellow/10 text-yatrik-dark dark:text-yatrik-yellow mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{festival.month}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{festival.name}</h3>
                    <p className="text-slate-700 dark:text-gray-400 text-sm">{festival.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Travel Tips - Only if there are tips, with better styling */}
        {destination.tips && destination.tips.length > 0 && (
          <section className="py-12 bg-white dark:bg-yatrik-darkBg theme-transition">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-yatrik-blue/10 to-yatrik-yellow/10 dark:from-yatrik-blue/5 dark:to-yatrik-yellow/5 rounded-xl p-8 shadow-sm theme-transition">
                  <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center dark:text-white">
                    <Star className="h-5 w-5 text-yatrik-yellow mr-2" />
                    Travel Tips
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.tips.map((tip, index) => (
                      <li key={index} className="flex items-start bg-white/60 dark:bg-yatrik-darkCard/60 p-3 rounded-lg shadow-sm theme-transition">
                        <MapPin className="h-5 w-5 text-yatrik-yellow mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-slate-700 dark:text-gray-400 text-sm">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Accommodation Info - Only if there's accommodation info */}
        {destination.accommodation && (
          <section className="py-12 bg-gradient-to-r from-yatrik-tertiary/10 to-white dark:from-yatrik-tertiary/5 dark:to-transparent theme-transition">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white/90 dark:bg-yatrik-darkCard/90 backdrop-blur-sm rounded-xl p-8 shadow-md theme-transition">
                  <h2 className="text-2xl font-bold mb-4 flex items-center dark:text-white">
                    <Cloud className="h-5 w-5 text-yatrik-tertiary mr-3" />
                    Where to Stay
                  </h2>
                  <p className="text-slate-700 dark:text-gray-400">{destination.accommodation}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Download App Call to Action - More visually appealing */}
        <section className="py-16 bg-gradient-to-r from-yatrik-dark to-yatrik-dark/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore {destination.name} with Yatrik</h2>
              <p className="max-w-2xl mx-auto mb-6 text-white/80">
                Download our app for offline maps, audio guides, and more detailed information about {destination.name}.
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
      </div>
      <Footer />
    </>
  );
};

export default DestinationTemplate;
