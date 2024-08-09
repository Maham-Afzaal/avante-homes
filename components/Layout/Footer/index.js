import React from "react";
import { Box, Container, Stack, Typography, Avatar } from "@mui/material";
import Community from "./Community";
import Links from "./Links";

const Footer = () => {
  return (
    <Box>
      <Container
        sx={{ maxWidth: { md: "100%", lg: "1440px" }, p: "0px !important" }}
      >
        <Community />
      </Container>
      <Box
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Container
          sx={{ maxWidth: { md: "100%", lg: "1440px" }, p: "0px !important" }}
        >
          <Links />
        </Container>

      </Box>
    </Box>
  );
};

export default Footer;
