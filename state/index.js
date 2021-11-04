import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  scoutValue: "",
  scoutPositions: [],
  scoutMinAge: 23,
  scoutMaxAge: 35,
  scoutContract: 2023,
});

export { useGlobalState, setGlobalState };
