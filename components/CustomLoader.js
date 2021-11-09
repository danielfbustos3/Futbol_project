import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useTheme } from "utils/functions";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  box-sizing: border-box;
  display: block;
  height: 10rem;
  width: 100%;
  margin: 0;
  background: ${({ myTheme }) => myTheme.backgroundColor};
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  backdrop-filter: saturate(180%) blur(10px);
  .loaderDiv {
    border: ${({ myTheme }) => `8px solid ${myTheme.boxColor}`};
    border-radius: 50%;
    border-top: ${({ myTheme }) => `8px solid ${myTheme.highlightColor}`};
    width: 64px;
    height: 64px;
    animation: ${spin} 0.8s linear infinite;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CustomLoader = () => {
  const myTheme = useTheme();

  return (
    <Loader myTheme={myTheme}>
      <div className="loaderDiv" />
    </Loader>
  );
};

export default CustomLoader;
