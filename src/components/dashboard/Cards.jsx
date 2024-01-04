import React from "react";
import { useSelector } from "react-redux";

const Cards = ({ data }) => {
  const userData = useSelector((state) => state.auth.userInfo);
  const role = userData.role;
  const suffix = role === "admin" ? "Application" : "Task";

  console.log(data)
  return (
    <div className="flex flex-wrap gap-5  p-8">
      {data.map((data, index) => (
        <div className="border p-5 bg-white rounded-lg shadow w-full md:w-[250px]" key={index}>
          <div className="flex">
            <h4>
              {data?.name + " " + 
                (data.value > 1 ? `${suffix}s` : `${suffix}`)}
            </h4>
          </div>
          <h1 className="text-[30px] font-bold text-primary_colors">{data?.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cards;
