import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const PosContent = styled.div`
  position: relative;
  top: 25%;
  left: -40%;
  width: 180%;
  height: 50%;
  background: yellow;
  transform: rotate(90deg);
  transition: 0.2s;
`;

const porteriaObj = {
  position: "GK",
  descriptionEng: "GoalKeeper",
  descriptionEsp: "Portero",
};

const defensaObj = [
  {
    position: "LWB",
    descriptionEng: "Left Wing Back",
    descriptionEsp: "Carrilero Izquierdo",
  },
  {
    position: "LB",
    descriptionEng: "Left Back",
    descriptionEsp: "Lateral Izquierdo",
  },
  {
    position: "CB",
    descriptionEng: "Center Back",
    descriptionEsp: "Defensa Central",
  },
  {
    position: "RB",
    descriptionEng: "Left Wing Back",
    descriptionEsp: "Lateral Derecho",
  },
  {
    position: "RWB",
    descriptionEng: "Left Wing Back",
    descriptionEsp: "Carrilero Derecho",
  },
];
const medioCampoObj = [
  {
    position: "LW",
    descriptionEng: "Left Winger",
    descriptionEsp: "Extremo Izquierdo",
  },
  {
    position: "LM",
    descriptionEng: "Left Midfielder",
    descriptionEsp: "Medio Izquierdo",
  },
  {
    position: "CM",
    descriptionEng: "Center Midfielder",
    descriptionEsp: "Medio Centro",
  },
  {
    position: "CAM",
    descriptionEng: "Attacking Midfielder",
    descriptionEsp: "Medio Centro Ofensivo",
  },
  {
    position: "CDM",
    descriptionEng: "Defensive Midfielder",
    descriptionEsp: "Medio Centro Defensivo",
  },
  {
    position: "RM",
    descriptionEng: "Right Midfielder",
    descriptionEsp: "Medio Derecho",
  },
  {
    position: "RW",
    descriptionEng: "Right Winger",
    descriptionEsp: "Extremo Derecho",
  },
];
const ataqueObj = [
  {
    position: "LF",
    descriptionEng: "Left Forward",
    descriptionEsp: "Carrilero Izquierdo",
  },
  {
    position: "ST",
    descriptionEng: "Striker",
    descriptionEsp: "Lateral Izquierdo",
  },
  {
    position: "CF",
    descriptionEng: "Center Forward",
    descriptionEsp: "Defensa Central",
  },
  {
    position: "RF",
    descriptionEng: "Right Forward",
    descriptionEsp: "Lateral Derecho",
  },
];

const Positions = ({ section, setSelPositions, selPositions }) => {
  switch (section) {
    case "porteria":
      if (selPositions.includes("GK")) {
        return (
          <PosContent>
            <div className="holi1">{porteriaObj.descriptionEsp}</div>
          </PosContent>
        );
      } else {
        useEffect(() => selPositions?.push(porteriaObj.position));
        return (
          <PosContent>
            <div className="holi1">{porteriaObj.descriptionEsp}</div>
          </PosContent>
        );
      }
    case "defensa":
      useEffect(() => selPositions?.push(defensaObj[0].position));
      return (
        <PosContent>
          <div className="holi2">holis los defensas</div>
        </PosContent>
      );
    case "medioCampo":
      return (
        <PosContent>
          <div className="holi3">holis los medios</div>
        </PosContent>
      );
    case "ataque":
      return (
        <PosContent>
          <div className="holi4">holis los atacantes</div>
        </PosContent>
      );
  }
};

export default Positions;
