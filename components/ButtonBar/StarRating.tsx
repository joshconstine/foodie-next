import { useState } from "react";

export interface StarRatingProps {
  userRating: number;
}

const StarRating = (props: StarRatingProps) => {
  const { userRating } = props;
  const [rating, setRating] = useState(userRating);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(rating)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
