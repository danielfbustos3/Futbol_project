import styled from "@emotion/styled";
import { useState } from "react";
import AnimatingNumber from "./AnimatingNumber";
import { useTheme } from "../../../utils/functions";
import { useGlobalState, setGlobalState } from "state";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  .inputContainer {
    position: relative;
    display: flex;
    align-items: center;
    input {
      width: 10rem;
      padding: 10px 0;
      text-align: center;
      font-size: 1.5rem;
      color: ${({ myTheme }) => myTheme.textColor};
      border: none;
      border-bottom: ${({ myTheme }) => `1px solid ${myTheme.textColor}`};
      outline: none;
      background: transparent;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .inlabel {
      position: absolute;
      top: -0.7rem;
      left: 0;
      color: ${({ myTheme }) => myTheme.highlightColor};
      font-size: 1rem;
      transition: 0.2s;
    }
    .offlabel {
      position: absolute;
      top: 0rem;
      left: 2rem;
      padding: 10px 0;
      font-size: 1.5rem;
      color: ${({ myTheme }) => myTheme.textColor};
      pointer-events: none;
      transition: 0.5s;
    }
  }
  .labelContainer {
    display: flex;
    justify-content: center;
    align-items: left;
    .label {
      width: 100%;
      margin-right: 1rem;
      text-align: right;
      font-size: 4rem;
    }
  }
`;

const ValueInput = () => {
  const myTheme = useTheme();

  const globalPlayerValue = useGlobalState("scoutValue")[0];

  const [playerValueLabel, setPlayerValueLabel] = useState(
    globalPlayerValue == "" ? false : true
  );

  const handleParamUser = () => (e) => {
    if (e.target.value.length <= 10) {
      const handleValue = e.target.value;
      setGlobalState("scoutValue", handleValue);
    }
  };
  return (
    <Container myTheme={myTheme}>
      <div className="inputContainer">
        <label className={playerValueLabel ? "inlabel" : "offlabel"}>
          Player Value
        </label>
        <input
          type="number"
          value={globalPlayerValue}
          onFocus={() => setPlayerValueLabel(true)}
          onBlur={() =>
            globalPlayerValue == "" ? setPlayerValueLabel(false) : ""
          }
          onChange={handleParamUser()}
        />
      </div>
      <div className="labelContainer">
        <p className="label"> €</p>
        <AnimatingNumber value={globalPlayerValue} />
      </div>
    </Container>
  );
};

export default ValueInput;
