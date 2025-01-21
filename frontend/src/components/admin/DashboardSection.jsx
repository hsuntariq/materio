import React from "react";
import AdminHeader from "./AdminHeader";
import Ratings from "./dashboard_cards/Ratings";
import Visits from "./dashboard_cards/Visits";
import Transactions from "./dashboard_cards/Transactions";
import SalesChart from "./dashboard_cards/SalesChart";
import RevenueChart from "./dashboard_cards/RevenueChart";

const DashboardSection = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <>
        <AdminHeader darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* charts section */}

        <div className="row col-lg-11 mx-auto">
          <div className="col-lg-3 my-2 align-self-end col-md-6">
            {/* ratings */}
            <Ratings />
          </div>
          <div className="col-lg-3 my-2 align-self-end col-md-6">
            {/* sessions */}
            <Visits />
          </div>
          <div className="col-lg-6 my-2 ">
            {/* transactions */}
            <Transactions />
          </div>

          <div className="col-lg-3 my-2 align-self-end col-md-6">
            {/* sales chart */}
            <SalesChart />
          </div>
          <div className="col-lg-3 my-2 align-self-end col-md-6">
            {/* sales chart */}
            <RevenueChart />
          </div>
        </div>
      </>
    </>
  );
};

export default DashboardSection;
