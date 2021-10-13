import styled from "@emotion/styled";
import Image from "next/image";
import { FiGrid, FiUser } from "react-icons/fi";
import {
  BiChat,
  BiCart,
  BiHeart,
  BiCog,
  BiLogOut,
  BiSearchAlt,
} from "react-icons/bi";
import { IoAnalytics } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { useTheme } from "../utils/functions";

const SidebarContainer = styled.aside`
  width: ${({ isOpen }) => (isOpen ? "10rem" : "3rem")};
  transition: all 0.3s ease-in-out;
  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5); */
  height: calc(100vh - 3rem);
  position: fixed;
  .sidebar {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.3s ease-in-out;
    background: ${({ myTheme }) => myTheme.backgroundColor};
    padding: 6px 0;
    .input {
      padding: 0 14px;
    }
    .nav-list {
      margin-top: 2rem;
      li {
        position: relative;
        height: 48px;
        width: 100%;
        margin: 0;
        list-style: none;
        line-height: 50px;
        transition: all 0.5s ease;
        padding: ${({ isOpen }) => (isOpen ? "0 30px 0 0" : "0 13px")};
        justify-content: center;
        align-items: center;
        margin-bottom: 3px;

        .tooltip {
          position: absolute;
          left: 3.2rem;
          top: 0;
          transform: translateY(-50%);
          border-radius: 10px;
          height: 37px;
          width: 122px;
          background: ${({ myTheme }) => myTheme.hoverColor};
          line-height: 35px;
          text-align: center;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          transition: 0s;
          opacity: 0;
          pointer-events: none;
        }
        &:hover .tooltip {
          transition: all 0.5s ease;
          opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
          top: 50%;
          z-index: 100;
        }
        .search {
          position: relative;
          left: ${({ isOpen }) => (isOpen ? "20px" : "8px")};
          top: 9px;
          z-index: 99;
          color: ${({ myTheme }) => myTheme.textColor};
          font-size: 35px;
          pointer-events: none;
          cursor: pointer;
        }
        input {
          position: absolute;
          height: 100%;
          width: 75%;
          left: 10px;
          top: 0;
          border-radius: 12px;
          outline: none;
          border: none;
          background: ${({ myTheme }) => myTheme.boxColor};
          padding-left: 50px;
          font-size: 20px;
          color: ${({ myTheme }) => myTheme.textColor};
          cursor: default;

          ::placeholder {
            color: white;
            font-size: 16px;
            cursor: text;
            opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
          }
          &:hover {
            background: ${({ isOpen }) =>
              isOpen
                ? ({ myTheme }) => myTheme.boxColor
                : ({ myTheme }) => myTheme.hoverColor};
          }
        }
        &:hover .search {
          color: ${({ isOpen, myTheme }) =>
            isOpen ? myTheme.textColor : myTheme.hoverText};
        }
        a {
          color: ${({ myTheme }) => myTheme.textColor};
          display: flex;
          height: 100%;
          align-items: center;
          text-decoration: none;
          transition: all 0.4s ease;
          border-radius: ${({ isOpen }) => (isOpen ? "0 25px 25px 0" : "50%")};
          &:hover {
            background: ${({ myTheme }) => myTheme.hoverColor};
            color: ${({ myTheme }) => myTheme.hoverText};
          }
          .icon {
            margin-top: 10px;
            min-width: 50px;
            border-radius: 12px;
            line-height: 50px;
            text-align: center;
          }
          .links-name {
            transition: all 0.2s ease;
            opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
          }
        }
      }
    }
  }
  .profile-content {
    position: absolute;
    color: #fff;
    bottom: 0.5rem;
    left: 0.2rem;
    width: 100%;
    transition: all 0.4s ease;
    .profile {
      position: relative;
      padding: 10px 6px;
      height: 60px;
      .log-out {
        position: absolute;
        left: 88%;
        bottom: 0.4rem;
        transform: translateX(-50%);
        border-radius: 12px;
        font-size: 30px;
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        cursor: pointer;
      }
      .profile-details {
        display: flex;
        align-items: center;
        img {
          height: 45px;
          width: 45px;
          object-fit: cover;
          border-radius: 12px;
        }
        .name-content {
          margin-left: 10px;
          cursor: default;
          opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
          .name {
            font-size: 20px;
            font-weight: 400;
          }
          .info {
            font-size: 16px;
          }
        }
      }
    }
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  const myTheme = useTheme();

  const linksObj = [
    { title: "Dashboard", icon: <FiGrid /> },
    { title: "User", icon: <FiUser /> },
    { title: "Messages", icon: <BiChat /> },
    { title: "Analytics", icon: <IoAnalytics /> },
    { title: "Files", icon: <FaRegFolder /> },
    { title: "Order", icon: <BiCart /> },
    { title: "Saved", icon: <BiHeart /> },
    { title: "Settings", icon: <BiCog /> },
  ];
  return (
    // <SidebarContainer
    //   isOpen={isOpen}
    //   onClick={toggle}
    //   myTheme={myTheme}
    // >
    //   <SidebarWrapper>
    //     <SidebarMenu>
    //       {linksObj.map((link, index) => (
    //         <SidebarLink
    //           to={link}
    //           smooth={true}
    //           duration={500}
    //           spy={true}
    //           exact="true"
    //           offset={-80}
    //           onClick={toggle}
    //           key={index}
    //         >
    //           {link}
    //         </SidebarLink>
    //       ))}
    //     </SidebarMenu>
    //     <SideBtnWrap>
    //       <SidebarRoute href="/signin" onClick={toggle}>
    //         Inicio
    //       </SidebarRoute>
    //     </SideBtnWrap>
    //   </SidebarWrapper>
    // </SidebarContainer>

    <SidebarContainer isOpen={isOpen} myTheme={myTheme}>
      <div className="sidebar">
        <ul className="nav-list">
          <li>
            <input type="text" placeholder="Search..." />
            <BiSearchAlt className="search" />
            <span className="tooltip">Search</span>
          </li>

          {linksObj.map((item, index) => (
            <li key={index}>
              <a href="#">
                <i className="icon">{item.icon}</i>
                <span className="links-name">{item.title}</span>
              </a>
              <span className="tooltip">{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="profile-content">
          <div className="profile">
            <div className="profile-details">
              <img src="4Jugadoreslow.jpg" alt="" />
              <div className="name-content">
                <div className="name">Daniel Bustos</div>
                <div className="info">Web developer</div>
              </div>
            </div>
            <BiLogOut
              className="log-out"
              onClick={() => console.log("logout clicked")}
            />
          </div>
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
