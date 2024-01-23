import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";

const TaskCard = ({ data, editTask, modal, updateTaskHandler }) => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  const parentData = data?.assignedTo?._id;
  const CuretUser = userInfo?._id;

  const editTaskHandler = (data) => {
    if (parentData === CuretUser ) {
      modal && modal(true);
      editTask(data);
    } else if (updateTaskHandler && userInfo?.role === "Lead" && data?.status !== "Complete") {
      updateTaskHandler(data);
    } else {
      console.log("u are from another one");
    }
  };

  return (
    <>
      <Tippy
        className="text-primaryColor"
        content={
          <div className="w-[250px] p-2 shadow-lg ">
            <ul className="space-y-1 text-xs">
              <li>Priority: {data?.priority}</li>
              <li>TimeLimit: {data?.timeLimit} Day</li>
              <li>
                Status:{" "}
                <span
                  className={
                    data?.status === "Working"
                      ? "text-[#FFF730]"
                      : data?.status === "Complete"
                      ? "text-[#00C78B]"
                      : data?.status === "Updating"
                      ? "text-[#fca151]"
                      : data?.status === "Need help"
                      ? "text-[#FF6464]"
                      : "text-[#4bc3ff]"
                  }
                >
                  {data?.status}
                </span>
              </li>
              <li> Description: {data?.description[data?.description.length-1].text}</li>
            </ul>
          </div>
        }
      >
        <div
          onClick={() => editTaskHandler(data)}
          className={`bg-[#3D3D3D] flex items-center justify-between p-4 text-[12px] text-[#FFFFFF] font-[500] rounded 
        ${
          userInfo?.role === "Lead"
            ? "hover:cursor-grab"
            : "hover:cursor-pointer"
        } hover:scale-105 ease-in-out duration-300 mb-2`}
        >
          <div>
            <h2>{data?.title !== "" ? data?.title : "?"}</h2>
          </div>
          <BsArrowRight size={20} />
          <div className="flex items-center gap-2">
            <h2>{data?.assignedTo?.fullName}</h2>
            <div
              className={`w-3 p-2 rounded-full ${
                data?.status === "Working"
                  ? "bg-[#FFF730]"
                  : data?.status === "Complete"
                  ? "bg-[#00C78B]"
                  : data?.status === "Updating"
                  ? "bg-[#fca151]"
                  : data?.status === "Need help"
                  ? "bg-[#FF6464]"
                  : "bg-[#4bc3ff]"
              }`}
            ></div>
          </div>
        </div>
      </Tippy>
    </>
  );
};

export default TaskCard;
