import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTheme } from "../../../utils/functions";
import { useGlobalState, setGlobalState } from "../../../state";

const SliderContainer = styled.div`
  .values {
    background-color: #3264fe;
    width: 32%;
    position: relative;
    margin: auto;
    padding: 10px 0;
    border-radius: 5px;
    text-align: center;
    font-weight: 500;
    font-size: 25px;
    color: #ffffff;
    &:before {
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      border-top: 15px solid #3264fe;
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
    margin-top: 30px;

    .sliderTrack {
      width: 100%;
      height: 0.5rem;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      border-radius: 0.5rem;
      background: ${({ tip, percent1, percent2, percent3 }) =>
        tip == "age"
          ? `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`
          : `linear-gradient(to right, #3264fe ${percent3}% , #dadae5 ${percent3}%)`};
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
        height: 1.7em;
        width: 1.7em;
        background-color: #3264fe;
        cursor: pointer;
        margin-top: -9px;
        pointer-events: auto;
        border-radius: 50%;
      }
      &::-moz-range-thumb {
        -webkit-appearance: none;
        height: 1.7em;
        width: 1.7em;
        cursor: pointer;
        border-radius: 50%;
        background-color: #3264fe;
        pointer-events: auto;
      }
      &::-ms-thumb {
        appearance: none;
        height: 1.7em;
        width: 1.7em;
        cursor: pointer;
        border-radius: 50%;
        background-color: #3264fe;
        pointer-events: auto;
      }
      &:active {
        &::-webkit-slider-thumb {
          background-color: #ffffff;
          border: 3px solid #3264fe;
        }
      }
    }
  }
`;
// let sliderOne = document.getElementById("slider1");
// let sliderTwo = document.getElementById("slider2");
// let displayValOne = document.getElementById("range1");
// let displayValTwo = document.getElementById("range2");
// let minGap = 3;
// let sliderTrack = document.querySelector(".sliderTrack");
// let sliderMaxAge = document.getElementById("slider1").max;

// function slideOne() {
//   if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
//     sliderOne.value = parseInt(sliderTwo.value) - minGap;
//   }
//   displayValOne.textContent = sliderOne.value;
//   fillColor();
// }
// function slideTwo() {
//   if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
//     sliderTwo.value = parseInt(sliderOne.value) + minGap;
//   }
//   displayValTwo.textContent = sliderTwo.value;
//   fillColor();
// }
// function fillColor() {
//   percent1 = (sliderOne.value / sliderMaxAge) * 100;
//   percent2 = (sliderTwo.value / sliderMaxAge) * 100;
//   sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
// }

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
    ((globalMinAge - minAge) / (maxAge - minAge)) * 100
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
            <span className="range">{globalContract}</span>
            <span> - </span>
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
