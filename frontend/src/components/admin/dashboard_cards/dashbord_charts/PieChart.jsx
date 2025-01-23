import { Typography } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [chartText, setChartText] = React.useState({
    chartHeading: "100k",
    chartPara: "Weekly Sales",
  });

  const { chartPara, chartHeading } = chartText;

  const [state, setState] = React.useState({
    series: [13, 25, 12, 50],
    options: {
      chart: {
        type: "donut",
        events: {
          dataPointMouseEnter: (event, chartContext, config) => {
            // console.log(state.series[config.dataPointIndex]);

            let index = state.series[config.dataPointIndex];

            if (index == 50) {
              setChartText({
                chartHeading: "50k",
                chartPara: "Other Sales",
              });
            } else if (index == 12) {
              setChartText({
                chartHeading: "12k",
                chartPara: "Apparel",
              });
            } else if (index == 25) {
              setChartText({
                chartHeading: "25k",
                chartPara: "Electronics",
              });
            } else {
              setChartText({
                chartHeading: "13k",
                chartPara: "FMCG",
              });
            }
          },
        },
      },
      colors: ["#8C57FF", "#8C57FF", "#C5ABFF", "#F0F2F8"],
      dataLabels: {
        enabled: false, // Disable data labels
      },
      legend: {
        show: false, // Optionally hide the legend as well
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
              show: true, // Keep the legend on smaller screens if desired
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div className="position-relative" id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          onMouseLeave={() => {
            setChartText({
              chartHeading: "100k",
              chartPara: "Weekly sales",
            });
          }}
        />
        <div className="chart-text object-center text-center">
          <Typography variant="h6">{chartHeading}</Typography>
          <Typography variant="p" className="text-sm text-secondary">
            {chartPara}
          </Typography>
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
