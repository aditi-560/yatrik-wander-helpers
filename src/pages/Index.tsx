
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Create confetti elements for Holi-inspired effect
    const createConfetti = () => {
      const confettiCount = 60;
      const container = document.querySelector('body');
      
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container?.appendChild(confetti);
        
        // Remove confetti after animation completes
        setTimeout(() => {
          if (confetti && confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
          }
        }, 12000);
      }
    };
    
    createConfetti();
    
    // Create new confetti periodically
    const confettiInterval = setInterval(createConfetti, 15000);
    
    return () => {
      clearInterval(confettiInterval);
      // Clean up any remaining confetti
      document.querySelectorAll('.confetti').forEach(el => el.remove());
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
