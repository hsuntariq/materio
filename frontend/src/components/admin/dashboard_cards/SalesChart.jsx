import { Typography } from "@mui/material";
import React from "react";
import { PiDotsThreeVertical } from "react-icons/pi";
import Sales from "./dashbord_charts/Sales";

const SalesChart = () => {
  return (
    <>
      <div className="card p-4 shadow border-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <Typography>Total Sales</Typography>
            <Typography>$21,845</Typography>
          </div>
          <PiDotsThreeVertical />
        </div>
        <Sales />
      </div>
    </>
  );
};

export default SalesChart;
