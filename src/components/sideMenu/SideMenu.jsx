import React, { useState } from "react";
import { Sidebar, SidebarE } from "../../data/SideBar";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const SideMenu = () => {
  const user = useSelector((state) => state?.auth?.userInfo);
  const [sideArrow, setSideArrow] = useState(true);

  const location = useLocation();
  return (
    <div
      className={`container mx-auto  hidden  h-screen fixed bg-gradient-to-l from-white to-[#f5f6f8] ${
        sideArrow ? "md:w-1/5" : "w-[200px] flex flex-col items-center"
      } ${user?.role === "student" ? "hidden" : "md:flex"}`}
    >
      <div className={`mx-5 md:mx-10 p-5 flex flex-col items-center  mt-5 w-full`}>
        {user?.role === "admin" ? (
          Sidebar.map((data) => (
            <Link key={data?.id} to={data.path}>
              <div
                className={`flex items-center gap-3 cursor-pointer mb-4 ${
                  data.path === location.pathname &&
                  "bg-[#058BD2] w-full text-white p-2 rounded hover:scale-105 ease-in-out duration-300"
                }`}
              >
                {sideArrow ? (
                  <>
                    {data.icon} {data.name}
                  </>
                ) : (
                  data.icon
                )}
              </div>
            </Link>
          ))
        ) : user?.role === "employee" ? (
          SidebarE.map((data) => (
            <Link key={data?.id} to={data.path}>
              <div
                className={`flex items-center gap-3 cursor-pointer mb-4 ${
                  data.path === location.pathname &&
                  "bg-[#058BD2] w-full text-white p-2 rounded hover:scale-105 ease-in-out duration-300"
                }`}
              >
                {sideArrow ? (
                  <>
                    {data.icon} {data.name}
                  </>
                ) : (
                  data.icon
                )}
              </div>
            </Link>
          ))
        ) : (
          <div className="hidden"></div>
        )}
        <div className="w-full flex items-end justify-end mt-10">
          {sideArrow ? (
            <MdOutlineKeyboardDoubleArrowLeft
              onClick={() => setSideArrow(false)}
              size={30}
              className="bg-primary_colors rounded-full p-1 text-white shadow-lg cursor-pointer hover:scale-105 ease-in-out duration-300"
            />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight
              onClick={() => setSideArrow(true)}
              size={30}
              className="bg-primary_colors rounded-full p-1 text-white shadow-lg cursor-pointer hover:scale-105 ease-in-out duration-300"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
