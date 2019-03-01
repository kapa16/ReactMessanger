import React from 'react';
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import MessageItem from "../MessageItem/MessageItem";
import './MessageList.sass';


const MessageList = ({chats, chatId}) => {
  const currentChat = chats.find((chat) => chat.id === chatId);

  let messagesItems = null;

  if (currentChat) {
    const messages = currentChat.messages;
    messagesItems = messages.map(({id, ...msgProps}) => {
      let className = 'list__item';
      if (msgProps.sender === 'mySelf') {
        className += ' list__item-my';
      } else {
        className += ' list__item-other';
      }

      return (
        <li
          key={id}
          className={className}
        >
          <MessageItem {...msgProps}/>
        </li>
      );
    });
  }

  return (
    <ul className="list">
      {messagesItems}
    </ul>
  )
};

MessageList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object),
  chatId: PropTypes.number
};

const mapStateToProps = (state) => {
  const {chats, currentChatId} = state.messageReducer;
  return {
    chats: chats,
    chatId: currentChatId,
  }
};
export default connect(mapStateToProps)(MessageList);