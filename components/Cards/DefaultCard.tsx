import { Card, CardContent, CardHeader } from "@mui/material";

export interface DefaultCardProps {
  title: string;
  cardContent?: any;
  width?: string;
  tabTitle?: string;
  color?: string;
  backgroundColor?: string;
  body?: string;
  subheader?: string;
}

const DefaultCard = (props: DefaultCardProps) => {
  const { title, cardContent, width, tabTitle, color, backgroundColor, body } =
    props;

  const renderContent = () => {
    if (cardContent?.photos) {
      return <CardContent>{cardContent.photos}</CardContent>;
    }
    if (body) {
      return <CardContent>{body}</CardContent>;
    }
    return <CardContent></CardContent>;
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
      {renderContent()}
    </Card>
  );
};
export default DefaultCard;
