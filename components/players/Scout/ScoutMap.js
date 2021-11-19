import styled from "@emotion/styled";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState, useEffect, useRef } from "react";

const MapContainer = styled.div`
  height: 100rem;
  width: 100%;
  /* background: blue; */
  .geop {
    position: absolute;
    pointer-events: none;
    background: green;
    transform: translateY(-60px) translateX(30px);
    transition: all 0.05s ease;
  }
`;

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const ScoutMap = ({ data, setShowmap, selNations, setSelNations }) => {
  const [maptooltip, setMaptooltip] = useState("");
  const cursorRef = useRef(null);

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

  return (
    <MapContainer>
      <div className="geop" ref={cursorRef}>
        {maptooltip}
      </div>
      <ComposableMap data-tip="" projectionConfig={{ scale: 147 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const playersincountry =
                data &&
                data?.data.filter((element) =>
                  element.Nationality.includes(geo.properties.NAME)
                );

              const fillcolor = () => {
                if (selNations?.includes(geo.properties.NAME)) {
                  return "#F4FF74";
                } else {
                  if (playersincountry?.length > 0) {
                    return "#01bf71";
                  } else {
                    return "#DDD";
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
                        `${geo.properties.NAME}: ${playersincountry?.length} jugadores`
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
                        : playersincountry?.length > 0 &&
                          setSelNations(() => [
                            ...selNations,
                            geo.properties.NAME,
                          ])
                    }
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                        fill: "#F53",
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
