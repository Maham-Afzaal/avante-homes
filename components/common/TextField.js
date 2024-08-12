import React from "react";
import MuiTextField from "@mui/material/TextField";
import { omit } from "lodash";
const TextField = (props) => {
  return (
    <MuiTextField
      variant="filled"
      sx={{
        "&:hover": {
          backgroundColor: "transparent !important",
        },
        "& .MuiInputLabel-root": {
          left: "-11px",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: "transparent !important",
        },
        ...props?.sx,
      }}
      {...omit(props, "sx")}
    />
  );
};

export default TextField;
