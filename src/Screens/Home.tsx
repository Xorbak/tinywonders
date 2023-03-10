import { Divider } from "../Components/divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { height } from "@mui/system";
import { Footer } from "../Components/footer";
import { Introduction } from "../Components/introduction";
import { LtrExtraInfo } from "../Components/ltrExtrInfo";
import { PrincipalIntro } from "../Components/principalIntro";
import { RtlExtraInfo } from "../Components/rtlExtraInfo";
import img3 from "../images/img3_feelingsArt.jpg";
import grossMotor from "../images/img5_grossMotor.jpg";
import fineMotor from "../images/img6_fineMotor.jpg";
import { Banner } from "../Components/banner";
import { Events } from "../Components/events";

export const Home = () => {
  return (
    <Grid
      xs={12}
      container
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Banner />
      <Grid
        //welcome message
        xs={12}
        container
        textAlign={{ xs: "center", md: "start" }}
        justifyContent={"center"}
      >
        <Typography sx={{ marginTop: "50px" }} variant="h3">
          Welcome to Tiny Wonders Preschool
        </Typography>
      </Grid>
      <Introduction />
      <Divider />
      <PrincipalIntro />
      <Divider />
      <Grid
        container
        xs={10}
        flexDirection="column"
        justifyContent={"center"}
        alignContent={"center"}
        alignItems="center"
      >
        <Grid xs={12} container justifyContent={"center"}>
          <Typography variant="h4">Learning is a journey</Typography>
        </Grid>

        <RtlExtraInfo
          image={img3}
          title="Generalization of learning"
          caption={
            "  At the end of each theme we have experiment Friday that relates to our learning objectives! After learning about friendship an feelings we looked at what emotions we sometimes feel and how we want to feel. And then we looked at what happens when we feel a certain way and how our emotions bubbles out of us for everyone to see or experience. This can sometimes have an effect on us a individuals and our friends around us. Our little friends know they want to be happy and that they want happiness to bubble out of them, they also know it's okay to feel different ways but to then speak to someone to help them feel better again."
          }
        />
        <LtrExtraInfo
          image={fineMotor}
          title="Fine Motor"
          caption=" Look at these strong fingers! Practicing our finger and hand
                skills by having to manipulate the washing peg and using our
                finger muscles to squeeze the peg open to put it on the little
                washing line!"
        />
        <RtlExtraInfo
          image={grossMotor}
          title="Gross Motor"
          caption=" We love exercising, practicing gross motor skills and taking
                active brain breaks! Did you know that gross motor exercises
                have a positive effect on learning? Not only does it enhance our
                physical development and self esteem - it also sets us up to
                learn better! Our hippocampus is the learning center of our
                brains, the hippocampus increases in size during exercise and
                the pre-frontal cortex is also activated. Therefore, consistent
                exercise and engaging in gross motor activities improve learning
                through improving attention and memory skills!"
        />
      </Grid>
      <Divider />
      <Events />
    </Grid>
  );
};
