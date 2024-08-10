import BuildingProcess from "@/components/BuildingProcess";
import React from "react";
import { Box } from "@mui/material";

const buildingProcess = () => {
  return (
    <div>
      <Box
        sx={{
          height: { xs: "538px", md: "267px" },
          width: "100%",
          background: "linear-gradient(0deg, #FFFFFF 0%, #EFF2FF 100%)",
          position: "absolute",
          top: "0px",
          zIndex: 0,
        }}
      ></Box>
      <Box sx={{ zIndex: 1000, position: "relative" }}>
        <BuildingProcess />
      </Box>
    </div>
  );
};

export default buildingProcess;
