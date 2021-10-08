import React, { useContext, useState } from "react";

export const splitCamelCaseToString = (s) => {
  return s
    .split(/(?=[A-Z])/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
};

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export const BackgroundTheme = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#0d0d0d");
  console.log(backgroundColor);

  function setColor(Color) {
    console.log("Background color set to:");
    console.log(Color);
    switch (Color) {
      case "dark":
        setBackgroundColor("#0d0d0d");
        break;
      case "light":
        setBackgroundColor("#f5f5f5");
        break;
      case "dark-green":
        setBackgroundColor("#0f2520");
        break;
      case "green":
        setBackgroundColor("#01bf71");
        break;
      default:
        setBackgroundColor("#0d0d0d");
    }
  }
  return (
    <ThemeContext.Provider value={backgroundColor}>
      <ThemeUpdateContext.Provider value={setColor}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
