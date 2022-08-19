import { Card, CardContent, CardHeader } from "@mui/material";
import { useState } from "react";
export interface CommentCardProps {
  title: string;
  cardContent?: any;
  width?: string;
  tabTitle?: string;
  color?: string;
  backgroundColor?: string;
  body?: string;
  subheader?: string;
  rating: number;
}

const CommentCard = (props: CommentCardProps) => {
  const {
    title,
    cardContent,
    width,
    tabTitle,
    color,
    backgroundColor,
    body,
    rating,
  } = props;

  const renderContent = () => {
    if (cardContent?.photos) {
      return <CardContent>{cardContent.photos}</CardContent>;
    }
    if (body) {
      return <CardContent>{body}</CardContent>;
    }
    return <CardContent></CardContent>;
  };

  const StarRating = (props: number) => {
    const [rating, setRating] = useState(props);
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

  return (
    <Card
      style={{
        color,
        width,
        backgroundColor,
      }}
    >
      <CardHeader title={title}></CardHeader>
      <StarRating userRating={5} />
      {renderContent()}
    </Card>
  );
};
export default CommentCard;
