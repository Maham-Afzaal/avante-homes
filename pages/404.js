import React from "react";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Container from "@/components/common/Container";
import Link from "next/link";
import { useRouter } from "next/router";

const NoPage = () => {
  const router = useRouter();
  return (
    <Box
      minHeight={{ xs: "100%", md: "calc(100vh - 64px)" }}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      pb={16}
      pt={4}
      //   bgcolor={theme.palette.alternate.main}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item container justifyContent={"center"} xs={12} md={6}>
            <Box
              height={"100%"}
              width={"100%"}
              maxWidth={{ xs: 500, md: "100%" }}
              display={{ xs: "flex", md: "block" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="/page_not_found.svg"
                alt="no page found"
                width={300}
                height={300}
              />
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"center"}
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant="h4"
                component={"h1"}
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontWeight: 700 }}
                color={"secondary"}
              >
                No page found
              </Typography>
              <Typography
                variant="h1"
                component={"h1"}
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontWeight: 700 }}
              >
                404
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="textSecondary"
                textAlign={{ xs: "center", md: "left" }}
              >
                Oops! Looks like you followed a bad link.
                <br />
                If you think this is a problem with us,{" "}
                <Link href={"/contact"} style={{ textDecoration: "none" }}>
                  <MuiLink component={"span"} underline="none">
                    please tell us
                  </MuiLink>
                </Link>
              </Typography>
              <Box
                marginTop={4}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => router.push("/")}
                >
                  Back home
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NoPage;
