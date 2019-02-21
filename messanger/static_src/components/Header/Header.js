import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/Grid";
import './Header.sass'

const Header = ({handleChatListOpen}) => {
  return (
    <AppBar position="static">
        <Toolbar disableGutters className="container">
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={handleChatListOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Messanger
          </Typography>
        </Toolbar>

    </AppBar>
  )
};

export default Header;