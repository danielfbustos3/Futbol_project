import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTheme } from "../../../utils/functions";
import { useGlobalState, setGlobalState } from "../../../state";

const SliderContainer = styled.div`
  .values {
    background-color: ${({ myTheme }) => myTheme.highlightColor};
    width: 35%;
    position: relative;
    margin: auto;
    padding: 10px 0;
    border-radius: 0.5rem;
    text-align: center;
    color: ${({ myTheme }) => myTheme.hoverText};
    &:before {
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      border-top: ${({ myTheme }) => `15px solid ${myTheme.hoverColor}`};
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      margin: auto;
      bottom: -14px;
      left: 0;
      right: 0;
    }
  }
  .sliderContent {
    position: relative;
    width: 100%;
    height: 100px;

    .sliderTrack {
      width: 100%;
      height: 0.5rem;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      border-radius: 0.5rem;
      background: ${({ myTheme, tip, percent1, percent2, percent3 }) =>
        tip == "age"
          ? `linear-gradient(to right, ${myTheme.textColor} ${percent1}% , ${myTheme.highlightColor} ${percent1}% , ${myTheme.highlightColor} ${percent2}%, ${myTheme.textColor} ${percent2}%)`
          : `linear-gradient(to right, ${myTheme.highlightColor} ${percent3}% , ${myTheme.textColor} ${percent3}%)`};
    }

    .slider {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      outline: none;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      background-color: transparent;
      pointer-events: none;
      &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 5px;
      }
      &::-moz-range-track {
        -moz-appearance: none;
        height: 5px;
      }
      &::-ms-track {
        appearance: none;
        height: 5px;
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 0.8rem;
        width: 1.5rem;
        background-color: ${({ myTheme }) => myTheme.highlightColor};
        cursor: grab;
        margin-top: -0.3rem;
        pointer-events: auto;
        border-radius: 0.5rem;
      }
      &::-moz-range-thumb {
        -moz-appearance: none;
        height: 0.8rem;
        width: 1.5rem;
        background-color: ${({ myTheme }) => myTheme.highlightColor};
        cursor: grab;
        margin-top: -0.3rem;
        pointer-events: auto;
        border-radius: 0.5rem;
      }
      &::-ms-thumb {
        appearance: none;
        height: 0.8rem;
        width: 1.5rem;
        background-color: ${({ myTheme }) => myTheme.highlightColor};
        cursor: grab;
        margin-top: -0.3rem;
        pointer-events: auto;
        border-radius: 0.5rem;
      }
      &:active {
        &::-webkit-slider-thumb {
          cursor: grabbing;
          background-color: ${({ myTheme }) => myTheme.boxColor};
          border: ${({ myTheme }) => `3px solid ${myTheme.highlightColor}`};
        }
      }
    }
  }
`;

const ACSlider = ({ tip }) => {
  const myTheme = useTheme();

  const minGap = 2;
  const maxAge = 43;
  const minAge = 16;
  const contractMin = 2021;
  const contractMax = 2028;

  const globalMinAge = useGlobalState("scoutMinAge")[0];
  const [percent1, setPercent1] = useState(
    ((globalMinAge - minAge) / (maxAge - minAge)) * 100
  );
  const handleParam1 = () => (e) => {
    if (e.target.value <= globalMaxAge - minGap) {
      const handleMin = parseInt(e.target.value);
      setGlobalState("scoutMinAge", handleMin);
      setPercent1(((handleMin - minAge) / (maxAge - minAge)) * 100);
    }
  };

  const globalMaxAge = useGlobalState("scoutMaxAge")[0];
  const [percent2, setPercent2] = useState(
    ((globalMaxAge - minAge) / (maxAge - minAge)) * 100
  );
  const handleParam2 = () => (e) => {
    if (e.target.value >= globalMinAge + minGap) {
      const handleMax = parseInt(e.target.value);
      setGlobalState("scoutMaxAge", handleMax);
      setPercent2(((handleMax - minAge) / (maxAge - minAge)) * 100);
    }
  };

  const globalContract = useGlobalState("scoutContract")[0];
  const [percent3, setPercent3] = useState(
    ((globalContract - contractMin) / (contractMax - contractMin)) * 100
  );
  const handleParam3 = () => (e) => {
    const handle = parseInt(e.target.value);
    setGlobalState("scoutContract", handle);
    setPercent3(((handle - contractMin) / (contractMax - contractMin)) * 100);
  };

  useEffect(() => {
    setPercent1(((globalMinAge - minAge) / (maxAge - minAge)) * 100);
    setPercent2(((globalMaxAge - minAge) / (maxAge - minAge)) * 100);
    setPercent3(
      ((globalContract - contractMin) / (contractMax - contractMin)) * 100
    );
  }, [globalMinAge, globalMaxAge, globalContract]);

  switch (tip) {
    case "age":
      return (
        <SliderContainer
          myTheme={myTheme}
          percent1={percent1}
          percent2={percent2}
          percent3={percent3}
          tip={tip}
        >
          <div className="values">
            <span> Rango de edad: </span>
            <span className="range">{globalMinAge}</span>
            <span> - </span>
            <span className="range">{globalMaxAge}</span>
          </div>
          <div className="sliderContent">
            <div className="sliderTrack"></div>
            <input
              className="slider"
              type="range"
              min={minAge}
              max={maxAge}
              value={globalMinAge}
              onChange={handleParam1()}
            ></input>
            <input
              className="slider"
              type="range"
              min={minAge}
              max={maxAge}
              value={globalMaxAge}
              onChange={handleParam2()}
            ></input>
          </div>
        </SliderContainer>
      );

    case "contract":
      return (
        <SliderContainer
          myTheme={myTheme}
          percent1={percent1}
          percent2={percent2}
          percent3={percent3}
          tip={tip}
        >
          <div className="values">
            <span className="range">Contrato hasta: {globalContract}</span>
          </div>
          <div className="sliderContent">
            <div className="sliderTrack"></div>
            <input
              className="slider"
              type="range"
              min={contractMin}
              max={contractMax}
              value={globalContract}
              onChange={handleParam3()}
            ></input>
          </div>
        </SliderContainer>
      );
  }
};

export default ACSlider;
