import React from "react";
import { Sidebar, SidebarE } from "../../data/SideBar";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const user = useSelector((state) => state?.auth?.userInfo);

  

  const location = useLocation();
  return (
    <div className={`container mx-auto  hidden md:w-1/5 h-screen fixed bg-gradient-to-l from-white to-[#f5f6f8] ${user?.role === "student" ? "hidden" : "md:flex"}`}>
      <div className="mx-5 md:mx-10 p-5 flex flex-col mt-5 w-full">
        {user?.role === "admin"
          ? Sidebar.map((data) => (
              <Link key={data?.id} to={data.path}>
                <div
                  className={`flex items-center gap-3 cursor-pointer mb-4 ${
                    data.path === location.pathname &&
                    "bg-[#058BD2] w-full text-white p-2 rounded hover:scale-105 ease-in-out duration-300"
                  }`}
                >
                  {data.icon}
                  {data.name}
                </div>
              </Link>
            ))
          : user?.role === "employee"
          ? SidebarE.map((data) => (
              <Link key={data?.id} to={data.path}>
                <div
                  className={`flex items-center gap-3 cursor-pointer mb-4 ${
                    data.path === location.pathname &&
                    "bg-[#058BD2] w-full text-white p-2 rounded hover:scale-105 ease-in-out duration-300"
                  }`}
                >
                  {data.icon}
                  {data.name}
                </div>
              </Link>
            ))
          : <div className="hidden"></div>}
      </div>
    </div>
  );
};
export default SideMenu;
