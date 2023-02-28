import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";

export const Footer = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      xs={12}
      sx={{ backgroundColor: "primary.main", width: "100%", height: "300px" }}
    >
      <Grid
        xs={6}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent="center"
        container
        sx={{ height: "150px", paddingX: "30px", textAlign: "center" }}
      >
        <Typography variant="h5" sx={{ marginY: "10px" }}>
          Address:
        </Typography>
        <Typography> 169 Justice Mohammed street,</Typography>
        <Typography>Brooklyn, Pretoria, 0011</Typography>
      </Grid>
      <Grid
        xs={6}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent="center"
        container
        sx={{ height: "150px", paddingX: "30px", textAlign: "center" }}
      >
        <Typography variant="h5" sx={{ marginY: "10px" }}>
          Follow us on Facebook
        </Typography>
        <NavLink to="https://www.facebook.com/groups/699579914505808/?ref=share&mibextid=KtfwRi">
          <IconButton>
            {" "}
            <FacebookIcon fontSize="large"></FacebookIcon>
          </IconButton>
        </NavLink>
      </Grid>
    </Grid>
  );
};
