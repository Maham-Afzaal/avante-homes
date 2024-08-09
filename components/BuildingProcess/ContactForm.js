import { Stack, Typography, Box, TextField, Grid, Button } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <Box mb={{ xs: 8, sm: 16 }}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          width={{ xs: "100%", md: "60%" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            color={"common.black"}
            variant="h3"
            component={"h2"}
            textAlign={"center"}
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
                    id="standard-basic"
                    label="First Name"
                    variant="filled"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiInputLabel-root": {
                        left: "-11px",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                    fullWidth={true}
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="filled"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiInputLabel-root": {
                        left: "-11px",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                    fullWidth={true}
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="Phone Number"
                    variant="filled"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiInputLabel-root": {
                        left: "-11px",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                    fullWidth={true}
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="filled"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiInputLabel-root": {
                        left: "-11px",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                    fullWidth={true}
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Requirement"
                    variant="filled"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiInputLabel-root": {
                        left: "-11px",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                    fullWidth={true}
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Your Message"
                    multiline
                    rows={2}
                    variant="filled"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiInputLabel-root": {
                        left: "-11px",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "transparent",
                      },
                    }}
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
                      sx={{ minWidth: "191px" }}
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
