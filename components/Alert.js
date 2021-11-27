import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useState, useEffect } from "react";
import { BiError } from "react-icons/bi";

const bounce = keyframes`
  0%, 20%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-0.5rem);}
    50% {transform: translateY(0.3rem);}
    60% {transform: translateY(-0.3rem);}
`;

const AlertComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  width: ${({ type }) => (type === "alert" ? "80%" : "25rem")};
  /* height: 2rem; */
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  ${({ color }) => color}
  transition: 0.5s;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 70%;
    border-left: 2px solid;
    border-right: 3px solid;
    border-radius: 0 3px 3px 0;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  &:hover {
    ${({ hover }) => hover}
    transition: 0.5s;
  }
  .alertIcon {
    margin-right: 0.5rem;
    margin-top: 0.2rem;
    animation: ${bounce} 1s infinite;
  }
  .alertText {
    font-size: 1rem;
  }
`;

const Alert = ({ type, message }) => {
  const [color, setColor] = useState({});
  const [hover, setHover] = useState({});

  useEffect(() => {
    switch (type) {
      case "alert":
        setColor(`
          border: 1px solid rgba(241, 142, 6, 0.81);
          background-color: rgba(220, 128, 1, 0.16);
          box-shadow: 0px 0px 2px #ffb103;
          color: #ffb103;`);
        setHover(`background-color: rgba(220, 128, 1, 0.33);`);
        break;

      case "error":
        setColor(`border: 1px solid rgba(241, 6, 6, 0.81);
          background-color: rgba(220, 17, 1, 0.16);
          box-shadow: 0px 0px 2px #ff0303;
          color: #ff0303;`);
        setHover(`background-color: rgba(220, 17, 1, 0.33);`);
      default:
        "alert";
    }
  }, []);

  return (
    <AlertComponent color={color} hover={hover} type={type}>
      <div className="alertIcon">
        {type == "alert" ? <BiError /> : <BiError />}
      </div>
      <div className="alertText">{message}</div>
    </AlertComponent>
  );
};

export default Alert;
