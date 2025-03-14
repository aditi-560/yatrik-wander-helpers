
import React from 'react';
import { DestinationDetails } from '@/components/DestinationTemplate';
import DestinationOverview from '@/components/destination/DestinationOverview';
import AttractionsGrid from '@/components/destination/AttractionsGrid';
import LocalCuisine from '@/components/destination/LocalCuisine';
import FestivalsGrid from '@/components/destination/FestivalsGrid';
import TravelTips from '@/components/destination/TravelTips';
import Accommodation from '@/components/destination/Accommodation';
import AppCTA from '@/components/destination/AppCTA';

interface DestinationContentProps {
  destination: DestinationDetails;
}

const DestinationContent: React.FC<DestinationContentProps> = ({ destination }) => {
  return (
    <>
      <DestinationOverview 
        description={destination.description}
        bestTimeToVisit={destination.bestTimeToVisit}
        history={destination.history}
        howToReach={destination.howToReach}
        budget={destination.budget}
      />

      <AttractionsGrid attractions={destination.attractions} />

      {destination.localCuisine && destination.localCuisine.length > 0 && (
        <LocalCuisine 
          destinationName={destination.name} 
          cuisineItems={destination.localCuisine} 
        />
      )}

      {destination.festivals && destination.festivals.length > 0 && (
        <FestivalsGrid festivals={destination.festivals} />
      )}

      {destination.tips && destination.tips.length > 0 && (
        <TravelTips tips={destination.tips} />
      )}

      {destination.accommodation && (
        <Accommodation accommodationInfo={destination.accommodation} />
      )}

      <AppCTA destinationName={destination.name} />
    </>
  );
};

export default DestinationContent;
