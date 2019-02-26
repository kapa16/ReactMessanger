import {INPUT_MESSAGE, SEND_MESSAGE} from "../actions/messagesActions";

export const sendMessage = (messageText, sender) => {
  return {
    type: SEND_MESSAGE,
    payload: {
      messageText,
      sender
    }
  }
};

export const inputMessage = (input) => {
  return {
    type: INPUT_MESSAGE,
    payload: input
  }
};


