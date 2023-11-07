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
import InitialDataFetch from "./services/react-query/DataQuery.tsx";
import QuestionsProvider from "./services/firebase/QuestionsContext.tsx";

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
      {/* <InitialDataFetch> */}
      <QuestionsProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/questions/:params" element={<QuestionsPage />} />
          <Route path="/:tech" element={<TechPage />} />
        </Routes>
        {/* </InitialDataFetch> */}
      </QuestionsProvider>
    </ThemeProvider>
  );
}
