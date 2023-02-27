import Grid from "@mui/material/Grid";
import img1 from "../images/img1_art.jpg";
import img2 from "../images/img2_playRoom.jpg";
import img3 from "../images/img3_feelingsArt.jpg";
import img4 from "../images/img4_christmas.jpg";

export const Banner = () => {
  return (
    <Grid
      //image banner
      xs={12}
    >
      <Grid component={"img"} sx={{ width: "25%" }} src={img3}></Grid>
      <Grid component={"img"} sx={{ width: "25%" }} src={img2}></Grid>
      <Grid component={"img"} sx={{ width: "25%" }} src={img1}></Grid>
      <Grid component={"img"} sx={{ width: "25%" }} src={img4}></Grid>
    </Grid>
  );
};
