import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: #000;
`;

const FormWrap = styled.div`
  /* background: #0f2520; */
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;

  .cardBorder {
    width: 20rem;
    height: 88vh;
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
      height: 220%;
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
      position: absolute;
      top: -50%;
      left: -60%;
      animation: ${rotate} 1.5s linear infinite;
    }
  }
  .cardContent {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    left: 0;
    top: -27px;
    width: 100%;
    height: 100%;
    background: linear-gradient(#0d0d0d 65%, #051f14);
    overflow: scroll;
    .icon {
      top: 0;
      width: 5rem;
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
      margin: 2rem 0 1rem 0;
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
        width: 14rem;
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
    .signin {
      color: #01bf71;
      font-size: 0.7rem;
      margin-top: -0.5rem;
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
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [nameLabel, setNameLabel] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [userLabel, setUserLabel] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [passLabel, setPassLabel] = useState(false);
  const [passValue, setPassValue] = useState("");
  const [confpassLabel, setConfPassLabel] = useState(false);
  const [confpassValue, setConfPassValue] = useState("");

  useEffect(() => {
    setAlert(false);
  }, [nameValue, userValue, passValue]);

  const router = useRouter();

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
        .then((res) => {
          if (res.data.status == "success") {
            setNameValue("");
            setUserValue("");
            setPassValue("");
            setConfPassValue("");

            router.push("/signin");

            return;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data.error.errors.email.kind == "unique") {
            setAlert(true);
            setAlertMessage(
              "El correo electrónico ya se encuentra registrado."
            );
            return;
          } else {
            setAlert(true);
            setAlertMessage("Error al crear usuario.");
          }
          return;
        });
    } else {
      setConfPassValue("");
      setConfPassLabel(false);
      setAlert(true);
      setAlertMessage("Las contraseñas no coinciden.");
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
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
                <p className="mensaje">{alert ? alertMessage : "\u00A0"}</p>
                <a className="submitBtn">
                  Crear
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
