import React from "react";
import DateFormat from "../../utils/DateFormat";

import { useNavigate } from "react-router-dom";

const CommonTable = ({ data, page, entries }) => {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen shadow-md md:rounded-lg overflow-x-scroll md:overflow-hidden mb-3 w-full">
      <table className="w-full  text-sm text-left ">
        <thead className="text-xs text-white uppercase bg ">
          <tr className="bg-primary_colors border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-bold"
            >
              No.
            </th>
            <th className="px-6 py-4">Date Created</th>
            <th className="px-6 py-4">Student Name</th>
            <th className="px-6 py-4">University</th>
            <th className="px-6 py-4">Program</th>
            <th className="px-6 py-4">Intake</th>
            {/* <th className="px-6 py-4">Stage</th> */}
            <th className="px-6 py-4">Application Status</th>
            <th className="px-6 py-4"> Assignee</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((items, i) => (
            <tr
              onClick={(e) => navigate(`/admin/application/${items._id}`)}
              key={items?._id}
              className="bg-white border-b  hover:bg-gray-50 text-black cursor-pointer"
            >
              <td className="px-6 py-4">{i + 1}</td>
              <td className="px-6 py-4">{DateFormat(items?.createdAt)}</td>
              <td className="px-6 py-4">{items?.studentName}</td>
              <td className="px-6 py-4">{items?.university}</td>
              <td className="px-6 py-4">{items?.program}</td>
              <td className="px-6 py-4">{items?.intake}</td>
              {/* <td className="px-6 py-4">
                {items?.steps.length > 0
                  ? (items?.steps?.filter((items)=>items?.status !== ""))[items?.steps?.length-1]
                  : "Not Start"}
              </td> */}
              <td className="px-6 py-4">{items?.status}</td>
              <td className="px-6 py-4">
                {/* {items?.steps.length > 0
                  ? items?.steps[items.steps.length - 1]?.assignee
                  : "NIL"} */}
                {items?.assignee
                  ? items?.assigneeName
                  : "NIL"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
