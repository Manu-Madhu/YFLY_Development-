import React from "react";
import { Sidebar } from "../../data/SideBar";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  return (
    <div className="container mx-auto shadow-right hidden md:flex md:w-1/5 h-screen fixed bg-white">
      <div className="mx-5 md:mx-10 p-5 flex flex-col mt-5 w-full">
        {Sidebar.map((data) => (
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
        ))}
      </div>
    </div>
  );
};
export default SideMenu;
