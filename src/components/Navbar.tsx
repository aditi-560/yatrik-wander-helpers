
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import HowItWorks from './HowItWorks';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-yatrik-darkBg/90 backdrop-blur-sm border-b border-yatrik-yellow/20 dark:border-yatrik-yellow/10 theme-transition">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-yatrik-yellow" />
            <span className="text-xl font-bold text-yatrik-dark dark:text-white">Yatrik</span>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
        <Link 
          to="/features" 
          className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
          onClick={() => setIsMenuOpen(false)}
         >
          Features
        </Link>
          {/* <a href="#features" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
            Features
          </a> */}
          <Link 
          to="/how-it-works" 
          className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
          onClick={() => setIsMenuOpen(false)}
         >
          How it works
        </Link>

        <Link 
          to="/testimonials" 
          className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
          onClick={() => setIsMenuOpen(false)}
         >
          Testimonials
        </Link>

          {/* <a href="#how-it-works" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
            How It Works
          </a> */}
          {/* <a href="#testimonials" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
            Testimonials
          </a> */}
          <ThemeToggle />
          <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark">
          <Link 
          to="/download" 
          
          onClick={() => setIsMenuOpen(false)}
         >
          Download now
        </Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="dark:text-white"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-yatrik-darkBg border-b border-slate-200 dark:border-gray-800 theme-transition">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="" 
              className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
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
