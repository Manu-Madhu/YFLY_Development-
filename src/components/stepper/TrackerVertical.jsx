import React from "react";
import { TiTick } from "react-icons/ti";

const TrackerVertical = () => {
  const step = [
    { step: 1, name: "application" },
    { step: 2, name: "submit" },
    { step: 3, name: "application" },
  ];
  return (
    <div className="w-full">
      {step?.map((items, i) => (
        <div className="flex">
          <div className="step">{<TiTick size={24} />}</div>
          <div className="text-gray-500 text-xs font-semibold mt-2">
            {items?.step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackerVertical;
