import styled from "@emotion/styled";
import { useTheme } from "../../../utils/functions";
import ACSlider from "./ACSlider";

const ACContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1em;
  justify-content: space-between;
  width: 100%;
  .ageCont {
    height: 10rem;
    width: 40vw;
    min-width: 20rem;
    border-radius: 1rem;
    background: ${({ myTheme }) => myTheme.boxColor};
  }
  .contCont {
    height: 10rem;
    width: 40vw;
    min-width: 20rem;
    border-radius: 1rem;
    background: ${({ myTheme }) => myTheme.boxColor};
  }
`;

const AgeContractInput = () => {
  const myTheme = useTheme();
  return (
    <ACContainer myTheme={myTheme}>
      <div className="ageCont">
        <ACSlider tip={"age"} />
      </div>
      <div className="contCont">
        <ACSlider tip={"contract"} />
      </div>
    </ACContainer>
  );
};

export default AgeContractInput;
