
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import DestinationTemplate from '@/components/DestinationTemplate';
import { allDestinations } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeProvider';

const Destination = () => {
  const { id } = useParams<{ id: string }>();
  
  // If destination exists, render the template with data
  if (id && allDestinations[id]) {
    return (
      <ThemeProvider>
        <div className="fixed top-4 left-4 z-50 flex gap-2">
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
        
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        
        <DestinationTemplate destination={allDestinations[id]} />
      </ThemeProvider>
    );
  }
  
  // If destination doesn't exist, redirect to NotFound page
  return <Navigate to="/not-found" />;
};

export default Destination;
