import React from "react";
import LoadingData from "../loading/LoadingData";

const StudentTable = ({ data }) => {
  //   const navigate = useNavigate();
  return (
    <div className="relative min-h-screen shadow-md md:rounded-lg overflow-x-scroll md:overflow-hidden mb-3 w-full">
      <table className="w-full  text-sm text-left ">
        <thead className="text-xs text-white uppercase bg ">
          <tr className="bg-primary_colors border-b  ">
            <th scope="row" className="px-6 py-4 font-bold  text-white">
              No.
            </th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            {/* <th className="px-6 py-4">Birth Date</th> */}
            <th className="px-6 py-4">Qualification</th>
            <th className="px-6 py-4">application Id</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((items, i) => (
              <tr
                key={items?._id}
                className="bg-white border-b  hover:bg-gray-50 text-black cursor-pointer "
              >
                <td className="px-6 py-4 ">{i + 1}</td>
                <td className="px-6 py-4 truncate capitalize">{items?.name}</td>
                <td className="px-6 py-4">{items?.email}</td>
                <td className="px-6 py-4">{items?.phone}</td>
                {/* <td className="px-6 py-4 truncate">
                  {items?.birthDate ? DateFormat(items?.birthDate) : "NIL"}
                </td> */}
                <td className="px-6 py-4 capitalize">
                  {items?.qualification ? items?.qualification : "NIL"}
                </td>
                <td className="px-6 py-4 truncate">
                  {items?.applicationId ? items?.applicationId : "NIL"}
                </td>
              </tr>
            ))
          ) : (
            <div className="w-full top-40 absolute items-center justify-center">
              <LoadingData />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
