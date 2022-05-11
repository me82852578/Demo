import { KeyboardArrowUpRounded } from "@mui/icons-material";
import {
  AppBar,
  AppBarProps,
  Fab,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = (props: AppBarProps) => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 700,
  });

  const handleToTopOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Fragment>
      <AppBar
        elevation={scrollTrigger ? 4 : 0}
        sx={{
          transition: "linear 0.2s",
          backdropFilter: scrollTrigger ? "blur(20px)" : "unset",
          backgroundColor: scrollTrigger
            ? "rgba(69, 147, 237, 0.5)"
            : "transparent",
          "& #scroll-to-top": {
            transform: scrollTrigger ? "none" : "scale(0)",
            transition: "transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to elevate App bar
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Fab
        onClick={handleToTopOnClick}
        id="scroll-to-top"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "white",
          boxShadow:
            "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;",
        }}
        size="small"
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpRounded />
      </Fab>
    </Fragment>
  );
};

export default MainLayout;
