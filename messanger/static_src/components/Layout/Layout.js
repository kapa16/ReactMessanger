import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";

import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";
import ChatList from "../ChatList/ChatList";

const Layout = ({messages, chats, ...propsForm}) => {
  return (
    <Fragment>
      <Header/>
      <Grid container>
        <Grid item xs={12} md={3}>
          <ChatList chats={chats} />
        </Grid>
        <Grid item xs={12} md={9}>
          <MessageList messages={messages}/>
          <MessageForm {...propsForm}/>
        </Grid>

      </Grid>
    </Fragment>
  )
};

export default Layout;