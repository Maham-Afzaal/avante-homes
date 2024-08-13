import DashboardIcon from "@/assets/icons/DashboardIcon";
import DocDownloadIcon from "@/assets/icons/DocDownloadIcon";
import { Grid, Stack, Box, Typography, Checkbox, Button } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/Favorite";
import Favorite from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";
import React from "react";
import Container from "../common/Container";
import background from "../../public/floor-plan-background.svg";
import backgroundMobile from "../../public/floor-plan-background-mobile.svg";

const Specification = () => {
  return (
    <Box
      pt={{ xs: 12, md: 10 }}
      pb={{ xs: 4, md: 10 }}
      mt={{ xs: 0, md: 0 }}
      height={{ xs: "750px", md: "764px" }}
      sx={{
        background: {
          xs: `url(${backgroundMobile.src}) bottom repeat-x`,
          md: `url(${background.src}) bottom no-repeat`,
        },
        // backgroundPosition: { xs: "0 0", md: "0 -135px" },
      }}
    >
      <Stack height={"100%"}>
        <Container>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            width={"100%"}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"flex-end"}
              height={"100%"}
              width={"100%"}
            >
              <Grid
                container
                spacing={{ xs: 3, md: 6 }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Grid item xs={12} md={6} bgcolor={'#FFF8F8'}>
                  <Stack gap={{ xs: 2, md: 4 }}>
                    <Stack gap={{ xs: 1, md: 2 }}>
                      <Typography
                        className="font-montserrat"
                        color={"common.black"}
                        variant="subtitle1"
                        component={"h2"}
                        fontSize={{
                          xs: "32px",
                          sm: "36px",
                          md: "38px",
                          lg: "42px",
                        }}
                        fontWeight={500}
                        lineHeight={38.4}
                      >
                        Floorplan & Specifications
                      </Typography>
                      <Typography
                        color={"text.secondary"}
                        variant="subtitle1"
                        component={"p"}
                      >
                        Choose your design option
                      </Typography>
                    </Stack>
                    <Stack gap={{ xs: 2, md: 3 }}>
                      <Stack
                        sx={{
                          backgroundColor: "common.white",
                          border: "1px solid #BFCEDA",
                          borderRadius: "5px",
                          maxWidth: "381px",
                          p: 0,
                        }}
                        direction={"row"}
                        gap={1}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                      >
                        <Checkbox color="secondary" />
                        <Typography
                          color={"text.secondary"}
                          variant="subtitle1"
                          component={"p"}
                        >
                          Rosa 258
                        </Typography>
                      </Stack>
                      <Stack gap={2}>
                        <Stack
                          sx={{
                            borderRadius: "5px",
                            maxWidth: "381px",
                            p: 0,
                          }}
                          direction={"row"}
                          gap={1}
                          alignItems={"center"}
                          justifyContent={"flex-start"}
                        >
                          <Box
                            sx={{
                              bgcolor: "common.lightGrayBg",
                              p: "10px",
                              borderRadius: "5px",
                            }}
                          >
                            <DocDownloadIcon />
                          </Box>
                          <Typography
                            color={"text.secondary"}
                            variant="subtitle1"
                            component={"p"}
                          >
                            Download Specifications
                          </Typography>
                        </Stack>
                        <Stack
                          sx={{
                            borderRadius: "5px",
                            maxWidth: "381px",
                            p: 0,
                          }}
                          direction={"row"}
                          gap={1}
                          alignItems={"center"}
                          justifyContent={"flex-start"}
                        >
                          <Box
                            sx={{
                              bgcolor: "common.lightGrayBg",
                              p: "10px",
                              borderRadius: "5px",
                            }}
                          >
                            <DashboardIcon />
                          </Box>
                          <Typography
                            color={"text.secondary"}
                            variant="subtitle1"
                            component={"p"}
                          >
                            Download Brochure
                          </Typography>
                        </Stack>
                        <Stack
                          sx={{
                            borderRadius: "5px",
                            maxWidth: "381px",
                            p: 0,
                          }}
                          direction={"row"}
                          gap={1}
                          alignItems={"center"}
                          justifyContent={"flex-start"}
                        >
                          <Box
                            sx={{
                              bgcolor: "common.lightGrayBg",
                              p: "0px",
                              borderRadius: "5px",
                            }}
                          >
                            <Checkbox
                              color="secondary"
                              icon={<Favorite />}
                              checkedIcon={<FavoriteBorder />}
                            />
                          </Box>
                          <Typography
                            color={"text.secondary"}
                            variant="subtitle1"
                            component={"p"}
                          >
                            Download Brochure
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack>
                        <Button
                          sx={{ maxWidth: "219px" }}
                          variant="contained"
                          color="secondary"
                        >
                          Contact Us For Price
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box maxWidth={612} width={"100%"}>
                    <Box
                      maxWidth={{ xs: 700, md: 612 }}
                      height={{ xs: 261, md: 456 }}
                      sx={{ position: "relative" }}
                    >
                      <Image
                        src="/house-package-6.svg"
                        alt="Home image"
                        fill
                        style={{ borderRadius: "5px", objectFit: "cover" }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
};

export default Specification;
