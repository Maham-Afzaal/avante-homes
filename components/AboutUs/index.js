import React from "react";
import { Stack, Box } from "@mui/material";
import OurCommitment from "./OurCommitment";
import WhyChooseUs from "../ClientExperience/WhyChooseUs";
import Container from "../common/Container";
import AboutUsDetail from "../ClientExperience/AboutUs";
const AboutUs = () => {
  return (
    <Stack>
      <Stack>
        <Container>
          <AboutUsDetail />
        </Container>
        <Box pt={{ xs: 14, md: 10}} pb={0}>
          <OurCommitment />
        </Box>
        <Container>
          <Box pt={{ xs: 6, md: 10 }} pb={0}>
            <WhyChooseUs />
          </Box>
        </Container>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
