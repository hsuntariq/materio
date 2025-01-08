import React from "react";
import { SiEthiopianairlines } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider_data } from "./data/slider-data";
const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };
  return (
    <>
      <div className="container-fluid mt-5 p-xl-5 p-3 text-center">
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

        <div className="slider-container mt-4">
          <Slider {...settings}>
            {slider_data?.map((item, index) => (
              <div key={index}>
                <div className="my-card p-4 shadow border-0">
                  <img
                    width={50}
                    className="d-block mx-auto"
                    src={item?.image}
                    alt=""
                  />
                  <p className="text-gray">{item?.desc}</p>
                  <div>
                    {Array.from({ length: item?.rating }).map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>
                  <h5 className="text-gray">{item?.user}</h5>
                  <p className="text-secondary">{item?.designation}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MySlider;
