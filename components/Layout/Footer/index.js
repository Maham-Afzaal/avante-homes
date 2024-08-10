import React from "react";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import MuiContainer from "@mui/material/Container";
import Container from "@/components/common/Container";
import Community from "./Community";
import Links from "./Links";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <Box sx={{ zIndex: 1000 }}>
      <Container>
        <ContactForm />
      </Container>
      <MuiContainer
        sx={{ maxWidth: { md: "100%", lg: "1440px" }, p: "0px !important" }}
      >
        <Community />
      </MuiContainer>
      <Box
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <MuiContainer
          sx={{ maxWidth: { md: "100%", lg: "1440px" }, p: "0px !important" }}
        >
          <Links />
        </MuiContainer>
      </Box>
    </Box>
  );
};

export default Footer;
