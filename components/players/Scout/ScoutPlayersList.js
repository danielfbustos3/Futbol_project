import styled from "@emotion/styled";
import PlayerTable from "./PlayerTable";
import PlayerComparer from "./PlayerComparer";
import NormalButton from "components/NormalButton";
import Alert from "components/Alert";
import AnimatedButton from "components/AnimatedButton";
import { useState } from "react";

const ResultsWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ScoutPlayersList = ({ data, setPage, posiciones }) => {
  //Compare Mode 0 = no player selected, 1 = 1 player selected, 2 = compare mode.
  const [compareMode, setCompareMode] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [comparePlayer, setComparePlayer] = useState("");
  const [selectedPos, setSelectedPos] = useState("");

  console.log("holis estoy muestreado");
  if (data?.data.length === 0) {
    return (
      <ResultsWrapper>
        <Alert
          type="alert"
          message="No encontramos jugadores con las características seleccionadas.
                  Regrese a SCOUT y seleccione nuevas características para la
                búsqueda."
        />
        <AnimatedButton
          action={() => setPage("scout")}
          text="SCOUT"
          size="small"
        />
      </ResultsWrapper>
    );
  } else {
    if (data?.data.length > 0) {
      const players =
        data &&
        data?.data.filter((element) => element.Positions.includes(selectedPos));

      return (
        <ResultsWrapper>
          {posiciones?.length > 1 ? (
            <div className="optionsContainer">
              <p styles={"margin-right: 1rem;"}>
                {players?.length} Jugadores Encontrados{" "}
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
                {players?.length} Jugadores Encontrados{" "}
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
            players={players}
            setSelectedPlayer={setSelectedPlayer}
            compareMode={compareMode}
            setCompareMode={setCompareMode}
            comparePlayer={comparePlayer}
          />
        </ResultsWrapper>
      );
    }
  }
};

export default ScoutPlayersList;
