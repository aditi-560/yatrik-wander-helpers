
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import DestinationTemplate from '@/components/DestinationTemplate';
import { allDestinations } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Destination = () => {
  const { id } = useParams<{ id: string }>();
  
  // If destination exists, render the template with data
  if (id && allDestinations[id]) {
    return (
      <>
        <div className="fixed top-4 left-4 z-50">
          <Link to="/">
            <Button variant="outline" className="rounded-full bg-white/80 backdrop-blur-sm shadow-md">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
        <DestinationTemplate destination={allDestinations[id]} />
      </>
    );
  }
  
  // If destination doesn't exist, redirect to NotFound page
  return <Navigate to="/not-found" />;
};

export default Destination;
