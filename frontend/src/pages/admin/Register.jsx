import React from "react";
import logo from "../../assets/logo/logo.png";
import { TextField } from "@mui/material";
import RegForm from "../../components/admin/RegForm";
const Register = () => {
  return (
    <>
      <div
        className="container-fluid position-relative"
        style={{ overflowY: "hidden", backgroundColor: "#F4F5FA" }}
      >
        <img
          className="position-absolute z-3 start-0 top-0"
          width={"200px"}
          src={logo}
          alt=""
        />
        <div className="row">
          <div
            className="col-xl-9 col-lg-7 col-md-6 reg-cover-image d-flex justify-content-center align-items-center position-relative"
            style={{ height: "100vh", backgroundColor: "#F4F5FA" }}
          >
            <img
              src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/auth/v2-register-light.png"
              width={"50%"}
              alt=""
            />

            <img
              src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-3.png"
              width={"250px"}
              className="position-absolute start-0 bottom-0"
              alt=""
            />
          </div>
          <div className="col-xl-3 col-lg-5 col-md-6 p-4 bg-white d-flex justify-content-center  flex-column  min-vh-screen text-start">
            <h4 className="text-start">Adventure starts here 🚀</h4>
            <p className="text-gray text-start">
              Make your app management easy and fun!
            </p>
            <RegForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
