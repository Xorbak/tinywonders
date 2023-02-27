import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
interface Props {
  image: string;
  caption: string;
  name: string;
}
export const RtlIntro = ({ image, caption, name }: Props) => {
  return (
    <Grid
      container
      item
      xs={10}
      md={6}
      alignItems={"center"}
      alignSelf={"center"}
      flexDirection={{ xs: "column", sm: "row" }}
      gap={5}
      sx={{ marginBottom: "20px" }}
    >
      {" "}
      <Grid
        borderRadius={"5px"}
        boxShadow={5}
        xs={10}
        sm={4}
        md={3}
        component={"img"}
        src={image}
        sx={{ display: { xs: "block", sm: "none" } }}
      />
      <Grid xs={10} sm={6}>
        <Typography variant="h6" sx={{ marginY: "10px" }}>
          Teacher {name}
        </Typography>
        <Typography>{caption}</Typography>
      </Grid>{" "}
      <Grid
        borderRadius={"5px"}
        boxShadow={5}
        xs={10}
        sm={3}
        component={"img"}
        src={image}
        sx={{ display: { xs: "none", sm: "block" } }}
      />
    </Grid>
  );
};
