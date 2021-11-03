import CanchaFutbol from "components/CanchaFutbol";
import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../../../utils/functions";
import { useGlobalState } from "../../../state";

const PositionContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  const selPositions = useGlobalState("scoutPositions");
  return (
    <PositionContainer myTheme={myTheme}>
      <div className="contCancha">
        <CanchaFutbol />
      </div>
      <div className="selecPos">
        <h1>Posiciones Seleccionadas:</h1>
        <p>{selPositions[0].join(", ")}</p>
      </div>
    </PositionContainer>
  );
};

export default PositionInput;
