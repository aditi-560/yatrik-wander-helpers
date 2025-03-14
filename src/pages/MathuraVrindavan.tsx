
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import HeroSection from '@/components/mathura/HeroSection';
import StatsSection from '@/components/mathura/StatsSection';
import AttractionsSection from '@/components/mathura/AttractionsSection';
import FestivalCalendar from '@/components/mathura/FestivalCalendar';
import TipsSection from '@/components/mathura/TipsSection';
import { AttractionProps } from '@/components/mathura/AttractionCard';

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

const MathuraVrindavan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-yellow-50/50 to-white dark:from-yatrik-darkBg dark:via-yatrik-darkBg/95 dark:to-yatrik-darkBg theme-transition">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AttractionsSection attractions={attractions} />
        <FestivalCalendar />
        <TipsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default MathuraVrindavan;
