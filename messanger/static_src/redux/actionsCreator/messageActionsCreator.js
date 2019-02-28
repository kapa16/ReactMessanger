import {CHANGE_CHAT_ID, INPUT_MESSAGE, SEND_MESSAGE, SEND_ROBOT_MESSAGE} from "../actions/messagesActions";

export const inputMessage = (input) => {
  return {
    type: INPUT_MESSAGE,
    payload: input
  }
};

export const sendMessage = (currentChatId) => {
  return {
    type: SEND_MESSAGE,
    payload: currentChatId
  }
};

export const sendRobotMessage = (chatId) => {
  return {
    type: SEND_ROBOT_MESSAGE,
    payload: chatId
  }
};

export const changeChatId = (id) => {
  return {
    type: CHANGE_CHAT_ID,
    payload: id
  }
};

