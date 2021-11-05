import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { setGlobalState, useGlobalState } from "state";
import { useTheme } from "../../../utils/functions";
import PlayerCard from "../PlayerCard";
import { BiError } from "react-icons/bi";
import { useEffect } from "react";

const bounce = keyframes`
  0%, 20%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-0.5rem);}
    50% {transform: translateY(0.3rem);}
    60% {transform: translateY(-0.3rem);}
`;

const scale = keyframes`
  0%, 100% {transform:  scale(1);}
    25% {transform: scale(0.95);}
    50% {transform:scale(1.1);}
    75% {transform: scale(0.95);}
`;

const ResultsContainer = styled.div`
  .alertBox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 80%;
    height: 2rem;
    padding: 0 1rem;
    margin-top: 2rem;
    border: 1px solid rgba(241, 142, 6, 0.81);
    background-color: rgba(220, 128, 1, 0.16);
    box-shadow: 0px 0px 2px #ffb103;
    color: #ffb103;
    transition: 0.5s;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 70%;
      border-left: 2px solid;
      border-right: 3px solid;
      border-radius: 0 3px 3px 0;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
    &:hover {
      background-color: rgba(220, 128, 1, 0.33);
      transition: 0.5s;
    }
    .alertIcon {
      margin-right: 0.5rem;
      margin-top: 0.2rem;
      animation: ${bounce} 1s infinite;
    }
    .alertText {
      font-size: 1rem;
    }
  }
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
    letter-spacing: 4px;
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
  .backScoutBtn {
    padding: 0.4rem 0.8rem;
    color: ${({ myTheme }) => myTheme.textColor};
    font-size: 0.7rem;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 3px;
    background: ${({ myTheme }) => myTheme.boxColor};
    border-radius: 1rem;
    border: none;

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
  const myTheme = useTheme();

  const value = useGlobalState("scoutValue")[0];
  const positions = useGlobalState("scoutPositions")[0]
    .toString()
    .replace(/,/g, "|");
  const contract = useGlobalState("scoutContract")[0];
  const minAge = useGlobalState("scoutMinAge")[0];
  const maxAge = useGlobalState("scoutMaxAge")[0];

  const fetchPlayers = async () => {
    if ((value != 0) & (positions.length != 0)) {
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
        <div className="alertBox">
          <div className="alertIcon">
            <BiError />
          </div>
          <div className="alertText">
            No hemos encontrado jugadores. Para encontrar un jugador, vaya a
            SCOUT y llene los campos requeridos para la búsqueda.
          </div>
        </div>
        <button className="scoutBtn" onClick={() => setPage("scout")}>
          SCOUT
        </button>
      </ResultsContainer>
    );
  } else {
    return (
      <ResultsContainer myTheme={myTheme}>
        {status === "error" && <div>Error fetching data</div>}
        {status === "loading" && <div>Loading data...</div>}
        {status === "success" && data?.data.length > 0 && (
          <>
            <button className="backScoutBtn" onClick={() => setPage("scout")}>
              back to SCOUT
            </button>
            <div>
              {data?.data.slice(0, 200).map((player, index) => (
                <PlayerCard key={index} player={player} />
              ))}
            </div>
          </>
        )}
        {status === "success" && data?.data.length === 0 && (
          <div>
            <div className="alertBox">
              <div className="alertIcon">
                <BiError />
              </div>
              <div className="alertText">
                No encontramos jugadores con las características seleccionadas.
                Regrese a SCOUT y seleccione nuevas características para la
                búsqueda.
              </div>
            </div>
            <button className="scoutBtn" onClick={() => setPage("scout")}>
              SCOUT
            </button>
          </div>
        )}
      </ResultsContainer>
    );
  }
}

export default ScoutResults;
