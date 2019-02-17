import React from 'react';

const MessageForm = ({ createMessageHandler, onChangeMessage, message }) => {



  return (
    <div>
      <form action="#" name="msgForm" onSubmit={(e) => createMessageHandler(e)}>
        <input type="text" name="msgInput" placeholder="Write message"
               onChange={(e) => onChangeMessage(e)}
               value={message}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
};

export default MessageForm;