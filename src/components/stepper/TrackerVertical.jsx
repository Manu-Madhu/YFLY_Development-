import Tippy from "@tippyjs/react";
import React from "react";
import { TiTick } from "react-icons/ti";

const TrackerVertical = ({ data }) => {
  return (
    <div className="overflow-scroll mb-10">
      {data?.steps?.map((items, i) => (
        <div key={i} className={`flex gap-x-3 `}>
          <div
            className={`relative h-20 last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] ${
              items?.status === "complete"
                ? "after:bg-primary_colors"
                : "after:bg-gray-500"
            } `}
          >
            <div
              className={`relative z-10  w-8 h-8 flex justify-center items-center rounded-full text-white ${
                items?.status === "complete"
                  ? "bg-primary_colors"
                  : "bg-blue-300"
              }`}
            >
              {items?.status === "complete" ? <TiTick size={24} /> : i + 1}
            </div>
          </div>
          <div
            className={`mt-1 text-sm capitalize ${
              items?.status === "complete"
                ? "text-primary_colors"
                : "text-gray-600"
            } `}
          >
            <h1 className="pb-1 font-semibold">Step {i + 1}</h1>
            <Tippy className="" content={<div>{items.name}</div>}>
              <p className="text-gray-500 w-10  text-xs font-semibold mt-2 truncate cursor-pointer">
                {items.name}{" "}
              </p>
            </Tippy>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackerVertical;
