import "babel-polyfill";
import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../shared/configureStore";
import App from "../shared/App";
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore(window.__initialData__);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById("root"));