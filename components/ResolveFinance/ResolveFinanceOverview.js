import React from "react";
import { Grid, Box, Typography, Stack, Paper, Button } from "@mui/material";
import Image from "next/image";
import Container from "../common/Container";
import background from "../../public/resolveFinance-background.svg";
import backgroundMobile from "../../public/resolveFinance-mobileBG.svg";
import backgroundInverted from "../../public/resolveFinance-invertedBG.svg";
import Selected from "../common/Select";
import { useState } from "react";
import TextField from "../common/TextField";

const ResolveFinanceOverview = () => {
  const [options, setoptions] = useState("");

  const optionsList = [
    { value: "options1", label: "options 1" },
    { value: "options2", label: "options 2" },
    { value: "options3", label: "options 3" },
  ];

  return (
    <Box
      sx={{
        background: {
          xs: `url(${backgroundMobile.src}) repeat-x`,
          sm: "none",
        },
      }}
    >
      <Box
        mt={6}
        pt={{ xs: 6, sm: 18 ,md:22 }}
        pb={{ xs: 6, md: 0 }}
        sx={{
          // height: '1388px',
          background: {
            xs: "none",
            sm: `url(${background.src}) top no-repeat`,
          },
        }}
      >
        <Box>
          <Container>
            <Stack pt={{ xs: 0, sm: 6, md: 6 }} pb={{ xs: 3, sm: 4, md: 6 }}>
              <Stack gap={{ xs: 4, md: 12 }} position={"relative"}>
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <Grid item xs={12} sm={6} position={"relative"}>
                    <Stack spacing={2} sx={{ pr: { xs: 0, md: 4 } }}>
                      <Box
                        component="img"
                        src="/HorizontalBirds.svg"
                        alt="HorizontalBirds"
                        sx={{
                          position: "absolute",
                          top: "8%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "100%",
                          maxWidth: "315px",
                          height: "auto",
                          zIndex: "2",
                          display: { xs: "block", sm: "none" },
                        }}
                      />
                      <Typography
                        className="font-montserrat"
                        fontSize="32px"
                        fontWeight={500}
                        variant="body2"
                        color={"text"}
                        pt={{ xs: 4 }}
                      >
                        Construction finance Perth & South West
                      </Typography>
                      <Box sx={{ display: { xs: "block", sm: "none" } }}>
                        <Image
                          src="/ResolveFinance2.png"
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Typography>
                      <Typography
                        color={"text.secondary"}
                        variant="subtitle1"
                        component={"p"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    <Image
                      src="/ResolveFinance2.png"
                      alt="ResolveFinance2"
                      width={591}
                      height={400}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Grid>
                  <Box
                    component="img"
                    src="/ThreeBirds.svg"
                    alt="ThreeBirds"
                    sx={{
                      position: "absolute",
                      top: {
                        xs: "26%",
                        sm: "calc(-8% - 14px )",
                        // md: "calc(-8% - 24px )",
                      },
                      left: 0,
                      width: { xs: "70px", md: "100%" },
                      maxWidth: "108px",
                      height: "auto",
                      zIndex: "2",
                      display: { xs: "none", sm: "block" },
                    }}
                  />
                </Grid>

                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  justifyContent={"center"}
                  position={"relative"}
                  mb={{ xs: 4, md: 8 }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ display: { xs: "none", sm: "block" } }}
                    position={"relative"}
                  >
                    <Image
                      src="/ResolveFinance3.png"
                      alt="First Home FinanceOptionsance"
                      width={591}
                      height={400}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} position={"relative"} zIndex={2}>
                    <Stack spacing={2} sx={{ pr: { xs: 2, md: 4 } }}>
                      <Typography
                        className="font-montserrat"
                        fontSize="32px"
                        fontWeight={500}
                        variant="body2"
                        color={"text"}
                      >
                        Who are Resolve Finance?
                      </Typography>
                      <Box sx={{ display: { xs: "block", sm: "none" } }}>
                        <Image
                          src="/ResolveFinance3.png"
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Typography>
                      <Typography
                        color={"text.secondary"}
                        variant="subtitle1"
                        component={"p"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                        width: { xs: "83px", md: "20%" },
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
                      top: { xs: "60%", md: "60%" },
                      right: 10,
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
        </Box>
      </Box>
      <Box
        // mt={6}
        // pt={{ xs: 6, sm: 5 }}
        // pt={{ xs: 6, sm: 22 }}
        pb={{ xs: 6, md: 20 }}
        sx={{
          // height: '1388px',
          background: {
            xs: "none",
            sm: `url(${backgroundInverted.src}) top no-repeat`,
          },
          zIndex: 4,
        }}
      >
        <Container>
          <Stack
            height={"100%"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Grid
              container
              alignItems={{ xs: "center", md: "center" }}
              justifyContent={{ xs: "center", md: "space-between" }}
              spacing={{ xs: 4, md: 12 }}
              // height={"100%"}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  className="font-montserrat"
                  color={"common.black"}
                  variant="h3"
                  component={"h2"}
                  fontSize={{ xs: "32px", sm: "34px", md: "38px", lg: "42px" }}
                  pt={{ xs: 0, md: 8 }}
                >
                  Finance Health Check
                </Typography>
                <Stack pt={{ xs: 2, md: 2 }}>
                  <Typography
                    color={"text.secondary"}
                    variant="subtitle1"
                    component={"p"}
                  >
                    We understand the unique needs and aspirations of first home
                    buyers, and we're here to provide you with the guidance and
                    support you need to turn your vision into reality.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack>
                  <form>
                    <Paper
                      sx={{
                        p: { xs: 3, md: 6 },
                        maxWidth: { xs: "100%", md: "920px" },
                        borderRadius: "10px",
                        boxShadow: "0px 20px 40px 0px #CDCDCD40",
                      }}
                    >
                      <Stack gap={1}>
                        <Stack direction={{ xs: "column", md: "row" }}>
                          <Typography
                            className="font-montserrat"
                            color={"common.black"}
                            variant="h3"
                            component={"h3"}
                            fontSize={"26px"}
                            mb={1}
                          >
                            Get Your Finance Health Check
                          </Typography>
                        </Stack>
                        <Stack gap={1}>
                        <Stack direction={{xs:"column", sm:"row"}} gap={1}>
                            <TextField
                              id="firstName"
                              label="First Name"
                              fullWidth={true}
                              type="text"
                            />
                            <TextField
                              id="LastName"
                              label="Last Name"
                              fullWidth={true}
                              type="text"
                            />
                          </Stack>

                          <TextField
                            id="password"
                            label="Password"
                            fullWidth={true}
                            type="password"
                          />
                          <TextField
                            id="phoneNumber"
                            label="Phone Number"
                            fullWidth={true}
                            type="number"
                          />

                          <Selected
                            label="I am looking to build in Perth"
                            options={optionsList}
                            value={options}
                            onChange={(event) => setoptions(event.target.value)}
                          />
                          <TextField
                            id="helpText"
                            label="How can we help you?"
                            multiline
                            rows={2}
                            fullWidth={true}
                            type="text"
                          />
                          <Stack
                            direction={{ xs: "column", sm: "row" }}
                            justifyContent={"space-between"}
                            alignItems={{ xs: "flex-start", sm: "center" }}
                            spacing={2}
                            mt={2}
                          >
                            <Button
                              sx={{ minWidth: "153px", minHeight: "44px" }}
                              variant="contained"
                              color="secondary"
                              size="large"
                            >
                              Submit
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Paper>
                  </form>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default ResolveFinanceOverview;
