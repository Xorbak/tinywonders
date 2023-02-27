import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
  event: string;
  date: string;
  where: string;
}
export const EventCard = ({ event, date, where }: Props) => {
  return (
    <Grid
      xs={10}
      sm={4.5}
      md={3.5}
      container
      flexDirection={"column"}
      boxShadow={5}
      sx={{
        borderRadius: "5px",
        padding: "5px",
        marginBottom: "20px",
      }}
    >
      <Typography variant="h6" fontWeight={"bolder"}>
        Event :{" "}
      </Typography>{" "}
      <Typography>{event} </Typography>
      <Typography fontWeight={"bolder"} variant="h6">
        Date :{" "}
      </Typography>{" "}
      <Typography>{date}</Typography>
      <Typography fontWeight={"bolder"} variant="h6">
        Where :
      </Typography>
      <Typography>{where}</Typography>
    </Grid>
  );
};
