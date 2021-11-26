import styled from "@emotion/styled";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "redux/ducks/authenticator";
import { useEffect } from "react";

const ClubsContainer = styled.div`
  font-size: 15px;
  color: white;
  .holi {
    background: blue;
  }
`;

function Clubs() {
  const auth = useSelector((state) => state.authorized.auth);
  const authorized = useSelector((state) => state.authorized.authenticated);
  const dispatch = useDispatch();

  const axiosHeaders = {
    headers: {
      token: auth?.token,
    },
  };
  console.log(auth?.token);
  console.log(authorized);

  useEffect(async () => {
    // try {
    //   const res = await axios.get(
    //     `${window.location.origin}/api/signin/configs`,
    //     axiosHeaders
    //   );
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    //   return;
    // }
    dispatch(checkAuth());
  }, []);

  return (
    <ClubsContainer>
      <p className="holi">hey gey hey</p>
      Holi Clubs por ahora.
    </ClubsContainer>
  );
}

export default Clubs;
