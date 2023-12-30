import React from "react";
import TrackerVertical from "../stepper/TrackerVertical";

const Application = () => {
  return (
    <>
      <div className="application_card p-5 rounded-xl ">
        <h1 className="text-white md:text-2xl font-bold my-3">
          Welcome To The Application Of{" "}
          <span className="text-primary_colors"> Hafiz</span>{" "}
        </h1>
        <div className="text-white mt-5 flex items-center justify-around gap-4">
          <div className="flex  flex-col justify-start w-full">
            <h5 className="font-bold">Name</h5>
            <h5>Manu M</h5>
          </div>
          <div className="flex  flex-col justify-start w-full">
            <h5 className="font-bold">Name</h5>
            <h5>Manu M</h5>
          </div>
          <div className="flex  flex-col justify-start w-full">
            <h5 className="font-bold">Name</h5>
            <h5>Manu M</h5>
          </div>
        </div>
      </div>
      <div className="w-full p-2 border mt-10 rounded-xl max-h-screen overflow-hidden">
        <h1 className="p-3 px-5 font-bold">Tracking Progress</h1>
        <hr />
        <div className="mt-3 absolute z-20 bg-white text-sm p-3 px-5">
          <h1 className="font-semibold ">#Acknowledgement Number</h1>
          <h5>123456</h5>
        </div>
        <div className="w-full h-[300px] flex p-3 px-5">
          <div className="w-full md:w-1/4 overflow-scroll">
            <div className="mt-20 ">
              <TrackerVertical />
            </div>
          </div>
          <div className="rounded-lg bg-[#F9F9F9] w-full md:w-3/4 mt-3 p-3">
            details
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
