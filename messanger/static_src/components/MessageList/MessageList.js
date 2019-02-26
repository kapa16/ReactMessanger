import React from 'react';
import PropTypes from "prop-types";
import MessageItem from "../MessageItem/MessageItem";
import './MessageList.sass';
import {connect} from "react-redux";


const MessageList = ({ messages }) => {
  console.log(messages);
  // const showRobotMsg = (currentChatId) => {
  //   getNewState(chats, robotMessage, 'robot', currentChatId);
  // };
  //
  // const addRobotMsg = (currentChatId) => {
  //   setTimeout(showRobotMsg, 2000, currentChatId);
  // };
// addRobotMsg(state.currentChatId);

  const messagesItems = messages.map(({ id, ...msgProps }) => {
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
        <MessageItem { ...msgProps }/>
      </li>
    );
  });

  return (
    <ul className="list">
      { messagesItems }
    </ul>
  )
};

MessageList.propTypes ={
  messages: PropTypes.array
};

const mapStateToProps = (state) => {
  const { chats, currentChatId } = state.messageReducer;
  const currentChat = chats.find((chat) => chat.id === currentChatId);
  // if (!currentChat) {
  //   return {messages: []};
  // }
  return {
    messages: currentChat.messages,
  }
};

export default connect(mapStateToProps)(MessageList);