import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home";
import { MeetTheTeachers } from "./Screens/MeetTheTeahers";
import { ContactUs } from "./Screens/ContactUs";
import { NavBar } from "./Components/NavBar";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { cottonCandy } from "./Components/themes";
import tinyWondersLogo from "./images/png_ver.png";
import Box from "@mui/material/Box";

function App() {
  return (
    <ThemeProvider theme={cottonCandy}>
      <Grid
        container
        flexDirection={"column"}
        sx={{ backgroundColor: "background.default" }}
      >
        <Grid
          alignSelf={"center"}
          xs={4}
          sm={3}
          md={2}
          container
          justifyContent={"center"}
        >
          <Grid component="img" src={tinyWondersLogo} sx={{ width: "100%" }} />
        </Grid>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/teachers" element={<MeetTheTeachers />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
