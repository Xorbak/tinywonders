import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import monique from "../images/monique.jpeg";

export const PrincipalIntro = () => {
  return (
    <Grid
      container
      xs={12}
      md={8}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        component={"img"}
        src={monique}
        sx={{ padding: "15px" }}
      />
      <Grid item xs={12} sm={6} textAlign={{ xs: "center", md: "start" }}>
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
