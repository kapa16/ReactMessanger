import initialState from "./initialState";
import {
  ADD_CHAT,
  CHANGE_CHAT_ID,
  HEIGHT_LIGHT_CHAT, INPUT_CHAT_TITLE,
  INPUT_MESSAGE, OPEN_ADD_CHAT_FORM, OPEN_MENU,
  SEND_MESSAGE,
  SEND_ROBOT_MESSAGE
} from '../actions/messagesActions'

let currentMessageId = 1;

const createMessage = (text, sender) => {
  const created = new Date();
  return {
    id: currentMessageId++,
    text,
    sender,
    createdDate: created.toLocaleDateString(),
    createdTime: created.toLocaleTimeString()
  }
};

const findChat = (chats, currentChatId) => {
  return chats.find((chat) => chat.id === currentChatId);
};

const getNewStateMessages = (chats, currentMessage, sender, currentChatId) => {
  const currentChat = findChat(chats, currentChatId);
  if (!currentChat) {
    return {};
  }

  currentChat.messages.push(createMessage(currentMessage, sender));

  const index = chats.indexOf(currentChat);
  return {
    chats: [
      ...chats.slice(0, index),
      Object.assign({}, currentChat),
      ...chats.slice(index + 1)
    ],
    currentMessage: ''
  }
};

const gerNewStateChats = (chats, newChatTitle) => {
  const maxId = chats.reduce((maxId, chat) => maxId < chat['id'] ? chat['id'] : maxId, 0);
  const newChat = {
    id: maxId + 1,
    title: newChatTitle,
    img: "",
    hasNewMessage: false,
    messages: []
  };
  return {
    chats: [
      ...chats,
      newChat
    ],
    newChatTitle: ''
  }
};

const messageReducer = (state = initialState.messageInitialState, action) => {
  const {payload} = action;
  const {chats} = state;
  let currentChat = 0;
  if (typeof payload === 'object' && 'chatId' in payload) {
    currentChat = findChat(chats, payload.chatId);
  }
  switch (action.type) {
    case SEND_MESSAGE:
      return {...state, ...getNewStateMessages(chats, state.currentMessage, 'mySelf', payload.chatId)};

    case SEND_ROBOT_MESSAGE:
      return {...state, ...getNewStateMessages(chats, state.robotMessage, 'robot', payload.chatId)};

    case INPUT_MESSAGE:
      return {...state, ...{currentMessage: payload.input}};

    case CHANGE_CHAT_ID:
      currentChat.hasNewMessage = false;
      return {...state, ...{currentChatId: payload.chatId}};

    case HEIGHT_LIGHT_CHAT:
      if (payload.chatId === state.currentChatId) {
        return state;
      }
      currentChat.hasNewMessage = true;
      return {...state, ...{chats: chats}};

    case OPEN_ADD_CHAT_FORM:
      return {...state, ...{openAddChatForm: !state.openAddChatForm}};

    case INPUT_CHAT_TITLE:
      return {...state, ...{newChatTitle: payload.title}};

    case ADD_CHAT:
      const newChats = gerNewStateChats(chats, state.newChatTitle);
      return {...state, ...{openAddChatForm: !state.openAddChatForm}, ...newChats};

    default:
      return state;
  }
};


export default messageReducer;