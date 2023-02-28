import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import monique from "../images/monique.jpeg";

export const PrincipalIntro = () => {
  return (
    <Grid
      container
      xs={12}
      sm={10}
      md={8}
      alignItems={{ xs: "center", md: "start" }}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Grid // image container for IOS not to bomb out
        item
        sx={{ margin: { xs: 0, md: "15px" } }}
        xs={11}
        sm={5}
      >
        <Grid
          borderRadius={"25px"}
          boxShadow={5}
          sx={{ margin: { xs: 0, md: "15px" }, width: "100%" }}
          component={"img"}
          src={monique}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        textAlign={{ xs: "center", md: "start" }}
        sx={{ marginTop: "15px" }}
      >
        <Typography variant="h5" sx={{ marginBottom: "15px" }}>
          A Word from our Principal
        </Typography>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolor
          eum quod itaque accusantium adipisci officia, quia error ea,
          exercitationem ipsa amet modi quis. Labore consequuntur nulla itaque
          excepturi minus. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit quae aut nemo expedita hic aliquid, placeat distinctio
          enim facilis non quas animi amet repudiandae assumenda quisquam
          laboriosam natus rerum repellendus. Deserunt iure beatae sapiente ipsa
          tenetur est recusandae officia sit similique, saepe sunt! Magni,
          maiore
        </Typography>
      </Grid>
    </Grid>
  );
};
