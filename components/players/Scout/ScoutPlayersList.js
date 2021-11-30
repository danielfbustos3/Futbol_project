import styled from "@emotion/styled";
import PlayerTable from "./PlayerTable";
import PlayerComparer from "./PlayerComparer";
import NormalButton from "components/NormalButton";
import Alert from "components/Alert";
import AnimatedButton from "components/AnimatedButton";
import { useEffect, useState } from "react";

const ResultsWrapper = styled.div`
  height: 100%;
  width: 100%;
  .optionsContainer {
  }
`;

const ScoutPlayersList = ({
  data,
  setPage,
  posiciones,
  selNations,
  selectedPos,
  setSelectedPos,
}) => {
  //Compare Mode 0 = no player selected, 1 = 1 player selected, 2 = compare mode.
  const [compareMode, setCompareMode] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [comparePlayer, setComparePlayer] = useState("");

  const players =
    data && data?.filter((element) => element.Positions.includes(selectedPos));

  const playerData =
    selNations && selNations?.length > 0
      ? players &&
        players?.filter((element) => selNations.includes(element.Nationality))
      : players;

  return (
    <ResultsWrapper>
      {posiciones && posiciones?.length > 1 ? (
        <div className="optionsContainer">
          <p styles={"margin-right: 1rem;"}>
            {playerData && `${playerData?.length} Jugadores Encontrados`}
          </p>
          {posiciones?.map((item, index) => (
            <NormalButton
              key={index}
              action={() => setSelectedPos(item)}
              text={item}
              selected={selectedPos === item ? true : false}
            />
          ))}
          <NormalButton
            action={() => setSelectedPos("")}
            text="Todos"
            selected={selectedPos === "" ? true : false}
          />
        </div>
      ) : (
        <div className="optionsContainer">
          <p styles={"margin-right: 1rem;"}>
            {playerData && `${playerData?.length} Jugadores Encontrados`}
          </p>
        </div>
      )}
      <PlayerComparer
        compareMode={compareMode}
        setCompareMode={setCompareMode}
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
        comparePlayer={comparePlayer}
        setComparePlayer={setComparePlayer}
      />
      <PlayerTable
        playerData={playerData}
        setSelectedPlayer={setSelectedPlayer}
        compareMode={compareMode}
        setCompareMode={setCompareMode}
        comparePlayer={comparePlayer}
      />
    </ResultsWrapper>
  );
};

export default ScoutPlayersList;
