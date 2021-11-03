import styled from "@emotion/styled";
import ValueInput from "./ValueInput";
import PositionInput from "./PositionInput";
import AttributesInput from "./AttributesInput";
import AgeContractInput from "./AgeContractInput";
import { useTheme } from "../../../utils/functions";

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
  .submitBtn {
    width: 100px;
    height: 30px;
    background: green;
  }
`;

const Scout = ({ setPage }) => {
  const myTheme = useTheme();
  return (
    <ScoutContainer myTheme={myTheme}>
      <p className="indicator">Ingrese el valor del jugador</p>
      <ValueInput />
      <div className="separator"></div>
      <p className="indicator">
        Seleccione las posiciones donde requiere el jugador
      </p>
      <PositionInput />
      <div className="separator"></div>
      <p className="indicator">
        Seleccione los atributos requeridos para el jugador
      </p>
      <AttributesInput />
      <div className="separator"></div>
      <p className="indicator">
        Seleccione la edad y el término del contrato para el jugador por si
        acaso:
      </p>
      <AgeContractInput />
      <div className="separator"></div>
      <button className="submitBtn" onClick={() => setPage("scoutresults")} />
    </ScoutContainer>
  );
};

export default Scout;
