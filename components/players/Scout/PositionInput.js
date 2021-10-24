import CanchaFutbol from "components/CanchaFutbol";
import styled from "styled-components";

const PositionContainer = styled.div`
  display: flex;
  .contCancha {
    margin-top: 5rem;
    width: 600px;
  }
`;

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
