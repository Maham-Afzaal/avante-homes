import React from "react";
import Container from "@/components/common/Container";

import {
  Stack,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const steps = [
  {
    title: "Let's chat",
    description:
      "Get in touch to tell us about your current home finance situation. We’d love to hear about your home building dreams and what you’d like to achieve – it’s your home after all, tell us what matters to you.    ",
  },
  {
    title: "Finance health check",
    description:
      "We’ve got an in-house team of award-winning finance experts from Resolve Finance who can help you navigate the finance world. Complete a finance health check with them and they’ll shop around for the best interest rates and loans that you qualify for, so you don’t have to.",
  },
  {
    title: "Get started!",
    description:
      "Reap the rewards of the best deal or savings plan in the market, knowing you’re backed by one of Australia’s leaders in finance. We can get started on finding a home that’s more you, in a location you love.",
  },
];

const ThreeSteps = () => {
  return (
    <Box width={"100%"} sx={{ position: "relative" }} mt={8}>
      <Box
        component="img"
        src="HorizontalDotLine.svg"
        alt="Background"
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          top: "80px",
          left: "49%",
          width: {sm:'100%',md:"100vw"},
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />
      {/* <Container> */}
        <Stack width={"100%"} gap={4} sx={{ position: "relative", zIndex: 2 }}>
          <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Stack
              sx={{
                width: "100%",
                maxWidth: "846px",
                zIndex: 99,
                position: "relative",
              }}
            >
              <Typography
                color={"common.black"}
                variant="h3"
                component={"h2"}
                textAlign={"center"}
                fontSize={{ xs: "32px", sm: "36px", md: "38px", lg: "42px" }}
              >
                Where to start? 3 easy steps.
              </Typography>
            </Stack>
          </Stack>
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            position={"relative"}
            zIndex={2}
          >
            <Box
              component="img"
              src="VerticalDotLine.svg"
              alt="Background"
              sx={{
                display: { xs: "block", sm: "none" },
                position: "absolute",
                top: 0,
                left: "50%",
                width: "100vw", 
                transform: "translateX(-50%)",
                zIndex: -1,
              }}
            />

            {steps.map((item, index) => (
              <Grid item xs={12} sm={4} key={index} position={"relative"}>
                <Box
                  mt={{ xs: 1,md:2 }}
                  sx={{
                    p: { xs: 0,  md: 2 , lg: 4 },
                  }}
                >
                  <Stack gap={2} alignItems={{ xs: "center", sm: "start" }}>
                    <Stack
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{
                        border: "1px solid #ECECEC",
                        borderRadius: "20px",
                        width: "68px",
                        height: "68px",
                        boxShadow: "0px 20px 40px 0px #6861661A",
                        background:
                          "linear-gradient(336.71deg, #FFFFFF -1.85%, #FFFFFF 92.81%)",
                      }}
                      mb={{ xs: 0, sm: 2 }}
                    >
                      <Stack
                        width={"20px"}
                        height={"20px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Typography
                          className="font-montserrat"
                          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                          fontWeight={600}
                          variant="body2"
                          color={"secondary"}
                        >
                          {index + 1}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Typography
                      className="font-montserrat"
                      color={"common.black"}
                      variant="h3"
                      component={"h3"}
                      fontSize={"26px"}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className="font-montserrat"
                      color={"text.secondary"}
                      variant="subtitle1"
                      component={"p"}
                      fontSize={"14px"}
                      textAlign={{ xs: "center", sm: "start" }}
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      {/* </Container> */}
    </Box>
  );
};

export default ThreeSteps;
