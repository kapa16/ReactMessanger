import React, {Fragment} from 'react';
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";

const Layout = ({messages, ...propsForm}) => {
  return (
    <Fragment>
      <Header/>
      <MessageList messages={messages}/>
      <MessageForm {...propsForm}/>
    </Fragment>
  )
};

export default Layout;