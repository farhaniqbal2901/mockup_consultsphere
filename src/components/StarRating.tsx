import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const Star = FaStar as any;
  const StarHalf = FaStarHalfAlt as any;
  const StarEmpty = FaRegStar as any;

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        if (starNumber <= rating) {
          return <Star key={index} color="#ffc107" />;
        } else if (starNumber === Math.ceil(rating) && !Number.isInteger(rating)) {
          return <StarHalf key={index} color="#ffc107" />;
        } else {
          return <StarEmpty key={index} color="#ffc107" />;
        }
      })}
    </div>
  );
};

export default StarRating;
