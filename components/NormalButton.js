import styled from "@emotion/styled";
import { useTheme } from "utils/functions";

const ButtonContainer = styled.div`
  .myBtn {
    margin: 1rem 0.5rem;
    padding: 0.4rem 0.8rem;
    color: ${({ myTheme }) => myTheme.textColor};
    font-size: 0.7rem;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 3px;
    background: ${({ myTheme }) => myTheme.boxColor};
    border-radius: 1rem;
    border: none;

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
  .myBtnSelected {
    margin: 1rem 0.5rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 3px;
    border-radius: 1rem;
    border: none;
    background: ${({ myTheme }) => myTheme.hoverColor};
    color: ${({ myTheme }) => myTheme.hoverText};
    box-shadow: ${({
      myTheme,
    }) => `0 0 0.15rem ${myTheme.hoverColor}, 0 0 0.25rem ${myTheme.hoverColor}, 0 0 0.33rem ${myTheme.hoverColor},
        0 0 0.5rem ${myTheme.hoverColor}`};
  }
`;

const NormalButton = ({ text, action, selected }) => {
  const myTheme = useTheme();

  return (
    <ButtonContainer myTheme={myTheme}>
      <button
        className={selected ? "myBtnSelected" : "myBtn"}
        onClick={() => action()}
      >
        {text}
      </button>
    </ButtonContainer>
  );
};

export default NormalButton;
