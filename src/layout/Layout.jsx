import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideMenu from "../components/sideMenu/SideMenu";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto flex w-full h-full mt-24">
        <SideMenu />
        <div className="md:w-4/5 p-10 md:ms-[300px]">{<Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
