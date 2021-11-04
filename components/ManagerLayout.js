import styled from "@emotion/styled";
import AllPlayers from "./players/AllPlayers";
import Clubs from "./players/Clubs";
import Nationality from "./players/Nationality";
import Position from "./players/Position";
import Scout from "./players/Scout/Scout";
import ScoutResults from "./players/Scout/ScoutResults";
import { useTheme } from "../utils/functions";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { useGlobalState } from "../state";

const queryClient = new QueryClient();

const Container = styled.div`
  padding: 80px;
  min-height: 85vh;
  width: 100%;
  flex: wrap;
  background: ${({ myTheme }) => myTheme.backgroundColor};
  color: ${({ myTheme }) => myTheme.textColor};
  /* background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  ); */
  .content {
  }
`;

const ManagerLayout = ({ page, setPage, isOpen }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowPage page={page} setPage={setPage} isOpen={isOpen} />
    </QueryClientProvider>
  );
};

function ShowPage({ page, setPage, isOpen }) {
  const myTheme = useTheme();

  const fetchPlayers = async () => {
    const res = await fetch(`${window.location.origin}/api/players`);
    return res.json();
  };

  const { data, status } = useQuery("players", fetchPlayers);

  const switchPage = (page) => {
    switch (page) {
      case "allplayers":
        return <AllPlayers data={data} status={status} />;
        break;
      case "scout":
        return <Scout setPage={setPage} />;
        break;
      case "clubs":
        return <Clubs data={data} status={status} />;
        break;
      case "nationality":
        return <Nationality data={data} status={status} />;
        break;
      case "position":
        return <Position data={data} status={status} />;
        break;
      case "scoutresults":
        return <ScoutResults setPage={setPage} />;
        break;
      default:
        "allplayers";
    }
  };
  return (
    <>
      <Container myTheme={myTheme}>{switchPage(page)}</Container>
    </>
  );
}

export default ManagerLayout;
