import React from 'react';
import {List} from "@material-ui/core";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = ({chats, selectChat}) => {

  const ChatListElements = chats.map((chat) => {
    return (
        <ChatItem
          key={chat.id}
          {...chat}
          selected={selectChat === chat.id}
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