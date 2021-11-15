import styled from "@emotion/styled";
import Image from "next/image";
import { useTheme } from "utils/functions";

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: left;
  .imageContainer {
    padding: 0.6rem 0 0 0.5rem;
    aspect-ratio: 1;
    height: 4.6rem;
    width: 4.9rem;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
    overflow: hidden;
    border-radius: 1rem;
    margin-right: 1rem;
    .playerImage {
      margin-top: 5rem;
      filter: drop-shadow(0em 0.3em 0.4em rgba(0, 0, 0, 0.9));
    }
  }
  .basicInfo {
    width: calc(100% - 5rem);
    .nameValue {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        font-family: "Bebas Neue", cursive;
        letter-spacing: 0.1rem;
        font-size: 1.2rem;
      }
      .value {
        font-family: "Bebas Neue", cursive;
        letter-spacing: 0.1rem;
        color: ${({ data, dataCompare, myTheme }) =>
          data.ValueEUR < dataCompare.ValueEUR ? "#01bf71" : myTheme.textColor};
        font-size: 1.5rem;
      }
    }
    .otherInfo {
      display: flex;
      .overall {
        margin-right: 0.5rem;
        font-family: "Bebas Neue", cursive;
        font-size: 2.5rem;
        line-height: 2.5rem;
        color: ${({ data, dataCompare, myTheme }) =>
          data.Overall > dataCompare.Overall ? "#01bf71" : myTheme.textColor};
      }
      .natAge {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
const PlayerBasicCard = ({ data, dataCompare, compareMode }) => {
  const myTheme = useTheme();
  return (
    <CardWrapper myTheme={myTheme} data={data} dataCompare={dataCompare}>
      <div className="imageContainer">
        <Image
          className="playerImage"
          src={
            data
              ? data.PhotoUrl
              : "https://cdn.sofifa.com/players/259/455/22_60.png"
          }
          height={100}
          width={100}
          quality={100}
        />
      </div>
      <div className="basicInfo">
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

        <div className="otherInfo">
          <p className="overall">{data?.Overall}</p>
          <div className="natAge">
            <p>{data?.Nationality}</p>
            <p>{data?.Age} años</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default PlayerBasicCard;
