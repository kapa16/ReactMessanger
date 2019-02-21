import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";
import ChatList from "../ChatList/ChatList";
import './Layout.sass'


const Layout = (props) => {
  const {id, messages, chats, ...propsForm} = props;
  return (
    <Fragment>
      <Header/>
      <Grid container className="container layout">
        <Grid item xs={12} md={3} component="aside">
            <ChatList
              chats={chats}
              chatId={id}
            />
        </Grid>
        <Grid item xs={12} md={9} className="content" component="main">
          <MessageList messages={messages}/>
          <MessageForm {...propsForm}/>
        </Grid>

      </Grid>
    </Fragment>
  )
};

export default Layout;