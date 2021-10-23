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

export const ThemeProvider = ({ children }) => {
  const [myTheme, setTheme] = useState({
    backgroundColor: "#0d0d0d",
    textColor: "#fff",
    highlightColor: "#01bf71",
    hoverColor: "#01bf71",
    hoverText: "#0d0d0d",
    boxColor: "#1d1d1d",
    fondoCancha: "#0d0d0d",
  });

  function setColor(Color) {
    switch (Color) {
      case "dark":
        setTheme({
          backgroundColor: "#0d0d0d",
          textColor: "#fff",
          highlightColor: "#01bf71",
          hoverColor: "#01bf71",
          hoverText: "#0d0d0d",
          boxColor: "#1d1d1d",
          fondoCancha: "#0d0d0d",
        });
        break;
      case "light":
        setTheme({
          backgroundColor: "#f5f5f5",
          textColor: "#0d0d0d",
          highlightColor: "#01bf71",
          hoverColor: "#fff",
          hoverText: "#0d0d0d",
          boxColor: "gray",
          fondoCancha: "#0d0d0d",
        });
        break;
      case "dark-green":
        setTheme({
          backgroundColor: "#0f2520",
          textColor: "#fff",
          highlightColor: "#01bf71",
          hoverColor: "#fff",
          hoverText: "#0d0d0d",
          boxColor: "gray",
          fondoCancha: "#0d0d0d",
        });
        break;
      case "green":
        setTheme({
          backgroundColor: "#01bf71",
          textColor: "#fff",
          highlightColor: "#01bf71",
          hoverColor: "#fff",
          hoverText: "#0d0d0d",
          boxColor: "gray",
          fondoCancha: "#0d0d0d",
        });
        break;
      default:
        "dark";
    }
  }
  return (
    <ThemeContext.Provider value={myTheme}>
      <ThemeUpdateContext.Provider value={setColor}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
