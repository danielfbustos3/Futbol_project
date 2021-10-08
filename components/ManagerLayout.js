import styled from "@emotion/styled";
import { useState } from "react";
import AllPlayers from "./players/AllPlayers";
import Clubs from "./players/Clubs";
import { useTheme } from "../utils/functions";

export const Container = styled.div`
  display: grid;
  /* justify-content: center;
  align-items: center; */
  padding: 80px;
  min-height: 1000px;
  overflow: hidden;
  width: 100%;
  flex: wrap;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ backgroundColor }) =>
    backgroundColor == "#f5f5f5" ? "#000" : "#fff"};
  /* background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  ); */
`;

const Manager = ({ page, isOpen }) => {
  const backgroundColor = useTheme();

  return (
    <>
      {/* {page === "allplayers" && <AllPlayers />} */}
      {/* {page === "clubs" && <Clubs />} */}
      <Container backgroundColor={backgroundColor}>
        Browse For Players
      </Container>
    </>
  );
};

export default Manager;
