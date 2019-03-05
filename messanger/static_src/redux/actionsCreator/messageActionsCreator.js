import {
  ADD_CHAT,  CHANGE_CHAT_ID,  HEIGHT_LIGHT_CHAT, INPUT_CHAT_TITLE,
  INPUT_MESSAGE,  OPEN_ADD_CHAT_FORM,  SEND_MESSAGE,
  SEND_ROBOT_MESSAGE, ERROR_CHATS_LOADING, START_CHATS_LOADING, SUCCESS_CHATS_LOADING
} from "../actions/messagesActions";
import { getJSON, RSAA } from "redux-api-middleware";
import { chatsSchema } from "../../utils/shemas";
import { normalize } from "normalizr";

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

export const openCloseAddChatMenu = () => {
  return {
    type: OPEN_ADD_CHAT_FORM
  }
};

export const inputChatTitle = (title) => {
  return {
    type: INPUT_CHAT_TITLE,
    payload: {title: title}
  }
};

export const addChat = () => {
  return {
    type: ADD_CHAT
  }
};

export const loadChats = () => ({
  [RSAA]: {
    endpoint: '/api/chats/',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    types: [
      START_CHATS_LOADING,
      {
        type: SUCCESS_CHATS_LOADING,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => normalize(json, [chatsSchema]));
        },
      },
      ERROR_CHATS_LOADING,
    ],
  }
});
