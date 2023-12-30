import React from "react";

const RightSide = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold">
            10/10/2023 - <span>02:30 pm</span>
          </h1>
          <h1 className="text-sm font-bold text-primary_colors">
            Case closed - Offer Received Student not interested to Pay
          </h1>
        </div>
        <div className="mt-10 flex justify-between">
          <div>
            <h1 className="text-primary_colors font-semibold">123456/22-23</h1>
            <h1 className="font-bold">Msc International Business</h1>
            <h1>Canterburry Christ University</h1>
          </div>
          <div className="flex items-end font-bold">Jan 2023</div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default RightSide;
