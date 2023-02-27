import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { EventCard } from "./eventCard";

export const Events = () => {
  return (
    <Grid container xs={8} sx={{ width: "100%" }} alignContent={"center"}>
      <Typography
        sx={{ textAlign: "center", marginBottom: "50px" }}
        variant="h4"
      >
        What to look forward to!!
      </Typography>
      <Grid
        xs={12}
        container
        justifyContent={{ xs: "center", sm: "space-evenly" }}
        flexDirection={"row"}
      >
        <EventCard event="Parent Welcome" date="12 Jan" where="Playground" />
        <EventCard
          event="Valintines day art show"
          date="14 Feb"
          where="Playground"
        />{" "}
        <EventCard event="Prize giving" date="23 March" where="Playground" />
        <EventCard
          event="April fools silly dress day"
          date="1 April"
          where="Playground"
        />
      </Grid>
    </Grid>
  );
};
