import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";
import ChatList from "../ChatList/ChatList";
import './Layout.sass'


const Layout = (props) => {
  const {id, chats, ...propsForm} = props;
  return (
    <Fragment>
      <Header/>
      <Grid container className="container layout">
        <Grid item xs={12} md={3} component="aside" className="aside">
            <ChatList
              chats={chats}
              chatId={id}
            />
        </Grid>
        <Grid item xs={12} md={9} className="content" component="main">
          <MessageList messages={chats.find((chat) => chat.id === id).messages}/>
          <MessageForm {...propsForm}/>
        </Grid>

      </Grid>
    </Fragment>
  )
};

Layout.defaultProps = {
  id: 1
};

export default Layout;