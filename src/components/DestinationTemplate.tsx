
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Download, Calendar, Clock, Info } from 'lucide-react';
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
        {/* Hero Section */}
        <section 
          className="relative h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${destination.headerImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{destination.name}</h1>
            <p className="text-xl md:text-2xl italic">{destination.nickname}</p>
          </div>
        </section>

        {/* Destination Overview */}
        <section className="py-12 bg-gradient-to-r from-yatrik-yellow/20 via-yatrik-primary/10 to-yatrik-blue/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Info className="h-6 w-6 text-yatrik-yellow mr-2" />
                  <h2 className="text-2xl font-bold">About {destination.name}</h2>
                </div>
                <p className="text-slate-700">{destination.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Must Visit Attractions */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Must Visit Places</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.attractions.map((attraction, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                    <p className="text-slate-600">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Festivals Section - Only if there are festivals */}
        {destination.festivals && destination.festivals.length > 0 && (
          <section className="py-12 bg-gradient-to-br from-yatrik-yellow/30 to-yatrik-primary/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                <Calendar className="h-8 w-8 inline-block mr-2 text-yatrik-yellow" />
                Festivals & Celebrations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destination.festivals.map((festival, index) => (
                  <div 
                    key={index} 
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md"
                  >
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-yatrik-yellow/20 text-yatrik-dark mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{festival.month}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{festival.name}</h3>
                    <p className="text-slate-700">{festival.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Travel Tips - Only if there are tips */}
        {destination.tips && destination.tips.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Travel Tips</h2>
                <div className="bg-yatrik-blue/10 rounded-xl p-6">
                  <ul className="space-y-4">
                    {destination.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <MapPin className="h-5 w-5 text-yatrik-yellow mt-1 mr-2 flex-shrink-0" />
                        <p className="text-slate-700">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Download App Call to Action */}
        <section className="py-12 bg-gradient-to-r from-yatrik-dark to-yatrik-dark/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore {destination.name} with Yatrik</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Download our app for a richer experience with offline maps, audio guides, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-yatrik-yellow text-yatrik-dark hover:bg-yatrik-yellow/90 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download for iOS
              </Button>
              <Button className="bg-white text-yatrik-dark hover:bg-white/90 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DestinationTemplate;
