import styled from "@emotion/styled";
import PlayerCard from "../PlayerCard";
import ValueInput from "./ValueInput";
import PositionInput from "./PositionInput";
import AttributesInput from "./AttributesInput";
import ContractInput from "./ContractInput";
import AgeInput from "./AgeInput";
import { useTheme } from "../../../utils/functions";
import { useState } from "react";

const ScoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .indicator {
    width: 100%;
    margin-left: 3rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: ${({ myTheme }) => myTheme.textColor};
  }
  .separator {
    margin-top: 2rem;
    width: 100%;
    border-bottom: ${({ myTheme }) => `1px solid  ${myTheme.boxColor}`};
    margin-bottom: 2rem;
  }
`;

const Scout = ({ data, status }) => {
  const [selPositions, setSelPositions] = useState([]);
  const [selAttributes, setSelAttributes] = useState([]);
  const myTheme = useTheme();
  return (
    <ScoutContainer myTheme={myTheme}>
      <p className="indicator">Ingrese el valor del jugador</p>
      <ValueInput />
      <div className="separator"></div>
      <p className="indicator">
        Seleccione las posiciones donde requiere el jugador
      </p>
      <PositionInput
        selPositions={selPositions}
        setSelPositions={setSelPositions}
      />
      <div className="separator"></div>
      <p className="indicator">
        Seleccione los atributos requeridos para el jugador
      </p>
      <AttributesInput
        selAttributes={selAttributes}
        setSelAttributes={setSelAttributes}
      />
      <div className="separator"></div>
      <ContractInput />
      <AgeInput />
    </ScoutContainer>
  );
};

export default Scout;
