import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useTheme } from "../../../utils/functions";
import CustomLoader from "components/CustomLoader";
import { useState, useEffect } from "react";
import Alert from "components/Alert";
import AnimatedButton from "components/AnimatedButton";
import ScoutPlayersList from "./ScoutPlayersList";
import ScoutMap from "./ScoutMap";
import { useDispatch, useSelector } from "react-redux";
import { setResults, setStatus } from "redux/ducks/scoutapi";
import axios from "axios";

const scale = keyframes`
  0%, 100% {transform:  scale(1);}
    25% {transform: scale(0.95);}
    50% {transform:scale(1.05);}
    75% {transform: scale(0.95);}
`;

const ResultsContainer = styled.div`
  .scoutBtn {
    margin-top: 2rem;
    margin-left: 40%;
    padding: 0.4rem 0.8rem;
    color: ${({ myTheme }) => myTheme.textColor};
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 2px;
    background: ${({ myTheme }) => myTheme.boxColor};
    border-radius: 1rem;
    border: none;
    animation: ${scale} 1s infinite;

    &:hover {
      cursor: pointer;
      background: ${({ myTheme }) => myTheme.hoverColor};
      color: ${({ myTheme }) => myTheme.hoverText};
      border-radius: 1rem;
      box-shadow: ${({
        myTheme,
      }) => `0 0 0.15rem ${myTheme.hoverColor}, 0 0 0.25rem ${myTheme.hoverColor}, 0 0 0.33rem ${myTheme.hoverColor},
        0 0 0.5rem ${myTheme.hoverColor}`};
    }
  }
  .optionsContainer {
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ScoutResults = ({ setPage, showmap, setShowmap }) => {
  const myTheme = useTheme();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.scouted);

  const [selNations, setSelNations] = useState([]);
  const [selectedPos, setSelectedPos] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setStatus("loading"));
    const posiciones = state.positions.toString().replace(/,/g, "|");
    async function fetchData() {
      try {
        const res = await axios.get(
          `${window.location.origin}/api/scout?value=${state.value}&positions=${posiciones}&contract=${state.contract}&minage=${state.minAge}&maxage=${state.maxAge}&attributes=${state.attributes}`
        );
        if (res.data.success === true) {
          dispatch(setResults(res.data.data));
          dispatch(setStatus("success"));
        }
      } catch (error) {
        dispatch(setStatus("error"));
      }
    }
    fetchData();
  }, []);

  const setStatus = (status) => {
    switch (status) {
      case "error":
        return (
          <>
            <Alert
              type="error"
              message="Error obteniendo los datos. Por favor inténtelo nuevamente."
            />
            <AnimatedButton
              action={() => setPage("scout")}
              text="SCOUT"
              size="small"
            />
          </>
        );

      case "loading":
        return <CustomLoader />;
      case "success":
        if (state?.data.length === 0) {
          return (
            <>
              <Alert
                type="alert"
                message="No encontramos jugadores con las características seleccionadas.
                  Regrese a SCOUT y seleccione nuevas características para la
                  búsqueda."
              />
              <AnimatedButton
                action={() => setPage("scout")}
                text="SCOUT"
                size="small"
              />
            </>
          );
        } else {
          if (showmap === 0) {
            return (
              <>
                {state.data && state.data.length > 0 && (
                  <ScoutPlayersList
                    data={state.data}
                    setPage={setPage}
                    posiciones={state.positions}
                    selNations={selNations}
                    selectedPos={selectedPos}
                    setSelectedPos={setSelectedPos}
                  />
                )}
              </>
            );
          } else {
            if (showmap === 1) {
              return (
                <>
                  {state.data && state.data.length > 0 && (
                    <ScoutMap
                      data={state.data}
                      setShowmap={setShowmap}
                      selNations={selNations}
                      setSelNations={setSelNations}
                      posiciones={state.positions}
                      selectedPos={selectedPos}
                      setSelectedPos={setSelectedPos}
                    />
                  )}
                </>
              );
            }
          }
        }

        break;
      default:
        "loading";
    }
  };

  if (!state.value || state.positions.length === 0) {
    return (
      <ResultsContainer myTheme={myTheme}>
        <Alert
          type="alert"
          message="No hemos encontrado jugadores. Para encontrar un jugador, vaya a
                SCOUT y llene los campos requeridos para la búsqueda."
        />
        <AnimatedButton
          action={() => setPage("scout")}
          text="SCOUT"
          size="small"
        />
      </ResultsContainer>
    );
  } else {
    return (
      <ResultsContainer myTheme={myTheme}>
        {setStatus(state.status)}
      </ResultsContainer>
    );
  }
};

export default ScoutResults;
