import { Stack, Box } from "@mui/material";
import React from "react";
import AboutUs from "./AboutUs";
import Container from "../common/Container";
import ClientStories from "./ClientStories";
import ClientPortal from "./ClientPortal";
import OurCommitment from "./OurCommitment";
import WhyChooseUs from "./WhyChooseUs";

const ClientExperience = () => {
  return (
    <Stack>
      <Stack>
        <Container>
          <AboutUs />
          <ClientStories />
        </Container>
        <ClientPortal />
        <Box pt={{ xs: 18, md: 12, md: 0 }} pb={0}>
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

export default ClientExperience;
