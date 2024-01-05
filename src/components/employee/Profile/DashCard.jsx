import React from "react";
import Progressbar from "../../dashboard/Progressbar";

const DashCard = ({data}) => {
  const total = data?.find((d)=> d.name === "All")?.value;
  const pending = data?.find((d)=> d.name === "Pending")?.value;
  const ongoing = data?.find((d)=> d.name === "On-going")?.value;
  const completed = data?.find((d)=> d.name === "Completed")?.value;
  
  return (
    <div className="rounded-xl flex items-center justify-around p-5 dataCard">
      <div className="flex flex-col items-center text-white w-full">
        <h1 className="font-bold text-[130px]">{total}</h1>
        <h1 className="font-semibold">Total Tasks</h1>
      </div>
      <div className="w-full space-y-3">
        <Progressbar label="Pending" numerator={pending}  denominator={total}/>
        <Progressbar label="On-going" numerator={ongoing}  denominator={total}/>
        <Progressbar label="Completed" numerator={completed}  denominator={total}/>
      </div>
    </div>
  );
};

export default DashCard;
