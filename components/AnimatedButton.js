import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useTheme } from "utils/functions";

const scale = keyframes`
      0%, 100% {transform:  scale(1);}
        25% {transform: scale(0.95);}
        50% {transform:scale(1.05);}
        75% {transform: scale(0.95);}
    `;

const ButtonContainer = styled.div`
  .myBtn {
    padding: 0.5rem 1rem;
    color: ${({ myTheme }) => myTheme.hoverColor};
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 3px;
    background: ${({ myTheme }) => myTheme.boxColor};
    border-radius: 1rem;
    border: none;
    box-shadow: ${({ myTheme }) => `0 0 0.2rem ${myTheme.boxColor}`};
    animation: ${scale} 1s infinite;

    &:hover {
      cursor: pointer;
      background: ${({ myTheme }) => myTheme.hoverColor};
      color: ${({ myTheme }) => myTheme.hoverText};
      border-radius: 1rem;
      box-shadow: ${({
        myTheme,
      }) => `0 0 0.15rem ${myTheme.hoverColor}, 0 0 0.25rem ${myTheme.hoverColor}, 0 0 0.33rem ${myTheme.hoverColor},
            0 0 0.5rem ${myTheme.hoverColor}`};
    }
  }
  .smallBtn {
    margin-top: 1rem;
    margin-left: 40%;
    padding: 0.3rem 1rem;
    color: ${({ myTheme }) => myTheme.textColor};
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 3px;
    background: ${({ myTheme }) => myTheme.boxColor};
    border-radius: 1rem;
    border: none;
    box-shadow: ${({ myTheme }) => `0 0 0.2rem ${myTheme.boxColor}`};
    animation: ${scale} 1s infinite;

    &:hover {
      cursor: pointer;
      background: ${({ myTheme }) => myTheme.hoverColor};
      color: ${({ myTheme }) => myTheme.hoverText};
      border-radius: 1rem;
      box-shadow: ${({
        myTheme,
      }) => `0 0 0.15rem ${myTheme.hoverColor}, 0 0 0.25rem ${myTheme.hoverColor}, 0 0 0.33rem ${myTheme.hoverColor},
            0 0 0.5rem ${myTheme.hoverColor}`};
    }
  }
`;

const AnimatedButton = ({ text, action, size }) => {
  const myTheme = useTheme();

  return (
    <ButtonContainer myTheme={myTheme}>
      <button
        className={size === "small" ? "smallBtn" : "myBtn"}
        onClick={() => action()}
      >
        {text}
      </button>
    </ButtonContainer>
  );
};

export default AnimatedButton;
