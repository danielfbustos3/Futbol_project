import styled from "@emotion/styled";
import { useTheme } from "utils/functions";
import { motion } from "framer-motion";
import { BiCheckCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setPositions } from "redux/ducks/scoutapi";

const PosContent = styled.div`
  display: flex;
  position: relative;
  top: 30%;
  left: -62.5%;
  width: 225%;
  height: 40%;
  transform: rotate(90deg);
  transition: 0.2s;
  align-items: center;
  justify-content: center;

  .porteros {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .defensas {
    width: 100%;
    display: grid;
    gap: 1.4rem;
    grid-template-areas: "LWB LB CB1 CB2 RB RWB";
    grid-template-rows: 3rem;
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
    transition: all 0.5s;
  }
  .medioCampos {
    width: 95%;
    display: grid;
    gap: 0.5rem;
    grid-template-areas: ". . . . CAM . . . ." ". LM . CM1 . CM2 . RM ." ". . . . CDM . . . .";
    grid-template-rows: repeat(3, 1.5rem);
    grid-template-columns: repeat(9, 1fr);
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
    transition: all 0.5s;
  }
  .atacantes {
    width: 100%;
    display: grid;
    gap: 3rem;
    grid-template-areas: "LW . ST . RW" "LW . CF . RW";
    grid-template-rows: 1rem;
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
    transition: all 0.5s;
  }
`;
const CircPosition = styled.div`
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background: ${({ myTheme }) => myTheme.hoverColor};
    color: ${({ myTheme }) => myTheme.hoverText};
    box-shadow: 0 0 0.3rem 0.1rem white inset,
      -0.1rem 0.1rem 0.3rem 0.1rem black;
    margin-bottom: ${({ position }) =>
      (position == "LB" ||
        position == "RB" ||
        position == "LW" ||
        position == "RW" ||
        position == "LM" ||
        position == "RM") &&
      "1rem"};
    margin-bottom: ${({ position }) =>
      (position == "LWB" || position == "RWB") && "3rem"};
  }
  &:hover .circle {
    color: ${({ myTheme }) => myTheme.hoverText};
    transform: scale(1.3) rotate(360deg);
    box-shadow: ${({ myTheme }) =>
      `0 0 0.3rem 0.1rem ${myTheme.hoverColor}, 0 0 0.2rem ${myTheme.hoverText} inset`};
    transition: 0.2s;
    cursor: pointer;
  }
  .tooltip {
    position: absolute;
    left: 105%;
    top: 80%;
    transform: translateY(-50%);
    border-radius: 10px;
    height: 1.5rem;
    width: 9rem;
    background: ${({ myTheme }) => myTheme.hoverColor};
    color: ${({ myTheme }) => myTheme.hoverText};
    line-height: 35px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
  }
  &:hover .tooltip {
    position: absolute;
    left: 105%;
    top: 40%;
    width: 9rem;
    transition: all 0.3s ease;
    opacity: 1;
    z-index: 100;
  }
`;

const CircChecked = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: ${({ myTheme }) => myTheme.hoverColor};
  color: ${({ myTheme }) => myTheme.checkColor};
  box-shadow: ${({ myTheme }) =>
    `0 0 0.3rem 0.1rem ${myTheme.hoverColor}, 0 0 0.2rem ${myTheme.hoverText} inset`};
  cursor: default;
  margin-bottom: ${({ position }) =>
    (position == "LB" ||
      position == "RB" ||
      position == "LW" ||
      position == "RW" ||
      position == "LM" ||
      position == "RM") &&
    "1rem"};
  margin-bottom: ${({ position }) =>
    (position == "LWB" || position == "RWB") && "3rem"};
  .check {
    font-size: 1.5rem;
  }
