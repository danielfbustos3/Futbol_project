const SET_AUTH = "setAuth";
const READ_TOKEN = "readToken";

export const setAuth = (value) => ({
  type: SET_AUTH,
  payload: value,
});

export const readToken = () => ({
  type: READ_TOKEN,
});

const initialState = {
  auth: null,
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

    default:
      return state;
  }
};
