import { useTheme } from "../../../utils/functions";
import { useState } from "react";
import styled from "@emotion/styled";

const AttributesItemContent = styled.div`
  .list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    width: 100%;
    background: ${({ myTheme }) => myTheme.boxColor};
    color: ${({ myTheme }) => myTheme.textColor};
    text-indent: 10px;
    transition: 0.2s;
    border-bottom: ${({ myTheme, descrip }) =>
      descrip ? `0.07rem solid ${myTheme.highlightColor}` : ""};
    font-size: 0.7rem;
    &:hover {
      box-shadow: ${({ myTheme }) =>
        `0.25rem 0px ${myTheme.highlightColor} inset`};
      transition: 0.2s;
      text-indent: 25px;
      cursor: default;
    }
    .listItem {
      font-size: 0.8rem;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .openBtn {
      float: right;
      margin-right: 1rem;
      width: 20px;
      height: 20px;
      cursor: pointer;
      border: 0;
      outline: 0;
      background: 0 0;
      .line {
        display: block;
        width: 20px;
        transition: all 0.3s cubic-bezier(0.76, -0.26, 0.15, 1.32);
        transform: translateY(-50%);
        transform-origin: center center;
        outline: 1px solid transparent;
        background: ${({ myTheme }) => myTheme.highlightColor};
        &:after {
          display: block;
          width: 20px;
          height: 4px;
          content: "";
          transition: all 0.3s cubic-bezier(0.76, -0.26, 0.15, 1.32);
          transform: rotate(90deg);
          transform-origin: center center;
          outline: 1px solid transparent;
          background: ${({ myTheme }) => myTheme.highlightColor};
        }
      }
      .closeLine {
        display: block;
        width: 20px;
        top: 45%;
        transition: all 0.3s cubic-bezier(0.76, -0.26, 0.15, 1.32);
        outline: 1px solid transparent;
        transform: rotate(180deg);
        background: ${({ myTheme }) => myTheme.checkColor};
        &:after {
          display: block;
          width: 20px;
          height: 4px;
          content: "";
          transition: all 0.3s cubic-bezier(0.76, -0.26, 0.15, 1.32);
          transform: rotate(0);
          outline: 1px solid transparent;
          background: 0 0;
        }
      }
    }
  }
  .infoContainer {
    height: 0;
    overflow: hidden;
    transition: 0.3s;
  }
  .infoContainerAct {
    transition: 0.3s;
    height: 11rem;
    background: ${({ myTheme }) => myTheme.boxColor};
    overflow: hidden;
  }

  .listSelected {
    display: flex;
    align-items: center;
    height: 2rem;
    width: 100%;
    background: ${({ myTheme }) => myTheme.boxColor};
    color: ${({ myTheme }) => myTheme.textColor};
    font-size: 0.8rem;
    text-indent: 25px;
    transition: 0.1s;
    cursor: default;
    box-shadow: ${({ myTheme }) => `12rem 0 ${myTheme.highlightColor} inset`};
  }
`;

const AttributesListItem = ({
  selAttributes,
  setSelAttributes,
  item,
  list,
}) => {
  const myTheme = useTheme();
  const [descrip, setDescrip] = useState(false);
  const toggleDesc = () => setDescrip(!descrip);

  switch (list) {
    case "selected":
      return (
        <AttributesItemContent myTheme={myTheme} descrip={descrip}>
          <li
            className="listSelected"
            onClick={() =>
              setSelAttributes(
                selAttributes &&
                  selAttributes?.filter((i) => i !== item.atributo)
              )
            }
          >
            {item.atributo}
          </li>
        </AttributesItemContent>
      );

    case "unselected":
      return (
        <AttributesItemContent myTheme={myTheme} descrip={descrip}>
          <li className="list">
            <div
              className="listItem"
              onClick={() =>
                setSelAttributes((selAttributes) => [
                  ...selAttributes,
                  item.atributo,
                ])
              }
            >
              {item.atributo}
            </div>

            <button
              className="openBtn"
              aria-label="Toggle Info"
              title="Click For More Information"
              onClick={() => toggleDesc()}
            >
              <span className={descrip ? "closeLine" : "line"}></span>
            </button>
          </li>
          <div className={descrip ? "infoContainerAct" : "infoContainer"}>
            {item.descripcion}
          </div>
        </AttributesItemContent>
      );
  }
};

export default AttributesListItem;
