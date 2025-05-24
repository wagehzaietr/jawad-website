import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Rating({ initialRating = 0, totalStars = 5, isInteractive = false, onRatingChange, size = "small" }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  // Update rating when initialRating prop changes
  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleRatingClick = (value) => {
    if (isInteractive) {
      setRating(value);
      if (onRatingChange) {
        onRatingChange(value);
      }
    }
  };

  const starSizes = {
    small: "w-3 h-3",
    medium: "w-4 h-4",
    large: "w-5 h-5"
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => handleRatingClick(ratingValue)}
            onMouseEnter={() => isInteractive && setHover(ratingValue)}
            onMouseLeave={() => isInteractive && setHover(null)}
            className={`${isInteractive ? 'cursor-pointer' : 'cursor-default'} transition-colors duration-200`}
            disabled={!isInteractive}
            aria-label={`Rate ${ratingValue} out of ${totalStars} stars`}
          >
            <FaStar
              className={`${starSizes[size]} ${
                ratingValue <= (hover || rating)
                  ? 'text-[#FFD700]'
                  : 'text-gray-600'
              } transition-colors duration-200`}
            />
          </button>
        );
      })}
      {isInteractive && (
        <span className="text-xs text-gray-400 ml-1">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
} 