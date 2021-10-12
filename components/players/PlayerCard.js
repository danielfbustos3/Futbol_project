import styled from "@emotion/styled";

const CardContent = styled.div`
  padding: 8px 16px;
  background: #1b1b1b;
  margin: 16px 0;
  border-radius: 20px;
  width: 25rem;
  .title {
    margin: 10px 0;
    color: #ffff57;
  }
  .content {
    margin: 6px 0;
    color: #999;
  }
`;

const PlayerCard = ({ player }) => {
  return (
    <CardContent>
      <h3 className="title">{player.Name}</h3>
      <p className="content">Nationality - {player.Nationality}</p>
      <p className="content">Overall - {player.Overall}</p>
      <p className="content">Potential - {player.Potential}</p>
      <p className="content">Club - {player.Club}</p>
    </CardContent>
  );
};

export default PlayerCard;
