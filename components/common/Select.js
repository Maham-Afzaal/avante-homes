import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const Selected = ({ label, options, value, onChange }) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}  // Use the value prop instead of internal state
        onChange={onChange}  // Use the onChange prop passed in
        label={label}  // Ensure the label matches
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selected;
