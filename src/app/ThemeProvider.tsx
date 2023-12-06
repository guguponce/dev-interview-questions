import { CssBaseline } from "@mui/material";

import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import React from "react";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
  })
);
export default function MUIThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
}
