import {CHANGE_CHAT_ID, INPUT_MESSAGE, SEND_MESSAGE, SEND_ROBOT_MESSAGE} from "../actions/messagesActions";

export const inputMessage = (input) => {
  return {
    type: INPUT_MESSAGE,
    payload: input
  }
};

export const sendMessage = () => {
  return {
    type: SEND_MESSAGE
  }
};

export const sendRobotMessage = () => {
  return {
    type: SEND_ROBOT_MESSAGE
  }
};

export const changeChatId = (id) => {
  return {
    type: CHANGE_CHAT_ID,
    payload: id
  }
};
