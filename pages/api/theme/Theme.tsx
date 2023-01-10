import { ThemeOptions } from "@mui/material";
import { lightBlue, pink } from "@mui/material/colors";

export const Theme: ThemeOptions = {
  palette: {
    primary: {
      main: lightBlue[200]
    },
    secondary: {
      main: pink[400],
      contrastText: "#555555"
    },
    info: {
      main: "#81d4fa",
      contrastText: "#555555"
    },
    background: {
      default: "#e3f2fd"
    },
    text: {
      primary: "#555555"
    }
  },
  typography: {
    button: {
      fontSize: 20,
      fontWeight: "Bold"
    }
  }
};
