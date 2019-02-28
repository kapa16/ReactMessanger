import {applyMiddleware, compose, createStore} from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from "../reducers";
import middlewares from "../../middlewares";

export const history = createBrowserHistory();

const initStore = createStore(
    createRootReducer(history),
  {},
  compose(
    applyMiddleware(
        routerMiddleware(history),
        ...middlewares
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default initStore;