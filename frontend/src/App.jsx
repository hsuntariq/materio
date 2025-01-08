import React from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/admin/Register";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin">
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="*" element="Not Found" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
