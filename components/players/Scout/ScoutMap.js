import styled from "@emotion/styled";
import { useTheme } from "utils/functions";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { useState, useEffect, useRef } from "react";
import AnimatedButton from "components/AnimatedButton";
import NormalButton from "components/NormalButton";

const MapContainer = styled.div`
  width: 100%;
  /* background: blue; */
  .geop {
    position: absolute;
    pointer-events: none;
    background: ${({ myTheme }) => myTheme.textColor};
    color: ${({ myTheme }) => myTheme.backgroundColor};
    padding: ${({ maptooltip }) => (maptooltip === "" ? 0 : "0.2rem 0.5rem")};
    width: ${({ maptooltip }) => (maptooltip === "" ? 0 : "auto")};
    transform: translateY(-50px) translateX(20px);
    border-radius: 10px;
    transition: all 0.1s ease;
  }
  .rsm-svg {
    height: 800px;
    width: 1600px;
  }
  .countryLabel {
    color: ${({ myTheme }) => myTheme.textColor};
    font-size: 1.2rem;
  }
  .searchButton {
    position: absolute;
    right: 100px;
  }
`;

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const ScoutMap = ({
  data,
  setShowmap,
  selNations,
  setSelNations,
  posiciones,
  selectedPos,
  setSelectedPos,
}) => {
  const [maptooltip, setMaptooltip] = useState("");

  const cursorRef = useRef(null);

  const myTheme = useTheme();

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
      );
    });
  }, []);

  const players =
    data &&
    data?.data.filter((element) => element.Positions.includes(selectedPos));

  return (
    <MapContainer myTheme={myTheme} maptooltip={maptooltip}>
      {posiciones && posiciones?.length > 1 ? (
        <div className="optionsContainer">
          <p styles={"margin-right: 1rem;"}>
            {players && `${players?.length} Jugadores Encontrados`}
          </p>
          {posiciones?.map((item, index) => (
            <NormalButton
              key={index}
              action={() => setSelectedPos(item)}
              text={item}
              selected={selectedPos === item ? true : false}
            />
          ))}
          <NormalButton
            action={() => setSelectedPos("")}
            text="Todos"
            selected={selectedPos === "" ? true : false}
          />
        </div>
      ) : (
        <div className="optionsContainer">
          <p styles={"margin-right: 1rem;"}>
            {players && `${players?.length} Jugadores Encontrados`}
          </p>
        </div>
      )}
      <p>
        {
          "Seleccione los paises donde requiera que se encuentre el jugador que busca"
        }
      </p>
      <p className="countryLabel">
        {"Paises seleccionados: "}
        {selNations.toString().replace(/,/g, ", ")}
      </p>
      <div className="searchButton">
        <AnimatedButton
          text={selNations && selNations?.length === 0 ? "ver todos" : "Buscar"}
          action={() => setShowmap(0)}
        />
      </div>
      <div className="geop" ref={cursorRef}>
        {maptooltip}
      </div>
      <ComposableMap data-tip="" projectionConfig={{ scale: 217 }}>
        <Sphere
          stroke={myTheme.lightboxColor}
          strokeWidth={1.5}
          fill={myTheme.boxColor}
        />
        <Graticule stroke={myTheme.lightboxColor} strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const playersincountry =
                players &&
                players.filter((element) =>
                  element.Nationality.includes(geo.properties.NAME)
                );

              const fillcolor = () => {
                if (selNations?.includes(geo.properties.NAME)) {
                  return "#01BF71";
                } else {
                  if (playersincountry && playersincountry?.length > 0) {
                    return "#467E5C";
                  } else {
                    return myTheme.mapCountries;
                  }
                }
              };
              return (
                <>
                  <Geography
                    geography={geo}
                    key={geo.rsmKey}
                    fill={fillcolor()}
                    onMouseEnter={() => {
                      setMaptooltip(
                        `${geo.properties.NAME}: ${
                          playersincountry && playersincountry?.length
                        } jugadores`
                      );
                    }}
                    onMouseLeave={() => {
                      setMaptooltip("");
                    }}
                    onClick={() =>
                      selNations?.includes(geo.properties.NAME)
                        ? setSelNations(
                            selNations &&
                              selNations?.filter(
                                (i) => i != geo.properties.NAME
                              )
                          )
                        : playersincountry &&
                          playersincountry?.length > 0 &&
                          setSelNations(() => [
                            ...selNations,
                            geo.properties.NAME,
                          ])
                    }
                    style={{
                      default: {
                        outline: "none",
                        stroke: `${myTheme.backgroundColor}`,
                        strokeWidth: "0.1",
                      },
                      hover: {
                        outline: "none",
                        fill: "#01BF71",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                </>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </MapContainer>
  );
};

export default ScoutMap;
