import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";
import ChatList from "../ChatList/ChatList";
import './Layout.sass'


const Layout = ({messages, chats, ...propsForm}) => {
  return (
    <Fragment>
      <Header/>
      <Grid container className="container layout">
        <Grid item xs={12} md={3}>
            <ChatList
              chats={chats}
            />
        </Grid>
        <Grid item xs={12} md={9} className="content">
          <MessageList messages={messages}/>
          <MessageForm {...propsForm}/>
        </Grid>

      </Grid>
    </Fragment>
  )
};

export default Layout;