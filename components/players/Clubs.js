import styled from "@emotion/styled";

const ClubsContainer = styled.div`
  font-size: 15px;
  color: white;
  .holi {
    background: blue;
  }
`;

function Clubs() {
  return (
    <ClubsContainer>
      <p className="holi">hey gey hey</p>
      Holi Clubs por ahora.
    </ClubsContainer>
  );
}

export default Clubs;
