import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#041733",
    },
    secondary: {
      main: "#64ffda",
    },
    success: {
      main: "#64ffda",
    },
  },
  typography: {
    fontFamily: "SF Mono",
  },
});

export default theme;
