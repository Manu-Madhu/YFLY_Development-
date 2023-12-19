import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideMenu from "../components/sideMenu/SideMenu";

const Layout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="container mx-auto flex w-full h-full">
        <div className="hidden md:flex md:w-1/5 h-full ">
          <SideMenu />
        </div>
        <div className="md:w-4/5 p-10">{<Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
