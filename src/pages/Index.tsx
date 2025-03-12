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
      const colors = [
        '#FFD166', // yellow (now primary)
        '#FF3F8B', // pink
        '#FFA52C', // orange
        '#8B5CF6', // purple
        '#4CC9F0', // blue
        '#06D6A0'  // green
      ];
      
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Set random position, size, and rotation
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.position = 'fixed';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '1';
        confetti.style.opacity = '0.7';
        confetti.style.animation = `fall ${Math.random() * 5 + 5}s linear forwards`;
        
        container?.appendChild(confetti);
        
        // Remove confetti after animation completes
        setTimeout(() => {
          if (confetti && confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
          }
        }, 10000);
      }
    };
    
    // Add fall animation to stylesheet
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fall {
        0% {
          top: -10px;
          transform: translateX(0) rotate(0deg);
          opacity: 0.7;
        }
        100% {
          top: 100vh;
          transform: translateX(${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 100}px) rotate(${Math.random() * 360}deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    createConfetti();
    
    // Create new confetti periodically
    const confettiInterval = setInterval(createConfetti, 15000);
    
    return () => {
      clearInterval(confettiInterval);
      // Clean up any remaining confetti and the style element
      document.querySelectorAll('.confetti').forEach(el => el.remove());
      document.head.removeChild(style);
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
