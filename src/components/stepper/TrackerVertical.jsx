import React from "react";
import { TiTick } from "react-icons/ti";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineConnector,
//   TimelineHeader,
//   TimelineIcon,
//   TimelineBody,
//   Typography,
// } from "@material-tailwind/react";
// import {
//   HomeIcon,
//   BellIcon,
//   CurrencyDollarIcon,
// } from "@heroicons/react/24/solid";

const TrackerVertical = () => {
  const step = [
    { step: 1, name: "application", status: "completed", assignee: "manum" },
    { step: 2, name: "submit", status: "completed", assignee: "manum" },
    { step: 2, name: "submit", status: "completed", assignee: "manum" },
    { step: 2, name: "submit", status: "completed", assignee: "manum" },
    { step: 2, name: "submit", status: "completed", assignee: "manum" },
    { step: 2, name: "submit", status: "completed", assignee: "manum" },
    { step: 2, name: "submit", status: "completed", assignee: "manum" },
    { step: 2, name: "submit", status: "completed", assignee: "manum" },
    { step: 2, name: "submit", status: "completed", assignee: "manum" },
    { step: 10, name: "submit", status: "completed", assignee: "manum" },
    { step: 3, name: "counseling", status: "pending", assignee: "manum" },
  ];
  return (
    <div className="overflow-scroll">
      {step.map((items, i) => (
        <div key={i} className={`flex gap-x-3 `}>
          <div
            className={`relative h-20 last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] ${
              items?.status === "completed"
                ? "after:bg-primary_colors"
                : "after:bg-slate-300"
            } `}
          >
            <div
              className={`relative  w-8 h-8 flex justify-center items-center rounded-full text-white ${
                items?.status === "completed"
                  ? "bg-primary_colors"
                  : "bg-blue-300"
              }`}
            >
              {items?.status === "completed" ? <TiTick size={24} /> : i + 1}
            </div>
          </div>
          <div
            className={`mt-1 text-sm capitalize ${
              items?.status === "completed"
                ? "text-primary_colors"
                : "text-gray-600"
            } `}
          >
            <h1 className="pb-1 font-semibold">Step {i + 1}</h1>
            <h1 className=" ">{items?.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackerVertical;
