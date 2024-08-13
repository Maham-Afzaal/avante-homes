import React from "react";
import { Typography, Box, Stack, Grid } from "@mui/material";
import Container from "@/components/common/Container";
import Head from "next/head";
import ResolveFinance from "@/components/ResolveFinance";

const ResolveFinancePage = () => {
  return (
    <div>
      <Head>
        <title>Resolve Finance - Avante Homes</title>
        <meta name="description" content="Resolve Finance - Avante Homes" />
        <meta property="og:title" content="Resolve Finance - Avante Homes" />
        <meta property="og:description" content="Resolve Finance - Avante Homes" />
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
        <ResolveFinance />
      </Box>
    </div>
  );
};

export default ResolveFinancePage;
