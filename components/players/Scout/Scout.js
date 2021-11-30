import styled from "@emotion/styled";
import ValueInput from "./ValueInput";
import PositionInput from "./PositionInput";
import AttributesInput from "./AttributesInput";
import AgeContractInput from "./AgeContractInput";
import { useTheme } from "../../../utils/functions";
import { setGlobalState, useGlobalState } from "state";
import { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { keyframes } from "@emotion/react";
import AnimatedButton from "components/AnimatedButton";
import { useSelector, useDispatch } from "react-redux";
import {
  setValue,
  setPositions,
  setAttributes,
  setMinAge,
  setMaxAge,
  setContract,
} from "redux/ducks/scoutapi";
const rotate = keyframes`
  0%, 20%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-0.5rem);}
    50% {transform: translateY(0.3rem);}
    60% {transform: translateY(-0.3rem);}
`;

const ScoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .espacio {
    width: 100%;
    height: 3.5rem;
  }
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
    position: absolute;
    top: 4rem;
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

  .alertBox {
    position: absolute;
    top: 2rem;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 70%;
    height: 2rem;
    padding: 0 1rem;
    margin-top: 2rem;
    border: 1px solid rgba(241, 142, 6, 0.81);
    background-color: rgba(220, 128, 1, 0.16);
    box-shadow: 0px 0px 2px #ffb103;
    color: #ffb103;
    transition: 0.5s;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 70%;
      border-left: 2px solid;
      border-right: 3px solid;
      border-radius: 0 3px 3px 0;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
    &:hover {
      background-color: rgba(220, 128, 1, 0.33);
      transition: 0.5s;
    }
    .alertIcon {
      margin-right: 0.5rem;
      margin-top: 0.2rem;
      animation: ${rotate} 1s infinite;
    }
    .alertText {
      font-size: 1rem;
    }
  }
`;

const Scout = ({ setPage }) => {
  const myTheme = useTheme();
  const dispatch = useDispatch();

  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const value = useSelector((state) => state.scouted.value);
  const positions = useSelector((state) => state.scouted.positions);

  useEffect(() => {
    if (value == 0 && positions?.length == 0) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
    setAlert(false);
    setAlertText("");
  }, [value, positions]);

  const refreshData = () => {
    dispatch(setValue(""));
    dispatch(setPositions([]));
    dispatch(setAttributes([]));
    dispatch(setMinAge(23));
    dispatch(setMaxAge(35));
    dispatch(setContract(2023));
    setPage("scout");
  };

  return (
    <ScoutContainer myTheme={myTheme}>
      {refresh == true && alert == false && (
        <button className="refreshBtn" onClick={() => refreshData()}>
          Refrescar
        </button>
      )}
      <div className="espacio" />
      <p className="indicator">
        Ingrese el presupuesto en EUR para el jugador que está buscando.
      </p>
      <ValueInput />
      <div className="separator"></div>
      <p className="indicator">
        Seleccione una o varias posiciones donde requiera el jugador.
      </p>
      <PositionInput />
      <div className="separator"></div>
      <p className="indicator">
        Seleccione los atributos requeridos para el jugador.
      </p>
      <AttributesInput />
      <div className="separator"></div>
      <p className="indicator">
        Seleccione el rango de edad y el año de finalización del contrato para
        el jugador que busca.
      </p>
      <AgeContractInput />
      <div className="separator"></div>
      <AnimatedButton
        text="Buscar!"
        action={() => {
          if (value === "") {
            window.scrollTo(0, 0);
            setAlert(true);
            setAlertText(
              "Por favor ingrese un presupuesto para buscar jugadores."
            );
          } else {
            if (positions?.length === 0) {
              window.scrollTo(0, 0);
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
      />
      {alert == true && (
        <div
          title="Llene los campos requeridos."
          className="alertBox"
          onClick={() => {
            setAlert(false);
            setAlertText("");
          }}
        >
          <div className="alertIcon">
            <BiError />
          </div>
          <div className="alertText">{alertText}</div>
        </div>
      )}
    </ScoutContainer>
  );
};

export default Scout;
