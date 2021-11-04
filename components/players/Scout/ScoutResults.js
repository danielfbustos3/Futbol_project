import styled from "@emotion/styled";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { setGlobalState, useGlobalState } from "state";
import PlayerCard from "../PlayerCard";
import { useEffect } from "react";

const ResultsContainer = styled.div``;

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
      <ResultsContainer>
        <div>
          No hemos encontrado jugadores. Para encontrar un jugador, vaya a SCOUT
          y llene los campos requeridos para la búsqueda.
        </div>
        <button className="scoutBtn" onClick={() => setPage("scout")}>
          SCOUT
        </button>
      </ResultsContainer>
    );
  } else {
    return (
      <ResultsContainer>
        <h1>Here I will show all of the scouted players.</h1>
        {status === "error" && <div>Error fetching data</div>}
        {status === "loading" && <div>Loading data...</div>}
        {status === "success" && (
          <>
            <button className="scoutBtn" onClick={() => setPage("scout")}>
              SCOUT
            </button>
            <div>
              {data?.data.slice(0, 200).map((player, index) => (
                <PlayerCard key={index} player={player} />
              ))}
            </div>
          </>
        )}
        {(status === "success") & (data?.data.length === 0) && (
          <div>
            No encontramos jugadores con las características seleccionadas.
            Regrese a SCOUT y seleccione nuevas características para la
            búsqueda.
            <button className="scoutBtn" onClick={() => setPage("scout")}>
              SCOUT
            </button>
          </div>
        )}
        <p>{status}</p>
      </ResultsContainer>
    );
  }
}

export default ScoutResults;
