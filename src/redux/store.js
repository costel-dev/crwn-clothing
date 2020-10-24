import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // middleware to help us debug our code easier that console log our redux flow

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
