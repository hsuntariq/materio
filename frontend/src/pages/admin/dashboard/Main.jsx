import React from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import "../styles/dashboard.css";
const Main = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-4">
            <AdminSidebar />
          </div>
          <div className="col-xl-10 col-lg-9 col-md-8"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
