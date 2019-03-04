import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import { bindActionCreators } from "redux";
import { openCloseAddChatMenu } from "../../redux/actionsCreator/messageActionsCreator";
import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";

const HeaderMenu = ({ id, open, anchorEl, handleCloseMenu, openCloseAddChatMenu }) => {
  return (
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseMenu}
    >
      <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
      <MenuItem onClick={() => {
        openCloseAddChatMenu();
        handleCloseMenu()
      }}>Add chat</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
    </Menu>
  )
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openCloseAddChatMenu }, dispatch);

export default connect(null, mapDispatchToProps)(HeaderMenu);