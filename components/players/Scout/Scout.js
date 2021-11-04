import styled from "@emotion/styled";
import ValueInput from "./ValueInput";
import PositionInput from "./PositionInput";
import AttributesInput from "./AttributesInput";
import AgeContractInput from "./AgeContractInput";
import { useTheme } from "../../../utils/functions";
import { setGlobalState, useGlobalState } from "state";
import { useEffect, useState } from "react";

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
  .refreshBtn {
    width: 100px;
    height: 30px;
  }
  .submitBtn {
    width: 100px;
    height: 30px;
    background: green;
  }
`;

const Scout = ({ setPage }) => {
  const myTheme = useTheme();

  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const value = useGlobalState("scoutValue")[0];
  const positions = useGlobalState("scoutPositions")[0];

  useEffect(() => {
    setAlert(false);
    setAlertText("");
  }, [value, positions]);

  const refreshData = () => {
    setGlobalState("scoutValue", "");
    setGlobalState("scoutPositions", []);
    setGlobalState("scoutMinAge", 23);
    setGlobalState("scoutMaxAge", 35);
    setGlobalState("scoutContract", 2023);
    setPage("scout");
  };

  console.log(positions.length);
  console.log(typeof positions);
  return (
    <ScoutContainer myTheme={myTheme}>
      <button className="refreshBtn" onClick={() => refreshData()}>
        Refresh
      </button>
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
      <button
        className="submitBtn"
        onClick={() => {
          if (value === "") {
            setAlert(true);
            setAlertText(
              "Por favor ingrese un presupuesto para buscar jugadores."
            );
          } else {
            if (positions.length === 0) {
              setAlert(true);
              setAlertText(
                "Por favor ingrese al menos una posición para buscar jugadores."
              );
            } else {
              setPage("scoutresults");
              setAlert(false);
              setAlertText("");
            }
          }
        }}
      >
        Search!
      </button>
      {alert == true && <div className="alertBox">{alertText}</div>}
    </ScoutContainer>
  );
};

export default Scout;
