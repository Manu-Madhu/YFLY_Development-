import React from "react";
import { useSelector } from "react-redux";

const Cards = ({ data }) => {
  const userData = useSelector((state) => state.auth.userInfo);
  const role = userData.role;
  const suffix = role === "admin" ? "Application" : "Task";

  return (
    <div className="flex flex-wrap gap-5 ">
      {data.map((data, index) => (
        <div className="flex flex-col p-5 bg-white rounded-lg shadow-xl w-full md:w-[220px]" key={index}>
          <h1 className="text-[30px] font-bold text-primary_colors">{data?.value}</h1>
          <div className="flex">
            <h4 className="text-sm font-semibold text-primary_colors">
              {data?.name + " " + 
                (data.value > 1 ? `${suffix}s` : `${suffix}`)}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
