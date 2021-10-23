import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TickerColumnContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  color: white;
  width: ${({ digit }) => (digit == "," ? "0.8rem" : "")};
  .tickerColumn {
    position: absolute;
    height: 1100%;
    bottom: 0;
    span {
      font-size: 4rem;
    }
    .tickerDigit {
    }
  }
  .numberPlaceholder {
    font-size: 4rem;
    visibility: hidden;
  }
`;

const NumberColumn = ({ digit }) => {
  const [position, setPosition] = useState(0);
  const columnContainer = useRef();

  const setColumnToNumber = (digit) => {
    setPosition(
      digit == ","
        ? columnContainer.current.clientHeight * parseInt(10)
        : columnContainer.current.clientHeight * parseInt(digit)
    );
  };

  useEffect(() => setColumnToNumber(digit), [digit]);

  return (
    <TickerColumnContainer ref={columnContainer} digit={digit}>
      <motion.div
        animate={{ bottom: -position, transition: { duration: 0.8 } }}
        className="tickerColumn"
      >
        {[",", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div key={num} className="tickerDigit">
            <span>{num}</span>
          </div>
        ))}
      </motion.div>
      <span className="numberPlaceholder">0</span>
    </TickerColumnContainer>
  );
};

export default NumberColumn;
