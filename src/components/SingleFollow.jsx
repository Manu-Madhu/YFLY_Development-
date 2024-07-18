import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { followupRoute } from "../utils/Endpoint";

const SingleFollow = ({ setModal, data, followId, employeeData, stagesData, comMethods }) => {

  const axiosPrivate = useAxiosPrivate();
  const [followData, setFollowData] = useState({})

  const getFollowup = async () => {
    try {
      const response = await axiosPrivate.get(`${followupRoute}/${followId}`)

      if (response.status === 200) {
        setFollowData(response.data.followup)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (followId) {
      getFollowup()

    }
  }, [followId])

  console.log({ followData })

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-black/50 flex items-center justify-center z-50 p-5">
      <div className="relative bg-white w-full md:w-1/2 rounded-lg  p-5">
        <IoClose
          onClick={() => setModal(false)}
          className="absolute right-1 top-1 rounded bg-primary_colors text-white cursor-pointer"
        />
        <div className="flex flex-col w-full items-center justify-center border-2 rounded-lg border-dotted border-primary_colors p-5 md:p-17">

          <div

            className=" rounded-lg w-full flex flex-col gap-4"
          >
            <h1 className="font-bold text-center text-xl md:text-[22px] text-primary_colors pb-3">
              View{'isAssignee' && '/Edit'} Follow-Up
            </h1>


            <p className="mb-3 capitalize">Follow Up with {followData?.studentId?.name ? followData?.studentId?.name : "NIL"}</p>

            <div className="w-full flex flex-col sm:flex-row flex-wrap">
              {/* Employee Assignee */}
              <div className="px-2 py-4 capitalize">
                <select
                  name=""
                  id=""
                  className="border focus:outline-none p-2 rounded border-primary_colors/30 cursor-pointer md:w-[125px]"
                  value={followData?.assignee?._id
                    ? followData?.assignee?._id
                    : ""}
                >
                  {
                    employeeData.map((data) => (
                      <option key={data?._id} value={data?._id}>
                        {data?.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* Stages */}
              <div className="px-2 py-4 capitalize">
                <select
                  name=""
                  id=""
                  className="border focus:outline-none p-2 rounded border-primary_colors/30 cursor-pointer md:w-[125px]"
                  value={followData?.stage ?? ""}
                >
  
                  {
                    stagesData?.list?.map((data) => (
                      <option key={data?._id} value={data?._id}>
                        {data?.label}
                      </option>
                    ))}
                </select>
              </div>
              
              {/* Methods */}
              <div className="px-2 py-4 capitalize flex flex-wrap gap-2">
                {
                  comMethods?.list?.map((data) => (
                    <div
                      className="w-fit flex items-center gap-2 p-2 rounded-lg border border-primary_colors"
                      key={data?._id}
                      value={data?._id}
                    >
                      <label
                      // htmlFor={`checkBox-${i}`}
                      >
                        {data?.label}
                      </label>
                      <input
                        // id={`checkBox-${i}`}
                        type="checkbox"
                        className="cursor-pointer"
                        checked={followData?.communication?.includes(data._id)}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* <div className="w-full relative">
              Notes:
              <textarea
                name="note"
                placeholder="Note"
                id=""
                cols="20"
                rows="2"
                value={"divData?.note"}
                onChange={"changeHandler"}
                disabled={"!isAssignee"}
                className="w-full border-2 rounded-lg bg-primary_colors/5  border-primary_colors p-2 focus:outline-none"
              ></textarea>
            </div> */}

            {/* BUTTON */}

            <div className="text-white text-normal space-x-3 flex items-center justify-between mt-5">
              <button
                type="button"
                // onClick={()=> setAddBox(true)}
                className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200"
              >
                Add Note
              </button>

              <button
                type="submit"
                className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200"
              >
                Save
              </button>

            </div>

          </div>

        </div>
      </div>
      {/* {loader && <ReqLoader />} */}

      {/* {addBox && <FollowupBox setModal={setAddBox} data={leadData} getMethod={getMethod} /> } */}
    </div>
  );
};

export default SingleFollow;
