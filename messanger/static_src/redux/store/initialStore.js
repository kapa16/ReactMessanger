import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { apiMiddleware } from 'redux-api-middleware';
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
      apiMiddleware,
      ...middlewares
    )
  )
);

export default initStore;