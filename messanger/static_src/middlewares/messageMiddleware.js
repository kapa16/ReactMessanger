import { SEND_MESSAGE } from "../redux/actions/messagesActions";
import {sendRobotMessage} from "../redux/actionsCreator/messageActionsCreator";


export default store => next => action => {
  switch (action.type) {
    case SEND_MESSAGE:
      setTimeout(() => store.dispatch(sendRobotMessage(action.payload)), 1000);
  }
  return next(action);
}