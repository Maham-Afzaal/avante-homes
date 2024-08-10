import React from "react";
import { Box } from "@mui/material";
import ClientExperience from "@/components/ClientExperience";

const TheClientExperience = () => {
  return (
    <div>
      <Box
        sx={{
          height: { xs: "1026px", md: "823px" },
          width: "100%",
          background: "linear-gradient(0deg, #FFFFFF 0%, #EFF2FF 100%);",
          position: "absolute",
          top: "0px",
          zIndex: 0,
        }}
      ></Box>
      <Box sx={{ zIndex: 1000, position: "relative" }}>
        <ClientExperience />
      </Box>
    </div>
  );
};

export default TheClientExperience;
