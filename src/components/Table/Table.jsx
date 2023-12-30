import React from "react";

const Table = () => {
  return (
    <div className="relative shadow-md md:rounded-lg overflow-x-scroll md:overflow-hidden mb-3">
      <table className="w-full  text-sm text-left ">
        <thead className="text-xs text-white uppercase bg ">
          <tr className="bg-primary_colors border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              fullName
            </th>
            <th className="px-6 py-4">department</th>
            <th className="px-6 py-4">role</th>
            <th className="px-6 py-4">phoneNumber</th>
            <th className="px-6 py-4">----</th>
            <th className="px-6 py-4  t">
              <div className="font-medium text-white  hover:underline-none hover:text-blue-800 hover:cursor-pointer">
                Edit
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  hover:bg-gray-50 text-black">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              fullName
            </td>
            <td className="px-6 py-4">department</td>
            <td className="px-6 py-4">role</td>
            <td className="px-6 py-4">phoneNumber</td>
            <td className="px-6 py-4">----</td>
            <td className="px-6 py-4  t">
              <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline-none hover:text-blue-800 hover:cursor-pointer">
                Edit
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
