import { Typography } from "@mui/material";
import React from "react";

const Ratings = () => {
  return (
    <>
      <div className="card border-0 shadow p-4 position-relative">
        <div className="d-flex justify-content-between ">
          <div className="">
            <Typography className="fw-semibold text-gray">Ratings</Typography>
            <div className="mt-4">
              <div className="d-flex gap-3">
                <Typography variant="h6" className="text-gray">
                  13k
                </Typography>
                <Typography variant="p" style={{ color: "#56CA00" }}>
                  +15.6k
                </Typography>
              </div>
              <Typography className="text-sm  fw-semibold text-purple bg-purple-light px-3 py-1 rounded-pill">
                Year of {new Date().getFullYear()}
              </Typography>
            </div>
          </div>
          <img
            src="/dashboard_images/ratings.png"
            className="position-absolute"
            style={{ top: "-2rem", right: "0" }}
            width={120}
            // height={300}
            alt="ratings image"
          />
        </div>
      </div>
    </>
  );
};

export default Ratings;
