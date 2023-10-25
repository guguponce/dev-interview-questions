import { Routes, Route, useLocation } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage.tsx";
import HomeScreen from "./pages/HomeScreen.tsx/HomeScreen.tsx";
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import TechPage from "./pages/TechPage/TechPage.tsx";
import { useEffect } from "react";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
  })
);

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/questions/:params" element={<QuestionsPage />} />
        <Route path="/:tech" element={<TechPage />} />
      </Routes>
    </ThemeProvider>
  );
}
