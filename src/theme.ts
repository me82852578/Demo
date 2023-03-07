import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          "*::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 7px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
          },
          "*::-webkit-scrollbar": {
            height: "6px",
            width: "7px",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
          },
          "*::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: "rgb(182, 182, 182)",
          },
        },
        body: {
          height: "100%",
        },
        "#root": {
          height: "100%",
        },
        input: {
          // To prevent zoom in on input focus on mobile devices.
          "@media (max-width:899px)": {
            fontSize: "1rem !important",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["'Kanit', sans-serif", "'Noto Sans TC', sans-serif"].join(","),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 400,
    },
    h4: {
      fontWeight: 400,
    },
    h5: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
