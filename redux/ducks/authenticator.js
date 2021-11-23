const SET_AUTH = "setAuth";
const READ_TOKEN = "readToken";

export const setAuth = () => ({
  type: SET_AUTH,
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
      return { ...state, auth: state.auth };
    case READ_TOKEN:
      return;

    default:
      return state;
  }
};
