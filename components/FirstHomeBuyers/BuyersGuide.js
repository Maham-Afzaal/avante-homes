import React from "react";
import { Typography, Box, Stack, Grid, Paper, Button } from "@mui/material";
import { useState } from "react";
import TextField from "../common/TextField";
import Selected from "../common/Select";

const FirstBuyerPortal = () => {
  const [options, setoptions] = useState("");

  const optionsList = [
    { value: "options1", label: "options 1" },
    { value: "options2", label: "options 2" },
    { value: "options3", label: "options 3" },
  ];
  return (
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
          <Stack direction="column">
            <Typography
              className="font-montserrat"
              color={"common.black"}
              variant="h3"
              component={"h3"}
              fontSize={"26px"}
              mb={1}
            >
              See if you qualify
            </Typography>
            <Typography
              color={"secondary"}
              variant="subtitle1"
              component={"p"}
              fontSize={{ xs: "16px", md: "18px" }}
            >
              YOUR DETAILS
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Stack direction={{ xs: "column", sm: "row" }} gap={1}>
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
                sx={{ minWidth: "153px", minHeight: "44px", boxShadow: "none" }}
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
  );
};
const BuyersGuide = () => {
  return (
    <Box pt={{ xs: 6, md: 12 }} pb={0}>
      <Stack height={"100%"} alignItems={"center"} justifyContent={"flex-end"}>
        <Grid
          container
          alignItems={{ xs: "center", md: "center" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          spacing={{ xs: 4, md: 12 }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              className="font-montserrat"
              component={"h1"}
              fontWeight={600}
              variant="h2"
              fontSize={{ xs: "42px", sm: "48px", md: "54px", lg: "60px" }}
              color={"primary"}
            >
              First Home Buyers Grant Perth, WA.
            </Typography>
            <Stack sx={{ display: { xs: "block", sm: "none" } }} mt={6} mb={2}>
              <FirstBuyerPortal />
            </Stack>
            <Stack pt={{ xs: 2, md: 2 }}>
              <Typography
                color={"text.secondary"}
                variant="subtitle1"
                component={"p"}
              >
                At Avante Homes, our priority is letting builders excel at what
                they do best: building exceptional homes. We understand the
                importance of effective communication and bridging the gap
                between client vision and builder expertise. Throughout the
                homebuilding journey, our dedicated team ensures an outstanding
                experience for clients, while our builders focus on constructing
                high-quality homes.
              </Typography>
              <Typography
                pt={2}
                color={"text.secondary"}
                variant="subtitle1"
                component={"p"}
                display={{ xs: "none", sm: "block" }}
              >
                At Avante Homes, our priority is letting builders excel at what
                they do best: building exceptional homes. We understand the
                importance of effective communication and bridging the gap
                between client vision and builder expertise.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Stack>
              <FirstBuyerPortal />
            </Stack>{" "}
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default BuyersGuide;
