import messageInitialState from "./initialState";
import {INPUT_MESSAGE, SEND_MESSAGE} from '../actions/messagesActions'

const createMessage = (text, sender) => {
  const created = new Date();
  return {
    id: this.currentMessageId++,
    text,
    sender,
    createdDate: created.toLocaleDateString(),
    createdTime: created.toLocaleTimeString()
  }
};

const messageReducer = (state = messageInitialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      const { messageText, sender } = action.payload;
      createMessage(messageText, sender);

    case INPUT_MESSAGE:
      const { input } = action.payload;
      return { input };
  }
  return state;
};

export default messageReducer;