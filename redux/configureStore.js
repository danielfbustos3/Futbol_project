import { combineReducers, createStore } from "redux";
import authorizedReducer from "./ducks/authenticator";
import scoutReducer from "./ducks/scoutapi";

const reducer = combineReducers({
  scouted: scoutReducer,
  authorized: authorizedReducer,
});

const store = createStore(reducer);

export default store;
