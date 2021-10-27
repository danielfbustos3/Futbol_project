import styled from "@emotion/styled";
import { useState } from "react";
import { useTheme } from "../utils/functions";
import Positions from "./players/Scout/Positions";
import { BiXCircle } from "react-icons/bi";

const Zonas = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 4;
  .salir {
    position: absolute;
    top: 5%;
    right: 10%;
    z-index: 30;
    color: ${({ myTheme }) => myTheme.textColor};
    &:hover {
      transform: scale(1.2);
      color: ${({ myTheme }) => myTheme.hoverColor};
    }
    .exit {
      font-size: 1.8rem;
    }
  }
  .off {
    display: none;
    font-size: 2rem;
  }
  .porteria {
    position: absolute;
    opacity: 0;
    top: 30%;
    left: 0;
    height: 40%;
    width: 8%;
    background: ${({ myTheme }) => `rgba(${myTheme.zonasCancha}, 0.5)`};
    transition: all 0.2s ease-in;
    z-index: 10;
    &:hover {
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      cursor: ${({ exit }) => (exit ? "default" : "pointer")};
      width: 12%;
    }
    &:hover .tooltip {
      transition: all 0.3s ease;
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      top: 30%;
      z-index: 100;
    }
  }
  .defensa {
    position: absolute;
    opacity: 0;
    top: 4%;
    left: 15%;
    height: 92%;
    width: 18%;
    background: ${({ myTheme }) => `rgba(${myTheme.zonasCancha}, 0.5)`};
    transition: all 0.2s ease-in;
    z-index: 9;
    &:hover {
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      cursor: ${({ exit }) => (exit ? "default" : "pointer")};
      left: 12%;
      width: 28%;
    }
    &:hover .tooltip {
      transition: all 0.3s ease;
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      top: 40%;
      z-index: 100;
    }
  }
  .medioCampo {
    position: absolute;
    opacity: 0;
    top: 7.5%;
    left: 40%;
    height: 85%;
    width: 20%;
    background: ${({ myTheme }) => `rgba(${myTheme.zonasCancha}, 0.5)`};
    transition: all 0.2s ease-in;
    z-index: 8;
    &:hover {
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      cursor: ${({ exit }) => (exit ? "default" : "pointer")};
      left: 25%;
      width: 50%;
    }
    &:hover .tooltip {
      transition: all 0.3s ease;
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      top: 40%;
      z-index: 100;
    }
  }
  .ataque {
    position: absolute;
    opacity: 0;
    top: 12.5%;
    left: 75%;
    height: 75%;
    width: 20%;
    background: ${({ myTheme }) => `rgba(${myTheme.zonasCancha}, 0.5)`};
    transition: all 0.2s ease-in;
    z-index: 7;
    &:hover {
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      cursor: ${({ exit }) => (exit ? "default" : "pointer")};
      left: 70%;
      width: 30%;
    }
    &:hover .tooltip {
      transition: all 0.3s ease;
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      top: 40%;
      z-index: 100;
    }
  }
  .tooltip {
    position: absolute;
    left: 105%;
    top: 80%;
    transform: translateY(-50%);
    border-radius: 10px;
    height: 1.5rem;
    width: 5.5rem;
    background: ${({ myTheme }) => myTheme.hoverColor};
    color: ${({ myTheme }) => myTheme.hoverText};
    line-height: 35px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
  }
  .seccionAct {
    background: ${({ myTheme }) => `linear-gradient(
      90deg,
      rgba(${myTheme.zonasCancha}, 0),
      rgba(${myTheme.zonasCancha}, 0.7)
      )`};
    border-radius: 0 1rem 1rem 0;
    position: absolute;
    transition: all 0.5s ease;
    transform: rotate(-90deg);
    width: 40%;
    height: 140%;
    left: 30%;
    top: -20%;
    z-index: 20;
    opacity: 1;
  }
`;

const ZonasDeCancha = ({ selPositions, setSelPositions }) => {
  const myTheme = useTheme();
  const [porteriaAct, setPorteria] = useState(false);
  const [defensaAct, setDefensa] = useState(false);
  const [medioCampoAct, setMedioCampo] = useState(false);
  const [ataqueAct, setAtaque] = useState(false);
  const [exit, setExit] = useState(false);
  console.log("Posiciones seleccionadas: " + selPositions);
  const exitAll = () => {
    setPorteria(false);
    setDefensa(false);
    setMedioCampo(false);
    setAtaque(false);
  };
  return (
    <Zonas
      myTheme={myTheme}
      porteriaAct={porteriaAct}
      defensaAct={defensaAct}
      medioCampoAct={medioCampoAct}
      ataqueAct={ataqueAct}
      exit={exit}
    >
      <p
        className={exit ? "salir" : "off"}
        onClick={() => exitAll() & setExit(false)}
      >
        <BiXCircle className="exit" />
      </p>
      <div
        className={porteriaAct ? "seccionAct" : "porteria"}
        onClick={() => (exit ? "" : setPorteria(true) & setExit(true))}
      >
        {porteriaAct && (
          <Positions
            section={"porteria"}
            setSelPositions={setSelPositions}
            selPositions={selPositions}
          />
        )}
        <span className="tooltip">Portería</span>
      </div>
      <div
        className={defensaAct ? "seccionAct" : "defensa"}
        onClick={() => (exit ? "" : setDefensa(true) & setExit(true))}
      >
        {defensaAct ? (
          <Positions
            section={"defensa"}
            selPositions={selPositions}
            setSelPositions={setSelPositions}
          />
        ) : (
          ""
        )}
        <span className="tooltip">Defensa</span>
      </div>
      <div
        className={medioCampoAct ? "seccionAct" : "medioCampo"}
        onClick={() => (exit ? "" : setMedioCampo(true) & setExit(true))}
      >
        {medioCampoAct ? (
          <Positions
            section={"medioCampo"}
            selPositions={selPositions}
            setSelPositions={setSelPositions}
          />
        ) : (
          ""
        )}
        <span className="tooltip">Medio Campo</span>
      </div>
      <div
        className={ataqueAct ? "seccionAct" : "ataque"}
        onClick={() => (exit ? "" : setAtaque(true) & setExit(true))}
      >
        {ataqueAct ? (
          <Positions
            section={"ataque"}
            selPositions={selPositions}
            setSelPositions={setSelPositions}
          />
        ) : (
          ""
        )}
        <span className="tooltip">Ataque</span>
      </div>
    </Zonas>
  );
};

export default ZonasDeCancha;
