import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  profileReducer,
  messageReducer
});

export default rootReducer;