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
    <div className="">
      {step.map((items, i) => (
        <div class="flex gap-x-3 ">
          <div
            class={`relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] ${items?.status === "completed" ? "after:bg-primary_colors" : "after:bg-slate-300" } `}
          >
            <div class="relative  w-7 h-7 flex justify-center items-center step">
              {items?.status === "completed" ? <TiTick size={24} /> : i + 1}
            </div>
          </div>
          <div class="">
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 capitalize">
              <h1 className="pb-1 font-semibold">Step {i + 1}</h1>
              <h1 className=" ">{items?.name}</h1> 
            </p>
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <svg
                class="flex-shrink-0 w-4 h-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
              Created "Preline in React" task
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackerVertical;
