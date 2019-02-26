import update from 'immutability-helper';
import initialState from "./initialState";
import {CHANGE_CHAT_ID, INPUT_MESSAGE, SEND_MESSAGE, SEND_ROBOT_MESSAGE} from '../actions/messagesActions'

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

const getNewState = (chats, currentMessage, sender, currentChatId) => {
  const currentChat = chats.find((chat) => chat.id === currentChatId);
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


const messageReducer = (state = initialState.messageInitialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {...state, ...getNewState(state.chats, state.currentMessage, 'mySelf', state.currentChatId)};

    case SEND_ROBOT_MESSAGE:
      return state;

    case INPUT_MESSAGE:
      return {...state, ...{currentMessage: action.payload}};

    case CHANGE_CHAT_ID:
      return {...state, ...{currentChatId: action.payload}};
  }
  return state;
};

export default messageReducer;