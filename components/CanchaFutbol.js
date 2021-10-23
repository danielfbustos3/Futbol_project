import styled from "@emotion/styled";
import { useTheme } from "../utils/functions";
import ZonasDeCancha from "./ZonasDeCancha";

const Section = styled.div``;

const ContenedorCancha = styled.div`
  .contenidoCancha {
    width: 100%;
    aspect-ratio: 1.5;
    position: relative;
    background: ${({ myTheme }) => myTheme.fondoCancha};
    border: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    display: grid;
    grid-gap: 0px;
    grid-template-rows: 0.25fr 0.75fr 2fr 0.75fr 0.25fr;
    grid-template-columns: ${({ anchoLineas }) =>
      `0.09fr 1fr ${anchoLineas} 1fr 0.09fr`};
    grid-template-areas: "esi . lvmcar . esd" ". .  lvmcar  . . " "zc zc zc zc zc " ". . lvmcab . . " "eii . lvmcab . eid ";
    transition: all 0.5s ease;
    box-shadow: 0 0 10px black;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }
`;
const EsquinaSuperiorIzquierda = styled(Section)`
  grid-area: esi;
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: ${({ anchoLineas, myTheme }) =>
      ` 0 0 0 ${anchoLineas} ${myTheme.textColor}`};
    border-radius: 50%;
  }
`;
const EsquinaSuperiorDerecha = styled(Section)`
  grid-area: esd;
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    top: -50%;
    left: 50%;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: ${({ anchoLineas, myTheme }) =>
      ` 0 0 0 ${anchoLineas} ${myTheme.textColor}`};
    border-radius: 50%;
  }
`;
const EsquinaInferiorIzquierda = styled(Section)`
  grid-area: eii;
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    top: 50%;
    left: -50%;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: ${({ anchoLineas, myTheme }) =>
      ` 0 0 0 ${anchoLineas} ${myTheme.textColor}`};
    border-radius: 50%;
  }
`;
const EsquinaInferiorDerecha = styled(Section)`
  grid-area: eid;
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: ${({ anchoLineas, myTheme }) =>
      ` 0 0 0 ${anchoLineas} ${myTheme.textColor}`};
    border-radius: 50%;
  }
`;
const LineaVerticalMedioCampoArriba = styled(Section)`
  background: ${({ myTheme }) => myTheme.textColor};
  grid-area: lvmcar;
`;
const LineaVerticalMedioCampoAbajo = styled(Section)`
  background: ${({ myTheme }) => myTheme.textColor};
  grid-area: lvmcab;
`;
const ZonaCentral = styled(Section)`
  grid-area: zc;
  display: grid;
  grid-gap: 0px;
  grid-template-rows: repeat(20, 1fr);
  grid-template-columns: ${({ anchoLineas }) =>
    `repeat(12, 1fr) ${anchoLineas} repeat(12, 1fr)`};
  .areaGrandeIzquierda {
    background: ${({ myTheme }) => myTheme.fondoCancha};
    border-top: ${({ anchoLineas, myTheme }) =>
      `${anchoLineas} solid ${myTheme.textColor}`};
    border-right: ${({ anchoLineas, myTheme }) =>
      `${anchoLineas} solid ${myTheme.textColor}`};
    border-bottom: ${({ anchoLineas, myTheme }) =>
      `${anchoLineas} solid ${myTheme.textColor}`};
    z-index: 2;
    grid-area: 1 / 1 / span 20 / span 4;
  }
  .areaPequenaIzquierda {
    border-top: ${({ anchoLineas, myTheme }) =>
      `${anchoLineas} solid ${myTheme.textColor}`};
    border-right: ${({ anchoLineas, myTheme }) =>
      `${anchoLineas} solid ${myTheme.textColor}`};
    border-bottom: ${({ anchoLineas, myTheme }) =>
      `${anchoLineas} solid ${myTheme.textColor}`};
    z-index: 3;
    grid-area: 5 / 1 / span 12 / span 2;
  }
  .medioCampoIzquierda {
  }
  .semicirculoIzquierda {
    border: ${({ anchoLineas, myTheme }) =>
      `${anchoLineas} solid ${myTheme.textColor}`};
    overflow: hidden;
    border-radius: 50%;
    z-index: 1;
    grid-area: 6 / 3 / span 10 / span 3;
  }
  .penaltyIzquierda {
    position: relative;
    left: ${({ anchoLineas }) => `calc(0% - calc(${anchoLineas} + 4px))`};
    width: ${({ anchoLineas }) => `calc(${anchoLineas})`};
    height: ${({ anchoLineas }) => `calc(${anchoLineas})`};
    background: ${({ myTheme }) => myTheme.textColor};
    border-radius: 50%;
    z-index: 3;
    grid-area: 11 / 4 / span 1 / span 1;
  }
  .lineaVerticalMedioCampoMedio {
    position: relative;
    background: ${({ myTheme }) => myTheme.textColor};
    grid-area: 1 / 13 / span 20 / span 1;
    &:after {
      position: absolute;
      top: calc(50% - 3px);
      left: -3px;
      width: ${({ anchoLineas }) => ` calc(${anchoLineas} + 6px)`};
      height: ${({ anchoLineas }) => ` calc(${anchoLineas} + 6px)`};
      content: "";
      background: ${({ myTheme }) => myTheme.textColor};
      border-radius: 50%;
    }
  }
  .circuloCentral {
    border: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    border-radius: 50%;
    z-index: 2;
    grid-area: 5 / 11 / span 12 / span 5;
  }
  .areaGrandeDerecha {
    background: ${({ myTheme }) => myTheme.fondoCancha};
    border-top: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    border-left: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    border-bottom: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    z-index: 2;
    grid-area: 1 / 22 / span 20 / span 4;
  }
  .areaPequenaDerecha {
    border-top: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    border-left: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    border-bottom: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    z-index: 3;
    grid-area: 5 / 24 / span 12 / span 2;
  }
  .medioCampoDerecha {
  }
  .semicirculoDerecha {
    border: ${({ anchoLineas }) => `${anchoLineas} solid white`};
    border-radius: 50%;
    z-index: 1;
    grid-area: 6 / 21 / span 10 / span 3;
  }
  .penaltyDerecha {
    position: relative;
    left: ${({ anchoLineas }) => ` calc(${anchoLineas} + 4px)`};
    width: ${({ anchoLineas }) => `calc(${anchoLineas})`};
    height: ${({ anchoLineas }) => `calc(${anchoLineas})`};
    background: ${({ myTheme }) => myTheme.textColor};
    border-radius: 50%;
    z-index: 3;
    grid-area: 11 / 23 / span 1 / span 1;
  }
`;

