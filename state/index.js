import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  scoutValue: 500000000,
  scoutPositions: ["ST"],
  scoutMinAge: 23,
  scoutMaxAge: 35,
  scoutContract: 2024,
});

export { useGlobalState, setGlobalState };
