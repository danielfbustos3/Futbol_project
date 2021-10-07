import styled from "@emotion/styled";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

const SidebarContainer = styled.aside`
  position: fixed;
  height: 100vh;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  width: 15rem;
  margin-left: -15rem;
  transition: all 0.2s ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SidebarRoute = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
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
    color: #010606;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  const linksObj = [
    "manager",
    "playerperformance",
    "scout",
    "tacticanalysis",
    "teamwinners",
  ];
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {linksObj.map((link, index) => (
            <SidebarLink
              to={link}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggle}
              key={index}
            >
              {link}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/signin" onClick={toggle}>
            Inicio
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
