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
    zonasCancha: "64, 172, 138",
    checkColor: "#fff",
    lightboxColor: "#2D2D2D",
    radar1: "112, 156, 255",
    radar2: "238, 145, 14",
    mapCountries: "#2d2d2d",
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
          zonasCancha: "64, 172, 138",
          checkColor: "#fff",
          lightboxColor: "#2D2D2D",
          radar1: "112, 156, 255",
          radar2: "238, 145, 14",
          mapCountries: "#2d2d2d",
        });
        break;
      case "light":
        setTheme({
          backgroundColor: "#f5f5f5",
          textColor: "#0d0d0d",
          highlightColor: "#01bf71",
          hoverColor: "#01bf71",
          hoverText: "#0d0d0d",
          boxColor: "#dfdfdf",
          fondoCancha: "#f5f5f5",
          zonasCancha: "64, 172, 138",
          checkColor: "#fff",
          lightboxColor: "#c8c8c8",
          radar1: "112, 156, 255",
          radar2: "238, 145, 14",
          mapCountries: "#c8c8c8",
        });
        break;
      case "dark-green":
        setTheme({
          backgroundColor: "#0f2520",
          textColor: "#fff",
          highlightColor: "#01bf71",
          hoverColor: "#fff",
          hoverText: "#0d0d0d",
          boxColor: "#091714",
          fondoCancha: "#0f2520",
          zonasCancha: "64, 172, 138",
          checkColor: "#01bf71",
          lightboxColor: "#0f2520",
          radar1: "112, 156, 255",
          radar2: "238, 145, 14",
          mapCountries: "#292F21",
        });
        break;
      case "green":
        setTheme({
          backgroundColor: "#01bf71",
          textColor: "#fff",
          highlightColor: "#B2DA0E",
          hoverColor: "#fff",
          hoverText: "#0d0d0d",
          boxColor: "#009357",
          fondoCancha: "#01bf71",
          zonasCancha: "178, 218, 14",
          checkColor: "#01bf71",
          lightboxColor: "#007F4B",
          radar1: "112, 156, 255",
          radar2: "238, 145, 14",
          mapCountries: "#292F21",
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
