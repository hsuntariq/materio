import React from "react";
import { IoClose } from "react-icons/io5";
import { sidebar_data } from "../data/sidebar_data";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <>
      <div
        onClick={() => setOpenSidebar(false)}
        className={`underlay ${
          openSidebar ? "opacity-1" : "transform-nx-100 opacity-0"
        } transition-md height-full w-100 position-fixed top-0`}
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="col-12 position-fixed top-0 start-0 col-sm-3 height-full bg-white"
          style={{ overflowY: "scroll" }}
        >
          <IoClose
            className="position-absolute"
            style={{ top: "10px", right: "10px" }}
            size={25}
            cursor={"pointer"}
            onClick={() => setOpenSidebar(false)}
          />

          <ul className="d-flex text-capitalize fw-semibold px-3 gap-4 py-5 flex-column list-unstyled text-gray ">
            {sidebar_data?.map((item, index) => {
              return (
                <>
                  <li key={index} className="d-flex gap-1 align-items-center ">
                    {item?.title} {item?.my_icon}
                  </li>
                  {item?.myList && (
                    <ul
                      className="d-flex text-capitalize fw-semibold px-3 gap-4 
                     flex-column list-unstyled text-gray"
                    >
                      {item?.myList?.map((item2, index2) => {
                        return (
                          <>
                            <li
                              key={index2}
                              className="d-flex gap-1 align-items-center"
                            >
                              <div
                                className="d-flex bg-purple-light text-purple justify-content-center align-items-center rounded-2 p-2"
                                style={{
                                  background: "bg-purple-light text-purple",
                                }}
                              >
                                {item2?.icon}
                              </div>{" "}
                              {item2?.title}
                            </li>

                            <ul
                              className="d-flex text-capitalize fw-semibold px-3 gap-4 
                     flex-column list-unstyled text-gray"
                            >
                              {item2?.items?.map((item3, index3) => {
                                return (
                                  <li
                                    key={index3}
                                    className="d-flex gap-1 align-items-center"
                                  >
                                    {item3?.title}
                                  </li>
                                );
                              })}
                            </ul>
                          </>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
