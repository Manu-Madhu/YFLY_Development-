import React from "react";

const EmployeeCard = () => {
  return (
    <div className="w-full md:w-1/3 p-1 ">
      <div className="emp_card shadow-lg flex flex-col items-center justify-center rounded-xl p-5 hover:scale-95 ease-in-out duration-200 cursor-pointer">
        <img src="" alt="" />
        <img
          src={require("../../assets/icon/employee/Counselers.png")}
          alt="icon"
        />
        <h1 className="font-bold text-white">COUNSELLORS</h1>
      </div>
    </div>
  );
};

export default EmployeeCard;
