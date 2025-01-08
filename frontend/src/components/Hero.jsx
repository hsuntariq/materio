import { Button } from "@mui/material";
import React, { useState } from "react";

const Hero = () => {
  const [coordinates, setCoordinates] = useState({
    img1: { x: 0, y: 0 },
    img2: { x: 0, y: 0 },
  });

  const { img1, img2 } = coordinates;

  const handleMove = (e) => {
    const { clientX, clientY } = e;

    setCoordinates({
      img1: { x: clientX * -0.02, y: clientY * -0.02 },
      img2: { x: clientX * -0.04, y: clientY * -0.04 },
    });
  };

  return (
    <>
      <div
        onMouseMove={handleMove}
        className="container height-full p-xl-5 p-3 position-relative"
      >
        <div className="col-lg-5 mx-auto">
          <h1 className="text-center  text-purple fw-bold">
            All in one sass application for your business
          </h1>
          <p className="text-gray text-center">
            No coding required to make customizations. The live customizer has
            everything your marketing need.
          </p>
          <Button
            className="text-capitalize bg-purple mx-auto d-block"
            variant="contained"
          >
            Get early access
          </Button>
        </div>

        {/* images section */}

        <img
          src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/hero-dashboard-light.png"
          width={"80%"}
          style={{
            left: "10%",
            transform: `translate(${img1.x}px,${img1.y}px)`,
          }}
          alt="main image"
          className="position-absolute"
        />
        <img
          src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/hero-elements-light.png"
          width={"90%"}
          style={{
            left: "5%",
            top: "50%",
            transform: `translate(${img2.x}px,${img2.y}px)`,
          }}
          className="position-absolute"
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
