import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { Home, LineLiffSearchStore, Login, SignSuccess, SignUp } from "./pages";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      // mode: "light",
    },
  });
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="user/activate/register/:token" element={<SignSuccess />} />
            </Route>
            <Route
              path="line-liff-search-store"
              element={<LineLiffSearchStore />}
            />
            <Route path="user">
              <Route path="search-store" element={<LineLiffSearchStore />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
