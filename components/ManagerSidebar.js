import styled from "@emotion/styled";
import { useTheme } from "../utils/functions";
import ManSidebarElements from "./ManSidebarElements";
import { BiLogOut, BiSearchAlt } from "react-icons/bi";

const SidebarContainer = styled.aside`
  width: ${({ isOpen }) => (isOpen ? "10rem" : "3rem")};
  transition: all 0.3s ease;
  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5); */
  background: red;
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
    .nav-list {
      margin-top: 2rem;
      li {
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
            color: ${({ myTheme }) => myTheme.textColor};
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
  }
`;

const Sidebar = ({ isOpen, setPage, toggle }) => {
  const myTheme = useTheme();

  return (
    <SidebarContainer isOpen={isOpen} myTheme={myTheme}>
      <div className="sidebar">
        <ul className="nav-list">
          <li onClick={() => (isOpen ? "" : toggle())}>
            <input type="text" placeholder="Search..." />
            <BiSearchAlt className="search" />
            <span className="tooltip">Search</span>
          </li>

          <ManSidebarElements
            toggle={toggle}
            setPage={setPage}
            myTheme={myTheme}
            isOpen={isOpen}
          />
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
