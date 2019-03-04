import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import NewChatForm from "../NewChatForm/NewChatForm";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

class Header extends Component {

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <AppBar position="static">
        <Toolbar disableGutters className="container">
          <IconButton
            aria-label="Menu"
            color="inherit"
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon/>
          </IconButton>

          <HeaderMenu
            id="simple-menu"
            anchorEl={anchorEl}
            handleCloseMenu={this.handleClose}
            open={Boolean(anchorEl)}
          />

          <Typography variant="h6" color="inherit">
            Messanger
          </Typography>
        </Toolbar>

        <NewChatForm/>

      </AppBar>
    );
  }
}

export default (Header);