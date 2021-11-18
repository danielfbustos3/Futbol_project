import styled from "@emotion/styled";
import Image from "next/image";
import { useTheme } from "utils/functions";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import AttributesBook from "./AttributesBook";

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ myTheme }) => myTheme.boxColor};
  border-radius: 1rem;
  border: ${({ myTheme, color }) =>
    color === 1
      ? `3px solid rgba(${myTheme.radar1}, 1)`
      : `3px solid rgba(${myTheme.radar2}, 1)`};
  box-shadow: ${({ myTheme, color }) =>
    color === 1
      ? `0 0 12px rgba(${myTheme.radar1}, 0.5)`
      : `0 0 12px rgba(${myTheme.radar2}, 0.5)`};
  overflow: hidden;
  padding: 0.5rem 0.5rem 0.2rem 0.5rem;
  display: grid;
  grid-gap: 0px;
  grid-template-rows: 1fr 1.25fr 0.5fr 2.75fr 0.5fr;
  grid-template-columns: 0.5fr 0.75fr 0.6fr 2.4fr 0.5fr 1.25fr;
  grid-template-areas: "pho pho nva nva nva nva" "pho pho ovr otr otr rat" "pot pot pot pot pot rat" "aat aat aat aat aat rat" "clu clu clu clu sho sho";
  .imageContainer {
    margin-left: auto;
    margin-right: auto;
    grid-area: pho;
    display: grid;
    aspect-ratio: 1;
    padding: 0.8rem 0.4rem 0 0.4rem;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
    overflow: hidden;
    border-radius: 1rem;
    .playerImage {
      height: 100px;
      width: 100px;
      filter: drop-shadow(0em 0.3em 0.4em rgba(0, 0, 0, 0.9));
    }
  }
  .nameValue {
    grid-area: nva;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 0.5rem;
    .name {
      font-family: "Bebas Neue", cursive;
      letter-spacing: 0.1rem;
      font-size: 1.2rem;
      filter: drop-shadow(0em 0.05em 0.04em rgba(0, 0, 0, 0.8));
    }
    .value {
      font-family: "Bebas Neue", cursive;
      letter-spacing: 0.1rem;
      color: ${({ data, dataCompare, myTheme }) =>
        data.ValueEUR < dataCompare.ValueEUR ? "#01bf71" : myTheme.textColor};
      font-size: 1.5rem;
      filter: drop-shadow(0em 0.05em 0.04em rgba(0, 0, 0, 0.7));
    }
  }
  .overall {
    grid-area: ovr;
    display: flex;
    align-items: center;
    font-family: "Bebas Neue", cursive;
    margin-left: 0.3rem;
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: ${({ data, dataCompare, myTheme }) =>
      data.Overall > dataCompare.Overall ? "#01bf71" : myTheme.textColor};
    filter: drop-shadow(0em 0.05em 0.04em rgba(0, 0, 0, 0.5));
  }
  .otherInfo {
    position: relative;
    grid-area: otr;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    .natAge {
      display: flex;
      flex-direction: column;
    }
    .positions {
      position: absolute;
      bottom: 0;
      right: 1rem;
      vertical-align: bottom;
      font-family: "Bebas Neue", cursive;
      font-size: 1rem;
    }
  }
  .potPos {
    grid-area: pot;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .potencial {
      align-items: center;
      display: flex;
      padding-left: 2.3rem;
      font-size: 0.8rem;
      .valorPot {
        margin-left: 0.5rem;
        font-family: "Bebas Neue", cursive;
        font-size: 1rem;
        color: ${({ data, dataCompare, myTheme }) =>
          data.Potential > dataCompare.Potential
            ? "#01bf71"
            : myTheme.textColor};
      }
    }
    .mejPos {
      align-items: center;
      display: flex;
      padding-left: 2rem;
      font-size: 0.8rem;
      .mejorPosicion {
        margin-left: 0.2rem;
        margin-right: 1rem;
        font-family: "Bebas Neue", cursive;
        font-size: 1rem;
      }
    }
  }
  .radAtr {
    grid-area: rat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
  }
  .allAtr {
    grid-area: aat;
    padding: 0.2rem 0.5rem 0.3rem 0;
    display: grid;
    grid-template-columns: 0.15fr 2fr 0.15fr;
    align-items: center;
    .paging {
      background: ${({ myTheme }) => myTheme.boxColor};
      color: ${({ myTheme }) => myTheme.lightboxColor};
      cursor: pointer;
      font-size: 5rem;
      border: none;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &:hover {
        color: ${({ myTheme }) => myTheme.textColor};
        background: ${({ myTheme }) => myTheme.lightboxColor};
      }
    }
  }
  .club {
    margin-left: 1rem;
    grid-area: clu;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    div {
      display: flex;
      align-items: center;
      p {
        margin: 0 0.3rem;
        font-family: "Bebas Neue", cursive;
        font-size: 0.9rem;
        letter-spacing: 0.05rem;
      }
    }
    /* background: lightblue; */
  }
  .showMore {
    grid-area: sho;
    /* background: blue; */
  }
