import React from "react";
import Profile from "./Profile/Profile";
import DashCard from "./Profile/DashCard";
import Applications from "./Profile/Applications";

const EmployeeProfile = () => {
  return (
    <div className="w-full text-black ">
      <h1 className="text-primary_colors text-2xl font-bold capitalize">
        Profile
      </h1>
      <div className="w-full mt-5 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-2/6">
          <Profile />
        </div>
        <div className="w-full md:w-4/6 space-y-5">
          <div>
            <DashCard />
          </div>
          <div>
            <Applications/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
