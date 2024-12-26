import React from "react";
import Navbar from "../components/home/Navbar";

const Home = () => {
  return (
    <>
      <div
        className="height-full "
        style={{
          backgroundImage:
            "url(https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/hero-bg-light.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Navbar />
      </div>
    </>
  );
};

export default Home;
