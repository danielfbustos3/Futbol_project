import styled from "@emotion/styled";
import NumberColumn from "./NumberColumn";

const TickerView = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
`;

function formatForDisplay(number = 0) {
  return parseFloat(Math.max(number, 0)).toFixed().split("").reverse();
}

const AnimatingNumber = ({ value }) => {
  const numArray = formatForDisplay(value);

  for (var i = 3; i < numArray?.length; i += 4) {
    numArray.splice(i, 0, ",");
  }

  return (
    <TickerView>
      {numArray.map((number, index) => (
        <NumberColumn key={index} digit={number} />
      ))}
    </TickerView>
  );
};

export default AnimatingNumber;
