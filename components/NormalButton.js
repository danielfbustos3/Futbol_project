import styled from "@emotion/styled";
import { useTheme } from "utils/functions";

const ButtonContainer = styled.div`
  background: ${({ myTheme }) => myTheme.backgroundColor};
`;

const NormalButton = () => {
  const myTheme = useTheme();

  return <ButtonContainer myTheme={myTheme}></ButtonContainer>;
};

export default NormalButton;
