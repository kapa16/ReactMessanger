import React from 'react';
import PropTypes from "prop-types";
import './MessageItem.sass'

const MessageItem = ({ text, createdDate, createdTime }) => {
  return (
    <div className="item">
      <p className="item__text">{text}</p>
      <p className="item__info">
        <span>{createdDate}</span>
        <span>{createdTime}</span>
      </p>
    </div>
  )
};

MessageItem.propTypes = {
  text: PropTypes.string,
  createdDate: PropTypes.string,
  createdTime: PropTypes.string,
};

export default MessageItem;