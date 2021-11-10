import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { useGlobalState } from "state";
import { useTheme } from "../../../utils/functions";
import CustomLoader from "components/CustomLoader";
import { useState, useEffect } from "react";
import PlayerTable from "./PlayerTable";
import Alert from "components/Alert";
import NormalButton from "components/NormalButton";
import AnimatedButton from "components/AnimatedButton";

const scale = keyframes`
  0%, 100% {transform:  scale(1);}
    25% {transform: scale(0.95);}
    50% {transform:scale(1.05);}
    75% {transform: scale(0.95);}
`;

const ResultsContainer = styled.div`
  .scoutBtn {
    margin-top: 2rem;
    margin-left: 40%;
    padding: 0.4rem 0.8rem;
    color: ${({ myTheme }) => myTheme.textColor};
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 2px;
    background: ${({ myTheme }) => myTheme.boxColor};
    border-radius: 1rem;
    border: none;
    animation: ${scale} 1s infinite;

    &:hover {
      cursor: pointer;
      background: ${({ myTheme }) => myTheme.hoverColor};
      color: ${({ myTheme }) => myTheme.hoverText};
      border-radius: 1rem;
      box-shadow: ${({
        myTheme,
      }) => `0 0 0.15rem ${myTheme.hoverColor}, 0 0 0.25rem ${myTheme.hoverColor}, 0 0 0.33rem ${myTheme.hoverColor},
        0 0 0.5rem ${myTheme.hoverColor}`};
    }
  }
  .optionsContainer {
    display: flex;
  }
`;

const queryClient = new QueryClient();

const ScoutResults = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ShowResults setPage={setPage} />
    </QueryClientProvider>
  );
};

function ShowResults({ setPage }) {
  const [selectedPos, setSelectedPos] = useState("");
  const myTheme = useTheme();

  const value = useGlobalState("scoutValue")[0];
  const positions = useGlobalState("scoutPositions")[0]
    .toString()
    .replace(/,/g, "|");
  const contract = useGlobalState("scoutContract")[0];
  const minAge = useGlobalState("scoutMinAge")[0];
  const maxAge = useGlobalState("scoutMaxAge")[0];

  const posiciones = useGlobalState("scoutPositions")[0];

  const fetchPlayers = async () => {
    if ((value != 0) & (positions?.length != 0)) {
      const res = await fetch(
        `${window.location.origin}/api/scout?value=${value}&positions=${positions}&contract=${contract}&minage=${minAge}&maxage=${maxAge}`
      );
      return res.json();
    }
  };

  const { data, status } = useQuery("players", fetchPlayers);

  if (value === "" || positions === "") {
    return (
      <ResultsContainer myTheme={myTheme}>
        <Alert
          type="alert"
          message="No hemos encontrado jugadores. Para encontrar un jugador, vaya a
            SCOUT y llene los campos requeridos para la búsqueda."
        />
        <AnimatedButton
          action={() => setPage("scout")}
          text="SCOUT"
          size="small"
        />
      </ResultsContainer>
    );
  } else {
    return (
      <ResultsContainer myTheme={myTheme}>
        {status === "error" && (
          <>
            <Alert type="error" message="Error fetching data" />
            <AnimatedButton
              action={() => setPage("scout")}
              text="SCOUT"
              size="small"
            />
          </>
        )}
        {status === "loading" && <CustomLoader />}
        {status === "success" && data?.data.length === 0 && (
          <div>
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
          </div>
        )}
        {status === "success" && data?.data.length > 0 && (
          <>
            <NormalButton action={() => setPage("scout")} text="← buscador" />
            <div>
              {posiciones?.length > 1 && (
                <>
                  <p>
                    Seleccione una opción para encontrar jugadores por posición.
                  </p>
                  <div className="optionsContainer">
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
                </>
              )}
              <PlayerTable
                players={data?.data.filter((element) =>
                  element.Positions.includes(selectedPos)
                )}
              />
            </div>
          </>
        )}
      </ResultsContainer>
    );
  }
}

export default ScoutResults;
