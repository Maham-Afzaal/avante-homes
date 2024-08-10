import BuildingProcess from "@/components/BuildingProcess";
import React from "react";
import { Box } from "@mui/material";
import Head from "next/head";

const buildingProcess = () => {
  return (
    <div>
      <Head>
        <title>The Building process - Avante Homes</title>
        <meta name="description" content="The Building process - Avante Homes" />
        <meta property="og:title" content="The Building process - Avante Homes" />
        <meta property="og:description" content="The Building process - Avante Homes" />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </Head>
      <Box
        sx={{
          height: { xs: "538px", md: "267px" },
          width: "100%",
          background: "linear-gradient(0deg, #FFFFFF 0%, #EFF2FF 100%)",
          position: "absolute",
          top: "0px",
          zIndex: 0,
        }}
      ></Box>
      <Box sx={{ zIndex: 1000, position: "relative" }}>
        <BuildingProcess />
      </Box>
    </div>
  );
};

export default buildingProcess;
