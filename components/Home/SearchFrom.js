import React from "react";
import {
  Box,
  Paper,
  Select,
  Stack,
  Radio,
  FormControl,
  MenuItem,
  InputLabel,
  IconButton,
} from "@mui/material";
import TextField from "../common/TextField";
import SearchIcon from "@mui/icons-material/Search";
import HomeDog from "@/assets/icons/HomeDog";
import HomeCat from "@/assets/icons/HomeCat";

const SearchFrom = () => {
  const [formData, setFormData] = React.useState({
    range: "",
    location: "",
    bedrooms: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("data", name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g. send it to an API
    console.log(formData);
  };

  return (
    <Paper
      sx={{
        p: { xs: 3, md: 2 },
        maxWidth: { xs: "100%", lg: "944px" },
        borderRadius: "10px",
        boxShadow: "0px 20px 40px 0px #CDCDCD40",
        width: "100%",
        position: "relative",
        zIndex: 999,
        // background: "red",
      }}
      className="home-select"
    >
      <Box width="104px" height="151px" sx={{ position: "absolute", bottom: "90px", left: 100 }}>
        <HomeDog />
      </Box>
      <Box width="245px" height="124px" sx={{ position: "absolute", bottom: "58px", right: 100 }}>
        <HomeCat />
      </Box>
      <Box component={"form"} onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          width={"100%"}
        >
          <Stack width={"100%"}>
            <InputLabel sx={{ color: "text.primary" }} id="range-id-label">
              Weekly Budget
            </InputLabel>
            <FormControl variant="standard">
              <TextField
                labelid="range-id-label"
                id="range-id"
                value={formData.range}
                onChange={handleInputChange}
                name="range"
                placeholder="Set Range"
                fullWidth={true}
                sx={{
                  "& .MuiInputBase-input": {
                    paddingTop: "6px",
                    pl: "0px",
                  },
                }}
              />
            </FormControl>
          </Stack>
          <Stack width={"100%"}>
            <InputLabel sx={{ color: "text.primary" }} id="id-location-label">
              Where
            </InputLabel>
            <FormControl variant="standard">
              <TextField
                labelid="id-location-label"
                id="id-location"
                value={formData.location}
                onChange={handleInputChange}
                name="location"
                placeholder="Set Location"
                fullWidth={true}
                sx={{
                  "& .MuiInputBase-input": {
                    paddingTop: "6px",
                    pl: "0px",
                  },
                }}
              />
            </FormControl>
          </Stack>
          <Stack width={"100%"}>
            <InputLabel
              sx={{ color: "text.primary", mb: "5px" }}
              id="demo-simple-select-standard-label"
            >
              Beds
            </InputLabel>
            <Select
              labelid="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={formData.bedrooms}
              onChange={handleInputChange}
              name="bedrooms"
              label="Where"
              placeholder="Set a range"
              variant="standard"
              fullWidth={true}
              displayEmpty
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <Box sx={{ color: "#9DA1A3" }}>All Bedrooms</Box>;
                }

                return selected;
              }}
              sx={{}}
            >
              <MenuItem disabled value="" sx={{ color: "text.secondary" }}>
                All Bedrooms
              </MenuItem>

              <MenuItem value={"All Bedrooms"}>
                <Radio
                  size="small"
                  color="secondary"
                  checked={formData.bedrooms.indexOf("All Bedrooms") > -1}
                />
                All Bedrooms
              </MenuItem>
              <MenuItem value={"3+ Bedrooms"}>
                <Radio
                  size="small"
                  color="secondary"
                  checked={formData.bedrooms.indexOf("3+ Bedrooms") > -1}
                />
                3+ Bedrooms
              </MenuItem>
              <MenuItem value={"4+ Bedrooms"}>
                <Radio
                  size="small"
                  color="secondary"
                  checked={formData.bedrooms.indexOf("4+ Bedrooms") > -1}
                />
                4+ Bedrooms
              </MenuItem>
              <MenuItem value={"5+ Bedrooms"}>
                <Radio
                  size="small"
                  color="secondary"
                  checked={formData.bedrooms.indexOf("5+ Bedrooms") > -1}
                />
                5+ Bedrooms
              </MenuItem>
            </Select>
          </Stack>
          <Stack width={"fit-content"}>
            <Box>
              <IconButton
                aria-label="back"
                sx={{
                  height: "72px",
                  width: "72px",
                  bgcolor: "secondary.main",
                  color: "common.white",
                  borderRadius: "5px",
                  "&:hover": {
                    bgcolor: "secondary.main",
                    color: "common.white",
                  },
                }}
                type="submit"
              >
                <SearchIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};

export default SearchFrom;
