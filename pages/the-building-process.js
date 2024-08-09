import BuildingProcess from "@/components/BuildingProcess";
import { Height } from "@mui/icons-material";
import React from "react";
import { Box } from "@mui/material";

const buildingProcess = () => {
  return (
    <div>
      <Box
        sx={{
          height: "267px",
          width: "100%",
          background: "linear-gradient(0deg, #FFFFFF 0%, #EFF2FF 100%)",
          position: "absolute",
          top: "0px",
          zIndex: 0,
        }}
      ></Box>
      <Box sx={{ zIndex: 1000, position: 'relative' }}>
        <BuildingProcess />
      </Box>
    </div>
  );
};

export default buildingProcess;
