import styled from "@emotion/styled";
import { linksObj } from "./ManSidebarData";
import { useState } from "react";

const ElementsContainer = styled.li`
  position: relative;
  width: 100%;
  margin: 0;
  list-style: none;
  line-height: 50px;
  transition: all 0.5s ease;
  padding: ${({ isOpen }) => (isOpen ? "0 30px 0 0" : "0 13px")};
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  display: block;
  &:hover a {
    background: ${({ myTheme }) => myTheme.hoverColor};
  }
  &:hover .menuItem {
    color: ${({ myTheme }) => myTheme.hoverText};
  }
  a {
    color: ${({ myTheme }) => myTheme.textColor};
    display: grid;
    grid-template-columns: 1fr;
    height: 48px;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease;
    border-radius: ${({ isOpen }) => (isOpen ? "0 25px 25px 0" : "50%")};
    .menuItem {
      display: flex;
      .icon {
        margin-top: 4px;
        min-width: 50px;
        border-radius: 12px;
        line-height: 50px;
        text-align: center;
      }
      .links-name {
        transition: all 0.2s ease;
        cursor: pointer;
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      }
    }
  }
  .listSelected {
    display: none;
    left: 0;
    width: 100%;

    .list-item {
      width: 100%;
      opacity: 0;
      left: 0;
      background: #15a4fa;
      padding: 0 25px;
      text-indent: 25px;
      box-shadow: 0px 0px #126ca1 inset;
      transition: box-shadow 0.3s, text-indent 0.3s;
      &:hover {
        background: #0c93e4;
        box-shadow: 5px 0px #126ca1 inset;
        transition: box-shadow 0.3s linear, text-indent 0.3s linear;
        text-indent: 31px;
      }
    }
  }
  .listSelectedActive {
    display: grid;
    left: 0;
    width: 100%;

    .list-item {
      width: 100%;
      opacity: 1;
      left: 0;
      /* height: ${({ active }) => (active ? "0px" : "auto")}; */
      transition: all 0.8s ease;
      background: #15a4fa;
      padding: 0 25px;
      text-indent: 25px;
      font-size: 0.7rem;
      box-shadow: 0px 0px #126ca1 inset;
      transition: box-shadow 0.3s, text-indent 0.3s;
      &:hover {
        background: #0c93e4;
        box-shadow: 5px 0px #126ca1 inset;
        transition: box-shadow 0.3s linear, text-indent 0.3s linear;
        text-indent: 31px;
      }
    }
  }
`;

const ManSidebarElements = ({ toggle, setPage, myTheme, isOpen }) => {
  return (
    <>
      {linksObj.map((item, index) => {
        const [active, setActive] = useState(false);
        const toggleActive = () => setActive(!active);
        return (
          <ElementsContainer
            key={index}
            myTheme={myTheme}
            isOpen={isOpen}
            onClick={() => (isOpen ? toggleActive() : "")}
            onMouseLeave={() => setActive(false)}
          >
            <a onClick={() => (isOpen ? "" : toggle())}>
              <div className="menuItem">
                <i className="icon">{item.icon}</i>
                <span className="links-name">{item.title}</span>
              </div>
            </a>
            <span className="tooltip">{item.title}</span>
            <ul className={active ? "listSelectedActive" : "listSelected"}>
              {item.listItems?.map((list, idx) => (
                <li
                  className="list-item"
                  key={idx}
                  onClick={() => setPage(list.link)}
                >
                  {list.title}
                </li>
              ))}
            </ul>
          </ElementsContainer>
        );
      })}
    </>
  );
};

export default ManSidebarElements;
