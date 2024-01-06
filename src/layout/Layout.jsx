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
      <div className="container mx-auto flex w-full h-full mt-24">
        <SideMenu />
        <div
          className={`w-full px-5 md:pt-10  md:px-10 ${
            user?.role === "student" ? "w-full" : "md:w-4/5 md:ms-[300px]"
          }`}
        >
          {<Outlet />}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
