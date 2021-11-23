import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

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
  min-height: 800px;
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
  top: 7rem;
  left: 50%;
  margin-left: -6rem;
  height: 16rem;
  width: 12rem;
  transform: scale(0.8);
  filter: blur(10vh);
  background-image: linear-gradient(120deg, #faffe4, #01bf71 50%, #340096);
  opacity: 1;
  transition: opacity 0.5s;
  animation: ${rotate} 5s linear infinite;
  z-index: 1;
`;

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
    max-width: 17rem;
    height: 80vh;
    min-height: 19rem;
    max-height: 25rem;
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
        135deg,
        #faffe4 15%,
        #01bf71 50%,
        #340096
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
    .title {
      margin: 4rem 0 30px;
      padding: 0;
      color: #fff;
      font-size: 1rem;
      cursor: default;
    }
    .aviso {
      margin-top: -1rem;
      margin-bottom: 1rem;
      color: white;
      font-size: 0.5rem;
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
    .signin {
      color: #01bf71;
      font-size: 0.7rem;
      margin-top: -1rem;
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
  const [nameLabel, setNameLabel] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [userLabel, setUserLabel] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [passLabel, setPassLabel] = useState(false);
  const [passValue, setPassValue] = useState("");
  const [confpassLabel, setConfPassLabel] = useState(false);
  const [confpassValue, setConfPassValue] = useState("");

  const handleParamName = () => (e) => {
    const nameValue = e.target.value;
    setNameValue(nameValue);
  };
  const handleParamUser = () => (e) => {
    const userValue = e.target.value;
    setUserValue(userValue);
  };
  const handleParamPass = () => (e) => {
    const passValue = e.target.value;
    setPassValue(passValue);
  };
  const handleParamConfPass = () => (e) => {
    const confpassValue = e.target.value;
    setConfPassValue(confpassValue);
  };

  const submit = async (event) => {
    event.preventDefault();

    if (passValue === confpassValue) {
      axios
        .post(`${window.location.origin}/api/signup`, {
          name: nameValue,
          email: userValue,
          password: passValue,
        })
        .then(async (res) => {
          if (res.data.status == "success") {
            setNameValue("");
            setUserValue("");
            setPassValue("");
            setConfPassValue("");

            localStorage.setItem("auth", JSON.stringify(auth));

            await router.push("/signin");

            return;
          }
        })
        .catch((e) => {
          console.log(e.response.data);
          if (e.response.data.error.errors.email.kind == "unique") {
            console.log("email already exists");
            return;
          } else {
            console.log("error creating user");
            return;
          }
        });
    } else {
      console.log("passwords dont match");
    }
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
              <p className="title">Crear un usuario</p>
              <form onSubmit={submit}>
                <div className="user-box">
                  <label className={nameLabel ? "inlabel" : "offlabel"}>
                    Nombre Completo
                  </label>
                  <input
                    type="name"
                    required
                    value={nameValue}
                    onFocus={() => setNameLabel(true)}
                    onBlur={() => (nameValue == "" ? setNameLabel(false) : "")}
                    onChange={handleParamName()}
                  />
                </div>
                <div className="user-box">
                  <label className={userLabel ? "inlabel" : "offlabel"}>
                    Correo electrónico
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
                    Ingrese una contraseña
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
                <p className="aviso">*Mínimo 6 caracteres</p>
                <div className="user-box">
                  <label className={confpassLabel ? "inlabel" : "offlabel"}>
                    Confirme su contraseña
                  </label>
                  <input
                    type="password"
                    required
                    value={confpassValue}
                    onFocus={() => setConfPassLabel(true)}
                    onBlur={() =>
                      confpassValue == "" ? setConfPassLabel(false) : ""
                    }
                    onChange={handleParamConfPass()}
                  />
                </div>
                <a className="submitBtn">
                  Submit
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <FormButton type="submit" />
                </a>
              </form>
              <a href="signup">Sign Up!</a>
              <a className="signin" href="signin">
                ¿Ya tienes una cuenta? ¡Inicia Sesión!
              </a>
            </div>
          </div>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signins;
