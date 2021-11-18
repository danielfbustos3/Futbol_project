import styled from "@emotion/styled";
import { useTheme } from "utils/functions";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const BookContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
  overflow: hidden;
  border-radius: 1rem;
  .attributesPage {
    position: absolute;
    left: 0;
    padding: 0.2rem 0;
    height: 100%;
    width: 500%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-auto-flow: column;
    .attribute {
      margin: auto;
      display: flex;
      width: 6.5rem;
      align-items: center;
      p {
        width: 5rem;
        display: flex;
        justify-content: center;
        font-size: 0.7rem;
        text-transform: uppercase;
      }
    }
  }
`;

const Number = styled.div`
  margin-left: 0.3rem;
  margin-bottom: -0.3rem;
  font-family: "Bebas Neue", cursive;
  font-size: 1.1rem;
  color: ${({ data, compare, myTheme }) =>
    data > compare ? "#01bf71" : myTheme.textColor};
`;

const Slider = styled.div`
  height: 0.5rem;
  width: 5rem;
  position: relative;
  border-radius: 0.25rem;
  background: ${({ myTheme }) => myTheme.boxColor};
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
  overflow: hidden;
  &::after {
    content: "";
    border-radius: 0.25rem;
    position: absolute;
    left: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
    height: 0.2rem;
    width: ${({ percent }) => `calc(0.${percent} * 5rem)`};
    background: ${({ color, myTheme }) =>
      color === 1
        ? `rgba(${myTheme.radar1}, 1)`
        : `rgba(${myTheme.radar2}, 1)`};
    box-shadow: ${({ myTheme, color }) =>
      color === 1
        ? `0 0 5px rgba(${myTheme.radar1}, 0.8)`
        : `0 0 5px rgba(${myTheme.radar2}, 0.8)`};
  }
`;

const AttributesBook = ({ data, data2, color, attrPage }) => {
  const attrObj = [
    {
      label: "Aceleración",
      value: data?.Acceleration,
      compare: data2?.Acceleration,
    },
    {
      label: "Velocidad",
      value: data?.SprintSpeed,
      compare: data2?.SprintSpeed,
    },
    {
      label: "Energía",
      value: data?.Stamina,
      compare: data2?.Stamina,
    },
    {
      label: "Fuerza",
      value: data?.Strength,
      compare: data2?.Strength,
    },
    {
      label: "Balance",
      value: data?.Balance,
      compare: data2?.Balance,
    },
    {
      label: "Salto",
      value: data?.Jumping,
      compare: data2?.Jumping,
    },
    {
      label: "Posicionamiento",
      value: data?.Positioning,
      compare: data2?.Positioning,
    },
    {
      label: "Definición",
      value: data?.Finishing,
      compare: data2?.Finishing,
    },
    {
      label: "Potencia Tiro",
      value: data?.ShotPower,
      compare: data2?.ShotPower,
    },
    {
      label: "Tiro Lejano",
      value: data?.LongShots,
      compare: data2?.LongShots,
    },
    {
      label: "Voleas",
      value: data?.Volleys,
      compare: data2?.Volleys,
    },
    {
      label: "Penales",
      value: data?.Volleys,
      compare: data2?.Volleys,
    },
    {
      label: "Agilidad",
      value: data?.Agility,
      compare: data2?.Agility,
    },
    {
      label: "Balance",
      value: data?.Balance,
      compare: data2?.Balance,
    },
    {
      label: "Reacción",
      value: data?.Reactions,
      compare: data2?.Reactions,
    },
    {
      label: "Control Balón",
      value: data?.BallControl,
      compare: data2?.BallControl,
    },
    {
      label: "Regate",
      value: data?.Dribbling,
      compare: data2?.Dribbling,
    },
    {
      label: "Visión",
      value: data?.Vision,
      compare: data2?.Vision,
    },
    {
      label: "Centros",
      value: data?.Crossing,
      compare: data2?.Crossing,
    },
    {
      label: "Tiros Libres",
      value: data?.FKAccuracy,
      compare: data2?.FKAccuracy,
    },
    {
      label: "Pase Corto",
      value: data?.ShortPassing,
      compare: data2?.ShortPassing,
    },
    {
      label: "Pase Largo",
      value: data?.LongPassing,
      compare: data2?.LongPassing,
    },
    {
      label: "Curva",
      value: data?.Curve,
      compare: data2?.Curve,
    },
    {
      label: "Intercepciones",
      value: data?.Interceptions,
      compare: data2?.Interceptions,
    },
    {
      label: "Cabezazo",
      value: data?.HeadingAccuracy,
      compare: data2?.HeadingAccuracy,
    },
    {
      label: "Marcaje",
      value: data?.Marking,
      compare: data2?.Marking,
    },
    {
      label: "Entrada Limpia",
      value: data?.StandingTackle,
      compare: data2?.StandingTackle,
    },
    {
      label: "Barrida",
      value: data?.SlidingTackle,
      compare: data2?.SlidingTackle,
    },
    {
      label: "Compostura",
      value: data?.Composure,
      compare: data2?.Composure,
    },
    {
      label: "Agresión",
      value: data?.Aggression,
      compare: data2?.Aggression,
    },
  ];

  const myTheme = useTheme();

  const [position, setPosition] = useState(0);
  const widthContainer = useRef();

  useEffect(() => {
    setPosition(widthContainer.current.clientWidth * parseInt(attrPage));
  }, [attrPage]);

  return (
    <BookContainer ref={widthContainer} myTheme={myTheme} color={color}>
      <motion.div
        animate={{ left: -position, transition: { duration: 0.8 } }}
        className="attributesPage"
      >
        {attrObj.map((item, index) => (
          <div className="attribute" key={index}>
            <div>
              <p>{item.label}</p>
              <Slider color={color} myTheme={myTheme} percent={item.value} />
            </div>
            <Number data={item.value} compare={item.compare} myTheme={myTheme}>
              {item.value}
            </Number>
          </div>
        ))}
      </motion.div>
    </BookContainer>
  );
};

export default AttributesBook;
