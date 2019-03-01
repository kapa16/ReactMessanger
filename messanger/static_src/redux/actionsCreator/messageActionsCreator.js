import {
  CHANGE_CHAT_ID,
  HEIGHT_LIGHT_CHAT,
  INPUT_MESSAGE,
  SEND_MESSAGE,
  SEND_ROBOT_MESSAGE
} from "../actions/messagesActions";

export const inputMessage = (input) => {
  return {
    type: INPUT_MESSAGE,
    payload: {input: input}
  }
};

export const sendMessage = (chatId) => {
  return {
    type: SEND_MESSAGE,
    payload: {chatId: chatId}
  }
};

export const sendRobotMessage = (chatId) => {
  return {
    type: SEND_ROBOT_MESSAGE,
    payload: {chatId: chatId}
  }
};

export const changeChatId = (chatId) => {
  return {
    type: CHANGE_CHAT_ID,
    payload: {chatId: chatId}
  }
};

export const heightLightChat = (chatId) => {
  return {
    type: HEIGHT_LIGHT_CHAT,
    payload: {chatId: chatId}
  }
};

