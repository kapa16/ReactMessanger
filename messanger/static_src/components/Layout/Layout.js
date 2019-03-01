import React, { Fragment } from 'react';
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";
import ChatList from "../ChatList/ChatList";
import './Layout.sass'

const Layout = () => {
    return (
      <Fragment>
        <Header/>
        <Grid container className="container layout">
          <Grid item xs={12} md={3} component="aside" className="aside">
            <ChatList/>
          </Grid>
          <Grid item xs={12} md={9} component="main" className="content">
            <MessageList/>
            <MessageForm/>
          </Grid>
        </Grid>
      </Fragment>
    )
};

export default Layout;