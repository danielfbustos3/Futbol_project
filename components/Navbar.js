import styled from "@emotion/styled";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

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

export const NavLogo = styled.a`
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
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 0;
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

  @media screen and (max-width: 1100px) {
    display: none;
  }
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

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1100px) {
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
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">Fútbol</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="manager">Manager</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="playerperformance">PlayerPerformance</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="scout">Scout</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="tacticanalysis">TacticAnalysis</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="teamwinners">TeamWinners</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink href="/signin">Iniciar Sesión</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
