import React, { useEffect, useState } from "react";
import EmptyData from "../loading/EmptyData";
import SingleFollow from "../SingleFollow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { getFollowUp, getStages, selectEmployee } from "../../utils/Endpoint";

const FollowTable = ({ data, setData, page, entries }) => {
  const [followupModal, setFollowupModal] = useState(false);
  const [followData, setFollowData] = useState({});
  const [employeeData, setEmployeeData] = useState([]);
  const [stagesData, setStages] = useState({});
  const [followUpData, setFollowUpData] = useState({});

  const axiosPrivate = useAxiosPrivate();

  // getting the Employee data
  const getEmployeeData = async () => {
    try {
      const result = await axiosPrivate.get(selectEmployee);
      if (result.status === 200) {
        setEmployeeData(result?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // getting the Stages data
  const getStagesData = async () => {
    try {
      const result = await axiosPrivate.get(getStages);
      if (result.status === 200) {
        setStages(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // getting the getFollowUp data
  const getFollowUpData = async () => {
    try {
      const result = await axiosPrivate.get(getFollowUp);
      if (result.status === 200) {
        console.log(result?.data?.data);
        setFollowUpData(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  useEffect(() => {
    getEmployeeData();
    getStagesData();
    getFollowUpData();
  }, []);

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
              <th className="px-2 py-4">Assignee</th>
              <th className="px-2 py-4">Stage</th>
              <th className="px-2 py-4">followup method</th>
              <th className="px-2 py-4">Submit</th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((follow, i) => (
                <tr
                  key={i}
                  className="bg-white border-b  hover:bg-gray-50 text-black  text-xs"
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

                  {/* Employee Assignee */}
                  <td className="px-2 py-4 capitalize">
                    <select
                      name=""
                      id=""
                      className="border focus:outline-none p-2 rounded border-primary_colors/30 cursor-pointer md:w-[125px]"
                    >
                      <option value="">
                        {follow?.assigneeName
                          ? follow?.assigneeName
                          : "Select a person"}
                      </option>

                      {employeeData &&
                        employeeData.map((data) => (
                          <option key={data?._id} value={data?._id}>
                            {data?.name}
                          </option>
                        ))}
                    </select>
                  </td>

                  {/* Stages */}
                  <td className="px-2 py-4 capitalize">
                    <select
                      name=""
                      id=""
                      className="border focus:outline-none p-2 rounded border-primary_colors/30 cursor-pointer md:w-[125px]"
                    >
                      <option value="">
                        {follow?.stageName
                          ? follow?.stageName
                          : "Select a stage"}
                      </option>
                      {stagesData &&
                        stagesData?.list?.map((data) => (
                          <option key={data?._id} value={data?._id}>
                            {data?.label}
                          </option>
                        ))}
                    </select>
                  </td>
                  {/* Methods */}
                  <td className="px-2 py-4 capitalize flex  gap-2">
                    {followUpData &&
                      followUpData?.list?.map((data) => (
                        <div
                          className="flex flex-col items-start"
                          key={data?._id}
                          value={data?._id}
                        >
                          <label htmlFor={`checkBox-${i}`}>
                            {data?.label?.split("")[0]}
                          </label>
                          <input
                            id={`checkBox-${i}`}
                            type="checkbox"
                            className="cursor-pointer"
                            checked={follow.communication.includes(data._id)}
                          />
                        </div>
                      ))}
                  </td>

                  <td className="px-2 py-4 capitalize">
                    <button className="bg-primary_colors p-2 px-4 text-white text-xs rounded">
                      Done
                    </button>
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
