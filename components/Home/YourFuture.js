import { Stack, Box, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import background from "../../public/home_background.svg";
import backgroundMobile from "../../public/home_background_mobile.svg";
import MuiContainer from "@mui/material/Container";
import Container from "../common/Container";
import SearchFrom from "./SearchFrom";
import HomeCouple1 from "@/assets/icons/HomeCouple1";
import HomeCouple2 from "@/assets/icons/HomeCouple2";

const location = [
  { value: "new-york", label: "New York" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "phoenix", label: "Phoenix" },
];

const YourFuture = () => {
  return (
    <Box pt={{ xs: 6, md: 10 }} pb={0}>
      <Stack>
        <Stack>
          <Typography
            className="font-montserrat"
            color={"primary"}
            variant="h1"
            component={"h1"}
            textAlign={"center"}
            fontWeight={600}
            fontSize={{ xs: "42px", sm: "60px", md: "70px", lg: "80px" }}
          >
            Invest in <br /> Your Future
          </Typography>
          <Typography
            fontSize={{ xs: "16px" }}
            fontWeight={400}
            variant="subtitle1"
            textAlign={"center"}
            color="common.black"
          >
            Moving Forward With You & For You
          </Typography>
        </Stack>
        <Stack>
          <MuiContainer
            sx={{
              maxWidth: { lg: "1440px" },
              p: "0px !important",
              position: "relative",
              width:'99%'
            }}
          >
            <Box
              sx={{
                height: { xs: "450px", sm: "400px" },
                background: {
                  // xs: `url(${backgroundMobile.src}) center`,
                  sm: `url(${background.src}) bottom no-repeat`,
                },
                backgroundPosition: { xs: "0 0", md: "150px 40px" },
              }}
            >
              <Container>
                <Stack
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  height={"100%"}
                  width={"100%"}
                >
                  <Stack
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                    height={"100%"}
                    width={"100%"}
                  >
                    <SearchFrom />
                  </Stack>
                </Stack>
              </Container>
              <Divider
                sx={{
                  position: "absolute",
                  bottom: "27px",
                  width: "100%",
                  borderColor: "#DDE2F2",
                  zIndex: 9,
                  borderWidth: "1px",
                }}
              />
            </Box>
            <Box
              width="222px"
              height="431px"
              sx={{
                position: "absolute",
                bottom: "27px",
                left: 0,
                display: { xs: "none", md: "block" },
                transition: "0.5s all",
              }}
              className="slideInLeft"
            >
              <HomeCouple1 />
            </Box>
            <Box
              width="309px"
              height="432px"
              sx={{
                position: "absolute",
                bottom: "27px",
                right: 0,
                display: { xs: "none", md: "block" },
              }}
              // className="slideInRight"
            >
              <HomeCouple2 />
            </Box>
          </MuiContainer>
        </Stack>
        <Stack display={{ xs: "flex", sm: "none" }}>
          <Box
            sx={{
              height: "260px",
              width:'99%',
              background: {
                xs: `url(${backgroundMobile.src}) bottom no-repeat`,
                sm: `none`,
              },
              position: "relative",
              // backgroundPosition: { xs: "0 0", md: "150px 40px" },
            }}
          >
            <Divider
              sx={{
                position: "absolute",
                bottom: "0px",
                width: "100%",
                borderColor: "#DDE2F2",
                zIndex: 9,
                borderWidth: "1px",
              }}
            />
            <Box
              width="104px"
              height="201px"
              sx={{ position: "absolute", bottom: "0px", left: 24 }}
            >
              <HomeCouple1 />
            </Box>
            <Box
              width="144px"
              height="201px"
              sx={{ position: "absolute", bottom: "0px", right: 24 }}
            >
              <HomeCouple2 />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default YourFuture;
