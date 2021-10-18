import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const defaultProps = {
  commas: true,
  timeout: 500,
  steps: 10,
};

// const constructor = (props) => {
//   super(props);
//   this.state = {
//     currentStep: 0,
//     targetValue: props.value,
//     originalValue: props.value,
//     currentValue: props.value,
//   };
// };

// const componentWillUnmount = () => {
//   clearInterval(this._interval);
// };

const commas = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const Counter = ({ playerValue }) => {
  const [returnValue, setReturnValue] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const [originalValue, setOriginalValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const getValue = (percent) => {
    const diff = targetValue - originalValue;
    return diff * percent + originalValue;
  };

  useEffect(() => {
    setOriginalValue(currentValue);
    setTargetValue(playerValue);

    for (var i = currentValue; i < targetValue; i++) {
      setCurrentValue(currentValue + 1);
    }

    setReturnValue(currentValue);
    // if (defaultProps.commas) {
    // setReturnValue(commas(returnValue));
    // }
  });
  return <div className="counter"> {returnValue}</div>;
};

export default Counter;
