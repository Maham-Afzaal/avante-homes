import React from "react";
import { Typography, Box, Stack, Grid, Paper, Button } from "@mui/material";
import Container from "@/components/common/Container";
import Image from "next/image";
import BuyersGuide from "./BuyersGuide";
import EligibilitySection from "./EligibilitySection";

const PPA = () => {
  return (
    <Box pt={{ xs: 6, md: 15 }} pb={0}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent={"center"}
        position={"relative"}
        mb={{ xs: 4, md: 8 }}
      >
        <Grid item xs={12} sm={6} position={"relative"} zIndex={2}>
          <Stack spacing={2} sx={{ pr: { xs: 0, sm: 4, md: 12 } }}>
            <Typography
              className="font-montserrat"
              fontSize="32px"
              fontWeight={500}
              variant="body2"
              color={"text"}
            >
              Preparation of Plans Agreement (PPA)
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <Image
                src="/firstHomeBuyer.png"
                alt="Low deposit home loans"
                width={592}
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
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: { xs: "none", sm: "block" } }}
          position={"relative"}
        >
          <Image
            src="/firstHomeBuyer.png"
            alt="First Home FinanceOptionsance"
            width={591}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const FirstHomeBuyers = () => {
  return (
    <Stack>
      <Stack>
        <Container>
          <BuyersGuide />
        </Container>
        <EligibilitySection />
        <Container>
          <PPA />
        </Container>
      </Stack>
    </Stack>
  );
};

export default FirstHomeBuyers;
