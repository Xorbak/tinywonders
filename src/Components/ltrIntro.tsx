import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
interface Props {
  image: string;
  caption: string;
  name: string;
}
export const LtrIntro = ({ image, caption, name }: Props) => {
  return (
    <Grid
      container
      alignSelf={"center"}
      alignItems={{ xs: "center" }}
      justifyContent={"space-between"}
      item
      xs={10}
      md={6}
      flexDirection={{ xs: "column", sm: "row" }}
      gap={5}
      sx={{ marginBottom: "20px" }}
    >
      <Grid container xs={10} sm={4} md={3}>
        <Grid
          borderRadius={"800px"}
          boxShadow={5}
          component={"img"}
          src={image}
          sx={{ width: "100%" }}
        />
      </Grid>

      <Grid xs={10} sm={6} md={6}>
        <Typography variant="h6" sx={{ marginY: "10px" }}>
          Teacher {name}
        </Typography>
        <Typography>{caption}</Typography>
      </Grid>
    </Grid>
  );
};
