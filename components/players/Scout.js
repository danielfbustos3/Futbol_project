import styled from "@emotion/styled";
import PlayerCard from "./PlayerCard";
import { useEffect, useState } from "react";
import AnimatingNumber from "./AnimatingNumber";

const ScoutContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  .inputContainer {
    position: relative;
    width: 10rem;
    input {
      width: 12rem;
      padding: 10px 0;
      text-align: center;
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 50px;
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
    width: 33rem;
    .label {
      text-align: center;
      font-size: 4rem;
    }
  }
`;

const Scout = ({ data, status }) => {
  const [playerValueLabel, setPlayerValueLabel] = useState(false);
  const [playerValue, setPlayerValue] = useState("");

  const handleParamUser = () => (e) => {
    if (e.target.value.length <= 10) {
      const playerValue = e.target.value;
      setPlayerValue(playerValue);
    }
  };
  return (
    <ScoutContainer>
      <div className="inputContainer">
        <label className={playerValueLabel ? "inlabel" : "offlabel"}>
          Player Value
        </label>
        <input
          type="number"
          maxLength={10}
          value={playerValue}
          playerValue={playerValue}
          onFocus={() => setPlayerValueLabel(true)}
          onBlur={() => (playerValue == "" ? setPlayerValueLabel(false) : "")}
          onChange={handleParamUser()}
        />
      </div>
      <div className="labelContainer">
        <p className="label"> €</p>
        <AnimatingNumber value={playerValue} />
      </div>
    </ScoutContainer>
  );
};

export default Scout;
