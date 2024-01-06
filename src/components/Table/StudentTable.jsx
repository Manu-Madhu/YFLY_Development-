import React from "react";
import { useNavigate } from "react-router-dom";
import DateFormat from "../../utils/DateFormat";

const StudentTable = ({ data }) => {
//   const navigate = useNavigate();
  return (
    <div className="relative min-h-screen shadow-md md:rounded-lg overflow-x-scroll md:overflow-hidden mb-3 w-full">
      <table className="w-full  text-sm text-left ">
        <thead className="text-xs text-white uppercase bg ">
          <tr className="bg-primary_colors border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-bold  text-white"
            >
              No.
            </th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Birth Date</th>
            <th className="px-6 py-4">Qualification</th>
            <th className="px-6 py-4">application Id</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((items, i) => (
            <tr
            //   onClick={(e) => navigate(`/admin/application/${items._id}`)}
              key={items?._id}
              className="bg-white border-b  hover:bg-gray-50 text-black cursor-pointer capitalize"
            >
              <td className="px-6 py-4">{i + 1}</td>
              <td className="px-6 py-4">{items?.name}</td>
              <td className="px-6 py-4">{items?.email}</td>
              <td className="px-6 py-4">{items?.phone}</td>
              <td className="px-6 py-4">{items?.birthDate ? DateFormat(items?.birthDate) : "NIL"}</td>
              <td className="px-6 py-4">{items?.qualification ? items?.qualification : "NIL"}</td>
              <td className="px-6 py-4 ">
                {items?.applicationId ? items?.applicationId : "NIL" }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
