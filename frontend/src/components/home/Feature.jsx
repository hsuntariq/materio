import React from "react";
import { CiEdit } from "react-icons/ci";
import { SiEthiopianairlines } from "react-icons/si";
import { features } from "../data/features";

const Feature = () => {
  return (
    <>
      <div className="container mt-5 p-xl-5 p-3 text-center">
        <div className="d-flex my-3 text-center justify-content-center gap-2 align-items-center">
          <SiEthiopianairlines />
          <p className="text-gray m-0 fw-semibold">Useful Feature</p>
        </div>
        <h3 className="text-gray">
          <span className="fw-bold ">Everything you need</span> to start your
          next project
        </h3>
        <p>
          Not just a set of tools, the package includes ready-to-deploy
          conceptual application.
        </p>

        {/* cards */}

        <div className="row p-xl-5 p-3">
          {features?.map((item, index) => {
            return (
              <>
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="d-flex justify-content-center align-items-center gap-3 flex-column">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center border-purple"
                      style={{ width: "70px", height: "70px" }}
                    >
                      {item?.icon}
                    </div>
                    <h5 className="text-gray">{item?.title}</h5>
                    <p className="text-secondary">{item?.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feature;
