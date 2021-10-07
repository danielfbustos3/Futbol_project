export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/players");
  const data = await res.json();

  return {
    props: { players: data.data },
  };
};

const Players = ({ players }) => {
  console.log(typeof players);
  return (
    <>
      <h1>All Players</h1>
      {players.map((player) => (
        <div key={player.ID}>
          <a>
            <h3>{player.Name}</h3>
          </a>
        </div>
      ))}
    </>
  );
};

export default Players;
