import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { Home, LineLiffSearchStore, Login, SignUp } from "./pages";

const App = () => {
  // return <Home />;
  window.fbAsyncInit = function () {
    FB.init({
      appId: process.env.REACT_APP_NAME_FACEBOOK_APP_ID,
      xfbml: true,
      version: "v14.0",
    });
    FB.AppEvents.logPageView();
    FB.getLoginStatus(function (response) {
      console.info(response);
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s) as HTMLScriptElement;
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode?.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

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
