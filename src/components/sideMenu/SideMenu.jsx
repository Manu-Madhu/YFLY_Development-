import React from "react";
import { Sidebar } from "../../data/SideBar";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="container mx-auto shadow-right">
      <div className="mx-5 md:mx-10 p-5 flex flex-col mt-5">
        {Sidebar.map((data) => (
          <Link to={data.path}>
            <div
              className={`flex items-center gap-3 cursor-pointer mb-4 ${
                data.path === location.pathname &&
                "bg-[#058BD2] text-white p-2 rounded hover:scale-105 ease-in-out duration-300"
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
