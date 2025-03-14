
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const MathuraHeader: React.FC = () => {
  return (
    <div className="fixed top-0 z-50 w-full flex justify-between px-4 pt-20">
      <div className="flex gap-2">
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
      </div>
      
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default MathuraHeader;
