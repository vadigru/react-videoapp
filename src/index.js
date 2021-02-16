import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer/reducer.js";
import {Provider} from "react-redux";


import './index.scss';
import thunk from "redux-thunk";

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const init = () => {
  ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
