import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { FaRegCircleDot } from "react-icons/fa6";
import { admin_sidebar } from "../data/admin_sidebar_data";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";

const AdminSidebar = ({ darkMode }) => {
  const [open, setOpen] = useState();
  const [open2, setOpen2] = useState();
  const handleOpen = (id) => {
    setOpen(open == id ? null : id);
  };
  const handleOpen2 = (id) => {
    setOpen2(open2 == id ? null : id);
  };

  return (
    <>
      <div className="p-2 ps-0">
        <div className="d-flex align-items-center justify-content-between">
          <img width={"130px"} src={logo} alt="logo" />
          <FaRegCircleDot size={20} cursor="pointer" />
        </div>
        <ul className="list-unstyled d-flex flex-column gap-1">
          {admin_sidebar?.map((item, index) => {
            return (
              <>
                {item?.name !== "" && (
                  <li
                    key={index}
                    className={` ${
                      darkMode ? "dark-mode" : "text-gray"
                    } d-flex gap-2 align-items-center `}
                  >
                    <div
                      className="left-line"
                      style={{
                        width: "20%",
                        height: "1px",
                        background: "lightgray",
                      }}
                    ></div>
                    <p
                      style={{ whiteSpace: "nowrap" }}
                      className={`text-sm text-secondary m-0 ${
                        darkMode ? "dark-mode" : ""
                      } `}
                    >
                      {item?.name}
                    </p>
                    <div
                      className="right-line"
                      style={{
                        width: "80%",
                        height: "1px",
                        background: "lightgray",
                      }}
                    ></div>
                  </li>
                )}
                {/* // second list */}
                {item?.list?.map((item2, index2) => {
                  return (
                    <>
                      <li
                        onClick={() => handleOpen(item2?.id)}
                        key={index2}
                        style={{
                          whiteSpace: "nowrap",
                        }}
                        className={`d-flex gap-2 p-2 text-capitalize rounded-end-pill ps-0 hover-gray align-items-center   ${
                          darkMode ? "dark-mode" : "text-gray"
                        }`}
                      >
                        <div className="d-flex justify-content-between text-gray align-items-center gap-2 w-100">
                          <div className={`${darkMode ? "dark-mode" : ""}`}>
                            {item2?.icon} {item2.title}
                          </div>
                          {item2?.expandable && (
                            <RiArrowDropRightLine
                              color={darkMode && "white"}
                              size={25}
                            />
                          )}
                        </div>
                      </li>

                      {item2?.expandable && (
                        <>
                          <ul
                            className={`list-unstyled transition-fast ${
                              open == item2.id ? "open-sub-height" : "sub-list"
                            } `}
                          >
                            {item2?.subList?.map((item3, index3) => {
                              return (
                                <>
                                  <li
                                    key={index3}
                                    style={{
                                      whiteSpace: "nowrap",
                                    }}
                                    className={`d-flex gap-2 p-2 text-capitalize rounded-end-pill ps-0 hover-gray align-items-center ${
                                      darkMode ? "dark-mode" : "text-gray"
                                    }`}
                                  >
                                    <FaRegCircle size={10} /> {item3?.title}
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
