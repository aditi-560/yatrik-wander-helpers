
import React from 'react';

interface HeroSectionProps {
  name: string;
  nickname: string;
  headerImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, nickname, headerImage }) => {
  return (
    <section 
      className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg">{name}</h1>
        <div className="w-24 h-1 bg-yatrik-yellow mx-auto mb-4"></div>
        <p className="text-2xl md:text-3xl italic drop-shadow-md">{nickname}</p>
      </div>
    </section>
  );
};

export default HeroSection;
