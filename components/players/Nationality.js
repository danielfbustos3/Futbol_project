import styled from "@emotion/styled";
import { useEffect } from "react";
import axios from "axios";

const NationalityContainer = styled.div`
  font-size: 15px;
  color: white;
`;

const Nationality = () => {
  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    try {
      const res = await axios.get(`${window.location.origin}/api/plafyers`);
      console.log(res);

      if (res.data.status == "success") {
        const players = res.data.data;
        console.log(players);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return <NationalityContainer>holis por ahora</NationalityContainer>;
};

export default Nationality;
