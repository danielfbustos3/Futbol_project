import styled from "@emotion/styled";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { useGlobalState } from "state";
import PlayerCard from "../PlayerCard";

const ResultsContainer = styled.div``;

const queryClient = new QueryClient();

const ScoutResults = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowResults />
    </QueryClientProvider>
  );
};

function ShowResults() {
  const value = useGlobalState("scoutValue")[0];
  const positions = useGlobalState("scoutPositions")[0];
  const contract = useGlobalState("scoutContract")[0];
  const minAge = useGlobalState("scoutMinAge")[0];
  const maxAge = useGlobalState("scoutMaxAge")[0];

  const fetchPlayers = async () => {
    console.log(value);
    const res = await fetch(
      `${window.location.origin}/api/scout?value=${value}&positions=${positions}&contract=${contract}&minage=${minAge}&maxage=${maxAge}`
    );
    return res.json();
  };

  const { data, status } = useQuery("players", fetchPlayers);

  return (
    <ResultsContainer>
      <h1>Here I will show all of the scouted players.</h1>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data...</div>}
      {status === "success" && (
        <div>
          {data.data.slice(0, 200).map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      )}
      <p>{status}</p>
    </ResultsContainer>
  );
}

export default ScoutResults;
