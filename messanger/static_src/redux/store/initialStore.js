import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from "../reducers";
import middlewares from "../../middlewares";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

const initStore = createStore(
  createRootReducer(history),
  {},
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      ...middlewares
    )
  )
);

export default initStore;