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
  .leftWrapper {
    display: flex;
    align-items: center;
    height: 100%;
    width: 20%;
    background: lightyellow;
    .imageContainer {
      /* position: absolute; */
      /* bottom: 0 */
      padding: 0.6rem 0 0 0.5rem;
      margin: 0 2rem;
      margin-top: -7rem;
      aspect-ratio: 1;
      height: 4.6rem;
      width: 5rem;
      /* background: #eee; */
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5) inset;
      overflow: hidden;
      border-radius: 1rem;
      .playerImage {
        margin-top: 5rem;
        filter: drop-shadow(0em 0.3em 0.4em rgba(0, 0, 0, 0.9));
      }
    }
  }
  .rightWrapper {
    height: 100%;
    width: 80%;
    background: lightblue;
    .radarContainer {
      margin-top: -1rem;
      height: 17rem;
      width: 17rem;
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
      </div>
      <div className="rightWrapper">
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
