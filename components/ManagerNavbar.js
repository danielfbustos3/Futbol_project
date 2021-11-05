import styled from "@emotion/styled";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { splitCamelCaseToString } from "utils/functions";
import { useTheme } from "../utils/functions";

const Nav = styled.nav`
  background: ${({ myTheme }) => myTheme.backgroundColor};
  border-bottom: ${({ scrollNav, myTheme }) =>
    scrollNav ? 0 : "1px solid " + myTheme.highlightColor};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 1px 4px rgba(0, 0, 0, 1)" : 0};
  overflow: visible;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 12;
  transition: 0.2s all ease;
  .nav-container {
    display: grid;
    grid-template-columns: 1fr 65%;
    width: 100%;
    height: 100%;
    padding: 0 1.4rem 0 1rem;
    ul {
      display: flex;
      align-items: center;
      color: ${({ myTheme }) => myTheme.textColor};
      list-style: none;
      text-align: center;

      .mobile-icon {
        padding: 10px 22px;

        display: flex;
        cursor: pointer;
        align-items: center;
        margin-right: 1rem;
        font-size: 1.8rem;
        cursor: pointer;
        padding: 0.2rem;
        &:hover {
          transition: all 0.2s ease-in-out;
          color: ${({ myTheme }) => myTheme.hoverColor};
        }
      }
      .nav-logo {
        margin-left: 3rem;
        font-family: "Bebas Neue", cursive;
        letter-spacing: 0.15rem;
        justify-self: flex-start;
        cursor: pointer;
        font-size: 1.7rem;
        display: flex;
        align-items: center;
        font-weight: bold;
        text-decoration: none;
        &:hover {
          transition: all 0.2s ease-in-out;
          color: ${({ myTheme }) => myTheme.hoverColor};
          transform: scale(1.05);
        }
      }
    }
    .nav-menu {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      align-items: center;
      list-style: none;
      text-align: center;
      .nav-btn-link {
        border-radius: 50px;
        background: ${({ myTheme }) => myTheme.backgroundColor};
        white-space: nowrap;
        padding: 10px 22px;
        color: ${({ myTheme }) => myTheme.textColor};
        font-size: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
          transition: all 0.2s ease-in-out;
          box-shadow: ${({ myTheme }) => `0 1px 4px ${myTheme.textColor}`};
          color: ${({ myTheme }) => myTheme.hoverText};
          background: ${({ myTheme }) => myTheme.hoverColor};
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const ManagerNavbar = ({ toggleKeepOpen, setPage, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const myTheme = useTheme();

  const linksObj = ["AllPlayers", "Clubs", "Nationality", "Position"];

  return (
    <Nav scrollNav={scrollNav} myTheme={myTheme}>
      <div className="nav-container">
        <ul>
          <div
            className="mobile-icon"
            onClick={() => {
              toggleKeepOpen();
              toggle();
            }}
          >
            <FaBars />
          </div>
          <LinkS className="nav-logo" to="/" onClick={() => toggleHome()}>
            Fútbol
          </LinkS>
        </ul>
        <ul className="nav-menu">
          {linksObj.map((link, index) => (
            <span
              className="nav-btn-link"
              key={index}
              onClick={() => setPage(link.toLowerCase())}
            >
              {splitCamelCaseToString(link)}
            </span>
          ))}
        </ul>
      </div>
    </Nav>
  );
};

export default ManagerNavbar;
