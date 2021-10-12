import styled from "@emotion/styled";
import PlayerCard from "./PlayerCard";

const AllPlayers = ({ data, status }) => {
  return (
    <div>
      <h1>Here I will show all of the player's names.</h1>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data...</div>}
      {status === "success" && (
        <div>
          {data.data.slice(0, 5).map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      )}
      <p>{status}</p>
    </div>
  );
};

export default AllPlayers;
