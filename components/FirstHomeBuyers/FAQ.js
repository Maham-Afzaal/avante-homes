import React from "react";
import { Stack, Box, Typography, Grid, Button, Paper } from "@mui/material";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import TextField from "../common/TextField";
import background from "@/public/blueBG.svg";
import backgroundMobile from "@/public/about-background-1-mobile.svg";
import Container from "../common/Container";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accordionItems = [
    {
      heading: "How long will it take to build with Celebration Homes?",
      details: "Remember, it’s not your job to know everything about building (it’s ours!) It’s important that you feel confident & comfortable with the builder you choose, as this journey to homeownership is one you’ll take together."
    },
    {
      heading: "What is the process of building a home?",
      details: "The process involves several steps starting with finding the perfect land, choosing your home design, getting finance approved, and then construction begins."
    },
    {
      heading: "How long will it take to build with Celebration Homes?",
      details: "The process involves several steps starting with finding the perfect land, choosing your home design, getting finance approved, and then construction begins."
    },
  ];
  return (
    <Box position={"relative"}>
      <Box
        pt={{ xs: 35, md: 1 }}
        // pb={4}
        height={{ xs: "100%", md: "984px" }}
        // sx={{
        //   background: {
        //     xs: `url(${backgroundMobile.src}) center`,
        //     md: `url(${background.src}) top center/contain no-repeat`,
        //   },
        //   backgroundSize: {
        //     xs: "cover",
        //     md: "contain",
        //   },
        // }}
      >
        <Box
          component="img"
          src="/blueBG.svg"
          alt="grass"
          sx={{
            // mt: 12,
            position: "absolute",
            top: "calc(-90px)",
            // top: { xs: "26%", sm: "20%", md: "17%" },
            right: 0,
            width: { xs: "100%", md: "100%" },
            display:{xs:'none',sm:'block'},
            // maxWidth: "165px",
            // height: "auto",
            zIndex: "-1",
          }}
        />
        <Box
          component="img"
          src="/blueMobileBG.svg"
          alt="Blue BG"
          sx={{
            // mt: 12,
            position: "absolute",
            top: "2px",
            // top: { xs: "26%", sm: "20%", md: "17%" },
            right: 0,
            width: { xs: "100%", md: "100%" },
            display:{xs:'block',sm:'none'},

            // maxWidth: "165px",
            // height: "auto",
            zIndex: "-1",
          }}
        />
        <Container sx={{ height:'100%',backgroundColor:{xs:'#002C57',sm:'transparent'},pb:{xs:2,sm:0}}} position={"relative"}>
          <Stack
            height={"100%"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Grid
              container
              alignItems={{ xs: "center", md: "center" }}
              justifyContent={{ xs: "center", md: "space-between" }}
              spacing={{ xs: 4, md: 12 }}
              height={"100%"}
            >
              <Grid item xs={12} md={5}>
                <Typography
                  color={"common.white"}
                  variant="h3"
                  component={"h2"}
                  // textAlign={"center"}
                  fontSize={{ xs: "42px", sm: "62px" }}
                  // textAlign={{ xs: "center", md: "left" }}
                >
                  Get Help<br/>FAQ
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
              <Stack>
            {accordionItems.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'none',
                  borderRadius: '8px',
                  '&:not(:last-child)': {
                    marginBottom: '1rem',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                  sx={{ padding: '0 1.5rem' }}
                >
                  <Typography
                    className="font-montserrat"
                    fontSize={{ xs: '16px', sm: '18px', md: '20px' }}
                    fontWeight={500}
                    variant="body2"
                  >
                    {item.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0 1.5rem 1.5rem' }}>
                  <Typography color="text.secondary" variant="subtitle1" component="p" fontSize="14px">
                    {item.details}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>

              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default FAQ;
