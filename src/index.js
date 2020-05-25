import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App";
import { searchRobots } from "./reducers";
import "tachyons";

const logger = createLogger()
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
