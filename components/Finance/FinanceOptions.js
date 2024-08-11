import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import Container from "../common/Container";

const FinanceOptions = () => {
  return (
    <Container>
      <Stack sx={{px:{md:3}}}>
      <Typography
        className="font-montserrat"
        color={"common.black"}
        variant="h3"
        component={"h2"}
        textAlign={"center"}
        fontSize={{ xs: "32px", sm: "36px", md: "38px", lg: "42px" }}
        mb={4}
        display={{xs:'none',sm:'block'}}
      >
        Finance options
      </Typography>
      <Stack gap={{ xs: 4, md: 12 }} position={"relative"}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent={"center"}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Image
              src="/FinanceOp1.png"
              alt="First Home FinanceOptionsance"
              width={591}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} sx={{ pr: { xs: 0, md: 4 } }}>
              <Typography
                className="font-montserrat"
                fontSize="32px"
                fontWeight={500}
                variant="body2"
                color={"text"}
              >
                First Home Finance
              </Typography>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Image
                  src="/FinanceOp1.png"
                  alt="First Home FinanceOptionsance"
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
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
          </Grid>
          <Box
            component="img"
            src="/Grass.svg"
            alt="grass"
            sx={{
              mt: 12,
              position: "absolute",
              top: { xs: "23%", md: "17%" },
              right: 0,
              width: { xs: "20%", md: "20%" },
              maxWidth: "165px",
              height: "auto",
              zIndex:'-1',
            }}
          />
        </Grid>

        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent={"center"}
        >
          <Grid item xs={12} md={6}>
            <Stack spacing={2} sx={{ pr: { xs: 2, md: 4 } }}>
              <Typography
                className="font-montserrat"
                fontSize="32px"
                fontWeight={500}
                variant="body2"
                color={"text"}
              >
                My Home Plan
              </Typography>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Image
                  src="/FinanceOp2.png"
                  alt="My Home Plan"
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
            md={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Image
              src="/FinanceOp2.png"
              alt="First Home FinanceOptionsance"
              width={591}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent={"center"}
          position={"relative"}
          mb={{xs:4,md:8}}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "block" } }}
            position={"relative"}
          >
            <Image
              src="/FinanceOp3.png"
              alt="First Home FinanceOptionsance"
              width={591}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </Grid>
          <Grid item xs={12} md={6} position={"relative"} zIndex={2}>
            <Stack spacing={2} sx={{ pr: { xs: 2, md: 4 } }}>
              <Typography
                className="font-montserrat"
                fontSize="32px"
                fontWeight={500}
                variant="body2"
                color={"text"}
              >
                Low deposit home loans
              </Typography>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Image
                  src="/FinanceOp3.png"
                  alt="Low deposit home loans"
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
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
            <Box
              component="img"
              src="/Flower.svg"
              alt="flower"
              sx={{
                mt: 12,
                position: "absolute",
                top: "80%",
                right: 10,
                width: { xs: "20%", md: "20%" },
                maxWidth: "130px",
                height: "auto",
                display: { xs: "block", sm: "none" },
              }}
            />
          </Grid>
          <Box
            component="img"
            src="/Flower.svg"
            alt="flower"
            sx={{
              mt: 12,
              position: "absolute",
              top: { xs: "80%", md: "80%" },
              left: 10,
              width: { xs: "20%", md: "20%" },
              maxWidth: "130px",
              height: "auto",
              display: { xs: "none", sm: "block" },
            }}
          />
        </Grid>
      </Stack>
      </Stack>
    </Container>
  );
};

export default FinanceOptions;
