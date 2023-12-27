import React from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "../../components/employee/EmployeeCard";

const Employee = () => {
  return (
    <div className="w-full h-full text-black ">
      <h1 className="text-primary_colors text-2xl font-bold">Dashboard</h1>
      <div className="flex flex-wrap mt-5 md:mt-10">
        <Link></Link>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
};

export default Employee;
