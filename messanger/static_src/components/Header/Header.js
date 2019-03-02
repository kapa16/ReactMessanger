import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import './Header.sass'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NewChatForm from "../NewChatForm/NewChatForm";
import { bindActionCreators } from "redux";
import { openAddChatMenu, openCloseMenu } from "../../redux/actionsCreator/messageActionsCreator";
import { connect } from "react-redux";

const Header = ({openMenu, openCloseMenu, openAddChatMenu}) => {

  let anchorElMenu = null;

  const setAnchor = (evt) => {
    anchorElMenu = evt.currentTarget;
    console.log(anchorElMenu);
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters className="container">
        <IconButton
          aria-label="Menu"
          color="inherit"
          aria-owns={openMenu ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={(evt) => {
            setAnchor(evt);
            console.log(anchorElMenu);
            openCloseMenu()
          }}
        >
          <MenuIcon/>
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorElMenu}
          open={openMenu}
          onClose={() => openCloseMenu()}
        >
          <MenuItem onClick={() => openCloseMenu()}>Profile</MenuItem>
          <MenuItem onClick={() => {
            openAddChatMenu();
            openCloseMenu()
          }}>Add chat</MenuItem>
          <MenuItem onClick={() => openCloseMenu()}>Logout</MenuItem>
        </Menu>
        <Typography variant="h6" color="inherit">
          Messanger
        </Typography>
      </Toolbar>
      <NewChatForm/>
    </AppBar>
  )

};

const mapStateToProps = (state) => {
  const {openMenu} = state.messageReducer;
  return {
    openMenu: openMenu,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({openCloseMenu, openAddChatMenu}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);