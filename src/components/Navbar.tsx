
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, Download } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHomePage = location.pathname === '/';

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
          {isHomePage ? (
            // Home page navigation
            <>
              <a href="#features" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
                Testimonials
              </a>
            </>
          ) : (
            // Subpage navigation
            <>
              <Link to="/" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
                Home
              </Link>
              <Link to="/destinations/delhi" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
                Delhi
              </Link>
              <Link to="/destinations/agra" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
                Agra
              </Link>
              <Link to="/destinations/jaipur" className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors">
                Jaipur
              </Link>
            </>
          )}
          <ThemeToggle />
          <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark">
            <Download className="h-4 w-4 mr-2" />
            Download App
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
            {isHomePage ? (
              // Home page mobile navigation
              <>
                <a 
                  href="#features" 
                  className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
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
              </>
            ) : (
              // Subpage mobile navigation
              <>
                <Link 
                  to="/" 
                  className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/destinations/delhi" 
                  className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Delhi
                </Link>
                <Link 
                  to="/destinations/agra" 
                  className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agra
                </Link>
                <Link 
                  to="/destinations/jaipur" 
                  className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jaipur
                </Link>
              </>
            )}
            <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark w-full">
              <Download className="h-4 w-4 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
