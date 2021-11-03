import styled from "@emotion/styled";
// import Player from "../../models/player";
// import dbConnect from "../../utils/dbConnect";

// dbConnect();

const ClubsContainer = styled.div`
  font-size: 15px;
  color: white;
`;

function Clubs() {
  // const [data, setData] = useState(null);

  // useEffect(async () => {
  //   try {
  //     const players = await Player.find({})
  //       .all("Positions", ["ST"])
  //       .limit()
  //       .skip(0);
  //     res.status(200).json({ success: true, data: players });
  //     setData(players);
  //   } catch (error) {
  //     res.status(500).json({ success: false });
  //   }
  // }, []);

  // console.log("these are my players: " + data);

  return <ClubsContainer>Holi Clubs por ahora.</ClubsContainer>;
}

export default Clubs;
