import Head from "next/head";
import HomePage from "@/components/Home";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Avante Homes</title>
        <meta name="description" content="Home - Avante Homes" />
        <meta property="og:title" content="Home - Avante Homes" />
        <meta property="og:description" content="Home - Avante Homes" />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </Head>
      <Box
        sx={{
          height: { xs: "1026px", md: "777px" },
          width: "100%",
          background: "linear-gradient(0deg, #FFFFFF 0%, #EFF2FF 100%);",
          position: "absolute",
          top: "0px",
          zIndex: 0,
        }}
      ></Box>
      <Box sx={{ zIndex: 1000, position: "relative" }}>
        <HomePage />
      </Box>
    </>
  );
}