`;

const porteriaObj = {
  position: "GK",
  descriptionEng: "GoalKeeper",
  descriptionEsp: "Portero",
};

const defensaObj = [
  {
    position: "LWB",
    descriptionEng: "Left Wing Back",
    descriptionEsp: "Carrilero Izquierdo",
  },
  {
    position: "LB",
    descriptionEng: "Left Back",
    descriptionEsp: "Lateral Izquierdo",
  },
  {
    position: "CB1",
    descriptionEng: "Center Back",
    descriptionEsp: "Defensa Central",
  },
  {
    position: "CB2",
    descriptionEng: "Center Back",
    descriptionEsp: "Defensa Central",
  },
  {
    position: "RB",
    descriptionEng: "Right Back",
    descriptionEsp: "Lateral Derecho",
  },
  {
    position: "RWB",
    descriptionEng: "Right Wing Back",
    descriptionEsp: "Carrilero Derecho",
  },
];
const medioCampoObj = [
  {
    position: "LM",
    descriptionEng: "Left Midfielder",
    descriptionEsp: "Medio Izquierdo",
  },
  {
    position: "CM1",
    descriptionEng: "Center Midfielder",
    descriptionEsp: "Medio Centro",
  },
  {
    position: "CM2",
    descriptionEng: "Center Midfielder",
    descriptionEsp: "Medio Centro",
  },
  {
    position: "CAM",
    descriptionEng: "C Attacking Midfielder",
    descriptionEsp: "Medio Centro Ofensivo",
  },
  {
    position: "CDM",
    descriptionEng: "C Defensive Midfielder",
    descriptionEsp: "Medio Centro Defensivo",
  },
  {
    position: "RM",
    descriptionEng: "Right Midfielder",
    descriptionEsp: "Medio Derecho",
  },
];
const ataqueObj = [
  {
    position: "LW",
    descriptionEng: "Left Winger",
    descriptionEsp: "Extremo Izquierdo",
  },
  {
    position: "ST",
    descriptionEng: "Striker",
    descriptionEsp: "Delantero Centro",
  },
  {
    position: "CF",
    descriptionEng: "Center Forward",
    descriptionEsp: "Media Punta",
  },
  {
    position: "RW",
    descriptionEng: "Right Winger",
    descriptionEsp: "Extremo Derecho",
  },
];

const Positions = ({ section }) => {
  const myTheme = useTheme();
  const dispatch = useDispatch();

  const myPositions = useSelector((state) => state.scouted.positions);

  switch (section) {
    case "porteria":
      return (
        <PosContent myTheme={myTheme}>
          <motion.div
            className="porteros"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
          >
            {myPositions?.includes(porteriaObj.position) ? (
              <CircChecked
                myTheme={myTheme}
                onClick={() =>
                  dispatch(
                    setPositions(
                      myPositions.filter((i) => i !== porteriaObj.position)
                    )
                  )
                }
              >
                <BiCheckCircle className="check" />
              </CircChecked>
            ) : (
              <CircPosition
                myTheme={myTheme}
                onClick={() =>
                  dispatch(setPositions([...myPositions, porteriaObj.position]))
                }
              >
                <div className="circle">{porteriaObj.position}</div>
                <span className="tooltip">{porteriaObj.descriptionEsp}</span>
              </CircPosition>
            )}
          </motion.div>
        </PosContent>
      );

    case "defensa":
      return (
        <PosContent myTheme={myTheme}>
          <motion.div
            className="defensas"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
          >
            {defensaObj.map((item, index) => {
              const pos = item.descriptionEng
                .split(" ")
                .map((word) => word[0])
                .join("");
              if (myPositions?.includes(pos)) {
                return (
                  <CircChecked
                    key={index}
                    style={{ gridArea: item.position }}
                    position={item.position}
                    myTheme={myTheme}
                    onClick={() =>
                      dispatch(
                        setPositions(myPositions.filter((i) => i !== pos))
                      )
                    }
                  >
                    <BiCheckCircle className="check" />
                  </CircChecked>
                );
              } else {
                return (
                  <CircPosition
                    key={index}
                    style={{ gridArea: item.position }}
                    position={item.position}
                    myTheme={myTheme}
                    onClick={() =>
                      dispatch(setPositions([...myPositions, pos]))
                    }
                  >
                    <div className="circle">{pos}</div>
                    <span className="tooltip">{item.descriptionEsp}</span>
                  </CircPosition>
                );
              }
            })}
          </motion.div>
        </PosContent>
      );
    case "medioCampo":
      return (
        <PosContent myTheme={myTheme}>
          <motion.div
            className="medioCampos"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
          >
            {medioCampoObj.map((item, index) => {
              const pos = item.descriptionEng
                .split(" ")
                .map((word) => word[0])
                .join("");
              if (myPositions?.includes(pos)) {
                return (
                  <CircChecked
                    key={index}
                    style={{ gridArea: item.position }}
                    position={item.position}
                    myTheme={myTheme}
                    onClick={() =>
                      dispatch(
                        setPositions(myPositions.filter((i) => i !== pos))
                      )
                    }
                  >
                    <BiCheckCircle className="check" />
                  </CircChecked>
                );
              } else {
                return (
                  <CircPosition
                    key={index}
                    style={{ gridArea: item.position }}
                    position={item.position}
                    myTheme={myTheme}
                    onClick={() =>
                      dispatch(setPositions([...myPositions, pos]))
                    }
                  >
                    <div className="circle">{pos}</div>
                    <span className="tooltip">{item.descriptionEsp}</span>
                  </CircPosition>
                );
              }
            })}
          </motion.div>
        </PosContent>
      );
    case "ataque":
      return (
        <PosContent myTheme={myTheme}>
          <motion.div
            className="atacantes"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
          >
            {ataqueObj.map((item, index) => {
              if (myPositions?.includes(item.position)) {
                return (
                  <CircChecked
                    key={index}
                    style={{ gridArea: item.position }}
                    position={item.position}
                    myTheme={myTheme}
                    onClick={() =>
                      dispatch(
                        setPositions(
                          myPositions.filter((i) => i !== item.position)
                        )
                      )
                    }
                  >
                    <BiCheckCircle className="check" />
                  </CircChecked>
                );
              } else {
                return (
                  <CircPosition
                    key={index}
                    style={{ gridArea: item.position }}
                    position={item.position}
                    myTheme={myTheme}
                    onClick={() =>
                      dispatch(setPositions([...myPositions, item.position]))
                    }
                  >
                    <div className="circle">{item.position}</div>
                    <span className="tooltip">{item.descriptionEsp}</span>
                  </CircPosition>
                );
              }
            })}
          </motion.div>
        </PosContent>
      );
  }
};

export default Positions;
