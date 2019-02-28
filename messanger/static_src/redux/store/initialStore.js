import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../reducers";
import middlewares from "../../middlewares";

const initStore = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware( ...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default initStore;