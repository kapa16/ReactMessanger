import React, { Fragment } from 'react';
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";
import ChatList from "../ChatList/ChatList";
import './Layout.sass'
import Profile from "../Profile/Profile";

const Layout = ({ profile }) => {

  const profileComponent = (
    <Grid item xs={12} md={12} component="aside" className="aside">
      <Profile/>
    </Grid>
  );

  const messengerComponent = (
    <Fragment>
      <Grid item xs={12} md={3} component="aside" className="aside">
        <ChatList/>
      </Grid>
      <Grid item xs={12} md={9} component="main" className="content">
        <MessageList/>
        <MessageForm/>
      </Grid>
    </Fragment>
  );

  return (
    <Fragment>
      <Header/>
      <Grid container className="container layout">
        {profile ? profileComponent : messengerComponent}
      </Grid>
    </Fragment>
  )
};

export default Layout;