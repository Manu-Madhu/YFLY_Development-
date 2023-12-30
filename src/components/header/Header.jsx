import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

import profile from "../../assets/icon/profileicon.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const user = useSelector((state) => state.auth.userInfo);

  return (
    <div className="shadow-sm fixed z-50 w-full bg-white top-0">
      <div className="container mx-auto ">
        <div className="mx-1 md:mx-10 flex items-center justify-between p-5">
          <div className="w-full">
            <img
              src={require("../../assets/logo/logo.png")}
              alt="Logo"
              className="w-28"
            />
          </div>
          <div className="w-full relative hidden md:flex">
            <CiSearch
              className="absolute text-slate-400 top-2 ms-3 cursor-pointer"
              size={25}
            />
            <input
              type="text"
              className="border w-full ps-10 p-2 rounded-lg shadow-sm outline-none ring-0 text-sm text-slate-400"
              placeholder="Search"
            />
          </div>
          <div className="hidden md:flex gap-3 w-full items-center justify-end">
            <IoMdNotificationsOutline
              size={30}
              className=" cursor-pointer text-slate-500"
            />
            <div className="flex flex-col items-center">
              <img
                src={`${user?.image ? user?.image : profile}`}
                alt="proPic"
                className="w-10 rounded-full cursor-pointer"
              />
              <h1 className="text-xs text-secondary mt-1">{user?.name}</h1>
            </div>
          </div>
          <div>
            {!menu ? (
              <LuMenu
                className="md:hidden"
                size={30}
                onClick={() => setMenu(!menu)}
              />
            ) : (
              <>
                <IoClose size={30} onClick={() => setMenu(!menu)} />
                <div className="absolute w-full left-0 p-5">
                  <div className="bg-white shadow p-3 rounded-lg">
                    <div className="w-full relative">
                      <CiSearch
                        className="absolute text-slate-400 top-2 ms-3 cursor-pointer"
                        size={25}
                      />
                      <input
                        type="text"
                        className="border w-full ps-10 p-2 rounded-lg shadow-sm outline-none ring-0 text-sm text-slate-400"
                        placeholder="Search"
                      />
                    </div>
                    <div className="flex gap-3 w-full items-center mt-3">
                      <IoMdNotificationsOutline
                        size={30}
                        className=" cursor-pointer text-slate-500"
                      />
                      <div>
                        <img
                          src={require("../../assets/icon/profileicon.png")}
                          alt="proPic"
                          className="w-10 rounded-full cursor-pointer"
                        />
                        <h1>halo</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
