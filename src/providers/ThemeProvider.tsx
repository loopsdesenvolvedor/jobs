"use client";

import { ThemeProvider } from "styled-components";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const theme = {
  colors: {
    primary: {
      main: "#264FBC",
      dark: "#07004D",
      light: "#3590F3",
      text: "#ffffff",
    },
    secondary: {
      main: "#2CBFA3",
      dark: "#35A690",
      light: "#5DD9C1",
      text: "#333333",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#333333",
    },

    details: {
      main: "#EEEEEE",
      dark: "rgba(51, 51, 51, 0.1)",
      light: "#F7F7F7",
    },
  },
};

const StyledProvider = ({ children }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyledProvider;
