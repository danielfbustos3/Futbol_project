import styled from "@emotion/styled";
import { useState } from "react";
import { useTheme } from "../utils/functions";

const Zonas = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 4;
  .salir {
    position: absolute;
    top: 0;
    right: 0;
  }
  .off {
    display: none;
  }
  .porteria {
    position: absolute;
    opacity: 0;
    top: 30%;
    left: 0;
    height: 40%;
    width: 11%;
    background: blue;
    transition: all 1s ease;
    z-index: 10;
    &:hover {
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      cursor: ${({ exit }) => (exit ? "default" : "pointer")};
    }
    &:hover .tooltip {
      transition: all 0.5s ease;
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      top: 0;
      z-index: 100;
    }
  }
  .porteriaAct {
    background: blue;
    position: absolute;
    transition: all 1s ease;
    transform: rotate(270deg);
    width: 50%;
    height: 140%;
    left: 25%;
    top: -20%;
  }
  .defensa {
    position: absolute;
    opacity: 0;
    top: 4%;
    left: 15%;
    height: 92%;
    width: 18%;
    background: blue;
    transition: all 1s ease;
    z-index: 9;
    &:hover {
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      cursor: ${({ exit }) => (exit ? "default" : "pointer")};
    }
    &:hover .tooltip {
      transition: all 0.5s ease;
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      top: 40%;
      z-index: 100;
    }
  }
  .defensaAct {
    background: blue;
    position: absolute;
    transition: all 1s ease;
    transform: rotate(270deg);
    width: 50%;
    height: 140%;
    left: 25%;
    top: -20%;
  }
  .medioCampo {
    position: absolute;
    opacity: 0;
    top: 7.5%;
    left: 37.5%;
    height: 85%;
    width: 27%;
    background: blue;
    transition: all 1s ease;
    z-index: 8;
    &:hover {
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      cursor: ${({ exit }) => (exit ? "default" : "pointer")};
    }
    &:hover .tooltip {
      transition: all 0.5s ease;
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      top: 40%;
      z-index: 100;
    }
  }
  .medioCampoAct {
    background: blue;
    position: absolute;
    transition: all 1s ease;
    transform: rotate(270deg);
    width: 50%;
    height: 140%;
    left: 25%;
    top: -20%;
  }
  .ataque {
    position: absolute;
    opacity: 0;
    top: 12.5%;
    left: 72%;
    height: 75%;
    width: 28%;
    background: blue;
    transition: all 1s ease;
    z-index: 7;
    &:hover {
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      cursor: ${({ exit }) => (exit ? "default" : "pointer")};
    }
    &:hover .tooltip {
      transition: all 0.5s ease;
      opacity: ${({ exit }) => (exit ? "0" : "1")};
      top: 40%;
      z-index: 100;
    }
  }
  .ataqueAct {
    background: blue;
    position: absolute;
    transition: all 1s ease;
    transform: rotate(270deg);
    width: 50%;
    height: 140%;
    left: 25%;
    top: -20%;
  }
  .tooltip {
    position: absolute;
    left: 110%;
    top: 80%;
    transform: translateY(-50%);
    border-radius: 10px;
    height: 37px;
    width: 122px;
    background: ${({ myTheme }) => myTheme.hoverColor};
    line-height: 35px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
  }
`;

const ZonasDeCancha = () => {
  const myTheme = useTheme();
  const [porteriaAct, setPorteria] = useState(false);
  const [defensaAct, setDefensa] = useState(false);
  const [medioCampoAct, setMedioCampo] = useState(false);
  const [ataqueAct, setAtaque] = useState(false);
  const [exit, setExit] = useState(false);

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
        X
      </p>
      <div
        className={porteriaAct ? "porteriaAct" : "porteria"}
        onClick={() => (exit ? "" : setPorteria(true) & setExit(true))}
      >
        <span className="tooltip">Portería</span>
      </div>
      <div
        className={defensaAct ? "defensaAct" : "defensa"}
        onClick={() => (exit ? "" : setDefensa(true) & setExit(true))}
      >
        <span className="tooltip">Defensa</span>
      </div>
      <div
        className={medioCampoAct ? "medioCampoAct" : "medioCampo"}
        onClick={() => (exit ? "" : setMedioCampo(true) & setExit(true))}
      >
        <span className="tooltip">Medio Campo</span>
      </div>
      <div
        className={ataqueAct ? "ataqueAct" : "ataque"}
        onClick={() => (exit ? "" : setAtaque(true) & setExit(true))}
      >
        <span className="tooltip">Ataque</span>
      </div>
    </Zonas>
  );
};

export default ZonasDeCancha;
