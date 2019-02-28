import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import "./css/main.sass"
import {Provider} from "react-redux";
import initStore from "./redux/store/initialStore";

ReactDom.render(
  <BrowserRouter>
    <Provider store={initStore}>
      <App />
    </Provider>
  </BrowserRouter>  ,
  document.getElementById('root')
);