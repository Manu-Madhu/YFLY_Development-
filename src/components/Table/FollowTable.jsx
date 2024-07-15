import React, { useState } from "react";
import EmptyData from "../loading/EmptyData";
import SingleFollow from "../SingleFollow";

const FollowTable = ({ data, setData, page, entries }) => {
  const [followupModal, setFollowupModal] = useState(false);
  const [followData, setFollowData] = useState({});

  return (
    <>
      <div className="relative md:h-full w-full shadow-md md:rounded-lg overflow-x-scroll md:overflow-hidden mb-3">
        <table className="w-full  text-sm text-left ">
          <thead className="text-xs text-white capitalize bg ">
            <tr className="bg-primary_colors border-b ">
              <th scope="row" className="pl-4 py-4 font-bold  text-white">
                No.
              </th>
              <th className="px-2 py-4">Name</th>
              <th className="px-2 py-4">Email</th>
              <th className="px-2 py-4">Phone</th>
              <th className="px-2 py-4">Qualification</th>
              <th className="px-2 py-4">Assignee</th>
              <th className="px-2 py-4">Stage</th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((follow, i) => (
                <tr
                  key={i}
                  className="bg-white border-b  hover:bg-gray-50 text-black cursor-pointer text-xs"
                >
                  <td className="pl-4 py-4 ">{(page - 1) * entries + i + 1}</td>
                  <td className="px-2 py-4 capitalize">
                    {follow?.name ? follow?.name : "NIL"}
                  </td>
                  <td className="px-2 py-4">
                    {follow?.email ? follow?.email : "NIL"}
                  </td>
                  <td className="px-2 py-4">
                    {follow?.phone ? follow?.phone : "NIL"}
                  </td>
                  <td className="px-2 py-4 capitalize">
                    {follow?.qualification ? follow?.qualification : "NIL"}
                  </td>
                  <td className="px-2 py-4 capitalize">
                    {follow?.assigneeName ? follow?.assigneeName : "NIL"}
                  </td>
                  <td className="px-2 py-4 capitalize">
                    {follow?.stageName ? follow?.stageName : "NIL"}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white border-b  hover:bg-gray-50 text-black cursor-pointer">
                <div className="w-full h-full absolute justify-center">
                  <EmptyData data={"No Available Data "} />
                </div>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {followupModal && (
        <SingleFollow setModal={setFollowupModal} data={followData} />
      )}
    </>
  );
};

export default FollowTable;
