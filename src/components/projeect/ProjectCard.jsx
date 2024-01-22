import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ProjectCard = () => {
    
  return (
    <div className="w-full bg-white p-5 rounded-lg shadow-xl flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-10">
      {/* Project Name */}
      <div className="w-full  font-semibold">
        <h1>Project Name</h1>
      </div>

      {/* Status */}
      <div className={`w-full flex items-center justify-center border border-green-600 px-10 rounded-lg  p-2 text-sm text-green-600`}>
        <h1>Running</h1>
      </div>

      {/* {Progress Bar} */}
      <div className="w-full ">
        <div className="flex justify-between mb-1">
          <h1 className="text-sm">Task</h1>
          <h1 className="text-sm">11 %</h1>
        </div>
        <ProgressBar
          completed={Math.floor((1 / 1) * 100)}
          animateOnRender={true}
          height="13px"
          width=""
          labelSize={8}
          className="w-full"
          bgColor="#1090D4"
        />
      </div>

      {/* {Options} */}
      <div className="flex items-center justify-between md:justify-center gap-3">
        <FaRegEdit
          size={23}
          className="cursor-pointer hover:scale-105 ease-in-out duration-400"
        />
        <MdDeleteOutline
          size={23}
          className="cursor-pointer hover:scale-105 ease-in-out duration-400 text-red-700"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
