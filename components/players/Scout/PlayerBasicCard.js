import styled from "@emotion/styled";
import Image from "next/image";
import { useTheme } from "utils/functions";
import { useEffect } from "react";
import { useTransition, animated, useSpringRef } from "react-spring";

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
  padding: 0.5rem;
  display: grid;
  grid-gap: 0px;
  grid-template-rows: 1fr 1.25fr 0.5fr 2.75fr 0.5fr;
  grid-template-columns: 0.5fr 0.75fr 0.5fr 2.5fr 0.5fr 1.25fr;
  grid-template-areas: "pho pho nva nva nva nva" "pho pho ovr otr otr rat" "pot pot pot pot pot rat" "aat aat aat aat aat rat" "clu clu clu clu sho sho";
  .imageContainer {
    margin-left: auto;
    margin-right: auto;
    grid-area: pho;
    display: grid;
    aspect-ratio: 1;
    padding: 0.5rem 0.25rem 0 0.25rem;
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
    align-items: center;
    justify-content: space-between;
    /* padding: 0 1rem; */
    p {
      font-family: "Bebas Neue", cursive;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
    }
    .rlabels {
    }
    .separators {
      .separate {
        filter: drop-shadow(0em 0.05em 0.04em rgba(0, 0, 0, 0.5));
        color: ${({ myTheme }) => myTheme.lightboxColor};
      }
    }
    .rvalues {
      filter: drop-shadow(0em 0.05em 0.04em rgba(0, 0, 0, 0.3));
      .pace {
        color: ${({ data, dataCompare, myTheme }) =>
          data.PaceTotal > dataCompare.PaceTotal
            ? "#01bf71"
            : myTheme.textColor};
      }
      .dribbling {
        color: ${({ data, dataCompare, myTheme }) =>
          data.DribblingTotal > dataCompare.DribblingTotal
            ? "#01bf71"
            : myTheme.textColor};
      }
      .shooting {
        color: ${({ data, dataCompare, myTheme }) =>
          data.ShootingTotal > dataCompare.ShootingTotal
            ? "#01bf71"
            : myTheme.textColor};
      }
      .passing {
        color: ${({ data, dataCompare, myTheme }) =>
          data.PassingTotal > dataCompare.PassingTotal
            ? "#01bf71"
            : myTheme.textColor};
      }
      .defending {
        color: ${({ data, dataCompare, myTheme }) =>
          data.DefendingTotal > dataCompare.DefendingTotal
            ? "#01bf71"
            : myTheme.textColor};
      }
      .physical {
        color: ${({ data, dataCompare, myTheme }) =>
          data.PhysicalityTotal > dataCompare.PhysicalityTotal
            ? "#01bf71"
            : myTheme.textColor};
      }
    }
    .diffValues {
      margin-left: 0.2rem;
      p {
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        line-height: 1.4rem;
      }
    }
  }
  .allAtr {
    grid-area: aat;
  }
  .club {
    margin-left: 1rem;
    grid-area: clu;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    p {
      margin-left: 0.3rem;
      font-family: "Bebas Neue", cursive;
      font-size: 0.9rem;
      letter-spacing: 0.05rem;
    }
    /* background: lightblue; */
  }
  .showMore {
    grid-area: sho;
    /* background: blue; */
  }
`;

const PlayerBasicCard = ({ data, dataCompare, compareMode, color }) => {
  const myTheme = useTheme();

  const transRef = useSpringRef();

  const transition = useTransition(data, {
    ref: transRef,
    keys: null,
    from: {},
    enter: {},
    leave: {},
  });

  useEffect(() => {
    transRef.start();
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
      <div className="nameValue">
        <p className="name">
          {compareMode === 2 ? data?.Name : data?.FullName}
        </p>
        <p className="value">
          {data &&
            `€${data.ValueEUR.toString().replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )}`}
        </p>
      </div>
      <p className="overall">{data?.Overall}</p>
      <div className="otherInfo">
        <div className="natAge">
          <p>{data?.Nationality}</p>
          <p>{data && `${data?.Age} años`}</p>
        </div>
        <p className="positions">{data?.Positions}</p>
      </div>
      <div className="potPos">
        <div className="potencial">
          {data && "Potencial:"}
          <p className="valorPot">{data?.Potential}</p>
        </div>
        <div className="mejPos">
          {data && "Preferida:"}
          <p className="mejorPosicion">{data?.BestPosition}</p>
        </div>
      </div>
      {data && (
        <div className="radAtr">
          <div className="rlabels">
            <p>RIT</p>
            <p>REG</p>
            <p>TIR</p>
            <p>PAS</p>
            <p>DEF</p>
            <p>FIS</p>
          </div>
          <div className="separators">
            <p className="separate">|</p>
            <p className="separate">|</p>
            <p className="separate">|</p>
            <p className="separate">|</p>
            <p className="separate">|</p>
            <p className="separate">|</p>
          </div>
          <div className="rvalues">
            <p className="pace">{data?.PaceTotal}</p>
            <p className="dribbling">{data?.DribblingTotal}</p>
            <p className="shooting">{data?.ShootingTotal}</p>
            <p className="passing">{data?.PassingTotal}</p>
            <p className="defending">{data?.DefendingTotal}</p>
            <p className="physical">{data?.PhysicalityTotal}</p>
          </div>
          <div className="diffValues">
            <p>
              {data?.PaceTotal > dataCompare?.PaceTotal
                ? `+${data?.PaceTotal - dataCompare?.PaceTotal}`
                : "\u00A0"}
            </p>
            <p>
              {data?.DribblingTotal > dataCompare?.DribblingTotal
                ? `+${data?.DribblingTotal - dataCompare?.DribblingTotal}`
                : "\u00A0"}
            </p>
            <p>
              {data?.ShootingTotal > dataCompare?.ShootingTotal
                ? `+${data?.ShootingTotal - dataCompare?.ShootingTotal}`
                : "\u00A0"}
            </p>
            <p>
              {data?.PassingTotal > dataCompare?.PassingTotal
                ? `+${data?.PassingTotal - dataCompare?.PassingTotal}`
                : "\u00A0"}
            </p>
            <p>
              {data?.DefendingTotal > dataCompare?.DefendingTotal
                ? `+${data?.DefendingTotal - dataCompare?.DefendingTotal}`
                : "\u00A0"}
            </p>
            <p>
              {data?.PhysicalityTotal > dataCompare?.PhysicalityTotal
                ? `+${data?.PhysicalityTotal - dataCompare?.PhysicalityTotal}`
                : "\u00A0"}
            </p>
          </div>
        </div>
      )}
      <div className="allAtr"></div>
      <div className="club">
        {data && (
          <>
            Club: <p>{data.Club}</p> hasta: <p>{data.ContractUntil}</p>
          </>
        )}
      </div>
      <div className="showMore"></div>
      <p></p>
    </CardWrapper>
  );
};

export default PlayerBasicCard;
