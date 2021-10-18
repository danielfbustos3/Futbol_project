import styled from "@emotion/styled";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import Counter from "./Counter";

const Scout = ({ data, status }) => {
  const [playerValue, setValue] = useState(42);

  const handleParam = () => (e) => {
    const value = e.target.value;
    setValue(value);
  };
  return (
    <div>
      <label className="label">
        Ingrese su presupuesto...
        <input
          type="number"
          required
          placeholder="PlayerMaxValue"
          className="input"
          value={playerValue}
          onChange={handleParam()}
        />
        <div className="highlight" />
      </label>
      <Counter playerValue={playerValue} />
      {playerValue}
    </div>
  );
};

export default Scout;
