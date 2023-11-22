import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoHeader.png';
import gearIcon from '../../assets/gearIcon.png';
import { HeaderContainer, ButtonsContainer, Button, HeaderLogo, GearConfiguration } from './Styles';
import { goToLoginPage, goToHomePage } from '../../routes/Coordinator';
import { useState, useEffect } from 'react';

export const Header = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    console.log('Email: ', userEmail);
    setEmail(userEmail);
  }, []);

  const login = () => {
    localStorage.removeItem('token');
    goToLoginPage(navigate);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    goToHomePage(navigate);
  };

  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="logo" />
      {email ? (
        <>
          <p><b>Olá, {email}!</b></p>
          <IconButton
            size="large"
            sx={{ marginLeft: 'auto' }}
            color="inherit"
            aria-controls="settings-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <GearConfiguration src={gearIcon} alt="Configurações" />
          </IconButton>

          <Menu
            id="settings-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={logout}>Minhas Playlists</MenuItem>
            <MenuItem onClick={logout}>Playlists gerais</MenuItem>
            <MenuItem onClick={logout}>Músicas gerais</MenuItem>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </>
      ) : (
        <ButtonsContainer>
          <Button onClick={login}>Entrar</Button>
        </ButtonsContainer>
      )}
    </HeaderContainer>
  );
};
