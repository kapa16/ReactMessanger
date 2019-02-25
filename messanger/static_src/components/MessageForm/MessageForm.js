import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
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
        <IconButton type="submit" aria-label="Send" color="inherit">
          <SendIcon />
        </IconButton>
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