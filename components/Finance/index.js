import React from "react";
import { Typography, Box, Stack, Grid } from "@mui/material";
import Container from "@/components/common/Container";
import ThreeSteps from "./ThreeSteps";
import FinanceOptions from "./FinanceOptions";
import FinancePortal from "./FinancePortal";

const Heading = ({ direction }) => {
  return (
    <Box pt={{ xs: 6, md: 10 }} pb={0}>
      <Stack alignItems={"center"} justifyContent={"center"} gap={2}>
        <Typography
          className="font-montserrat"
          component={"h1"}
          fontWeight={600}
          variant="h2"
          width={{ xs: "100%", md: "65%" }}
          fontSize={{ xs: "42px", sm: "48px", md: "54px", lg: "60px" }}
          color={"primary"}
          textAlign={"center"}
        >
          Home finance & first home finance
        </Typography>
        <Typography
          color={"text.secondary"}
          textAlign={"center"}
          width={{ xs: "100%", md: "65%" }}
          mt={{ xs: 0, md: 2 }}
        >
          At Avante Homes, our priority is letting builders excel at what they
          do best: building exceptional homes. We understand the importance of
          effective communication and bridging the gap between client vision and
          builder expertise. Throughout the homebuilding journey, our dedicated
          team ensures an outstanding experience for clients, while our builders
          focus on constructing high-quality homes.
        </Typography>
      </Stack>
    </Box>
  );
};
const Finance = () => {
  return (
    <Stack>
      <Stack>
        <Container>
          <Heading />
          <ThreeSteps />
        </Container>
        <Box pt={{ xs: 2, md: 4 }} pb={0}>
          <FinancePortal />
          <FinanceOptions />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Finance;
