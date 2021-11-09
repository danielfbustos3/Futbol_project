import styled from "@emotion/styled";
import PlayerCard from "./PlayerCard";
import CustomLoader from "components/CustomLoader";

const AllPlayers = ({ data, status }) => {
  return (
    <div>
      <h1>Here I will show all of the players names.</h1>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <CustomLoader />}
      {status === "success" && (
        <div>
          {data.data.slice(0, 200).map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPlayers;
