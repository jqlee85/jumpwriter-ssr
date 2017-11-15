import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import reducer from "./reducer";

const env = process.env.NODE_ENV || 'development';
const middleware = [thunk];
const logger = createLogger();
if (env === 'development') middleware.push(logger);

const configureStore = preloadedState =>
  createStore(reducer, preloadedState, applyMiddleware(...middleware));

export default configureStore;
