import { createTheme } from "@mui/material";


export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4444',
    },
    secondary: {
      main: '#d4e157',
    },
  },
  typography: {
    h1: {
      fontSize: "48px"
    },
    h2: {
      fontSize: "32px"
    },
    h3: {
      fontSize: "28px"
    },
    h4: {
      fontSize: "24px"
    },
    h5: {
      fontSize: "20px"
    },
    h6: {
      fontSize: "18px"
    }
  }
});