import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideMenu from "../components/sideMenu/SideMenu";

const Layout = () => {
  return (
    <div CLS>
      <Header />
      <div className="container mx-auto w-full ">
        <div className="hidden md:flex md:w-1/5 shadow h-full">
          <SideMenu />
        </div>
        <div className="w-full md:w-4/5">{<Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
