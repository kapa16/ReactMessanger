import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
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
        <Input
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

MessageForm.propTypes ={
  createMessageHandler: PropTypes.func,
  onChangeMessage: PropTypes.func,
  currentMessage: PropTypes.string,
};

export default MessageForm;