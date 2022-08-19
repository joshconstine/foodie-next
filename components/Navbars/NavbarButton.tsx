import { Button } from "@mui/material";
import { NavbarButtonStyles } from "./NavbarButtonStyles";

type NavbarButtonProps = {
  title: string;
  route: string;
};

const NavbarButton = (props: NavbarButtonProps) => {
  const { title, route } = props;
  return <Button style={NavbarButtonStyles}>{title}</Button>;
};

export default NavbarButton;
