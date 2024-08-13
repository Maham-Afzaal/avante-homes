import { Stack, Box, Typography, Grid, Button, Paper } from "@mui/material";
import React from "react";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import TextField from "../common/TextField";
import background from "@/public/finance-background-1.svg";
import backgroundMobile from "@/public/finance-background-mobile.svg";
import Container from "../common/Container";
import Selected from "../common/Select";
import { useState } from "react";

const FinancePortal = () => {
  const [options, setoptions] = useState("");

  const optionsList = [
    { value: "options1", label: "options 1" },
    { value: "options2", label: "options 2" },
    { value: "options3", label: "options 3" },
  ];
  return (
    <Box
      pt={{ xs: 50, md: 0 }}
      pb={{ xs: 6, md: 8 }}
      height={{ xs: "100%", md: "730px" }}
      sx={{
        background: {
          xs: `url(${backgroundMobile.src}) center`,
          md: `url(${background.src}) bottom no-repeat`,
        },
        // backgroundPosition: { xs: "0 0", md: "0 -135px" },
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
  );
};

export default FinancePortal;
