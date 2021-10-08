import styled from "@emotion/styled";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { splitCamelCaseToString } from "utils/functions";
import { useTheme } from "../utils/functions";

const Nav = styled.nav`
  background: ${({ backgroundColor }) => backgroundColor};
  border-bottom: ${({ scrollNav }) =>
    scrollNav
      ? 0
      : ({ backgroundColor }) =>
          backgroundColor == "#01bf71"
            ? "1px solid #fff"
            : "1px solid #01bf71"};

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
  z-index: 10;
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
      color: ${({ backgroundColor }) =>
        backgroundColor == "#f5f5f5" ? "#000" : "#fff"};
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
          color: ${({ backgroundColor }) =>
            backgroundColor == "#01bf71" ? "#000" : "#01bf71"};
        }
      }
      .nav-logo {
        font-family: "Bebas Neue", cursive;
        letter-spacing: 0.1rem;
        justify-self: flex-start;
        cursor: pointer;
        font-size: 1.7rem;
        display: flex;
        align-items: center;
        margin-left: 0px;
        font-weight: bold;
        text-decoration: none;
        padding: 10px;
        &:hover {
          transition: all 0.2s ease-in-out;
          color: ${({ backgroundColor }) =>
            backgroundColor == "#01bf71" ? "#000" : "#01bf71"};
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
        background: #01bf71;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
          transition: all 0.2s ease-in-out;
          background: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const ManagerNavbar = ({ toggle, setPage }) => {
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
  const backgroundColor = useTheme();

  const linksObj = ["AllPlayers", "Clubs", "Nationality", "Position"];

  return (
    <Nav scrollNav={scrollNav} backgroundColor={backgroundColor}>
      <div className="nav-container">
        <ul>
          <div className="mobile-icon" onClick={toggle}>
            <FaBars />
          </div>
          <LinkS className="nav-logo" to="/" onClick={toggleHome}>
            Fútbol
          </LinkS>
        </ul>
        <ul className="nav-menu">
          {linksObj.map((link, index) => (
            <span className="nav-btn-link" key={index} setPage={link}>
              {splitCamelCaseToString(link)}
            </span>
          ))}
        </ul>
      </div>
    </Nav>
  );
};

export default ManagerNavbar;
