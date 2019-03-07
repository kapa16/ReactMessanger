import initialState from "./initialState";
import {
  ADD_CHAT, CHANGE_CHAT_ID, ERROR_CHATS_LOADING,
  HEIGHT_LIGHT_CHAT, INPUT_CHAT_TITLE,
  INPUT_MESSAGE, OPEN_ADD_CHAT_FORM, SEND_MESSAGE,
  SEND_ROBOT_MESSAGE, START_CHATS_LOADING, SUCCESS_CHATS_LOADING
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

const getNewStateMessages = (chats, currentMessage, sender, currentChatId) => {
  chats[currentChatId].messages.push(createMessage(currentMessage, sender));
  return {...chats, currentMessage: ''}
};

const getMaxId = (chats) => Object.keys(chats).reduce((maxVal, value) => +maxVal < +value ? +value : +maxVal, 0);

const gerNewStateChats = (chats, newChatTitle) => {
  const nextId = getMaxId(chats) + 1;
  const newChat = {
    id: nextId,
    title: newChatTitle,
    img: "",
    hasNewMessage: false,
    messages: []
  };
  return {
    chats: {
      ...chats,
      [nextId]: newChat
    },
    newChatTitle: ''
  }
};

const messageReducer = (state = initialState.messageInitialState, action) => {
  const {payload} = action;
  const {chats} = state;

  switch (action.type) {
    case SEND_MESSAGE:
      return {...state, ...getNewStateMessages(chats, state.currentMessage, 'mySelf', payload.chatId)};

    case SEND_ROBOT_MESSAGE:
      return {...state, ...getNewStateMessages(chats, state.robotMessage, 'robot', payload.chatId)};

    case INPUT_MESSAGE:
      return {...state, ...{currentMessage: payload.input}};

    case CHANGE_CHAT_ID:
      chats[payload.chatId].hasNewMessage = false;
      return {...state, ...{currentChatId: payload.chatId}};

    case HEIGHT_LIGHT_CHAT:
      if (payload.chatId === state.currentChatId) {
        return state;
      }
      chats[payload.chatId].hasNewMessage = true;
      return {...state, ...chats};

    case OPEN_ADD_CHAT_FORM:
      return {...state, ...{openAddChatForm: !state.openAddChatForm}};

    case INPUT_CHAT_TITLE:
      return {...state, ...{newChatTitle: payload.title}};

    case ADD_CHAT:
      const newChats = gerNewStateChats(chats, state.newChatTitle);
      return {...state, ...{openAddChatForm: !state.openAddChatForm}, ...newChats};

    case START_CHATS_LOADING:
      return {...state, ...{isLoading: true, isError: false}};

    case SUCCESS_CHATS_LOADING:
      return {...state, ...{chats: action.payload.entities.chats}, ...{isLoading: false, isError: false}};

    case ERROR_CHATS_LOADING:
      return {...state, ...{isLoading: false, isError: true}};

    default:
      return state;
  }
};

export default messageReducer;