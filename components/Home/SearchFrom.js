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
  colors,
} from "@mui/material";
import TextField from "../common/TextField";
import SearchIcon from "@mui/icons-material/Search";
import HomeDog from "@/assets/icons/HomeDog";
import HomeCat from "@/assets/icons/HomeCat";
import SelectField from "../common/SelectField";
import { fromPairs } from "lodash";

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

  const handleClear = () => {
    setFormData((prevFormData) => ({ ...prevFormData, bedrooms: "" }));
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
        width: "-webkit-fill-available",
        position: "relative",
        zIndex: 999,
      }}
      className="home-select"
    >
      <Box
        width={{ xs: "50px", sm: "104px" }}
        height={{ xs: "70px", sm: "151px" }}
        sx={{
          position: "absolute",
          bottom: { xs: "auto", sm: "90px" },
          top: { xs: "-65px", sm: "auto" },
          left: { xs: 50, sm: 70, md: 100 },
        }}
        className="slideInDown"
      >
        <HomeDog />
      </Box>
      <Box
        width={{ xs: "118px", sm: "245px" }}
        height={{ xs: "59px", sm: "124px" }}
        sx={{
          position: "absolute",
          bottom: { xs: "auto", sm: "58px" },
          top: { xs: "-37px", sm: "auto" },
          right: { xs: 50, sm: 30, md: 100 },
          animation: "myAnim 2s ease 0s 1 normal forwards",
        }}
        // className="slideInDown2"
      >
        <HomeCat />
      </Box>
      <Box component={"form"} onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Stack
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent={"center"}
          gap={3}
          width={"100%"}
          direction={{ xs: "column", sm: "row" }}
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
                  input: {
                    "&::placeholder": {
                      fontStyle: "italic",
                    },
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
                  input: {
                    "&::placeholder": {
                      fontStyle: "italic",
                    },
                  },
                }}
              />
            </FormControl>
          </Stack>
          <Stack width={"100%"}>
            <InputLabel
              sx={{ color: "text.primary" }}
              id="demo-simple-select-standard-label"
            >
              Beds
            </InputLabel>
            <SelectField
              value={formData?.bedrooms}
              onChange={handleInputChange}
              formData={formData}
              onClear={() =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  bedrooms: "",
                }))
              }
              handleUpdateMobile={(value) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  bedrooms: value,
                }))
              }
              placeholder="All Bedrooms"
              placeholder2="Select Bedrooms"
              options={[
                { title: "All Bedrooms", value: "All Bedrooms" },
                { title: "3+ Bedrooms", value: "3+ Bedrooms" },
                { title: "4+ Bedrooms", value: "4+ Bedrooms" },
                { title: "5+ Bedrooms", value: "5+ Bedrooms" },
              ]}
            />
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
                  borderRadius: "10px",
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
