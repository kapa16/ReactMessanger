import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import messageReducer from "./messageReducer";


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  messageReducer
});

export default rootReducer;