import React from 'react';
import {List} from "@material-ui/core";
import ChatItem from "../ChatItem/ChatItem";
import {connect} from "react-redux";

const ChatList = ({ chats, chatId }) => {
  const ChatListElements = chats.map((chat) => {
    return (
        <ChatItem
          key={chat.id}
          {...chat}
          selected={chatId === chat.id}
          countMessages={chat.messages.length}
        />
    )
  });

  return (
    <List>
      {ChatListElements}
    </List>
  )
};

const mapStateToProps = (state) => {
  const { chats, currentChatId } = state.messageReducer;
  return {
    chats: chats,
    chatId: currentChatId,
  }
};

export default connect(mapStateToProps)(ChatList);