import React, {Fragment} from 'react';

const MessageForm = ({createMessageHandler, onChangeMessage, message}) => {
  return (
    <Fragment>
      <form
        action="#"
        name="msgForm"
        onSubmit={(e) => createMessageHandler(e)}
      >
        <input
          type="text"
          name="msgInput"
          placeholder="Write message"
          onChange={(e) => onChangeMessage(e)}
          value={message}
        />
        <button type="submit">Send</button>
      </form>
    </Fragment>
  )
};

export default MessageForm;