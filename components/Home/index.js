import React from "react";
import YourFuture from "./YourFuture";
import Container from "../common/Container";
import Assistance from "./Assistance";
import HomeDesigns from "./HomeDesigns";
import ExperienceMore from "./ExperienceMore";
import Box from "@mui/material/Box";
import Services from "./Services";
import Packages from "./Packages";

const HomePage = () => {
  return (
    <div>
      <YourFuture />
      <Container>
        <Assistance />
      </Container>
      <HomeDesigns />
      <Box>
        <ExperienceMore />
      </Box>
      <Services />
      <Packages />
    </div>
  );
};

export default HomePage;
