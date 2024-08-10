import { Stack, Box, Typography, Grid, Button, Paper } from "@mui/material";
import React from "react";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import TextField from "../common/TextField";
import background from "@/public/about-background-1.svg";
import backgroundMobile from "@/public/about-background-1-mobile.svg";
import Container from "../common/Container";

const ClientPortal = () => {
  return (
    <Box
      pt={{ xs: 60, md: 10 }}
      pb={4}
      height={{ xs: "100%", md: "764px" }}
      sx={{
        background: {
          xs: `url(${backgroundMobile.src}) center`,
          md: `url(${background.src}) center`,
        },
        backgroundPosition: { xs: "0 0", md: "0 -135px" },
      }}
    >
      <Container sx={{ height: "100%" }}>
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
            height={"100%"}
          >
            <Grid item xs={12} md={6}>
              <Typography
                className="font-montserrat"
                color={"common.black"}
                variant="h3"
                component={"h2"}
                fontSize={{ xs: "32px", sm: "34px", md: "38px", lg: "42px" }}
                // textAlign={{ xs: "center", md: "left" }}
              >
                Experiance more with Avante First Homes
              </Typography>
              <Stack pt={{ xs: 2, md: 2 }}>
                <Typography
                  color={"text.secondary"}
                  // textAlign={{ xs: "center", md: "left" }}
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
                      <Stack direction={{ xs: "column", md: "row" }} gap={1}>
                        <Typography
                          className="font-montserrat"
                          color={"common.black"}
                          variant="h3"
                          component={"h3"}
                          fontSize={"26px"}
                          // textAlign={{ xs: "center", md: "left" }}
                        >
                          Client Portal
                        </Typography>
                        <Typography
                          className="font-montserrat"
                          color={"text.secondary"}
                          variant="subtitle1"
                          component={"p"}
                          fontSize={"18px"}
                          // textAlign={{ xs: "center", md: "left" }}
                        >
                          / Transparency you want to see
                        </Typography>
                      </Stack>
                      <Stack gap={1}>
                        <TextField
                          id="email"
                          label="User ID / Email"
                          fullWidth={true}
                          type="text"
                        />
                        <TextField
                          id="password"
                          label="Password"
                          fullWidth={true}
                          type="password"
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
                            Sign In
                          </Button>
                          <Link href={"/"} style={{ textDecoration: "none" }}>
                            <MuiLink
                              variant="subtitle1"
                              component={"span"}
                              sx={{
                                color: "text.secondary",
                                fontWeight: 400,
                                cursor: "pointer",
                                "&:hover": {
                                  color: "secondary.main",
                                },
                              }}
                              underline="hover"
                            >
                              Forgot password
                            </MuiLink>
                          </Link>
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
  );
};

export default ClientPortal;
