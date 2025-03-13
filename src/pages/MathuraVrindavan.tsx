
import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Navigation, Calendar, Compass, Star, Info, Clock } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

interface AttractionProps {
  name: string;
  description: string;
  image: string;
  location: string;
  visitDuration: string;
  rating: number;
  tags: string[];
}

const attractions: AttractionProps[] = [
  {
    name: "Krishna Janmabhoomi Temple",
    description: "The birthplace of Lord Krishna, this ancient temple is one of the most sacred sites in Mathura. The prison cell where Lord Krishna was born is preserved within the temple complex.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    location: "Mathura",
    visitDuration: "1-2 hours",
    rating: 4.8,
    tags: ["Temple", "Historical", "Sacred"]
  },
  {
    name: "Banke Bihari Temple",
    description: "One of the most revered temples in Vrindavan, dedicated to Lord Krishna in his 'Banke Bihari' form. Known for its beautiful architecture and spiritual atmosphere.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
    location: "Vrindavan",
    visitDuration: "1-2 hours",
    rating: 4.9,
    tags: ["Temple", "Spiritual", "Popular"]
  },
  {
    name: "ISKCON Temple",
    description: "A magnificent temple dedicated to Lord Krishna, known for its stunning architecture, beautiful deities, and peaceful atmosphere. Regular spiritual programs and discourses are held here.",
    image: "https://images.unsplash.com/photo-1627301517082-fce5e7a92d6d",
    location: "Vrindavan",
    visitDuration: "2-3 hours",
    rating: 4.7,
    tags: ["Temple", "International", "Architecture"]
  },
  {
    name: "Prem Mandir",
    description: "A relatively new temple made entirely of white marble, showcasing intricate carvings that depict the life and pastimes of Lord Krishna. The temple is illuminated beautifully at night.",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74",
    location: "Vrindavan",
    visitDuration: "2-3 hours",
    rating: 4.8,
    tags: ["Temple", "Marble", "Night Visit"]
  },
  {
    name: "Govardhan Hill",
    description: "A sacred hill that Lord Krishna is said to have lifted to protect the villagers from a devastating storm. Pilgrims perform a parikrama (circumambulation) around the hill as a spiritual practice.",
    image: "https://images.unsplash.com/photo-1536294746696-9beec4d5eaa3",
    location: "Near Mathura",
    visitDuration: "Half day",
    rating: 4.6,
    tags: ["Natural", "Spiritual", "Hiking"]
  },
  {
    name: "Radha Kund and Shyam Kund",
    description: "Two adjacent sacred ponds associated with Radha and Krishna. These are important pilgrimage sites where devotees take a dip in the holy waters.",
    image: "https://images.unsplash.com/photo-1555791019-72d3af01da82",
    location: "Vrindavan",
    visitDuration: "1-2 hours",
    rating: 4.5,
    tags: ["Water Body", "Sacred", "Peaceful"]
  }
];

