import { combineReducers, createStore } from "redux";
import authorizedReducer from "./ducks/authenticator";

const reducer = combineReducers({
  authorized: authorizedReducer,
});

const store = createStore(reducer);

export default store;
