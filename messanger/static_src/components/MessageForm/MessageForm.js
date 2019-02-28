import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
import './MessageForm.sass'
import {connect} from "react-redux";
import {inputMessage, sendMessage, sendRobotMessage} from "../../redux/actionsCreator/messageActionsCreator";
import {bindActionCreators} from "redux";


const MessageForm = ({sendMessage, inputMessage, currentMessage, currentChatId}) => {

  const sendMessageHandler = (e) => {
    e.preventDefault();
    sendMessage(currentChatId);
  };

  return (
    <Fragment>
      <form
        action="#"
        name="msgForm"
        onSubmit={(e) => sendMessageHandler(e)}
        className="msg-form"
      >
        <Input
          type="text"
          name="msgInput"
          placeholder="Write message"
          onChange={(e) => inputMessage(e.target.value)}
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
  currentChatId: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    currentMessage: state.messageReducer.currentMessage,
    currentChatId: state.messageReducer.currentChatId
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({inputMessage, sendMessage, sendRobotMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);