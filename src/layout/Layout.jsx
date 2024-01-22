import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideMenu from "../components/sideMenu/SideMenu";
import { useSelector } from "react-redux";

const Layout = () => {
  const user = useSelector((state) => state.auth.userInfo);
  return (
    <div className="bg-[#F5F6F8] w-full">
      <Header />
      <div className="flex w-full min-h-screen mt-24">
        <div
          className={`container mx-auto flex gap-10 w-full px-5${
            user?.role === "student" ? "w-full" : " "
          }`}
        >
          <SideMenu />
          {<Outlet />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
