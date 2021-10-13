import styled from "@emotion/styled";
import AllPlayers from "./players/AllPlayers";
import Clubs from "./players/Clubs";
import Nationality from "./players/Nationality";
import Position from "./players/Position";
import { useTheme } from "../utils/functions";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const fetchPlayers = async () => {
  const res = await fetch(`${window.location.origin}/api/players`);
  console.log(window.location.origin);
  return res.json();
};

export const Container = styled.div`
  display: grid;
  /* justify-content: center;
  align-items: center; */
  padding: 80px;
  min-height: 1000px;
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

const ManagerLayout = ({ page, isOpen }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowPage page={page} isOpen={isOpen} />
    </QueryClientProvider>
  );
};

function ShowPage({ page, isOpen }) {
  const myTheme = useTheme();

  const { data, status } = useQuery("players", fetchPlayers);

  const switchPage = (page) => {
    switch (page) {
      case "allplayers":
        return <AllPlayers data={data} status={status} />;
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
      default:
        "allplayers";
    }
  };
  return (
    <>
      <Container myTheme={myTheme}>
        <h1>Players Info:</h1>
        <div className="content">
          holi:
          {switchPage(page)}
        </div>
      </Container>
    </>
  );
}

export default ManagerLayout;
