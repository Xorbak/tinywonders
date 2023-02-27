import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  location: string;
  close?: () => void;
}
export const NavBarNavigation = ({ location, label, close }: Props) => {
  return (
    <NavLink
      to={location}
      style={{
        textDecoration: "none",
      }}
    >
      <MenuItem onClick={close} sx={{ color: "text.primary" }}>
        {label}
      </MenuItem>
    </NavLink>
  );
};
