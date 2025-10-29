import React, { ComponentType } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const FullStar = FaStar as ComponentType<{ size?: number }>;
  const HalfStar = FaStarHalfAlt as ComponentType<{ size?: number }>;
  const EmptyStar = FaRegStar as ComponentType<{ size?: number }>;

  return (
    <div className="cs-stars" aria-label={`Vurdering ${rating.toFixed(1)} av 5`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const starNumber = index + 1;
        if (rating >= starNumber) {
          return <FullStar key={index} />;
        }
        if (rating >= starNumber - 0.5) {
          return <HalfStar key={index} />;
        }
        return <EmptyStar key={index} />;
      })}
    </div>
  );
};

export default StarRating;
