import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Container from "../common/Container";

const eligibilityCriteria = [
  {
    icon: "/yellowTick.svg", 
    text: "Are 18 years or over",
  },
  {
    icon: "/PinkTick.svg", 
    text: "Are an Australian citizen or permanent resident",
  },
  {
    icon: "/GreenTick.svg",
    text: "Are an Australian citizen or permanent resident",
  },
];

const EligibilityCard = ({ icon, text }) => (
  <Paper
    sx={{
      bgcolor: "#FFFFFF",
      p: 2,
      borderRadius: 2,
      boxShadow: "0px 20px 40px 0px #C6C6C640 ",
    }}
  >
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        src={icon}
        alt={icon}
        sx={{
          width: { xs: "61px", sm: "70px" },
          height: { xs: "61px", sm: "70px" },
        }}
      />
      <Typography color={"text.secondary"} variant="subtitle1" component={"p"}>
        {text}
      </Typography>
    </Stack>
  </Paper>
);

const EligibilitySection = () => (
    <Box pt={{ xs: 5, md: 10 }} pb={0}>
      <Container>
        <Stack alignItems={{ xs: "left", sm: "center" }}>
          <Typography
            className="font-montserrat"
            fontSize="32px"
            fontWeight={500}
            variant="body2"
            color={"text"}
            pt={{ xs: 0 ,md:4 }}
            width={{ xs: "80%", sm: "80%",md: "50%" }}
            textAlign={{ xs: "left", sm: "center" }}
          >
            Who is eligible for the First Home Owners Grant in WA?
          </Typography>
          <Typography
            color={"text.secondary"}
            variant="subtitle1"
            component={"p"}
            mt={{ xs: 3 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            You may qualify for the First Home Buyers Grant if you:
          </Typography>
        </Stack>
        <Stack mt={{xs:4,sm:7}}>
        <Grid container spacing={{xs:2,sm:3,md:4}} justifyContent="center">
          {eligibilityCriteria.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EligibilityCard icon={item.icon} text={item.text} />
            </Grid>
          ))}
        </Grid>
        </Stack>
      </Container>
    </Box>
);

export default EligibilitySection;
