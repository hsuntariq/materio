import React from "react";
import ReactApexChart from "react-apexcharts";

const Revenue = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Q1 Budget",
        group: "budget",
        color: "#80c7fd",
        data: [44000, 55000, 41000, 67000, 22000, 43000],
      },
      {
        name: "Q1 Actual",
        group: "actual",
        color: "#008FFB",
        data: [48000, 50000, 40000, 65000, 25000, 40000],
      },
      {
        name: "Q2 Budget",
        group: "budget",
        color: "#80f1cb",
        data: [13000, 36000, 20000, 8000, 13000, 27000],
      },
      {
        name: "Q2 Actual",
        group: "actual",
        color: "#00E396",
        data: [20000, 40000, 25000, 10000, 12000, 28000],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      dataLabels: {
        enabled: false, // Disable data labels
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: [
          "Online ads",
          "Sales Training",
          "Print ads",
          "Catalogs",
          "Meetings",
          "Public relations",
        ],
        labels: {
          show: false, // Hide x-axis labels
        },
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        labels: {
          show: false, // Hide y-axis labels
        },
      },
      legend: {
        position: "bottom",
        clusterGroupedSeriesOrientation: "vertical",
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Revenue;
