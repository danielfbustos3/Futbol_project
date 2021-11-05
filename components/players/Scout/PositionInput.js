import CanchaFutbol from "components/players/Scout/CanchaFutbol";
import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../../../utils/functions";
import { useGlobalState } from "../../../state";

const PositionContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
  .contCancha {
    width: 600px;
  }
  .selecPos {
    padding: 3rem;
    width: 40%;
    h1 {
      font-size: 1.5rem;
      color: ${({ myTheme }) => myTheme.textColor};
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const PositionInput = ({}) => {
  const myTheme = useTheme();
  const selPositions = useGlobalState("scoutPositions")[0];
  return (
    <PositionContainer myTheme={myTheme}>
      <div className="contCancha">
        <CanchaFutbol />
      </div>
      <div className="selecPos">
        <h1>Posiciones Seleccionadas:</h1>
        <p>{selPositions.join(", ")}</p>
      </div>
    </PositionContainer>
  );
};

export default PositionInput;
