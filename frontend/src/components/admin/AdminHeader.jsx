import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { BsMoonStars } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import DarkMode from "./DarkMode";

const AdminHeader = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div className="p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center  gap-3">
            <IoSearchOutline color={darkMode && "white"} />
            <p className="text-secodary m-0">Search</p>
          </div>
          <div className="d-flex align-items-center gap-3 fs-4 text-gray">
            <IoLanguage color={darkMode && "white"} cursor={"pointer"} />

            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
            <FaRegStar color={darkMode && "white"} cursor={"pointer"} />
            <BsBell color={darkMode && "white"} cursor={"pointer"} />
            <img src="/images/user.png" className="rounded-circle" width={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
