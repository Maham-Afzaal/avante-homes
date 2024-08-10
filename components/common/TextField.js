import React from "react";
import MuiTextField from "@mui/material/TextField";

const TextField = (props) => {

  return (
    <MuiTextField
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
      {...props}
    />
  );
};

export default TextField;
