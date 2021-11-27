import axios from "axios";

const SET_RESULTS = "setResults";
const GET_RESULTS = "getResults";

export const setResults = (value) => ({
  type: SET_RESULTS,
  payload: value,
});

export const getResults = () => ({
  type: GET_RESULTS,
});

const initialState = {
  data: [],
  status: "loading",
};

export default async (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, results: action.payload };
    case GET_RESULTS:
      const value = 200000;
      const positions = "CM,ST".toString().replace(/,/g, "|");
      const contract = 2023;
      const minAge = 16;
      const maxAge = 25;
      let result = [];
      let status;
      try {
        const res = await axios.get(
          `${window.location.origin}/api/scout?value=${value}&positions=${positions}&contract=${contract}&minage=${minAge}&maxage=${maxAge}`
        );
        console.log("working:");
        console.log(res);
        if (res.data.success === true) {
          status = "success";
          result = res.data.data;
        }
      } catch (error) {
        console.log(error);
        status = "error";
      }
      console.log(result);
      return {
        ...state,
        data: [result],
      };
    default:
      return state;
  }
};
