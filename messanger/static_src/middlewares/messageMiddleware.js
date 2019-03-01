import { SEND_MESSAGE, SEND_ROBOT_MESSAGE } from "../redux/actions/messagesActions";
import { heightLightChat, sendRobotMessage } from "../redux/actionsCreator/messageActionsCreator";


export default store => next => action => {
  const { payload } = action;
  switch (action.type) {
    case SEND_MESSAGE:
      setTimeout(() => store.dispatch(sendRobotMessage(payload.chatId)), 2000);
      break;
    case SEND_ROBOT_MESSAGE:
      store.dispatch(heightLightChat(payload.chatId));
      break;
  }
  return next(action);
}