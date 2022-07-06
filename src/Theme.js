import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    Green: "#3A9F8D",
    Red: "#EB5252",
    Blue: "#273144",
    White: "#FFFFFF",
    GrisLight: "#E4E4E4",
    Gris: "#ADB3BC",
    Black: "#000000",
    Yellow: "#FCD68B",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
