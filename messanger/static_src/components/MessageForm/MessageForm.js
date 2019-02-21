import React, {Fragment} from 'react';
import './MessageForm.sass'

const MessageForm = ({createMessageHandler, onChangeMessage, currentMessage}) => {
  return (
    <Fragment>
      <form
        action="#"
        name="msgForm"
        onSubmit={(e) => createMessageHandler(e)}
        className="msg-form"
      >
        <input
          type="text"
          name="msgInput"
          placeholder="Write message"
          onChange={(e) => onChangeMessage(e)}
          value={currentMessage}
          className="msg-form__input"
        />
        <button type="submit" className="msg-form__button"></button>
      </form>
    </Fragment>
  )
};

export default MessageForm;