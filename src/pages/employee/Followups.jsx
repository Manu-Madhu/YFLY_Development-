import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useSelector } from "react-redux";
import FollowTable from "../../components/Table/FollowTable";

const Followups = () => {
  return (
    <div className="w-full min-h-screen text-black my-[5vh]">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between">
        <h1 className="text-primary_colors text-2xl font-bold">Follow-ups</h1>
        <div className="flex gap-5">
          {/* Date Starting filter */}
          <div className="relative">
            <label htmlFor="" className="absolute top-[-20px] left-0 text-xs ">
              Starting Date
            </label>
            <input
              // onChange={(e) => setDate((prev) => ({ ...prev, start_date: e.target.value }))}
              type="date"
              name="start_date"
              placeholder=""
              className="cursor-pointer border border-primary_colors p-2  rounded-lg text-secondary text-normal focus:outline-none w-full"
            />
          </div>
          {/* Date Ending Filter */}
          <div className="relative">
            <label htmlFor="" className="absolute top-[-20px] left-0 text-xs ">
              Ending Date
            </label>
            <input
              // onChange={(e) => setDate((prev) => ({ ...prev, end_date: e.target.value }))}
              type="date"
              name="end_date"
              placeholder=""
              className="cursor-pointer border border-primary_colors p-2  rounded-lg text-secondary text-normal focus:outline-none w-full"
            />
          </div>
          {/* Select Status option */}
          <select
            // onChange={(e) => setStatus(e.target.value)}
            className="w-fit border shadow p-2  rounded-lg text-secondary text-normal focus:outline-none"
          >
            <option value="">Status</option>
            <option value="today">Today's</option>
            <option value="upcoming">Upcoming</option>
            <option value="overdue">Overdue</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <FollowTable
          data={[]}
          page={"page"}
          setPage={"setPage"}
          entries={"entries"}
          setEntries={"setEntries"}
        />
      </div>
    </div>
  );
};

export default Followups;
