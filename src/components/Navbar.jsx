import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  const isMenuOpen = Boolean(anchorEl);

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-toolbar">
        <Typography variant="h6" component="div" className="navbar-logo" onClick={handleLogoClick} sx={{ cursor: "pointer", fontWeight: "bold",}}>
          Tabib
        </Typography>

        <Box className="navbar-links">
          <a href="/" className="navbar-link">Centre d'aide</a>
          <a href="/" className="navbar-link">Mes messages</a>
          <a href="/" className="navbar-link">Mes rendez-vous</a>
          <a href="/" className="navbar-link">Mes documents</a>
        </Box>

        <Box className="user-menu">
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account of current user"
            aria-controls="user-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
            <Typography className="user-menu-name">Younes NCIRI</Typography>
          </IconButton>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuClose}>Mon compte</MenuItem>
            <MenuItem onClick={handleMenuClose}>Déconnexion</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
