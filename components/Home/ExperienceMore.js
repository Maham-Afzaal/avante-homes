import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import PlayButtonIcon from "@/assets/icons/PlayButtonIcon";
import GrassImage from "@/assets/icons/GrassImage";
import PinkFlowerWithGrass from "@/assets/icons/PinkFlowerWithGrass";
import LightBlueCloud from "@/assets/icons/LightBlueCloud";

const ExperienceMore = () => {
  return (
    <Box pt={{ xs: 18, md: 12 }} pb={0}>
      <Container>
        <Box position={"relative"}>
          <Box
            width={{ xs: "175px", lg: "251px" }}
            height={{ xs: "77px", lg: "111px" }}
            sx={{
              position: "absolute",
              left: { xs: "-40px", lg: "auto" },
              right: { xs: "auto" },
              top: { xs: "-45px", lg: "-60px" },
              zIndex: 0,
            }}
          >
            <LightBlueCloud />
          </Box>
          <Box
            width={{ xs: "120px", lg: "251px" }}
            height={{ xs: "53px", lg: "111px" }}
            sx={{
              position: "absolute",
              right: { xs: "0px", lg: "52px" },
              top: { xs: "-60px", lg: "120px" },
              zIndex: 0,
            }}
          >
            <LightBlueCloud />
          </Box>

          <Stack
            sx={{ zIndex: 100 }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack>
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
                  Experience More With <br /> Avante Homes
                </Typography>
                <Typography
                  color={"text.secondary"}
                  textAlign={"center"}
                  variant="subtitle1"
                  component={"p"}
                  mt={2}
                >
                  We understand the unique needs and aspirations of first home
                  buyers, and we're here to provide you with the guidance and
                  support you need to turn your vision into reality.
                </Typography>
              </Stack>
              <Stack mt={4}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "846px",
                  }}
                >
                  <Box sx={{ zIndex: 9, position: "relative" }}>
                    <Image
                      src={"/Commitment1.jpeg"}
                      alt="Commitment1"
                      width={846}
                      height={450}
                      layout="responsive"
                      style={{ borderRadius: "10px" }}
                    />
                  </Box>
                  <Box
                    width={{ xs: "36px", sm: "56px", md: "76px", lg: "92px" }}
                    height={{ xs: "36px", sm: "56px", md: "76px", lg: "92px" }}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#F44A51",
                      zIndex: 99,
                    }}
                  >
                    <PlayButtonIcon />
                  </Box>
                  <Box
                    width={{ xs: "58px", lg: "166px" }}
                    height={{ xs: "42px", lg: "117px" }}
                    sx={{
                      position: "absolute",
                      bottom: { lg: "-20px" },
                      left: { xs: "30px", lg: "-220px" },
                      top: { xs: "-40px", lg: "auto" },
                      zIndex: 0,
                    }}
                  >
                    <GrassImage />
                  </Box>
                  <Box
                    width={{ xs: "45px", lg: "130px" }}
                    height={{ xs: "41px", lg: "108px" }}
                    sx={{
                      position: "absolute",
                      bottom: { lg: "60px" },
                      right: { xs: "30px", lg: "-170px" },
                      top: { xs: "-38px", lg: "auto" },
                      zIndex: 0,
                    }}
                  >
                    <PinkFlowerWithGrass />
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceMore;