`;

const RadarRows = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.8fr 1fr;
  p {
    font-family: "Bebas Neue", cursive;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
  }
  .rlabel {
    margin: auto;
  }
  .separate {
    filter: drop-shadow(0em 0.05em 0.04em rgba(0, 0, 0, 0.5));
    color: ${({ myTheme }) => myTheme.lightboxColor};
  }
  .rvalue {
    filter: drop-shadow(0em 0.05em 0.04em rgba(0, 0, 0, 0.3));
    color: ${({ data, compare, myTheme }) =>
      compare
        ? data === compare
          ? myTheme.textColor
          : data > compare
          ? "#01bf71"
          : "#FF6C5C"
        : myTheme.textColor};
  }
  .diffValue {
    /* margin-left: 0.2rem; */
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    line-height: 1.4rem;
  }
`;

const PlayerBasicCard = ({ data, dataCompare, compareMode, color }) => {
  const radarAtrObj = [
    {
      title: "Ritmo",
      label: "RIT",
      value: data?.PaceTotal,
      compare: dataCompare?.PaceTotal,
    },
    {
      title: "Regate",
      label: "REG",
      value: data?.DribblingTotal,
      compare: dataCompare?.DribblingTotal,
    },
    {
      title: "Tiro",
      label: "TIR",
      value: data?.ShootingTotal,
      compare: dataCompare?.ShootingTotal,
    },
    {
      title: "Pases",
      label: "PAS",
      value: data?.PassingTotal,
      compare: dataCompare?.PassingTotal,
    },
    {
      title: "Defensa",
      label: "DEF",
      value: data?.DefendingTotal,
      compare: dataCompare?.DefendingTotal,
    },
    {
      title: "Físico",
      label: "FIS",
      value: data?.PhysicalityTotal,
      compare: dataCompare?.PhysicalityTotal,
    },
  ];

  const myTheme = useTheme();

  const [attrPage, setAttrPage] = useState(0);

  useEffect(() => {
    setAttrPage(0);
  }, [data]);

  return (
    <CardWrapper
      myTheme={myTheme}
      data={data}
      dataCompare={dataCompare}
      color={color}
    >
      <div className="imageContainer">
        <Image
          className="playerImage"
          src={
            data
              ? data.PhotoUrl
              : "https://cdn.sofifa.com/players/259/455/22_60.png"
          }
          height={50}
          width={50}
          quality={100}
        />
      </div>
      {data && (
        <>
          <div className="nameValue">
            <p className="name">
              {compareMode === 2 ? data?.Name : data?.FullName}
            </p>
            <p className="value">
              {`€${data.ValueEUR.toString().replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )}`}
            </p>
          </div>
          <p className="overall">{data?.Overall}</p>
          <div className="otherInfo">
            <div className="natAge">
              <p>{data?.Nationality}</p>
              <p>{`${data?.Age} años`}</p>
            </div>
            <p className="positions">{data?.Positions.replace(/,/g, ", ")}</p>
          </div>
          <div className="potPos">
            <div className="potencial">
              Potencial:
              <p className="valorPot">{data?.Potential}</p>
            </div>
            <div className="mejPos">
              Preferida:
              <p className="mejorPosicion">{data?.BestPosition}</p>
            </div>
          </div>
          <div className="radAtr">
            {radarAtrObj.map((item, index) => (
              <RadarRows
                key={index}
                data={item.value}
                compare={item.compare}
                myTheme={myTheme}
              >
                <p className="rlabel">{item.label}</p>
                <p className="separate">|</p>
                <p className="rvalue">{item.value}</p>
                {item.compare && (
                  <p className="diffValue">
                    {item.value === item.compare
                      ? "\u00A0"
                      : item.value > item.compare
                      ? `+${item.value - item.compare}`
                      : `-${item.compare - item.value}`}
                  </p>
                )}
              </RadarRows>
            ))}
          </div>
          <div className="allAtr">
            <div
              className="paging"
              onClick={() => attrPage > 0 && setAttrPage(attrPage - 1)}
            >
              <BiChevronLeft />
            </div>
            <AttributesBook
              data2={dataCompare}
              data={data}
              attrPage={attrPage}
              color={color}
            />
            <div
              className="paging"
              onClick={() => attrPage < 4 && setAttrPage(attrPage + 1)}
            >
              <BiChevronRight />
            </div>
          </div>
          <div className="club">
            <div>
              Club: <p>{data.Club}</p>
            </div>
            <div>
              hasta: <p>{data.ContractUntil}</p>
            </div>
          </div>
          <div className="showMore"></div>
        </>
      )}
    </CardWrapper>
  );
};

export default PlayerBasicCard;
