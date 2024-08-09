import { Stack, Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Stack>
      <Header />
      <Box sx={{mt: '126px'}}>{children}</Box>
      <Footer />
    </Stack>
  );
};

export default Layout;
