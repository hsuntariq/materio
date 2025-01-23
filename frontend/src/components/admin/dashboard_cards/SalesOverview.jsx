import { Typography } from "@mui/material";
import React from "react";
import { FaWallet } from "react-icons/fa6";
import PieChart from "./dashbord_charts/PieChart";
import { GoDot, GoDotFill } from "react-icons/go";

const SalesOverview = () => {
  return (
    <>
      <div className="p-4 card border-0 shadow">
        <Typography>Sales Overview</Typography>
        <div className="row">
          <div className="col-sm-6">
            <PieChart />
          </div>
          <div className="col-sm-6">
            <div className="d-flex flex-column w-100">
              <div className="d-flex align-items-center gap-3">
                <div
                  style={{ width: "40px", height: "40px" }}
                  className="bg-purple-light rounded-2 d-flex justify-content-center align-items-center"
                >
                  <FaWallet className="text-purple" size={20} />
                </div>
                <div className="d-flex flex-column">
                  <Typography className="text-secondary">
                    Number of sales
                  </Typography>
                  <Typography variant="h5" className="fe-semibold">
                    $86,400
                  </Typography>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-6 my-2">
                  <div className="d-flex align-items-center">
                    <GoDotFill className="text-purple" />
                    <Typography className="text-gray">Apparel</Typography>
                  </div>
                  <Typography className="text-gray">$12,160</Typography>
                </div>
                <div className="col-6 my-2">
                  <div className="d-flex align-items-center">
                    <GoDotFill className="text-purple" />
                    <Typography className="text-gray">Apparel</Typography>
                  </div>
                  <Typography className="text-gray">$12,160</Typography>
                </div>
                <div className="col-6 my-2">
                  <div className="d-flex align-items-center">
                    <GoDotFill className="text-purple" />
                    <Typography className="text-gray">Apparel</Typography>
                  </div>
                  <Typography className="text-gray">$12,160</Typography>
                </div>
                <div className="col-6 my-2">
                  <div className="d-flex align-items-center">
                    <GoDotFill className="text-purple" />
                    <Typography className="text-gray">Apparel</Typography>
                  </div>
                  <Typography className="text-gray">$12,160</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesOverview;
