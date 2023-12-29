import React from "react";

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
      <div className="w-full border mt-10 rounded-xl">
        <h1 className="p-3 px-5 font-bold">Tracking Progress</h1>
        <hr />
        <div>
            
        </div>
      </div>
    </>
  );
};

export default Application;
