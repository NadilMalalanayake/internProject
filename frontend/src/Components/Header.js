import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const RouteListPage = () => {
    navigate("/list");
  };

  const RouteRegisterPage = () => {
    navigate("/");
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}

        ></IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student Details
        </Typography>

        <Button color="inherit" onClick={RouteListPage}>
          List
        </Button>

        <Button color="inherit" onClick={RouteRegisterPage}>
          Register
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
