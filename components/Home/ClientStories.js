import { Stack, Typography, Box, IconButton, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import background from "../../public/client-story-background.svg";
import FlyingBirdIcon from "@/assets/icons/FlyingBirdIcon";
import MuiContainer from "@mui/material/Container";
import Container from "../common/Container";
const ClientStories = () => {
  const data = [
    {
      image: "/aboutus2.jpeg",
      description: `As first time home-owners and first time builders the most
                    important thing for us was building with someone we could
                    trust and who we knew would support us along the way.
                    Avante gave us this reassurance and they was true to their
                    word - helped us at every step of the journey and we are
                    so grateful for their guidance.`,
      name: "Ben & Jerry",
    },
    {
      image: "/aboutus2.jpeg",
      description: `We were impressed with Avante's professionalism and
                    attention to detail from the initial consultation to the
                    final walk-through. Their team was always responsive to our
                    questions and concerns, and they made the entire process
                    seamless.`,
      name: "Emily & Ryan",
    },
    {
      image: "/aboutus2.jpeg",
      description: `Avante's commitment to quality and customer satisfaction is
                    unparalleled. They took the time to understand our needs and
                    preferences, and worked tirelessly to bring our vision to
                    life. We couldn't be happier with our new home!`,
      name: "Sarah & Mike",
    },
    {
      image: "/aboutus2.jpeg",
      description: `We were blown away by Avante's creativity and expertise.
                    They helped us design a home that perfectly captures our
                    personal style, and their attention to detail is evident in
                    every aspect of the build.`,
      name: "John & Lisa",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < data.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const isLastSlide = currentSlide === data.length - 1;
  const isFirstSlide = currentSlide === 0;

  return (
    <Box
      pt={{ xs: 6, md: 10 }}
      pb={0}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{ maxWidth: { lg: "1440px" }, position: "relative", width: "100%" }}
      >
        <Box display={{ md: "flex", xs: "none" }}>
          <Box
            sx={{
              position: "absolute",
              // top: 0,
              left: 100,
              color: "primary.main",
              zIndex: 9,
              width: "104px",
              height: "93px",
            }}
          >
            <FlyingBirdIcon />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 90,
              left: 60,
              zIndex: 9,
              color: "#5A97D2",
              width: "60px",
              height: "53px",
            }}
          >
            <FlyingBirdIcon />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 150,
              left: 115,
              color: "primary.main",
              zIndex: 9,
              color: "#5A97D2",
              width: "48px",
              height: "44px",
            }}
          >
            <FlyingBirdIcon />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 180,
              left: 80,
              zIndex: 9,
              color: "primary.main",
              width: "28px",
              height: "25px",
            }}
          >
            <FlyingBirdIcon />
          </Box>
        </Box>
        <Container>
          <Stack sx={{ position: "relative", zIndex: 99 }}>
            <Stack
              direction={"row"}
              gap={3}
              alignItems={"center"}
              justifyContent={{ xs: "center", md: "center" }}
              width={"100%"}
            >
              <Box display={{ md: "flex", xs: "none" }}>
                <IconButton
                  aria-label="back"
                  sx={{
                    bgcolor: isFirstSlide ? "#F0F7FD" : "secondary.main",
                    color: isFirstSlide ? "#AEC3D5" : "common.white",
                    width: "60px",
                    height: "60px",
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "common.white",
                    },
                  }}
                  onClick={prevSlide}
                  // disabled={isFirstSlide}
                >
                  <WestIcon />
                </IconButton>
              </Box>
              <Typography
                color={"common.black"}
                variant="h3"
                component={"h2"}
                textAlign={"center"}
                fontSize={{ xs: "32px", sm: "36px", md: "42px", lg: "48px" }}
              >
                Client Stories
              </Typography>
              <Box display={{ md: "flex", xs: "none" }}>
                <IconButton
                  aria-label="next"
                  sx={{
                    bgcolor: isLastSlide ? "#F0F7FD" : "secondary.main",
                    color: isLastSlide ? "#AEC3D5" : "common.white",
                    width: "60px",
                    height: "60px",
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "common.white",
                    },
                  }}
                  onClick={nextSlide}
                  // disabled={isLastSlide}
                >
                  <EastIcon />
                </IconButton>
              </Box>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              my={{ xs: 2, md: 3 }}
            >
              <Paper
                sx={{
                  p: { xs: 2, md: 4 },
                  maxWidth: { xs: "100%", md: "920px" },
                  borderRadius: "10px",
                  boxShadow: "0px 20px 40px 0px #CDCDCD40",
                }}
              >
                <Stack direction={{ sm: "column", md: "row" }} gap={3}>
                  <Stack alignItems={"center"} justifyContent={"center"}>
                    <Stack width={348} height={380}>
                      <Image
                        src={data[currentSlide].image}
                        alt="about us"
                        width={348}
                        height={380}
                        // layout="responsive"
                        style={{ objectFit: "cover", borderRadius: "5px" }}
                      />
                    </Stack>
                  </Stack>
                  <Stack
                    px={{ xs: 1, md: 4 }}
                    py={1}
                    sx={{
                      background: {
                        // xs: `url(${backgroundMobile.src}) center`,
                        xs: `url(${background.src}) center no-repeat`,
                      },
                      // backgroundPosition: { xs: "0 0", md: "0 -135px" },
                    }}
                  >
                    <Stack
                      direction={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      height={"100%"}
                    >
                      <Stack>
                        <Typography
                          fontSize={{ xs: "16px", sm: "17px", md: "18px" }}
                          variant="subtitle1"
                          component={"p"}
                          fontStyle={"italic"}
                          color="text.secondary"
                          textAlign={{ xs: "center", md: "left" }}
                          lineHeight={"32.4px"}
                        >
                          {data[currentSlide].description}
                        </Typography>
                        <Typography
                          color={"text.primary"}
                          textAlign={{ xs: "center", md: "left" }}
                          variant="subtitle1"
                          component={"p"}
                          width={"100%"}
                          fontSize={"26px"}
                          fontWeight={500}
                          my={1}
                        >
                          {data[currentSlide].name}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
            <Stack
              direction={"row"}
              gap={3}
              alignItems={"center"}
              justifyContent={{ xs: "center", md: "center" }}
              width={"100%"}
              display={{ xs: "flex", md: "none" }}
              mt={2}
            >
              <Box>
                <IconButton
                  aria-label="back"
                  sx={{
                    bgcolor: isFirstSlide ? "#F0F7FD" : "secondary.main",
                    color: isFirstSlide ? "#AEC3D5" : "common.white",
                    width: "49px",
                    height: "49px",
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "common.white",
                    },
                  }}
                  onClick={prevSlide}
                  // disabled={isFirstSlide}
                >
                  <WestIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  aria-label="next"
                  sx={{
                    bgcolor: isLastSlide ? "#F0F7FD" : "secondary.main",
                    color: isLastSlide ? "#AEC3D5" : "common.white",
                    width: "49px",
                    height: "49px",
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "common.white",
                    },
                  }}
                  onClick={nextSlide}
                  // disabled={isLastSlide}
                >
                  <EastIcon />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default ClientStories;
