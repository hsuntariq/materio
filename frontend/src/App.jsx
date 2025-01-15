import React from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/admin/Register";
import { Toaster } from "react-hot-toast";
import OTP from "./pages/admin/OTP";
import Main from "./pages/admin/dashboard/Main";
const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin">
            <Route path="register" element={<Register />} />
            <Route path="otp/:id" element={<OTP />} />
            <Route path="dashboard" element={<Main />} />
          </Route>

          <Route path="*" element="Not Found" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
