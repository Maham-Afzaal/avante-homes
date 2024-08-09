import React from "react";
import { Container as MuiContainer } from "@mui/material";
const Container = ({ children, props }) => {
  return (
    <MuiContainer
      sx={{
        maxWidth: { lg: "1300px" },
        px: { xs: "24px", lg: "24px" },
      }}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
