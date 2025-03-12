
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-yatrik-yellow/20">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-yatrik-yellow" />
          <span className="text-xl font-bold text-yatrik-dark">Yatrik</span>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-slate-700 hover:text-yatrik-yellow transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-700 hover:text-yatrik-yellow transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-yatrik-yellow transition-colors">
            Testimonials
          </a>
          <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark">
            Download App
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium text-slate-700 hover:text-yatrik-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-slate-700 hover:text-yatrik-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-slate-700 hover:text-yatrik-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark w-full">
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
