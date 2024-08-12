import { createTheme } from "@mui/material/styles";

const colors = {
  blue: "#002C57",
  white: "#FFFFFF",
  pink: "#F44A51",
  lightGrayBg: "#F7F8FC",
  textGray: "#748390",
  textDark: "#181F25",
  text: "#181F25",
};

const theme = createTheme({
  palette: {
    common: {
      textGray: colors.textGray,
      textDark: colors.textDark,
      lightGrayBg: colors.lightGrayBg,
    },
    primary: {
      main: colors.blue,
      contrastText: colors.white,
      light: colors.white,
    },
    secondary: {
      main: colors.pink,
      contrastText: colors.white,
      light: colors.white,
    },
    white: {
      main: colors.white,
      contrastText: colors.white,
      light: colors.white,
    },
    text: {
      primary: colors.textDark,
      secondary: colors.textGray,
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
