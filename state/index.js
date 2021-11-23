import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  scoutValue: "",
  scoutPositions: [],
  scoutAttributes: [],
  scoutMinAge: 23,
  scoutMaxAge: 35,
  scoutContract: 2023,
  auth: null,
  setTheme: "",
});

export { useGlobalState, setGlobalState };
