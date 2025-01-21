import { Typography } from "@mui/material";
import React from "react";

const Visits = () => {
  return (
    <>
      <div className="card  border-0  shadow p-4 position-relative">
        <div className="d-flex justify-content-between ">
          <div className="">
            <Typography className="fw-semibold text-gray">Visits</Typography>
            <div className="mt-4">
              <div className="d-flex gap-3">
                <Typography variant="h6" className="text-gray">
                  24.5k
                </Typography>
                <Typography variant="p" style={{ color: "red" }}>
                  -20%
                </Typography>
              </div>
              <Typography className="text-sm   bg-light px-3 py-1 rounded-pill">
                Last Week
              </Typography>
            </div>
          </div>
          <img
            src="/dashboard_images/visits.png"
            className="position-absolute"
            style={{ top: "-2rem", right: "0" }}
            width={90}
            // height={300}
            alt="Visits image"
          />
        </div>
      </div>
    </>
  );
};

export default Visits;
