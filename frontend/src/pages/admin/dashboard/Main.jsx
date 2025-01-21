import React, { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import "../styles/dashboard.css";
import DashboardSection from "../../../components/admin/DashboardSection";
const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#28243D" : "#F4F5FA",
          color: darkMode ? "white" : "black",
        }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-xl-2 d-none d-xl-block">
            <AdminSidebar darkMode={darkMode} />
          </div>
          <div className="col-xl-10 col-12">
            <DashboardSection darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
