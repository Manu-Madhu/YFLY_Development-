import React from "react";
import Progressbar from "../../dashboard/Progressbar";

const DashCard = () => {
  return (
    <div className="rounded-xl flex items-center justify-around p-5 dataCard">
      <div className="flex flex-col items-center text-white w-full">
        <h1 className="font-bold text-[130px]">6</h1>
        <h1 className="font-semibold">Total Applications</h1>
      </div>
      <div className="w-full space-y-3">
        <Progressbar />
        <Progressbar />
      </div>
    </div>
  );
};

export default DashCard;
