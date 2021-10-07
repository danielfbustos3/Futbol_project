import styled from "@emotion/styled";
import { useState } from "react";
import AllPlayers from "./players/AllPlayers";
import Clubs from "./players/Clubs";

export const Container = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  padding: 80px;
  min-height: 1000px;
  overflow: hidden;
  width: 100%;
  flex: wrap;
  background: #0d0d0d;
  color: white;
  /* background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  ); */
`;

const Manager = ({ page, isOpen }) => {
  return (
    <>
      {/* {page === "allplayers" && <AllPlayers />} */}
      {/* {page === "clubs" && <Clubs />} */}
      <Container>
        Browse For
        Playersasddddddddddddddddddddddddsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </Container>
    </>
  );
};

export default Manager;
