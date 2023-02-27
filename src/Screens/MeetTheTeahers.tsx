import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { LtrIntro } from "../Components/ltrIntro";
import { RtlIntro } from "../Components/rtlIntro";
import vuyo from "../images/vuyo.jpg";
import nonza from "../images/nonza.jpg";
import minah from "../images/minah.jpg";
import ruru from "../images/ruru.jpg";
import fifi from "../images/fifi.jpg";
import caylynn from "../images/caylynn.jpg";
import margaret from "../images/margaret.jpg";
export const MeetTheTeachers = () => {
  return (
    <Grid
      container
      alignContent={"center"}
      justifyContent={"center"}
      xs={12}
      flexDirection={"column"}
    >
      <Grid
        container
        item
        xs={8}
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection="column"
        sx={{ marginBottom: "50px", marginTop: "20px" }}
      >
        <Typography variant="h5">Team work makes the Dream work!</Typography>
        <Typography>Time to meet the Tiny Wonders' Dream team: </Typography>
      </Grid>
      <LtrIntro
        image={vuyo}
        name="Vuyo"
        caption=" Meet Teacher Vuyo, Teacher Vuyo is our 0-2 year old class' teacher and
          our baby whisperer. When your little babies are in Teacher Vuyo's care
          they are surrounded by love, they are taught in a fun way and they are
          nurtured with care. Their smiles and laughter can be seen and heard
          from far away. Our 0-2 year old class is our little sprouts class as
          they are little seeds that are planted with us upon arrival and with
          Teacher Vuyo's loving hands they start to grow, learn and develop!"
      />
      <RtlIntro
        image={nonza}
        name={"Nonza"}
        caption="Meet Teacher Nonza, Teacher Nonza is our other 0-2 year old class teacher and she is always ready for what the day brings!
        We have seen her dance, we have heard her sing and laugh, we have seen her love and our babies are in good hands when she is near! Always full of creative ideas and helping wherever she can!"
      />
      <LtrIntro
        image={minah}
        name="Minah"
        caption="Meet Teacher Minah, Teacher Minah teaches our 3-4 year old kids!
Teacher Minah is creative and fun, the most beautiful artworks from little Picasso's are made in this classroom! 
Teacher Minah is passionate about teaching and about her children! Taking her role seriously as being the best teacher she can be, where else would you like your kiddie to be than with her!"
      />
      <RtlIntro
        image={ruru}
        name="Ruru"
        caption="Meet Teacher Ruru, Teacher Ruru teaches our 2-3 year old babies.
This group keeps you on your toes as they are developing language at a fast pace, potty training and the development / realization that something like sharing with friends exists!
Creativity, dedication, flexibility and patience is brought into the classroom with Teacher Ruru!"
      />
      <LtrIntro
        image={fifi}
        name="Fifi"
        caption="Meet Teacher Fifi, Teacher Fifi is our amazing grade R teacher!
Teacher Fifi gracefully and lovingly helps our grade Rs become more structured in preparation for grade 1. She helps them develop physically, cognitively, creatively, socially and emotionally. And this way builds a solid foundation for these little ones to enter big school! 
Teacher Fifi uses multi sensory methods to teach and I have only seen excited and happy faces enter her classroom! You will surely miss out if your child does not finish off preschool under Teacher Fifi's wings"
      />
      <RtlIntro
        image={caylynn}
        name={"Cay-Lynn"}
        caption="Meet Teacher Cay-Lynn, our grade 1 tutor class teacher! Yes, this is new and very exciting!
      This year we experienced a need to start a tutor class where we teach Grade 1 following a registered homeschool curriculum as the first step towards a dream of having a tutor centre for primary school children with the need of a smaller classroom.
      Without hesitating Teacher Cay-Lynn jumped in and took our class of 3 boys in her competent hands and it has been absolutely wonderful to see and experience! We have a quiet classroom set up for learning and we look forward to see how these little guys flourish!"
      />{" "}
      <LtrIntro
        image={margaret}
        name="Margaret"
        caption="Meet Margaret, Margaret is our queen of the kitchen and behind the scenes hero, she makes sure all our little ones are fed and she is our right hand in every classroom.
        Kind, helpful and always there!"
      />
    </Grid>
  );
};
