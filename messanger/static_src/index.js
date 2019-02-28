import React from 'react';
import ReactDom from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import "./css/main.sass"
import {Provider} from "react-redux";
import initStore, { history } from "./redux/store/initialStore";

ReactDom.render(
    <Provider store={initStore}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);