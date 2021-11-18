import styled from "@emotion/styled";
import { useTheme } from "utils/functions";
import { useState } from "react";
import NormalButton from "components/NormalButton";
import RadarComparer from "./RadarComparer";
import PlayerBasicCard from "./PlayerBasicCard";

const ComparerContainer = styled.div`
  margin-top: 0.3rem;
  height: ${({ compareMode }) => (compareMode === 0 ? "0px" : "380px")};
  opacity: ${({ compareMode }) => (compareMode === 0 ? "0" : "1")};
  /* width: 100vw; */
  /* overflow: scroll; */
  display: flex;
  transition: all 0.5s ease;
  padding-bottom: 0.5rem;
  .selected {
    width: 50%;
    min-width: ${({ compareMode }) => (compareMode === 2 ? "640px" : "780px")};
    height: 100%;
    transition: all 0.5s ease;
  }
  .center {
    max-width: 15rem;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .buttonWrapper {
      height: 12%;
      transition: all 0.5s ease;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.3rem;
    }
  }
  .compare {
    width: 50%;
    min-width: ${({ compareMode }) => (compareMode === 2 ? "640px" : "0")};
    opacity: ${({ compareMode }) => (compareMode === 2 ? "1" : "0")};
    height: 100%;
  }
`;

const PlayerComparer = ({
  selectedPlayer,
  setSelectedPlayer,
  compareMode,
  setCompareMode,
  comparePlayer,
  setComparePlayer,
}) => {
  const myTheme = useTheme();

  return (
    <ComparerContainer myTheme={myTheme} compareMode={compareMode}>
      <div className="selected">
        <PlayerBasicCard
          data={selectedPlayer}
          dataCompare={comparePlayer}
          compareMode={compareMode}
          color={1}
        />
      </div>
      <div className="center">
        <div className="buttonWrapper">
          <NormalButton
            action={() => {
              if (selectedPlayer != "") {
                setComparePlayer(selectedPlayer);
                setSelectedPlayer("");
                setCompareMode(2);
              }
            }}
            text="Comparar →"
          />
          <NormalButton
            action={() => {
              if (compareMode === 1) {
                setSelectedPlayer("");
                setCompareMode(0);
              } else {
                if (compareMode === 2) {
                  if (selectedPlayer === "") {
                    setSelectedPlayer(comparePlayer);
                  }
                  setCompareMode(1);
                  setComparePlayer("");
                }
              }
            }}
            text="x"
          />
        </div>
        <RadarComparer
          selectedPlayer={selectedPlayer}
          comparePlayer={comparePlayer}
        />
      </div>
      <div className="compare">
        <PlayerBasicCard
          data={comparePlayer}
          dataCompare={selectedPlayer}
          compareMode={compareMode}
          color={2}
        />
      </div>
    </ComparerContainer>
  );
};

export default PlayerComparer;
