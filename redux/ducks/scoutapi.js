const SET_RESULTS = "setResults";
const SET_STATUS = "setStatus";
const SET_VALUE = "setValue";
const SET_POSITIONS = "setPositions";
const SET_ATTRIBUTES = "setAttributes";
const SET_MINAGE = "setMinAge";
const SET_MAXAGE = "setMaxAge";
const SET_CONTRACT = "setContract";
const SET_ATTRIBUTESFETCH = "setAttributesFetch";

export const setResults = (value) => ({
  type: SET_RESULTS,
  payload: value,
});

export const setStatus = (value) => ({
  type: SET_STATUS,
  payload: value,
});

export const setValue = (value) => ({
  type: SET_VALUE,
  payload: value,
});
export const setPositions = (value) => ({
  type: SET_POSITIONS,
  payload: value,
});
export const setAttributes = (value) => ({
  type: SET_ATTRIBUTES,
  payload: value,
});
export const setMinAge = (value) => ({
  type: SET_MINAGE,
  payload: value,
});
export const setMaxAge = (value) => ({
  type: SET_MAXAGE,
  payload: value,
});
export const setContract = (value) => ({
  type: SET_CONTRACT,
  payload: value,
});
export const setAttributesFetch = () => ({
  type: SET_ATTRIBUTESFETCH,
});

const initialState = {
  data: [],
  status: "loading",
  value: "",
  positions: [],
  attributes: [],
  minAge: 23,
  maxAge: 35,
  contract: 2023,
  attributesFetch: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, data: action.payload };
    case SET_STATUS:
      return { ...state, status: action.payload };
    case SET_VALUE:
      return { ...state, value: action.payload };
    case SET_POSITIONS:
      return { ...state, positions: action.payload };
    case SET_ATTRIBUTES:
      return { ...state, attributes: action.payload };
    case SET_MINAGE:
      return { ...state, minAge: action.payload };
    case SET_MAXAGE:
      return { ...state, maxAge: action.payload };
    case SET_CONTRACT:
      return { ...state, contract: action.payload };
    case SET_ATTRIBUTESFETCH:
      return { ...state, attributesFetch: "" };
    default:
      return state;
  }
};
