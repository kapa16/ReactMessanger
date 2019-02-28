import {compose, createStore} from "redux";
import rootReducer from "../reducers";

const initStore = createStore(
  rootReducer,
  {},
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default initStore;