import styled from "@emotion/styled";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { animateScroll as scroll } from "react-scroll";

const activeSection = "";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  max-width: 500px;
  width: 100%;
  padding: 0 24px;
  max-width: 1800px;
`;

export const NavLogo = styled(LinkS)`
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.1rem;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
    transform: scale(1.05);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    position: absolute;
    top: -15px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavMiniMenu = styled.ul`
  display: none;

  @media screen and (max-width: 1200px) {
    top: 25px;
    margin-right: 40px;
    width: 100%;
    position: center;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const MiniLink = styled.h1`
  width: auto;
  color: #fff;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: clamp(0.76rem, -0.875rem + 6.333vw, 1.3rem);
  /* border-bottom: 3px solid #01bf71; */
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
    transform: scale(1.05);
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
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

  &.hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

const Navbar = ({ toggle }) => {
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

  const [activeSection, setActiveSection] = useState("");
  const linksObj = [
    "perfiles",
    "manager",
    "playerperformance",
    "scout",
    "tacticanalysis",
    "teamwinners",
  ];
  return (
    <IconContext.Provider value={{ color: "fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo href="/" onClick={toggleHome}>
            Fútbol
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {linksObj.map((link, index) => (
              <NavItem key={index}>
                <NavLinks
                  to={link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                  onSetActive={() => setActiveSection(link)}
                  onSetInactive={() => index == 0 && setActiveSection("")}
                >
                  {link}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavMiniMenu>
            <MiniLink>{activeSection}</MiniLink>
          </NavMiniMenu>
          <NavBtn>
            <NavBtnLink href="/signin">Iniciar Sesión</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
