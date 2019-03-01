import React, {Component} from 'react';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import './Header.sass'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NewChatForm from "../NewChatForm/NewChatForm";
import {bindActionCreators} from "redux";
import {openAddChatMenu} from "../../redux/actionsCreator/messageActionsCreator";
import {connect} from "react-redux";

class Header extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { openAddChatMenu } = this.props;

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

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={() => {openAddChatMenu(); this.handleClose()}}>Add chat</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
          <Typography variant="h6" color="inherit">
            Messanger
          </Typography>
        </Toolbar>
        <NewChatForm/>
      </AppBar>
    )
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({openAddChatMenu}, dispatch);

export default connect(null, mapDispatchToProps)(Header);