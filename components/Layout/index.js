import { Stack, Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Stack sx={{ position: "relative" }}>
      <Header />
      <Box sx={{ mt: { xs: "72px", md: "126px" }}}>{children}</Box>
      <Footer />
    </Stack>
  );
};

export default Layout;
