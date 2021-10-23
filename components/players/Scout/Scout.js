import styled from "@emotion/styled";
import PlayerCard from "../PlayerCard";
import ValueInput from "./ValueInput";
import PositionInput from "./PositionInput";
import AttributesInput from "./AttributesInput";
import ContractInput from "./ContractInput";
import AgeInput from "./AgeInput";

const ScoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Scout = ({ data, status }) => {
  return (
    <ScoutContainer>
      <ValueInput />
      <PositionInput />
      <AttributesInput />
      <ContractInput />
      <AgeInput />
    </ScoutContainer>
  );
};

export default Scout;
