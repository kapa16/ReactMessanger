import React, {Fragment} from 'react';
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

export default MessageItem;