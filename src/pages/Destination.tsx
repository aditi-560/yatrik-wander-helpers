
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DestinationTemplate from '@/components/DestinationTemplate';
import { allDestinations } from '@/data/destinations';

const Destination = () => {
  const { id } = useParams<{ id: string }>();
  
  // If destination exists, render the template with data
  if (id && allDestinations[id]) {
    return <DestinationTemplate destination={allDestinations[id]} />;
  }
  
  // If destination doesn't exist, redirect to NotFound page
  return <Navigate to="/not-found" />;
};

export default Destination;
