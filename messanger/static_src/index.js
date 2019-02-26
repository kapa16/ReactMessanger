import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import "./css/main.sass"
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);