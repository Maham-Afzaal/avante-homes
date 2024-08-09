import { createTheme } from "@mui/material/styles";

const colours = {
  blue: "#002C57",
  white: "#FFFFFF",
  pink: "#F44A51",
  textGray: "#748390",
  textDark: "#181F25",
  text: "#181F25",
};

const theme = createTheme({
  palette: {
    common: {
      textGray: colours.textGray,
      textDark: colours.textDark,
    },
    primary: {
      main: colours.blue,
      contrastText: colours.white,
      light: colours.white,
    },
    secondary: {
      main: colours.pink,
      contrastText: colours.white,
      light: colours.white,
    },
    white: {
      main: colours.white,
      contrastText: colours.white,
      light: colours.white,
    },
    text: {
      primary: colours.textDark,
      secondary: colours.textGray,
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    allVariants: {
      fontFamily: "Inter",
    },
  },
});

export default theme;
