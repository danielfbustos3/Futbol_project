import Image from "next/image";
import { useTheme } from "utils/functions";
import styled from "@emotion/styled";
import { Radar } from "react-chartjs-2";

const Expander = styled.div`
  height: 15rem;
  width: 100%;
  display: flex;
  background: ${({ myTheme }) => myTheme.boxColor};
  transition: all 1s ease-in;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0em 0.2em 0.4em rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 0.5rem;
  .leftWrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    /* background: lightyellow; */
    .imageInfo {
      /* background: red; */
      /* overflow: hidden; */
      display: flex;
      align-items: center;
      height: 50%;
      width: 100%;
      padding-bottom: 0.5rem;
      .imageContainer {
        padding: 0.6rem 0 0 0.5rem;
        aspect-ratio: 1;
        height: 4.6rem;
        width: 25%;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
        overflow: hidden;
        border-radius: 1rem;
        .playerImage {
          margin-top: 5rem;
          filter: drop-shadow(0em 0.3em 0.4em rgba(0, 0, 0, 0.9));
        }
      }
      .information {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 0.5rem;
        height: 100%;
        width: 75%;
        margin-left: 0.5rem;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
        border-radius: 1rem;
        p {
          text-align: center;
          font-size: 0.9rem;
        }
      }
    }
    .physical {
      height: 50%;
      width: 100%;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
      border-radius: 1rem;
    }
  }
  .mind {
    height: 100%;
    width: 15%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
    border-radius: 1rem;
  }
  .rightWrapper {
    display: flex;
    height: 100%;
    width: 55%;
    .controlShooting {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      .control {
        width: 100%;
        height: 30%;
        margin-bottom: 0.5rem;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
        border-radius: 1rem;
      }
      .shooting {
        width: 100%;
        height: 70%;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
        border-radius: 1rem;
      }
    }
    .radarContainer {
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
      height: 100%;
      width: 50%;
      padding: 0.3rem;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
      border-radius: 1rem;
    }
  }
`;

const TableExpander = (props) => {
  const myTheme = useTheme();

  const radarOptions = {
    elements: {
      point: {
        radius: 0,
        hitRadius: 30,
      },
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        displayColors: false,
        bodyFont: {
          size: 17,
        },
        callbacks: {
          title: function (context) {
            return null;
          },
          label: function (context) {
            // const label = `${context.label} : ${context.formattedValue}`;
            const label = `${context.formattedValue}`;
            return label;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          color: myTheme.textColor,
          display: true,
          showLabelBackdrop: false,
          stepSize: 20,
          font: {
            size: 14,
          },
        },
        angleLines: {
          // color: myTheme.lightboxColor,
          lineWidth: 2,
        },
        grid: {
          color: myTheme.lightboxColor,
          lineWidth: 2,
        },
        pointLabels: {
          color: myTheme.textColor,
          callback: function (value, index) {
            switch (index) {
              case 0:
                return `${value}: ${props.data.PaceTotal}`;
                break;
              case 1:
                return `${value}: ${props.data.DribblingTotal}`;
                break;
              case 2:
                return `${value}: ${props.data.ShootingTotal}`;
                break;
              case 3:
                return `${value}: ${props.data.Finishing}`;
                break;
              case 4:
                return `${value}: ${props.data.PassingTotal}`;
                break;
              case 5:
                return `${value}: ${props.data.DefendingTotal}`;
                break;
              case 6:
                return `${value}: ${props.data.PhysicalityTotal}`;
                break;
            }
          },
          font: {
            size: 20,
            family: "Gemunu Libre",
          },
          padding: 0,
        },
      },
    },
  };

  const radarData = (props) => {
    return {
      labels: [
        "Ritmo",
        "Regate",
        "Tiro",
        "Definición",
        "Pases",
        "Defensa",
        "Físico",
      ],
      datasets: [
        {
          label: props.data.Name,
          backgroundColor: `rgba(${myTheme?.zonasCancha},0.4)`,
          borderColor: `rgba(${myTheme?.zonasCancha},0.8)`,
          // borderColor: "transparent",
          data: [
            props.data.PaceTotal,
            props.data.DribblingTotal,
            props.data.ShootingTotal,
            props.data.Finishing,
            props.data.PassingTotal,
            props.data.DefendingTotal,
            props.data.PhysicalityTotal,
          ],
        },
      ],
    };
  };

  return (
    <Expander myTheme={myTheme}>
      <div className="leftWrapper">
        <div className="imageInfo">
          <div className="imageContainer">
            <Image
              className="playerImage"
              src={props.data.PhotoUrl}
              alt={props.data.Name}
              height={100}
              width={100}
              quality={100}
            />
          </div>
          <div className="information">
            <p>Altura: {props.data.Height} cm</p>
            <p>Peso: {props.data.Weight} kg</p>
            <p>Mejor posición: {props.data.BestPosition}</p>
            <p>
              pie:{" "}
              {props.data.PreferredFoot === "left" ? "Izquierdo" : "Derecho"}
            </p>
            <p>Weak Foot: {props.data.WeakFoot}</p>
            <p>Skills: {props.data.SkillMoves}</p>
          </div>
        </div>
        <div className="physical"></div>
      </div>
      <div className="mind"></div>
      <div className="rightWrapper">
        <div className="controlShooting">
          <div className="control"></div>
          <div className="shooting"></div>
        </div>
        <div className="radarContainer">
          <Radar
            data={radarData(props)}
            options={radarOptions}
            width={100}
            height={100}
          />
        </div>
      </div>
    </Expander>
  );
};

export default TableExpander;
