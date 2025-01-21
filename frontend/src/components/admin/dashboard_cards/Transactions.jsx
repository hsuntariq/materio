import { Typography } from "@mui/material";
import React from "react";
import { FaChartPie } from "react-icons/fa";

const Transactions = () => {
  return (
    <>
      <div className="card p-4 shadow border-0">
        <div className="d-flex gap-3 flex-column">
          <Typography>Transactions</Typography>
          <Typography>
            Total 48.5% Growth 😎{" "}
            <span className="text-secondary">this month</span>{" "}
          </Typography>
          <div className="d-flex justify-content-between align-items-center gap-2">
            {Array.from({ length: 3 }).map((_, index) => {
              return (
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="bg-purple rounded-3 text-white d-flex justify-content-center align-items-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <FaChartPie />
                  </div>
                  <div className="d-flex  flex-column">
                    <Typography className="text-secondary">Sales</Typography>
                    <Typography>245k</Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
