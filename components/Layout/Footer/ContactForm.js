import { Stack, Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import TextField from "@/components/common/TextField";

const ContactForm = () => {
  return (
    <Box my={{ xs: 8, sm: 10 }}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          width={{ xs: "100%", md: "60%" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ xs: 2, md: 0 }}
        >
          <Typography
            color={"common.black"}
            variant="h3"
            component={"h2"}
            textAlign={"center"}
            fontSize={{ xs: "32px", sm: "36px", md: "42px", lg: "48px" }}
          >
            Contact Us
          </Typography>
          <Typography
            color={"text.secondary"}
            textAlign={"center"}
            mt={{ xs: 0, md: 2 }}
            mx={{ xs: 0, md: 1 }}
          >
            Speak to someone about your plans. Whether you’re considering
            building, renovating or developing our experts can guide or answer
            any questions you might have.
          </Typography>
          <Stack width={"100%"} my={{ xs: 2, md: 5 }}>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="first-name"
                    label="First Name"
                    fullWidth={true}
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="last-name"
                    label="Last Name"
                    fullWidth={true}
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="phone-number"
                    label="Phone Number"
                    fullWidth={true}
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    label="Email"
                    fullWidth={true}
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="requirement"
                    label="Requirement"
                    fullWidth={true}
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="message"
                    label="Your Message"
                    multiline
                    rows={2}
                    fullWidth={true}
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    justifyContent={"center"}
                    mt={1}
                  >
                    <Button
                      sx={{ minWidth: "191px", minHeight: '44px' }}
                      variant="contained"
                      color="secondary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactForm;
