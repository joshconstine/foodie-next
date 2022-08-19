import { Button, ButtonGroup } from "@mui/material";

const DefaultButtonBar = () => {
  const actions = [
    {
      name: "comments",
    },
    {
      name: "photos",
    },
    {
      name: "menu",
    },
  ];

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {actions.map((action, i) => {
        return <Button>{action.name}</Button>;
      })}
    </ButtonGroup>
  );
};
export default DefaultButtonBar;
