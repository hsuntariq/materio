import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { Button } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineViewList } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleChangeSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChangeSize);

    return () => {
      window.removeEventListener("resize", handleChangeSize);
    };
  });

  return (
    <>
      {size < 1185 && (
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}
      <div
        className="container p-xl-4 p-3 rounded-3"
        style={{ background: "#F9F7F8" }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            {size < 1185 && (
              <HiOutlineViewList
                onClick={() => setOpenSidebar(true)}
                size={25}
                cursor={"pointer"}
              />
            )}
            <img width={150} src={logo} alt="logo" />
            {size > 1185 && (
              <ul className="d-flex m-0 fw-semibold text-gray gap-3 list-unstyled text-capitalize">
                <li>Home</li>
                <li>features</li>
                <li>team</li>
                <li>FAQ</li>
                <li>contact us</li>
                <li>
                  pages <RiArrowDropDownLine size={25} />{" "}
                </li>
                <li>Admin</li>
              </ul>
            )}
          </div>
          <div className="d-flex align-items-center gap-3">
            <MdOutlineWbSunny size={25} cursor={"pointer"} />
            <Button
              className="bg-purple text-white"
              variant="contained"
              startIcon={<IoCartOutline />}
            >
              {size > 1185 && "Purchase now"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
