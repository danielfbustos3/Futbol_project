import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { useGlobalState } from "state";
import { useTheme } from "../../../utils/functions";
import CustomLoader from "components/CustomLoader";
import { useState, useEffect } from "react";
import Alert from "components/Alert";
import AnimatedButton from "components/AnimatedButton";
import ScoutPlayersList from "./ScoutPlayersList";
import ScoutMap from "./ScoutMap";

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
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const queryClient = new QueryClient();

const ScoutResults = ({ setPage, showmap, setShowmap }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ShowResults
        setPage={setPage}
        showmap={showmap}
        setShowmap={setShowmap}
      />
    </QueryClientProvider>
  );
};

function ShowResults({ setPage, showmap, setShowmap }) {
  const myTheme = useTheme();

  const [selNations, setSelNations] = useState([]);
  const [selectedPos, setSelectedPos] = useState("");

  const value = useGlobalState("scoutValue")[0];
  const positions = useGlobalState("scoutPositions")[0]
    .toString()
    .replace(/,/g, "|");
  const contract = useGlobalState("scoutContract")[0];
  const minAge = useGlobalState("scoutMinAge")[0];
  const maxAge = useGlobalState("scoutMaxAge")[0];

  const posiciones = useGlobalState("scoutPositions")[0];

  const fetchPlayers = async () => {
    try {
      if ((value != 0) & (positions?.length != 0)) {
        const res = await fetch(
          `${window.location.origin}/api/scout?value=${value}&positions=${positions}&contract=${contract}&minage=${minAge}&maxage=${maxAge}`
        );
        return res.json();
      }
    } catch (error) {
      console.log("error getting players");
      console.log(error);

      return res.json();
    }
  };

  const { data, status } = useQuery("players", fetchPlayers);

  console.log({ data });

  console.log({ status });

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
    const setStatus = (status) => {
      switch (status) {
        case "error":
          return (
            <>
              <Alert
                type="error"
                message="Error obteniendo los datos. Por favor inténtelo nuevamente."
              />
              <AnimatedButton
                action={() => setPage("scout")}
                text="SCOUT"
                size="small"
              />
            </>
          );

        case "loading":
          return <CustomLoader />;
        case "success":
          if (showmap === 0) {
            return (
              <>
                {data.data.length > 0 && (
                  <ScoutPlayersList
                    data={data}
                    setPage={setPage}
                    posiciones={posiciones}
                    selNations={selNations}
                    selectedPos={selectedPos}
                    setSelectedPos={setSelectedPos}
                  />
                )}
              </>
            );
          } else {
            if (showmap === 1) {
              return (
                <>
                  {data.data.length > 0 && (
                    <ScoutMap
                      data={data}
                      setShowmap={setShowmap}
                      selNations={selNations}
                      setSelNations={setSelNations}
                      posiciones={posiciones}
                      selectedPos={selectedPos}
                      setSelectedPos={setSelectedPos}
                    />
                  )}
                </>
              );
            }
          }

          break;
        default:
          "loading";
      }
    };

    return (
      <ResultsContainer myTheme={myTheme}>{setStatus(status)}</ResultsContainer>
    );
  }
}

export default ScoutResults;
