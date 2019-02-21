import React, {Fragment} from 'react';
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";

const Layout = ({messages, createMessageHandler, onChangeMessage, message}) => {
  return (
    <Fragment>
      <Header/>
      <MessageList messages={messages}/>
      <MessageForm
        createMessageHandler={createMessageHandler}
        onChangeMessage={onChangeMessage}
        message={message}
      />
    </Fragment>
  )
};

export default Layout;