const AttractionCard = ({ attraction }: { attraction: AttractionProps }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100">
      <div className="relative">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="w-full h-64 object-cover" 
        />
        <div className="absolute top-4 right-4 bg-yatrik-yellow text-yatrik-dark font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <Star className="h-3 w-3" />
          {attraction.rating}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-white" />
            <span className="text-white text-sm">{attraction.location}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-yatrik-dark">{attraction.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {attraction.tags.map((tag, index) => (
            <span key={index} className="bg-yellow-50 text-yatrik-dark/80 text-xs px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-yatrik-yellow" />
            <span>{attraction.visitDuration}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-yatrik-yellow text-yatrik-dark hover:bg-yatrik-yellow/10"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

const MathuraVrindavan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-yellow-50/50 to-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-yatrik-yellow/30 via-yatrik-orange/20 to-white"></div>
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600095326825-220dda1575f4')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
                <MapPin className="h-4 w-4 text-yatrik-primary" />
                <p className="text-sm font-medium">Holy Places</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-yatrik-dark">
                Explore the Divine Land of <span className="text-yatrik-orange">Mathura & Vrindavan</span>
              </h1>
              <p className="text-lg md:text-xl text-yatrik-dark/80 mb-8 max-w-2xl mx-auto">
                Discover the sacred birthplace of Lord Krishna and experience the spiritual essence of these holy cities with Yatrik as your guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark px-8 py-6 text-lg">
                  Start Exploring
                </Button>
                <Button variant="outline" className="border-yatrik-yellow text-yatrik-dark hover:bg-yatrik-yellow/10 px-8 py-6 text-lg">
                  View on Map
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
                <h3 className="text-3xl font-bold text-yatrik-yellow mb-2">12+</h3>
                <p className="text-gray-600">Major Temples</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
                <h3 className="text-3xl font-bold text-yatrik-yellow mb-2">5000+</h3>
                <p className="text-gray-600">Years of History</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
                <h3 className="text-3xl font-bold text-yatrik-yellow mb-2">20+</h3>
                <p className="text-gray-600">Sacred Ghats</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
                <h3 className="text-3xl font-bold text-yatrik-yellow mb-2">1M+</h3>
                <p className="text-gray-600">Annual Visitors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yatrik-dark">Must-Visit Attractions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover these sacred places that embody the divine essence of Krishna's birthplace and playground.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <AttractionCard key={index} attraction={attraction} />
              ))}
            </div>
          </div>
        </section>

        {/* Festival Calendar */}
        <section className="py-16 bg-gradient-to-r from-yatrik-yellow/20 via-yatrik-primary/10 to-yatrik-blue/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
                <Calendar className="h-4 w-4 text-yatrik-primary" />
                <p className="text-sm font-medium">Sacred Celebrations</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yatrik-dark">Festival Calendar</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Plan your visit around these vibrant festivals to experience the true spiritual and cultural essence of Mathura and Vrindavan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Janmashtami",
                  date: "August/September",
                  description: "Celebrating the birth of Lord Krishna with grand festivities across Mathura and Vrindavan."
                },
                {
                  name: "Holi",
                  date: "March",
                  description: "Experience the most colorful and vibrant celebration of Holi in the land of Krishna."
                },
                {
                  name: "Radhashtami",
                  date: "September",
                  description: "Celebrating the appearance day of Radha Rani with special ceremonies in temples."
                },
                {
                  name: "Govardhan Puja",
                  date: "October/November",
                  description: "Commemorating Lord Krishna's lifting of Govardhan Hill to protect the villagers."
                },
                {
                  name: "Braj Mahotsav",
                  date: "February/March",
                  description: "A five-day cultural festival showcasing the rich heritage of the Braj region."
                },
                {
                  name: "Krishna Jhulan Yatra",
                  date: "August",
                  description: "The swing festival where deities of Radha and Krishna are placed on decorated swings."
                }
              ].map((festival, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2 text-yatrik-dark">{festival.name}</h3>
                  <div className="flex items-center mb-3 text-yatrik-yellow">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{festival.date}</span>
                  </div>
                  <p className="text-gray-600">{festival.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yatrik-dark">Travel Tips for Pilgrims</h2>
                  <ul className="space-y-4">
                    {[
                      "Best time to visit is between October and March for pleasant weather.",
                      "Dress modestly when visiting temples (covered shoulders and knees).",
                      "Remove shoes before entering any temple.",
                      "Avoid taking photographs inside temple sanctums unless permitted.",
                      "Try the local prasad (sacred food offerings) and sweets.",
                      "Consider hiring a local guide for deeper insights into the spiritual significance."
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-yatrik-yellow/20 p-1 rounded-full">
                          <Info className="h-4 w-4 text-yatrik-yellow" />
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-full min-h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1542645547-62a28e7ad8fe" 
                    alt="Mathura Temple" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default MathuraVrindavan;
