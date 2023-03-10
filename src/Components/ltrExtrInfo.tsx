import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
  image: string;
  title: string;
  caption: string;
}

export const LtrExtraInfo = ({ image, title, caption }: Props) => {
  return (
    <Grid // next box
      sx={{ marginY: "15px" }}
      xs={12}
      sm={12}
      md={8}
      container
      justifyContent={"center"}
      alignContent="center"
      alignItems={"center"}
      flexDirection={{ xs: "column", sm: "row" }}
    >
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid
          xs={12}
          sm={4}
          component={"img"}
          src={image}
          boxShadow={5}
          borderRadius={"5px"}
          sx={{ width: "150px", display: { xs: "none", sm: "block" } }}
        />
        <Grid item xs={12} sm={6} mb="25px">
          <Typography variant="h5">{title}</Typography>
          <Typography sx={{ marginTop: "15px" }}>{caption}</Typography>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          component={"img"}
          src={image}
          boxShadow={5}
          borderRadius={"5px"}
          sx={{ width: "150px", display: { xs: "block", sm: "none" } }}
        />
      </Grid>
    </Grid>
  );
};
