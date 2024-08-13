import {
  Stack,
  Box,
  Button,
  Typography,
  useTheme,
  Divider,
  Checkbox,
  Paper,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import SmallBathTabIcon from "@/assets/icons/SmallBathTabIcon";
import SmallParkingIcon from "@/assets/icons/SmallParkingIcon";
import SmallAreaIcon from "@/assets/icons/SmallAreaIcon";
import SmallBedIcon from "@/assets/icons/SmallBedIcon";
import FavoriteBorder from "@mui/icons-material/Favorite";
import Favorite from "@mui/icons-material/FavoriteBorderOutlined";
import TextField from "../common/TextField";
import Selected from "../common/Select";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import PlayButtonIcon from "@/assets/icons/PlayButtonIcon";
import background from "../../public/house-package-5.png";

const optionsList = [
  { value: "options1", label: "options 1" },
  { value: "options2", label: "options 2" },
  { value: "options3", label: "options 3" },
];

const HouseDetail = () => {
  const [options, setoptions] = useState("");

  return (
    <Box pt={{ xs: 6, md: 10 }} pb={0}>
      <Stack>
        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          <Stack maxWidth={850} width={"100%"} gap={1}>
            <Box
              maxWidth={850}
              height={{ xs: 215, md: 475 }}
              sx={{ position: "relative" }}
            >
              <Image
                src="/house-package-1.png"
                alt="Home image"
                fill
                style={{ borderRadius: " 10px" }}
              />
            </Box>
            <Stack display={{ xs: "block", md: "none" }}>
              <HouseImages />
            </Stack>
            <Stack
              mt={{ xs: 1, md: 2 }}
              justifyContent={"space-between"}
              alignItems={{ xs: "flex-start", md: "center" }}
              direction={{ xs: "column", md: "row" }}
              gap={2}
            >
              <Stack>
                <Typography
                  className="font-montserrat"
                  color={"common.black"}
                  variant="h3"
                  component={"h1"}
                  fontWeight={500}
                  fontSize={{ xs: "24px", sm: "28px", md: "38px", lg: "42px" }}
                >
                  Lot 139 Brilliant Boulevard
                </Typography>
                <Stack>
                  <Typography
                    className="font-montserrat"
                    color={"common.black"}
                    variant="subtitle1"
                    component={"h2"}
                    fontSize={{ xs: "26px" }}
                    fontWeight={500}
                  >
                    Australind
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={{ xs: "space-between", md: "flex-end" }}
                width={{ xs: "100%", md: "fit-content" }}
              >
                <Box>
                  <Button
                    sx={{ minWidth: "203px" }}
                    size="large"
                    color="secondary"
                    variant="contained"
                  >
                    Contact Us for Price
                  </Button>
                </Box>
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={{ xs: "flex", md: "none" }}
                >
                  <Box
                    sx={{
                      bgcolor: "common.lightGrayBg",
                      p: "0px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Checkbox
                      color="secondary"
                      icon={<Favorite />}
                      checkedIcon={<FavoriteBorder />}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
            <Stack mt={{ xs: 2, md: 0 }}>
              <Divider />
              <Stack
                direction={"row"}
                gap={1}
                my={1}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} gap={1} my={1}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Box
                      sx={{
                        bgcolor: "common.lightGrayBg",
                        p: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <SmallBedIcon />
                    </Box>
                    <Typography
                      fontSize={{ xs: "14px" }}
                      fontWeight={400}
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      1
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Box
                      sx={{
                        bgcolor: "common.lightGrayBg",
                        p: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <SmallBathTabIcon />
                    </Box>
                    <Typography
                      fontSize={{ xs: "14px" }}
                      fontWeight={400}
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      2
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Box
                      sx={{
                        bgcolor: "common.lightGrayBg",
                        p: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <SmallParkingIcon />
                    </Box>
                    <Typography
                      fontSize={{ xs: "14px" }}
                      fontWeight={400}
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      2
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Box
                      sx={{
                        bgcolor: "common.lightGrayBg",
                        p: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <SmallAreaIcon />
                    </Box>
                    <Typography
                      fontSize={{ xs: "14px" }}
                      fontWeight={400}
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      2
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={{ xs: "none", md: "flex" }}
                >
                  <Box
                    sx={{
                      bgcolor: "common.lightGrayBg",
                      p: "0px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Checkbox
                      color="secondary"
                      icon={<Favorite />}
                      checkedIcon={<FavoriteBorder />}
                    />
                  </Box>
                </Stack>
              </Stack>
              <Divider />
            </Stack>
            <Typography
              fontWeight={400}
              variant="subtitle1"
              color="text.secondary"
              mt={1}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              viverra dolor convallis lorem lobortis rhoncus. Etiam tincidunt
              tellus sit amet justo porttitor finibus. Praesent interdum egestas
              augue, ut pellentesque leo aliquam nec. Etiam fermentum orci sit
              amet porttitor ultricies. Nunc elit metus, facilisis in libero in,
              interdum vehicula neque. Praesent ipsum dolor, ornare mollis
              ornare in, tristique id mi. Sed congue dui libero, ut vulputate
              risus hendrerit sit amet. Cras pulvinar tempus pretium. Aenean
              sagittis pharetra augue commodo suscipit. Curabitur in dignissim
              nunc, a condimentum ipsum.
            </Typography>
            <Typography
              fontWeight={400}
              variant="subtitle1"
              color="text.secondary"
              mt={1}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              viverra dolor convallis lorem lobortis rhoncus. Etiam tincidunt
              tellus sit amet justo porttitor finibus. Praesent interdum egestas
              augue, ut pellentesque leo aliquam nec. Etiam fermentum orci sit
              amet porttitor ultricies. Nunc elit metus, facilisis in libero in,
              interdum vehicula neque. Praesent ipsum dolor, ornare mollis
              ornare in, tristique id mi. Sed congue dui libero, ut vulputate
              risus hendrerit sit amet. Cras pulvinar tempus pretium. Aenean
              sagittis pharetra augue commodo suscipit. Curabitur in dignissim
              nunc, a condimentum ipsum.
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={2}
              mt={{ xs: 2, md: 5 }}
            >
              <Typography
                className="font-montserrat"
                color={"common.black"}
                fontWeight={400}
                variant="subtitle1"
                fontSize={"26px"}
              >
                Share
              </Typography>
              <Stack direction={"row"} gap={{ xs: 2, md: 1 }}>
                <Avatar
                  size="small"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "common.white",
                    borderRadius: "10px",
                    height: "24px",
                    width: "24px",
                    p: 2,
                  }}
                  component={"a"}
                  href="#"
                >
                  <FacebookIcon />
                </Avatar>
                <Avatar
                  size="small"
                  sx={{
                    background: "#F3F9FF",
                    color: "common.black",
                    borderRadius: "10px",
                    height: "24px",
                    width: "24px",
                    p: 2,
                  }}
                  component={"a"}
                  href="#"
                >
                  <InstagramIcon />
                </Avatar>
                <Avatar
                  size="small"
                  sx={{
                    background: "#F3F9FF",
                    color: "common.black",
                    borderRadius: "10px",
                    height: "24px",
                    width: "24px",
                    p: 2,
                  }}
                  component={"a"}
                  href="#"
                >
                  <LinkedInIcon />
                </Avatar>
              </Stack>
            </Stack>
          </Stack>
          <Stack width={{ xs: "100%", md: "384px" }}>
            <Stack gap={3}>
              <Stack display={{ xs: "none", md: "block" }}>
                <HouseImages />
              </Stack>
              <Stack>
                <form>
                  <Paper
                    sx={{
                      mt: 2,
                      p: { xs: 3, md: 3 },
                      maxWidth: { xs: "100%", md: "920px" },
                      borderRadius: "10px",
                      boxShadow: "0px 20px 40px 0px #CDCDCD40",
                    }}
                  >
                    <Stack gap={1}>
                      <Stack direction={{ xs: "column" }}>
                        <Typography
                          className="font-montserrat"
                          color={"common.black"}
                          variant="subtitle1"
                          component={"h4"}
                          fontSize={"26px"}
                        >
                          Make an enquiry
                        </Typography>
                        <Typography
                          color={"text.secondary"}
                          variant="subtitle1"
                          component={"p"}
                        >
                          Enter your details
                        </Typography>
                      </Stack>
                      <Stack gap={1}>
                        <TextField
                          id="fullName"
                          label="Full Name"
                          fullWidth={true}
                          type="text"
                        />
                        <TextField
                          id="emailAdress"
                          label="Email Adress"
                          fullWidth={true}
                          type="email"
                        />
                        <TextField
                          id="password"
                          label="Password"
                          fullWidth={true}
                          type="password"
                        />

                        <Selected
                          label="I am looking to build in Perth"
                          options={optionsList}
                          value={options}
                          onChange={(event) => setoptions(event.target.value)}
                        />
                        <TextField
                          id="helpText"
                          label="How can we help you?"
                          multiline
                          rows={2}
                          fullWidth={true}
                          type="text"
                        />
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          justifyContent={"space-between"}
                          alignItems={{ xs: "flex-start", sm: "center" }}
                          spacing={2}
                          mt={2}
                        >
                          <Button
                            sx={{ minWidth: "153px", minHeight: "46px" }}
                            variant="contained"
                            color="secondary"
                            size="large"
                          >
                            Send Enquiry
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Paper>
                </form>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          mt={{ xs: 4, md: 8 }}
          direction={{ xs: "column", md: "row" }}
          gap={3}
        >
          <Stack maxWidth={850} width={"100%"}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "850px",
              }}
            >
              <Stack
                sx={{ zIndex: 9, position: "relative" }}
                maxWidth={"850px"}
                width={"100%"}
                height={428}
              >
                <Image
                  src={"/house-package-2.jpeg"}
                  alt="Commitment1"
                  fill
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Stack>
              <Box
                width={{ xs: "36px", sm: "56px", md: "76px", lg: "92px" }}
                height={{ xs: "36px", sm: "56px", md: "76px", lg: "92px" }}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#F44A51",
                  zIndex: 99,
                }}
              >
                <PlayButtonIcon />
              </Box>
            </Box>
          </Stack>
          <Stack
            width={{ xs: "100%", md: "384px" }}
            sx={{
              background: {
                xs: `url(${background.src}) center`,
              },
              borderRadius: "10px",
              minHeight: "411px",
            }}
            alignItems={"center"}
            justifyContent={{ xs: "flex-start", sm: "center" }}
          >
            <Stack
              sx={{
                m: 3,
                p: 3,
                backgroundColor: "common.white",
                boxShadow: "0px 20px 40px 0px #CDCDCD40",
                borderRadius: "10px",
              }}
            >
              <Typography
                className="font-montserrat"
                color={"common.black"}
                variant="subtitle1"
                component={"p"}
                fontSize={{ xs: "22px" }}
                fontWeight={500}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                Australind
              </Typography>
              <Typography
                fontWeight={400}
                variant="subtitle1"
                color="text.secondary"
                mt={0}
                fontSize={"14px"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                viverra dolor convallis lorem lobortis rhoncus. Etiam tincidunt
                tellus sit amet justo porttitor finibus. Praesent interdum
                egestas augue, ut pellentesque leo aliquam nec. Etiam fermentum
                orci sit
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HouseDetail;

const HouseImages = () => {
  return (
    <Stack
      gap={{ xs: 1, md: 3 }}
      direction={{ xs: "row", md: "column" }}
      width={"100%"}
    >
      <Box maxWidth={591} width={"100%"}>
        <Box
          maxWidth={591}
          height={{ xs: 90, sm: 150, md: 188 }}
          sx={{ position: "relative" }}
        >
          <Image
            src="/house-package-2.jpeg"
            alt="Home image"
            fill
            style={{ borderRadius: "5px", objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box maxWidth={591} width={"100%"}>
        <Box
          maxWidth={591}
          height={{ xs: 90, sm: 150, md: 188 }}
          sx={{ position: "relative" }}
        >
          <Image
            src="/house-package-4.jpeg"
            alt="Home image"
            fill
            style={{ borderRadius: "5px", objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box maxWidth={591} width={"100%"}>
        <Box
          maxWidth={591}
          height={{ xs: 90, sm: 150, md: 188 }}
          sx={{ position: "relative" }}
        >
          <Image
            src="/house-package-3.jpeg"
            alt="Home image"
            fill
            style={{ borderRadius: "5px", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Stack>
  );
};
