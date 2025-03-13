
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Download, Calendar, Clock, Info, Star, Heart, Sparkles } from 'lucide-react';
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
}

interface DestinationTemplateProps {
  destination: DestinationDetails;
}

const DestinationTemplate: React.FC<DestinationTemplateProps> = ({ destination }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* Space for fixed navbar */}
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

        {/* Destination Overview - With card design */}
        <section className="py-16 bg-gradient-to-r from-yatrik-yellow/10 via-yatrik-primary/5 to-yatrik-blue/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yatrik-yellow transform hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-yatrik-yellow mr-3" />
                  <h2 className="text-2xl font-bold">About {destination.name}</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">{destination.description.split('.')[0]}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Must Visit Attractions - Stylish card grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center relative inline-block">
                <span className="relative z-10">Must Visit Places</span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-yatrik-yellow/30 -z-0"></div>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.attractions.map((attraction, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-gray-100"
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
                    <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                    <p className="text-slate-600 text-sm line-clamp-2">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Festivals Section - Only if there are festivals */}
        {destination.festivals && destination.festivals.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-yatrik-yellow/20 to-yatrik-primary/10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2 text-yatrik-yellow" />
                  <span className="text-sm font-medium">Sacred Celebrations</span>
                </div>
                <h2 className="text-3xl font-bold text-center mb-2">
                  Festivals & Celebrations
                </h2>
                <p className="text-slate-700 max-w-2xl mx-auto">
                  Experience the vibrant cultural heritage through these traditional celebrations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.festivals.map((festival, index) => (
                  <div 
                    key={index} 
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border-l-4 border-yatrik-yellow transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-yatrik-yellow/20 text-yatrik-dark mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{festival.month}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{festival.name}</h3>
                    <p className="text-slate-700 text-sm">{festival.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Travel Tips - Only if there are tips, with better styling */}
        {destination.tips && destination.tips.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-yatrik-blue/10 to-yatrik-yellow/10 rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
                    <Star className="h-5 w-5 text-yatrik-yellow mr-2" />
                    Travel Tips
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.tips.slice(0, 4).map((tip, index) => (
                      <li key={index} className="flex items-start bg-white/60 p-3 rounded-lg shadow-sm">
                        <MapPin className="h-5 w-5 text-yatrik-yellow mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-slate-700 text-sm">{tip}</p>
                      </li>
                    ))}
                  </ul>
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
