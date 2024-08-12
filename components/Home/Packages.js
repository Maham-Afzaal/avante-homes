import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import BlueBackground from "../../public/blue-grass-background.svg";
import Container from "../common/Container";
import Carousel from "react-multi-carousel";
import ProductDetailCard from "../common/ProductDetailCard2";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 60,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 60,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
};

const data = [
  {
    image: "/home-design-4.jpeg",
    detailType: "FLOORPLAN",
    title: "Easton",
    loc: "Lot 139, Brilliant Boulevard",
    homeDetail: "15m Frontage, Single Storey Designs",
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    area: "190m²",
  },
  {
    image: "/home-design-4.jpeg",
    detailType: "ELEVATION",
    title: "Easton",
    loc: "Lot 139, Brilliant Boulevard",
    homeDetail: "15m Frontage, Single Storey Designs",
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    area: "190m²",
  },
  {
    image: "/home-design-4.jpeg",
    detailType: "ELEVATION",
    title: "Easton",
    loc: "Lot 139, Brilliant Boulevard",
    homeDetail: "15m Frontage, Single Storey Designs",
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    area: "190m²",
  },
];

const Packages = () => {
  return (
    <Box pt={{ xs: 0, md: 10 }} pb={{ xs: 4, md: 14 }} bgcolor={"primary.main"}>
      <Container>
        <Box sx={{ position: "relative", zIndex: 99 }}>
          <Stack>
            <Grid
              spacing={{ xs: 2, md: 5 }}
              container
              direction={{ xs: "column", md: "row" }}
            >
              <Grid item xs={12} md={6}>
                <Stack gap={{ xs: 2, md: 5 }}>
                  <Typography
                    className="font-montserrat"
                    color={"common.white"}
                    variant="h3"
                    component={"h2"}
                    fontSize={{
                      xs: "32px",
                      sm: "34px",
                      md: "38px",
                      lg: "42px",
                    }}
                    // textAlign={{ xs: "center", md: "left" }}
                  >
                    House and <br />
                    Land Package
                  </Typography>
                  <Box>
                    <Button variant="contained" color="secondary">
                      Check Our More Packages
                    </Button>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack gap={{ xs: 1, md: 2 }}>
                  <Typography
                    fontSize={{ xs: "16px" }}
                    fontWeight={400}
                    variant="subtitle1"
                    color="common.white"
                  >
                    Our house & land packages are here to make finding your
                    dream home in your dream location easy. 
                  </Typography>
                  <Typography
                    fontSize={{ xs: "16px" }}
                    fontWeight={400}
                    variant="subtitle1"
                    color="common.white"
                  >
                    As one of Perth’s most experienced home builders, we’ve done
                    all the hard work for you, matching the best blocks with
                    their ideal home design. All that’s left for you to do is
                    choose your favourite. But this is just a taste. Let us know
                    your budget and non-negotiables, and let’s make
                    your new home happen. 
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Stack pt={{ xs: 4, md: 6 }}>
              <Stack display={{ xs: "none", md: "block" }}>
                <Grid container spacing={4}>
                  {data.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                      <ProductDetailCard key={index} {...item} />
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack display={{ md: "none", xs: "block" }}>
                <Carousel
                  responsive={responsive}
                  showDots={true}
                  arrows={false}
                  partialVisible={true}
                  itemClass="carousel-item-padding-40-px"
                  //   centerMode={true}
                >
                  {data.map((item, index) => (
                    <div key={index}>
                      <ProductDetailCard {...item} />
                    </div>
                  ))}
                </Carousel>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Packages;
