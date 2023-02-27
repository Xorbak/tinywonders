import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Introduction = () => {
  return (
    <Grid //introducion
      xs={10}
      container
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <Grid
        textAlign={{ xs: "center", md: "start" }}
        sx={{ width: { xs: "90%", md: "30%" } }}
      >
        <Typography sx={{ marginTop: "50px" }} variant="h6">
          Our Story
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe
          deserunt assumenda cumque debitis molestiae quibusdam commodi sapiente
          qui, corporis rem nulla, voluptates cupiditate delectus tenetur,
          facilis sed quasi explicabo!
        </Typography>
      </Grid>
      <Grid
        textAlign={{ xs: "center", md: "start" }}
        sx={{ width: { xs: "90%", md: "30%" } }}
      >
        <Typography sx={{ marginTop: "50px" }} variant="h6">
          Our Motto
        </Typography>{" "}
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe
          deserunt assumenda cumque debitis molestiae quibusdam commodi sapiente
          qui, corporis rem nulla, voluptates cupiditate delectus tenetur,
          facilis sed quasi explicabo!
        </Typography>
      </Grid>
      <Grid
        textAlign={{ xs: "center", md: "start" }}
        sx={{ width: { xs: "90%", md: "30%" } }}
      >
        <Typography sx={{ marginTop: "50px" }} variant="h6">
          Our Promise
        </Typography>{" "}
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe
          deserunt assumenda cumque debitis molestiae quibusdam commodi sapiente
          qui, corporis rem nulla, voluptates cupiditate delectus tenetur,
          facilis sed quasi explicabo!
        </Typography>
      </Grid>
    </Grid>
  );
};
