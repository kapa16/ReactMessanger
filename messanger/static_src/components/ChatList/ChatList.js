import React, {Fragment} from 'react';
import {List, Divider} from "@material-ui/core";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = ({chats}) => {

  const ChatListElements = chats.map((chat) => {
    return (
        <ChatItem
          key={chat.id}
          {...chat}
        />

    )
  });

  return (
    <List>
      {ChatListElements}
    </List>
  )
};

export default ChatList;