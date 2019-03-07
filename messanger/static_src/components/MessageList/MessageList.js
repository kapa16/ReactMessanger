import React from 'react';
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import MessageItem from "../MessageItem/MessageItem";
import './MessageList.sass';


const MessageList = ({chats, currentChatId, isLoading}) => {
  const currentChat = chats[currentChatId];

  let messagesItems = null;

  if (isLoading) {
    return (<CircularProgress/>)
  }

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
  chats: PropTypes.object,
  chatId: PropTypes.number
};

const mapStateToProps = (state) => {
  return state.messageReducer;
};
export default connect(mapStateToProps)(MessageList);