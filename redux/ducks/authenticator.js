const jwt = require("jsonwebtoken");

const SET_AUTH = "setAuth";
const READ_TOKEN = "readToken";
const CHECK_AUTH = "checkAuth";
const AUTHORIZE = "authorize";

export const setAuth = (value) => ({
  type: SET_AUTH,
  payload: value,
});

export const readToken = () => ({
  type: READ_TOKEN,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const authorize = () => ({
  type: AUTHORIZE,
});

const initialState = {
  auth: null,
  authenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, auth: action.payload };
    case READ_TOKEN:
      let auth1 = null;

      try {
        auth1 = JSON.parse(localStorage.getItem("auth"));
      } catch (err) {
        console.log(err);
      }
      return { ...state, auth: auth1 };

    case CHECK_AUTH:
      if (state.auth) {
        let token = state.auth?.token;
        let authorizing = false;
        jwt.verify(token, "securePasswordHere", (err) => {
          if (err) {
            console.log(err);
            authorizing = false;
          } else {
            authorizing = true;
          }
        });
      } else {
        authorizing = false;
      }
      return { ...state, authenticated: authorizing };
    case AUTHORIZE:
      return { ...state, authenticated: true };
    default:
      return state;
  }
};
