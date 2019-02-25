import React from 'react';
import PropTypes from "prop-types";
import MessageItem from "../MessageItem/MessageItem";
import './MessageList.sass';


const MessageList = ({ messages }) => {

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
        <MessageItem
          { ...msgProps }
        />
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

export default MessageList;