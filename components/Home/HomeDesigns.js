import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Container from "../common/Container";
import background from "../../public/home-design-background.svg";
import backgroundMobile from "../../public/home-design-background-mobile.svg";
import Carousel from "react-multi-carousel";
import ProductDetailCard from "../common/ProductDetailCard";

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
    image: "/home-design-1.png",
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
    image: "/home-design-2.jpeg",
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
    image: "/home-design-3.jpeg",
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
const HomeDesigns = () => {
  return (
    <Box
      mt={6}
      pt={{ xs: 6, sm: 22 }}
      pb={{ xs: 6, md: 10 }}
      sx={{
        // height: '995.49px',
        background: {
          xs: `url(${backgroundMobile.src}) center`,
          sm: `url(${background.src}) top`,
        },
        // backgroundPosition: { xs: "0 0", md: "0 0" },
      }}
    >
      <Box>
        <Container>
          <Stack>
            <Stack>
              <Typography
                className="font-montserrat"
                color={"common.black"}
                variant="h3"
                component={"h2"}
                fontSize={{ xs: "32px", sm: "34px", md: "38px", lg: "42px" }}
                textAlign={{ xs: "center" }}
              >
                Home Design
              </Typography>
              <Stack pt={{ xs: 2, md: 2 }}>
                <Typography
                  color={"text.secondary"}
                  textAlign={{ xs: "center" }}
                  variant="subtitle1"
                  fontSize={"16px"}
                  component={"p"}
                >
                  Find the best house design for your new home
                </Typography>
              </Stack>
            </Stack>
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
        </Container>
      </Box>
    </Box>
  );
};

export default HomeDesigns;
