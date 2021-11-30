import CanchaFutbol from "components/players/Scout/CanchaFutbol";
import styled from "@emotion/styled";
import { useTheme } from "../../../utils/functions";
import { useSelector } from "react-redux";

const PositionContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
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

  const myPositions = useSelector((state) => state.scouted.positions);
  return (
    <PositionContainer myTheme={myTheme}>
      <div className="contCancha">
        <CanchaFutbol />
      </div>
      <div className="selecPos">
        <h1>Posiciones Seleccionadas:</h1>
        <p>{myPositions.join(", ")}</p>
      </div>
    </PositionContainer>
  );
};

export default PositionInput;
