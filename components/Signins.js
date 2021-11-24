import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, readToken } from "redux/ducks/authenticator";
import Alert from "components/Alert";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const btnanim1 = keyframes`
0% {
  left: -100%;
}
  50%,100% {
    left: 100%;
  }
`;
const btnanim2 = keyframes`
0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
`;
const btnanim3 = keyframes`
0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
`;
const btnanim4 = keyframes`
0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
`;

const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: #000;
`;

const CardShadow = styled.div`
  position: absolute;
  content: "";
  top: 9rem;
  left: 50%;
  margin-left: -4rem;
  height: 12rem;
  width: 8rem;
  transform: scale(0.8);
  filter: blur(3rem);
  background-image: linear-gradient(
    to right top,
    #00818f,
    #008e93,
    #009a93,
    #00a68e,
    #00b185,
    #20bb80,
    #38c479,
    #4ecd71,
    #6cd872,
    #87e273,
    #a1ec74,
    #baf677
  );
  opacity: 1;
  transition: opacity 0.5s;
  animation: ${rotate} 5s linear infinite;
  z-index: 1;
`;
//#F9E282 #00818F

const FormWrap = styled.div`
  min-height: 100vh;
  /* background: #0f2520; */
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;

  .cardBorder {
    width: 80vw;
    max-width: 15rem;
    height: 80vh;
    min-height: 19rem;
    max-height: 22rem;
    position: relative;
    border-radius: 10px;
    background: black;
    overflow: hidden;
    color: rgb(88 199 250 / 0%);
    z-index: 2;
    justify-content: center;
    padding: 0.15rem;
    align-items: center;

    &:before {
      content: "";
      width: 220%;
      height: 150%;
      min-height: 26rem;
      background-image: linear-gradient(
        to right top,
        #00818f,
        #008e93,
        #009a93,
        #00a68e,
        #00b185,
        #20bb80,
        #38c479,
        #4ecd71,
        #6cd872,
        #87e273,
        #a1ec74,
        #baf677
      );
      border-radius: 50%;
      position: absolute;
      top: -5.5rem;
      left: -9rem;
      animation: ${rotate} 1.5s linear infinite;
    }
  }
  .cardContent {
    position: relative;
    border-radius: 8px;
    left: 0;
    top: -27px;
    width: 100%;
    height: 100%;
    background: linear-gradient(#0d0d0d 65%, #051f14);
    padding: 40px;
    .icon {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      padding: 2rem;
      text-align: center;
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      font-size: 1.7rem;
      &:hover {
        transition: all 0.2s ease-in-out;
        color: #01bf71;
        transform: scale(1.08);
      }
    }
    p {
      margin: 4rem 0 30px;
      padding: 0;
      color: #fff;
      font-size: 1rem;
      cursor: default;
    }
    .user-box {
      position: relative;
      input {
        width: 100%;
        padding: 10px 0;
        font-size: 0.8rem;
        color: #fff;
        margin-bottom: 50px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
      }
      .inlabel {
        position: absolute;
        top: -0.5rem;
        left: 0;
        color: #01bf71;
        font-size: 0.55rem;
        transition: 0.2s;
      }
      .offlabel {
        position: absolute;
        top: 0.1rem;
        left: 0.4rem;
        padding: 10px 0;
        font-size: 0.7rem;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
      }
    }
    .mensaje {
      margin-top: -1.3rem;
      color: red;
      font-size: 0.7rem;
      margin-bottom: 0.7rem;
    }
    .submitBtn {
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      color: #01bf71;
      font-size: 0.7rem;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: 0.5s;
      letter-spacing: 4px;
      &:hover {
        background: #01bf71;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 0.3rem #01bf71, 0 0 0.5rem #01bf71, 0 0 0.75rem #01bf71,
          0 0 1rem #01bf71;
      }
    }
    span {
      position: absolute;
      display: block;
      &:nth-of-type(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #01bf71);
        animation: ${btnanim1} 1s linear infinite;
      }
      &:nth-of-type(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #01bf71);
        animation: ${btnanim2} 1s linear infinite;
        animation-delay: 0.25s;
      }
      &:nth-of-type(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #01bf71);
        animation: ${btnanim3} 1s linear infinite;
        animation-delay: 0.5s;
      }
      &:nth-of-type(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #01bf71);
        animation: ${btnanim4} 1s linear infinite;
        animation-delay: 0.75s;
      }
    }
    .signup {
      color: #01bf71;
      font-size: 0.7rem;
    }
  }
`;

const FormButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const Signins = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authorized.auth);

  useEffect(() => {
    dispatch(readToken());
  }, []);

  useEffect(() => {
    if (auth) {
      router.push("/manager");
    }
  }, [auth]);

  useEffect(() => {
    setAlert(false);
  }, [userValue]);

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [userLabel, setUserLabel] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [passLabel, setPassLabel] = useState(false);
  const [passValue, setPassValue] = useState("");

  const handleParamUser = () => (e) => {
    const userValue = e.target.value;
    setUserValue(userValue);
  };
  const handleParamPass = () => (e) => {
    const passValue = e.target.value;
    setPassValue(passValue);
  };

  const submit = async (event) => {
    event.preventDefault();
    console.log("posting");
    axios
      .post(`${window.location.origin}/api/signin`, {
        email: userValue,
        password: passValue,
      })
      .then((res) => {
        if (res.data.status == "success") {
          console.log("ingresado. Bienvenido!");

          const localauth = {
            token: res.data.token,
            userData: res.data.userData,
          };

          dispatch(setAuth(localauth));

          localStorage.setItem("auth", JSON.stringify(localauth));

          router.push("/manager");

          return;
        }
      })
      .catch((e) => {
        console.log(e.response.data);
        setUserLabel(false);
        setUserValue("");
        setPassLabel(false);
        setPassValue("");
        setAlert(true);
        setAlertMessage("Credenciales inválidas");

        return;
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <CardShadow />
          <div className="cardBorder">
            {"\u00A0"}
            <div className="cardContent">
              <a className="icon" href="#">
                FÚTBOL
              </a>
              <p>Iniciar sesión</p>
              <form onSubmit={submit}>
                <div className="user-box">
                  <label className={userLabel ? "inlabel" : "offlabel"}>
                    Username
                  </label>
                  <input
                    type="email"
                    required
                    value={userValue}
                    onFocus={() => setUserLabel(true)}
                    onBlur={() => (userValue == "" ? setUserLabel(false) : "")}
                    onChange={handleParamUser()}
                  />
                </div>
                <div className="user-box">
                  <label className={passLabel ? "inlabel" : "offlabel"}>
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={passValue}
                    onFocus={() => setPassLabel(true)}
                    onBlur={() => (passValue == "" ? setPassLabel(false) : "")}
                    onChange={handleParamPass()}
                  />
                </div>
                <p className="mensaje">{alert ? alertMessage : "\u00A0"}</p>
                <a className="submitBtn">
                  Submit
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <FormButton type="submit" />
                </a>
              </form>
              <a className="signup" href="signup">
                ¿No tienes una cuenta? ¡Regístrate!
              </a>
            </div>
          </div>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signins;
