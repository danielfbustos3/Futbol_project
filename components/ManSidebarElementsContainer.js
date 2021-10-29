import styled from "@emotion/styled";
import { useState } from "react";

const ElemContent = styled.li`
  position: relative;
  width: 100%;
  margin-top: 10rem;
  height: ${({ active, items }) =>
    active ? `${1.9 + 2.12 * items}rem` : "1.9rem"};
  list-style: none;
  line-height: 50px;
  transition: all 0.5s ease;
  padding: ${({ isOpen }) => (isOpen ? "0 30px 0 0" : "0 13px")};
  justify-content: center;
  align-items: center;
  display: block;
  transition: 1s;
  overflow: ${({ isOpen }) => (isOpen ? "hidden" : "")};
  &:hover a {
    background: ${({ myTheme, active }) => (active ? myTheme.hoverColor : "")};
    cursor: ${({ active }) => (active ? "pointer" : "default")};
    color: ${({ myTheme, active }) =>
      active ? myTheme.hoverText : myTheme.textColor};
  }
  a {
    color: ${({ myTheme }) => myTheme.textColor};
    display: grid;
    top: 0;
    grid-template-columns: 1fr;
    height: 1.9rem;
    align-items: center;
    text-decoration: none;
    border-radius: ${({ isOpen }) => (isOpen ? "0 25px 25px 0" : "50%")};
    z-index: 10;
    background: ${({ myTheme }) => myTheme.backgroundColor};
    .menuItem {
      display: flex;
      z-index: 12;
      .icon {
        z-index: 14;
        margin-top: 4px;
        min-width: 50px;
        border-radius: 12px;
        line-height: 50px;
        text-align: center;
      }
      .links-name {
        z-index: 14;
        cursor: pointer;
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      }
      &:hover {
        color: ${({ myTheme }) => myTheme.hoverText};
      }
    }
    &:hover {
      background: ${({ myTheme }) => myTheme.hoverColor};
    }
  }
  .listSelected {
    display: grid;
    top: 0;
    left: 0;
    width: 90%;
    height: 0;
    transition: 0.5s;
    font-size: 0.7rem;
    overflow: hidden;
    .list-item {
      position: absolute;
      top: -4rem;
      z-index: 0;
      width: 100%;
      left: 0;
      transition: all 0.8s ease-in;
      background: ${({ myTheme }) => myTheme.boxColor};
      color: ${({ myTheme }) => myTheme.textColor};
      border-radius: 0 0 10px 0;
      padding: 0 25px;
      text-indent: 10px;
      font-size: 0.7rem;
      text-overflow: ellipsis;
      box-shadow: 0px 0px #fff inset;
      transition: box-shadow 0.3s, text-indent 0.3s;
    }
  }
  .listSelectedActive {
    display: grid;
    left: 0;
    top: 0;
    height: ${({ items }) => `${2.12 * items}rem`};
    width: 90%;
    transition: 0.5s;
    font-size: 0.7rem;
    overflow: hidden;
    .list-item {
      top: 0;
      height: 2rem;
      width: 100%;
      opacity: 1;
      left: 0;
      transition: all 0.8s ease;
      background: ${({ myTheme }) => myTheme.boxColor};
      color: ${({ myTheme }) => myTheme.textColor};
      border-radius: 0 0 10px 0;
      text-indent: 10px;
      font-size: 0.7rem;
      box-shadow: 0px 0px #fff inset;
      transition: box-shadow 0.3s, text-indent 0.3s;
      &:hover {
        box-shadow: ${({ myTheme }) =>
          `0.25rem 0px ${myTheme.highlightColor} inset`};
        transition: box-shadow 0.3s linear, text-indent 0.3s linear;
        text-indent: 25px;
        cursor: pointer;
      }
    }
  }
`;

const ElementsContainer = ({ item, setPage, myTheme, isOpen, toggle }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  const items = item.listItems.length;
  return (
    <ElemContent
      myTheme={myTheme}
      isOpen={isOpen}
      onMouseLeave={() => setActive(false)}
      active={active}
      items={items}
    >
      <a onClick={() => (isOpen ? toggleActive() : toggleActive() & toggle())}>
        <div className="menuItem">
          <i className="icon">{item.icon}</i>
          <span className="links-name">{item.title}</span>
        </div>
      </a>
      <span className="tooltip">{item.title}</span>
      <ul className={active ? "listSelectedActive" : "listSelected"}>
        {item.listItems?.map((list, idx) => {
          return (
            <li
              className="list-item"
              key={idx}
              onClick={() => setPage(list.link)}
            >
              {list.title}
            </li>
          );
        })}
      </ul>
    </ElemContent>
  );
};

export default ElementsContainer;
