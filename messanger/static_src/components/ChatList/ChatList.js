import React from 'react';
import { connect } from "react-redux";
import { List } from "@material-ui/core";
import * as PropTypes from "prop-types";
import ChatItem from "../ChatItem/ChatItem";
import WithData from "../hoc/WithData";
import { bindActionCreators } from "redux";
import { loadChats } from "../../redux/actionsCreator/messageActionsCreator";

const ChatList = ({ chats, currentChatId }) => {
  const ChatListElements = Object.keys(chats).map((chatId) => {
    const chat = chats[chatId];
    return (
      <ChatItem
        key={chat.id}
        {...chat}
        selected={currentChatId == chatId}
        countMessages={chat.messages.length}
        hasNewMessage={chat.hasNewMessage}
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
  chats: PropTypes.object,
  chatId: PropTypes.number,
};

const mapStateToProps = (state) => {
  return state.messageReducer;
};
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WithData(ChatList, 'loadChats'));