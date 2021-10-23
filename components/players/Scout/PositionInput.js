import CanchaFutbol from "components/CanchaFutbol";
import styled from "styled-components";

const PositionContainer = styled.div`
  display: flex;
  .contCancha {
    margin-top: 5rem;
    width: 600px;
  }
`;

const positionsObj = [
  {
    section: "defensa",
    positions: [
      {
        position: "MCO",
        description: "Medio Campista Ofensivo",
      },
      {
        position: "DC",
        description: "Defensa Central",
      },
      {
        position: "LB",
        description: "Lateral Izquierdo",
      },
      {
        position: "ST",
        description: "Striker",
      },
      {
        position: "MCD",
        description: "Medio Campista Defensivo",
      },
    ],
  },
];

const PositionInput = () => {
  return (
    <PositionContainer>
      <div className="contCancha">
        <CanchaFutbol />
      </div>
    </PositionContainer>
  );
};

export default PositionInput;
