import { Toolbar, Typography } from "@mui/material";
import NavbarButton from "./NavbarButton";
import { NavbarStyles } from "./NavbarStyles";
const Navbar = () => {
  return (
    <Toolbar
      style={{
        padding: "5px",
        display: "flex",
        position: "fixed",
        width: "100vw",
        backgroundColor: "white",
      }}
    >
      <NavbarButton title="Home" route="/restaurants"></NavbarButton>
      <NavbarButton title="Data" route="data"></NavbarButton>
    </Toolbar>
  );
};
export default Navbar;
