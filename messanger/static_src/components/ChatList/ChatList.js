import React from 'react';
import { connect } from "react-redux";
import { List } from "@material-ui/core";
import * as PropTypes from "prop-types";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = ({chats, chatId}) => {
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

ChatList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object),
  chatId: PropTypes.number,
};

const mapStateToProps = (state) => {
  const {chats, currentChatId} = state.messageReducer;
  return {
    chats: chats,
    chatId: currentChatId,
  }
};

export default connect(mapStateToProps)(ChatList);