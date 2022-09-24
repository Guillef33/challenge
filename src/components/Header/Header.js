import React from "react";

import { Button, Typography, Box, AppBar } from "@mui/material";
import { Link } from "react-router-dom";

import "./Header.css";

function Header({ title, description }) {
  return (
    <AppBar className="header-container">
      <Box className="title-wrapper">
        <Typography variant="h3" className="header">
          {title}
        </Typography>
        <Typography className="description" variant="h5">
          {description}
        </Typography>
      </Box>

    </AppBar>
  );
}

export default Header;
