import React from "react";

const Cards = ({ data }) => {
  console.log(data)
  return (
    <div className="flex flex-wrap gap-5  p-8">
      {data.map((data, index) => (
        <div className="border p-5 bg-white rounded-lg shadow w-full md:w-[250px]" key={index}>
          <div className="flex">
            <h4>
              {data?.name + " " + 
                (data.value > 1 ? "Applications" : "Application")}
            </h4>
          </div>
          <h1 className="text-[30px] font-bold text-primary_colors">{data?.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cards;
