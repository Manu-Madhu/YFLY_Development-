import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ data }) => {
  const navigate = useNavigate();

  const totalTask = data?.tasks?.length;
  const completedTask = data?.tasks?.filter(
    (items) => items?.taskStatus === "completed"
  ).length;

  const percentage = (completedTask / totalTask) * 100;

  console.log(data);
  return (
    <div
      onClick={() => navigate(`/admin/project/team/${data?._id}`)}
      className="w-full bg-white p-5 rounded-lg shadow-xl flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-10"
    >
      {/* Project Name */}
      <div className="w-full  font-semibold">
        <h1>{data?.name}</h1>
      </div>

      {/* Status */}
      <div
        className={`w-full flex items-center justify-center border border-green-600 px-10 rounded-lg  p-2 text-sm text-green-600`}
      >
        <h1>{data?.status}</h1>
      </div>

      {/* {Progress Bar} */}
      <div className="w-full ">
        <div className="flex justify-between mb-1">
          <h1 className="text-sm">Task</h1>
          <h1 className="text-sm">
            {percentage ? Math.floor(percentage) : 0} %
          </h1>
        </div>
        <ProgressBar
          completed={Math.floor(percentage)}
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
