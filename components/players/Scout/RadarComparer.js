import styled from "@emotion/styled";
import { useTheme } from "utils/functions";
import { Radar } from "react-chartjs-2";

const RadarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  height: 88%;
  width: 100%;
  padding: 0.3rem;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  background: ${({ myTheme }) => myTheme.boxColor};
  overflow: hidden;
`;

const RadarComparer = ({ selectedPlayer, comparePlayer }) => {
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
        displayColors: true,
        bodyFont: {
          size: 13,
        },
        titleFont: {
          size: 14,
        },
        boxPadding: 5,
        callbacks: {
          title: function (context) {
            return context[0].dataset.label;
          },
          label: function (context) {
            // const label = `${context.label} : ${context.formattedValue}`;
            const label = `${context.label} : ${context.formattedValue}`;
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
          color: "transparent",
          lineWidth: 2,
        },
        grid: {
          color: myTheme.lightboxColor,
          lineWidth: 2,
        },
        pointLabels: {
          color: myTheme.textColor,
          // callback: function (value, index) {
          //   switch (index) {
          //     case 0:
          //       return <p className="valueLabel">{value}</p>;
          //       //   <>
          //       //     <div className="valuesWrapper">
          //       //       <p className="value1">
          //       //         {selectedPlayer && selectedPlayer.PaceTotal}
          //       //       </p>
          //       //       <p className="value2">
          //       //         {comparePlayer && comparePlayer.PaceTotal}
          //       //       </p>
          //       //     </div>
          //       //   </>
          //       // );
          //       // `${value}: ${selectedPlayer.PaceTotal}`;

          //       break;
          //     case 1:
          //       return `${value}: ${selectedPlayer.DribblingTotal}`;
          //       break;
          //     case 2:
          //       return `${value}: ${selectedPlayer.ShootingTotal}`;
          //       break;
          //     case 3:
          //       return `${value}: ${selectedPlayer.Finishing}`;
          //       break;
          //     case 4:
          //       return `${value}: ${selectedPlayer.PassingTotal}`;
          //       break;
          //     case 5:
          //       return `${value}: ${selectedPlayer.DefendingTotal}`;
          //       break;
          //     case 6:
          //       return `${value}: ${selectedPlayer.PhysicalityTotal}`;
          //       break;
          //   }
          // },
          font: {
            size: 20,
            family: "Gemunu Libre",
          },
          padding: 0,
        },
      },
    },
  };

  const radarData = {
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
        label: `1: ${selectedPlayer?.Name}`,
        backgroundColor: `rgba(${myTheme?.radar1},0.4)`,
        borderColor: `rgba(${myTheme?.radar1},0.8)`,
        // borderColor: "transparent",
        data: [
          selectedPlayer?.PaceTotal,
          selectedPlayer?.DribblingTotal,
          selectedPlayer?.ShootingTotal,
          selectedPlayer?.Finishing,
          selectedPlayer?.PassingTotal,
          selectedPlayer?.DefendingTotal,
          selectedPlayer?.PhysicalityTotal,
        ],
      },
      {
        label: `2: ${comparePlayer?.Name}`,

        backgroundColor: `rgba(${myTheme?.radar2},0.4)`,
        borderColor: `rgba(${myTheme?.radar2},0.8)`,
        // borderColor: "transparent",
        data: [
          comparePlayer?.PaceTotal,
          comparePlayer?.DribblingTotal,
          comparePlayer?.ShootingTotal,
          comparePlayer?.Finishing,
          comparePlayer?.PassingTotal,
          comparePlayer?.DefendingTotal,
          comparePlayer?.PhysicalityTotal,
        ],
      },
    ],
  };

  return (
    <RadarContainer myTheme={myTheme}>
      <Radar data={radarData} options={radarOptions} width={100} height={100} />
    </RadarContainer>
  );
};

export default RadarComparer;
