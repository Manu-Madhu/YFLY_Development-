import React, { useEffect, useState } from "react";
import EmptyData from "../loading/EmptyData";
import SingleFollow from "../SingleFollow";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { getFollowUp, getStages, selectEmployee } from "../../utils/Endpoint";
import { useSelector } from "react-redux";

const FollowTable = ({ data, setData, page, entries }) => {
  const [followupModal, setFollowupModal] = useState(false);
  const [followId, setFollowId] = useState(null);
  const [employeeData, setEmployeeData] = useState([]);
  const adminDefinedData = useSelector(state => state.data.adminDefinedData)
  const stagesData = adminDefinedData?.find(item => item.name === 'stage');
  const comMethods = adminDefinedData?.find(item => item.name === 'followup method')



  const axiosPrivate = useAxiosPrivate();

  // getting the Employee data
  const getEmployeeData = async () => {
    try {
      const result = await axiosPrivate.get(selectEmployee);
      if (result.status === 200) {
        setEmployeeData(result?.data?.employee);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ adminDefinedData });
  console.log({ employeeData });

  useEffect(() => {
    getEmployeeData();

  }, []);

  const openModal = (id) => {
    setFollowId(id)
    setFollowupModal(true)
  }

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
              <th className="px-2 py-4">View</th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((item, i) => (
                <tr
                  key={i}
                  className="bg-white border-b  hover:bg-gray-50 text-black  text-xs"
                >
                  <td className="pl-4 py-4 ">{(page - 1) * entries + i + 1}</td>
                  <td className="px-2 py-4 capitalize">
                    {item?.name ? item?.name : "NIL"}
                  </td>
                  <td className="px-2 py-4">
                    {item?.email ? item?.email : "NIL"}
                  </td>
                  <td className="px-2 py-4">
                    {item?.phone ? item?.phone : "NIL"}
                  </td>

                  {/* Employee Assignee */}
                  <td className="px-2 py-4 capitalize">
                    <select
                      name=""
                      id=""
                      className="border focus:outline-none p-2 rounded border-primary_colors/30 cursor-pointer md:w-[125px]"
                    >
                      <option value="">
                        {item?.assigneeName
                          ? item?.assigneeName
                          : "Select assignee"}
                      </option>

                      {
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
                        {item?.stageName
                          ? item?.stageName
                          : "Select a stage"}
                      </option>
                      {
                        stagesData?.list?.map((data) => (
                          <option key={data?._id} value={data?._id}>
                            {data?.label}
                          </option>
                        ))}
                    </select>
                  </td>
                  {/* Methods */}
                  <td className="px-2 py-4 capitalize flex  gap-2">
                    {comMethods &&
                      comMethods?.list?.map((data) => (
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
                            checked={item?.communication?.includes(data._id)}
                          />
                        </div>
                      ))}
                  </td>

                  <td className="px-2 py-4 capitalize">
                    <button
                      onClick={() => openModal(item?.followup)}
                      className="bg-primary_colors p-2 px-4 text-white text-xs rounded">
                      View
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
        <SingleFollow setModal={setFollowupModal} data={data} setData={setData} followId={followId} employeeData={employeeData}
          stagesData={stagesData} comMethods={comMethods}
        />
      )}
    </>
  );
};

export default FollowTable;
