import React from "react";
import logo from "../../assets/logo/logo.png";
import { FaRegCircleDot } from "react-icons/fa6";
import { admin_sidebar } from "../data/admin_sidebar_data";
import { RiArrowDropRightLine } from "react-icons/ri";

const AdminSidebar = () => {
  return (
    <>
      <div className="p-2 ps-0">
        <div className="d-flex align-items-center justify-content-between">
          <img width={"130px"} src={logo} alt="logo" />
          <FaRegCircleDot size={20} cursor="pointer" />
        </div>
        <ul className="list-unstyled d-flex flex-column gap-1">
          {admin_sidebar?.map((item, index) => {
            console.log(item);
            return (
              <>
                {item?.name !== "" && (
                  <li key={index} className="d-flex gap-2 align-items-center">
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
                      className="text-sm text-secondary m-0"
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
                    <li
                      key={index2}
                      style={{ whiteSpace: "nowrap" }}
                      className="d-flex gap-2 p-2 text-capitalize rounded-end-pill ps-0 hover-gray align-items-center text-gray"
                    >
                      <div className="d-flex justify-content-between text-gray align-items-center gap-2 w-100">
                        <div className="">
                          {item2?.icon} {item2.title}
                        </div>
                        {item2?.expandable && (
                          <RiArrowDropRightLine size={25} />
                        )}
                      </div>
                    </li>
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
