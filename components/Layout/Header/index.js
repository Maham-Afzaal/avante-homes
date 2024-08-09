import EmailIcon from "@/assets/icons/EmailIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  Button,
  ButtonGroup,
  Tabs,
  Tab,
  AppBar,
  IconButton,
  Drawer,
  useScrollTrigger,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Container from "@/components/common/Container";
import React from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LandIcon from "@/assets/icons/LandIcon";
import BuildingIcon from "@/assets/icons/BuildingIcon";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import CloseIcon from "@mui/icons-material/Close";
import { homeLinks } from "@/utils/routes";
import { useRouter } from "next/router";

const MenuList = [
  {
    key: "home-design",
    title: "Home Design",
    href: homeLinks.homeDesign,
    icon: <HomeIcon />,
  },
  {
    key: "display-homes",
    title: "Display Homes",
    href: homeLinks,
    icon: <HomeWorkIcon />,
  },
  {
    key: "house-and-land",
    title: "House & Land",
    href: homeLinks.houseLand,
    icon: <LandIcon />,
  },
  {
    key: "the-building-process",
    title: "The Building Process",
    href: homeLinks.theBuildingProcess,
    icon: <BuildingIcon />,
  },
  {
    key: "finance",
    title: "Finance",
    href: homeLinks.finance,
    icon: <SsidChartIcon />,
  },
  {
    key: "client-experience",
    title: "Client Experience",
    href: homeLinks.clientExperience,
    icon: <RecordVoiceOverIcon />,
  },
];

const Header = (props) => {
  const { children, window } = props;
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 70,
  });

  console.log("triger", trigger);

  const handleChange = (event, newValue) => {
    router.push(newValue);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            padding: "12px 0px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Container>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} gap={3} alignItems={"center"}>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <Avatar
                    size="small"
                    sx={{
                      backgroundColor: "secondary.main",
                      color: "secondary.light",
                      borderRadius: "5px",
                      height: "16px",
                      width: "16px",
                      p: "6px",
                    }}
                  >
                    <PhoneIcon />
                  </Avatar>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "common.white", textDecoration: "none" }}
                    component={"a"}
                    href="tel:0427671930"
                  >
                    0427671930
                  </Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <Avatar
                    size="small"
                    sx={{
                      backgroundColor: "transparent",
                      borderColor: "common.white",
                      border: "1px solid",
                      color: "common.white",
                      borderRadius: "5px",
                      height: "18px",
                      width: "18px",
                      p: "4px",
                    }}
                  >
                    <EmailIcon />
                  </Avatar>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "common.white", textDecoration: "none" }}
                    component={"a"}
                    href="mailto:hello@avantehomes.com.au"
                  >
                    hello@avantehomes.com.au
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ButtonGroup
                  variant="contained"
                  color="secondary"
                  aria-label="Basic button group"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#ffffff !important",
                      borderRightColor: "transparent !important",
                    }}
                    color="white"
                  >
                    Avante Invest
                  </Button>
                  <Button>Avante Custom</Button>
                </ButtonGroup>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Box
          sx={{
            padding: "22px 0px",
            backgroundColor: trigger
              ? "white !important"
              : "transparent !important",
          }}
        >
          <Container>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack>
                <Image
                  src="/avante-home-logo.svg"
                  alt="My Image"
                  width={133}
                  height={50}
                />
              </Stack>
              <Stack sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ maxWidth: { xs: 320, sm: 900 } }}>
                  <Tabs
                    value={"home-design"}
                    onChange={handleChange}
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{
                      style: { display: "none" },
                    }}
                    aria-label="secondary tabs example"
                  >
                    {MenuList.map((item) => (
                      <StyledTab
                        sx={{
                          color: "primary.main",
                          fontWeight: 400,
                          textTransform: "capitalize",
                          fontSize: "16px",
                          padding: "8px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                        key={item.key}
                        value={item.key}
                        label={item.title}
                      />
                    ))}
                  </Tabs>
                </Box>
              </Stack>
              <Stack>
                <Button
                  sx={{ display: { xs: "none", md: "block" } }}
                  size="large"
                  variant="contained"
                  color="secondary"
                >
                  Get in Touch
                </Button>
                <IconButton
                  sx={{ display: { xs: "block", md: "none" } }}
                  color="primary"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </AppBar>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Stack
          sx={{ m: 2, width: "260px" }}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <Stack width={"100%"}>
            <Stack
              position={"relative"}
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Image
                src="/avante-home-logo.svg"
                alt="My Image"
                width={70}
                height={50}
              />
              <IconButton
                color="primary"
                onClick={toggleDrawer(false)}
                sx={{ top: "-20px", right: "-13px" }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <Stack gap={"2px"} sx={{ my: 2, width: "100%" }}>
              {MenuList.map((item) => (
                <Stack
                  key={item.key}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                  sx={{ color: "primary.main" }}
                >
                  <Avatar
                    sx={{
                      borderRadius: "0px",
                      backgroundColor: "transparent",
                      color: "primary.main",
                      width: "28px",
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography
                    sx={{
                      color: "primary.main",
                      pl: 1,
                      cursor: "pointer",
                      "&:hover": { color: "secondary.main" },
                    }}
                    variant="body2"
                  >
                    {item.title}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Stack></Stack>
          </Stack>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Stack
              direction={"column"}
              gap={1}
              alignItems={"center"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                width="100%  "
              >
                <Avatar
                  size="small"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "secondary.light",
                    borderRadius: "5px",
                    height: "29px",
                    width: "29px",
                  }}
                >
                  <PhoneIcon />
                </Avatar>
                <Typography
                  variant="subtitle2"
                  // sx={{ color: "common.white" }}
                >
                  0427671930
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                width="100%  "
              >
                <Avatar
                  size="small"
                  sx={{
                    backgroundColor: "transparent",
                    borderColor: "secondary.main",
                    border: "1px solid",
                    color: "secondary.main",
                    borderRadius: "5px",
                    height: "29px",
                    width: "29px",
                  }}
                >
                  <EmailIcon />
                </Avatar>
                <Typography
                  variant="subtitle2"
                  // sx={{ color: "common.white" }}
                >
                  hello@avantehomes.com.au
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={1} mt={2} width={"100%"}>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                sx={{
                  borderColor: "#ffffff !important",
                  borderRightColor: "transparent !important",
                }}
              >
                Avante Invest
              </Button>
              <Button variant="contained" color="secondary" fullWidth={true}>
                Avante Custom
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Header;

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    opacity: 1,
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: theme.palette.secondary.main,
      opacity: 1,
    },
    "&.Mui-selected": {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover": {
        color: theme.palette.secondary.main,
        opacity: 1,
      },
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);
