import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import AnimatingNumber from "./AnimatingNumber";

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
      color: #fff;
      border: none;
      border-bottom: 1px solid #fff;
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
      color: #01bf71;
      font-size: 1rem;
      transition: 0.2s;
    }
    .offlabel {
      position: absolute;
      top: 0rem;
      left: 2rem;
      padding: 10px 0;
      font-size: 1.5rem;
      color: #fff;
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
  const [playerValueLabel, setPlayerValueLabel] = useState(false);
  const [playerValue, setPlayerValue] = useState("");

  const handleParamUser = () => (e) => {
    if (e.target.value.length <= 10) {
      const playerValue = e.target.value;
      setPlayerValue(playerValue);
    }
  };
  return (
    <Container>
      <div className="inputContainer">
        <label className={playerValueLabel ? "inlabel" : "offlabel"}>
          Player Value
        </label>
        <input
          type="number"
          maxLength={10}
          value={playerValue}
          onFocus={() => setPlayerValueLabel(true)}
          onBlur={() => (playerValue == "" ? setPlayerValueLabel(false) : "")}
          onChange={handleParamUser()}
        />
      </div>
      <div className="labelContainer">
        <p className="label"> €</p>
        <AnimatingNumber value={playerValue} />
      </div>
    </Container>
  );
};

export default ValueInput;
