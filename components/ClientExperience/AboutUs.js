import React from "react";
import { Typography, Box, Stack, Grid } from "@mui/material";
import Image from "next/image";

const Heading = ({ direction }) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"flex-start"}
      gap={2}
      width={"100%"}
    >
      <Typography
        className="font-montserrat"
        component={"h1"}
        fontWeight={600}
        variant="h2"
        fontSize={{ xs: "42px", sm: "48px", md: "54px", lg: "60px" }}
        color={"primary"}
        width={"100%"}
      >
        About Us
      </Typography>
      <Typography color={"text.primary"} variant="subtitle1" component={'p'} width={"100%"}>
        Trusted, Easy, Affordable
      </Typography>
    </Stack>
  );
};
const AboutUs = () => {
  return (
    <Box pt={{ xs: 6, md: 10 }} pb={0}>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"flex-start"}
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={5}
      >
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"} justifyContent={"flex-start"} gap={2}>
            <Box display={{ xs: "none", md: "block" }} width={"100%"}>
              <Heading />
            </Box>
            <Typography
              color={"text.secondary"}
              textAlign={{ xs: "center", md: "left" }}
              variant="subtitle1"
              component={'p'}
            >
              At Avante Homes, our priority is letting builders excel at what
              they do best: building exceptional homes. We understand the
              importance of effective communication and bridging the gap between
              client vision and builder expertise. Throughout the homebuilding
              journey, our dedicated team ensures an outstanding experience for
              clients, while our builders focus on constructing high-quality
              homes.
            </Typography>
            <Typography
              color={"text.secondary"}
              textAlign={{ xs: "center", md: "left" }}
              variant="subtitle1"
              component={'p'}
            >
              Our unique approach involves exclusive partnerships with the
              builder, allowing for better control, efficiency, and
              coordination. This streamlined process enables us to allocate
              resources effectively and match client preferences and budget. We
              strive to deliver a tailored experience and maintain strong
              relationships with our builders, providing expertise,
              customisation, and a satisfying client journey.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} width={"100%"}>
          <Box display={{ xs: "block", md: "none" }} mb={4} width={"100%"}>
            <Heading />
          </Box>
          <Box>
            <Image
              src="/aboutus1.svg"
              alt="about us"
              width={532}
              height={546}
              layout="responsive"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
