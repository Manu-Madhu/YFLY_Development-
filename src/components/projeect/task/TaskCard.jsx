import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TimeLimit } from "../../../utils/TimeLimit";
import EmptyData from "../../loading/EmptyData";

const TaskCard = ({ data }) => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  const TimeLimite = TimeLimit(data?.startDate, data?.endDate);

  console.log(data);
  const editTaskHandler = (data) => {};

  return (
    <>
      <Tippy
        className="text-primaryColor"
        content={
          <div className="w-[250px] p-2 shadow-lg ">
            <ul className="space-y-1 text-xs">
              <li>Project Name: {data?.projectName}</li>
              <li>TimeLimit: {TimeLimite} </li>
              <li>
                Status: {data?.taskStatus}
              </li>
              <li>
                {" "}
                Last Comment:{" "}
                {data?.comments && data?.comments?.length > 0 ? (
                  <div>
                    {data?.comments[data?.comments.length - 1]?.comment}
                  </div>
                ) : (
                  <EmptyData />
                )}
              </li>
            </ul>
          </div>
        }
      >
        <div
          onClick={() => editTaskHandler()}
          className={`bg-[#3D3D3D] flex items-center justify-between p-4 text-[12px] text-[#FFFFFF] font-[500] rounded 
        ${
          userInfo?.role === "admin"
            ? "hover:cursor-grab"
            : "hover:cursor-pointer"
        } hover:scale-105 ease-in-out duration-300 mb-2`}
        >
          <div>
            <h2>{data?.taskName}</h2>
          </div>
          <BsArrowRight size={20} />
          <div className="flex items-center gap-2">
            <h2>{}</h2>
            <div
              className={`w-3 p-2 rounded-full ${
                data?.taskStatus === "pending"
                  ? "bg-[#FFF730]"
                  : data?.taskStatus === "completed"
                  ? "bg-[#00C78B]"
                  : data?.taskStatus === "Updating"
                  ? "bg-[#fca151]"
                  : data?.taskStatus === "Need help"
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
