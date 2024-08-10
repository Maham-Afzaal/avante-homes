import { Typography, Box, Stack, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <Box pt={{ xs: 6, md: 10 }} pb={0}>
      <Stack alignItems={"center"} justifyContent={"center"} gap={2}>
        <Typography
          className="font-montserrat"
          component={"h1"}
          fontWeight={600}
          variant="h2"
          fontSize={{ xs: "42px", sm: "48px", md: "54px", lg: "60px" }}
          color={"primary"}
          textAlign={"center"}
        >
          The Building Process
        </Typography>
        <Typography
          color={"text.secondary"}
          textAlign={"center"}
          width={{ xs: "100%", md: "65%" }}
          mt={{ xs: 0, md: 2 }}
        >
          When you’re building a home, there’s a lot to consider. What’s
          straightforward for a builder isn’t always so obvious to everyone
          else, so we’re here to help you connect the dots. In four easy steps
          we will help you become an expert on the entire building process from
          start to finish.
        </Typography>
      </Stack>
      <Stack pt={{ xs: 4, md: 8 }} >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card sx={{ width: "100%", borderRadius: "10px" }}>
              <CardMedia sx={{ height: 213, position: "relative" }}>
                <Image
                  src="/process1.jpeg"
                  alt="Image description"
                  layout="fill"
                  objectFit="cover"
                />
              </CardMedia>
              <CardContent sx={{ backgroundColor: "primary.main" }}>
                <Typography
                  color={"secondary"}
                  textTransform={"uppercase"}
                  gutterBottom
                  variant="subtitle1"
                  component="h3"
                >
                  STEP ONE
                </Typography>
                <Typography
                  className="font-montserrat"
                  fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                  fontWeight={400}
                  variant="body2"
                  color="common.white"
                >
                  Before you buy
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0px 20px 40px 0px #CDCDCD40",
              }}
            >
              <CardMedia sx={{ height: 213, position: "relative" }}>
                <Image
                  src="/process2.jpeg"
                  alt="Image description"
                  layout="fill"
                  objectFit="cover"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  color={"secondary"}
                  textTransform={"uppercase"}
                  gutterBottom
                  variant="subtitle1"
                  component="h3"
                >
                  STEP Two
                </Typography>
                <Typography
                  className="font-montserrat"
                  fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                  fontWeight={400}
                  variant="body2"
                  color="common.black"
                >
                  Pre-construction
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0px 20px 40px 0px #CDCDCD40",
              }}
            >
              <CardMedia sx={{ height: 213, position: "relative" }}>
                <Image
                  src="/process3.jpeg"
                  alt="Image description"
                  layout="fill"
                  objectFit="cover"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  color={"secondary"}
                  textTransform={"uppercase"}
                  gutterBottom
                  variant="subtitle1"
                  component="h3"
                >
                  STEP Three
                </Typography>
                <Typography
                  className="font-montserrat"
                  fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                  fontWeight={400}
                  variant="body2"
                  color="common.black"
                >
                  Construction
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0px 20px 40px 0px #CDCDCD40",
              }}
            >
              <CardMedia sx={{ height: 213, position: "relative" }}>
                <Image
                  src="/process4.jpeg"
                  alt="Image description"
                  layout="fill"
                  objectFit="cover"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  color={"secondary"}
                  textTransform={"uppercase"}
                  gutterBottom
                  variant="subtitle1"
                  component="h3"
                >
                  STEP FOUR
                </Typography>
                <Typography
                  className="font-montserrat"
                  fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                  fontWeight={400}
                  variant="body2"
                  color="common.black"
                >
                  Service & After-care
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Process;
