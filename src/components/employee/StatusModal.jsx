import React, { useEffect, useRef, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { status } from "../../data/Employee";
import { toast } from "react-toastify";

import axios from "../../utils/AxiosInstance"
import { useSelector } from "react-redux";
import { changeStepStatus } from "../../utils/Endpoint";

const StatusModal = ({ setModal,stepNumber, applicationData , cb}) => {
  const selectRef = useRef();

  console.log(applicationData);
  const employeeData = useSelector((state)=>state.auth.userInfo);

  const employeeSteps = applicationData?.steps?.filter((items)=> items?.assignee  === employeeData?._id);
  console.log(employeeSteps,employeeData)

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      applicationId: applicationData?._id,
      employeeId:employeeData?._id,
      stepNumber,
      stepStatus: selectRef.current.value,
    };
    try {
      const response = await axios.put(changeStepStatus, data);
      console.log(response);
      cb();
      toast.success(response?.data?.msg);
    } catch (error) {
      console.log(error);
      toast.warning(error?.response?.data?.msg);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white mt-60  md:mt-0 md:w-1/2 rounded-lg p-5  md:p-10 md:px-14 m-5">
        <IoCloseCircle
          onClick={() => setModal(false)}
          className="absolute right-3 top-3 rounded bg-primary_colors text-white cursor-pointer"
        />

        {/* Form part */}
        <div className="flex flex-col w-full border p-5 rounded shadow">
          <form
            action=""
              onSubmit={submitHandler}
            className="flex flex-col md:flex-row justify-around w-full gap-3"
          >
            {/* File Name and submit */}
            <div className="md:w-1/2">
              <h1 className="text-xs">
                Update the status of step {stepNumber}*
              </h1>
              <label htmlFor="" className="text-sm text-gray-600 font-semibold">
                Step Status*
              </label>
              <div className="mt-1">
                <select
                  ref={selectRef}
                  name="stepStatus"
                  id=""
                  className="border p-2 w-full rounded focus:outline-none"
                >
                  <option value="">Select an option</option>
                  {status.map((items) => (
                    <option value={items?.name} >{items?.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="bg-primary_colors p-2 px-4 rounded text-white text-sm mt-6 w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
