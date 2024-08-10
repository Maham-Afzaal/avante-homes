import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import styles from './Footer.module.css'
const Community = () => {
  return (
    <Box
      className={styles.footerBackground}
    >
      <Stack alignItems={"center"} px={"6px"}>
        <Typography variant="h5" color={"secondary"}>
          Avante Homes
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "28px", md: "38px", lg: "48px" } }}
          color={"primary"}
          textAlign={"center"}
        >
          Building Your Future in Lively{" "}
          <Box display={{ xs: "inline-block", sm: "block" }}> Communities </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Community;