const CanchaFutbol = () => {
  const myTheme = useTheme();
  const anchoLineas = "3px";
  return (
    <ContenedorCancha anchoLineas={anchoLineas} myTheme={myTheme}>
      <div className="contenidoCancha">
        <ZonasDeCancha />
        <EsquinaSuperiorIzquierda anchoLineas={anchoLineas} myTheme={myTheme} />
        <EsquinaSuperiorDerecha anchoLineas={anchoLineas} myTheme={myTheme} />
        <EsquinaInferiorIzquierda anchoLineas={anchoLineas} myTheme={myTheme} />
        <EsquinaInferiorDerecha anchoLineas={anchoLineas} myTheme={myTheme} />
        <LineaVerticalMedioCampoArriba
          anchoLineas={anchoLineas}
          myTheme={myTheme}
        />
        <LineaVerticalMedioCampoAbajo
          anchoLineas={anchoLineas}
          myTheme={myTheme}
        />
        <ZonaCentral anchoLineas={anchoLineas} myTheme={myTheme}>
          <div className="areaGrandeIzquierda" />
          <div className="areaPequenaIzquierda" />
          <div className="medioCampoIzquierda" />
          <div className="semicirculoIzquierda" />
          <div className="penaltyIzquierda" />
          <div className="lineaVerticalMedioCampoMedio" />
          <div className="circuloCentral" />
          <div className="areaGrandeDerecha" />
          <div className="areaPequenaDerecha" />
          <div className="medioCampoDerecha" />
          <div className="semicirculoDerecha" />
          <div className="penaltyDerecha" />
        </ZonaCentral>
      </div>
    </ContenedorCancha>
  );
};

export default CanchaFutbol;
