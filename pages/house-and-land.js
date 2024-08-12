import React from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import HouseLandPackages from "@/components/House&Land";

const houseAndLandPage = () => {
  return (
    <div>
      <Head>
        <title>House & Land - Avante Homes</title>
        <meta name="description" content="House & Land - Avante Homes" />
        <meta property="og:title" content="House & Land - Avante Homes" />
        <meta property="og:description" content="House & Land - Avante Homes" />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </Head>
      <Box
        sx={{
          height: { xs: "1026px", md: "823px" },
          width: "100%",
          background: "linear-gradient(0deg, #FFFFFF 0%, #EFF2FF 100%);",
          position: "absolute",
          top: "0px",
          zIndex: 0,
        }}
      ></Box>
      <Box sx={{ zIndex: 1000, position: "relative" }}>
        <HouseLandPackages />
      </Box>
    </div>
  );
};

export default houseAndLandPage;
