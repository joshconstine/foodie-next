import { DefaultCardProps } from "./DefaultCard";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";

interface DefaultRestaurantCardProps extends DefaultCardProps {
  categories: any;
  coordinates: { latitude: number; longitude: number };
  display_phone: string;
  hours: any;
  id: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  location: any;
  name: string;
  phone: string;
  photos: string[];
  price: string;
  rating: number;
  review_count: number;
  transactions: any;
  url: string;
}

const DefaultRestaurantCard = (props: DefaultRestaurantCardProps) => {
  const {
    title,
    cardContent,
    width,
    tabTitle,
    color,
    backgroundColor,
    image_url,
    photos,
    coordinates,
    categories,
    id,
    display_phone,
    hours,
    url,
    is_claimed,
    is_closed,
    location,
    name,
    price,
    transactions,
    rating,
    phone,
    review_count,
  } = props;
  const children = {
    photos: photos ? photos : [],
  };

  return (
    <>
      <Card>
        <CardHeader title={title}></CardHeader>
        <CardContent>{url}</CardContent>
        <CardMedia
          component="img"
          height="140"
          image={image_url ? image_url : ""}
          alt="green iguana"
        />
      </Card>
    </>
  );
};
export default DefaultRestaurantCard;
