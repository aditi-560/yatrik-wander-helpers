
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Menu, X, MapPin, Download } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

const MathuraHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/">
            <Button variant="outline" className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 dark:text-white dark:border-gray-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 dark:text-white dark:border-gray-700">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
          <ThemeToggle />
          <Link to="/download">
            <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark">
              <Download className="h-4 w-4 mr-2" />
              Download App
            </Button>
          </Link>
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
            <Link 
              to="/" 
              className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
            <Link 
              to="/" 
              className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yatrik-yellow dark:hover:text-yatrik-yellow transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
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
            <Link to="/download" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-yatrik-yellow hover:bg-yatrik-yellow/90 text-yatrik-dark w-full">
                <Download className="h-4 w-4 mr-2" />
                Download App
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MathuraHeader;
