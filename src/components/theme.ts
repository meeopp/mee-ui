/**
 * Referencing material-ui/docs/src/pages/premium-themes/onepirate/modules/theme.ts
 */

import { createTheme } from "@material-ui/core/styles";

const rawTheme = createTheme({
  palette: {
    primary: {
      main: "#FD5463",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

// TODO: Theme is not working 
export default rawTheme;
