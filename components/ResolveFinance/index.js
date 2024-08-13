import React from "react";
import { Typography, Box, Stack, Grid } from "@mui/material";
import Container from "@/components/common/Container";
import Image from "next/image";
import ResolveFinanceOverview from "./ResolveFinanceOverview";

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
          textAlign={{ xs: "left", sm: "center" }}
        >
          Resolve finance, our trusted expert partners
        </Typography>
        <Typography
          color={"text.secondary"}
          width={{ xs: "100%", md: "65%" }}
          mt={{ xs: 0, md: 2 }}
          textAlign={{ xs: "left", sm: "center" }}
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
const WhoAre = () => {
  return (
    <Box pt={{ xs: 4, md: 12 }} pb={0}>
      <Grid container spacing={4} alignItems="center" justifyContent={"center"}>
        <Grid item xs={12} sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <Image
            src="/ResolveFinance1.png"
            alt="Who are Resolve Finance?"
            width={591}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack spacing={2} sx={{ pr: { xs: 0, md: 4 } }}>
            <Typography
              className="font-montserrat"
              fontSize="32px"
              fontWeight={500}
              variant="body2"
              color={"text"}
              pt={{ xs: 4 }}
            >
              Who are Resolve Finance?
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <Image
                src="/ResolveFinance1.png"
                alt="Who are Resolve Finance?"
                width={591}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Typography
              color={"text.secondary"}
              variant="subtitle1"
              component={"p"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography
              color={"text.secondary"}
              variant="subtitle1"
              component={"p"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
const ResolveFinance = () => {
  return (
    <Stack>
      <Stack>
        <Container>
          <Heading />
          <WhoAre />
        </Container>
        <Box pt={{ xs: 2, md: 4 }} pb={0}>
          <ResolveFinanceOverview />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ResolveFinance;
