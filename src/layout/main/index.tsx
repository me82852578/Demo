import {
  AccountCircleRounded,
  KeyboardArrowUpRounded,
  MoreVertRounded,
  NotificationsRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import {
  AppBar,
  AppBarProps,
  Badge,
  Box,
  Fab,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React, { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo00 from "../../assets/images/logo/logo02.webp";

const MainLayout = (props: AppBarProps) => {
  const navigate = useNavigate();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 700,
  });
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {};

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleToTopOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAccountOnClick = () => {
    navigate("/login");
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsRounded />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleRounded />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <AppBar
        elevation={scrollTrigger ? 4 : 0}
        sx={{
          transition: "linear 0.2s",
          backdropFilter: scrollTrigger ? "blur(20px)" : "unset",
          backgroundColor: scrollTrigger
            ? "rgba(69, 147, 237, 0.6)"
            : "transparent",
        }}
      >
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="36px"
            width="36px"
            overflow="hidden"
            mr="6px"
          >
            <Box
              component={"img"}
              src={logo00}
              alt="J-Studio"
              width="120%"
              height="120%"
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "", sm: "block" } }}
          >
            J-Studio
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="shopping cart"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCartRounded />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-id"
              aria-haspopup="true"
              color="inherit"
              onClick={handleAccountOnClick}
            >
              <AccountCircleRounded />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVertRounded />
            </IconButton>
          </Box>
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
          transform: scrollTrigger ? "none" : "scale(0)",
          transition: "transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
        }}
        size="small"
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpRounded />
      </Fab>
      {renderMobileMenu}
    </Fragment>
  );
};

export default MainLayout;
