import React, { useEffect, useState } from "react";
import Carousel from "../../components/student/Carousel";
import axios from "../../utils/AxiosInstance";
import StudentStepper from "../../components/student/StudentStepper";
import DateFormat from "../../utils/DateFormat";
import DocModal from "../../components/student/DocModal";

import { Banner } from "../../data/Banner";
import { useSelector } from "react-redux";
import { getAnApplicationRoute } from "../../utils/Endpoint";

const StudentDashboard = () => {
  const [state, setState] = useState([]);
  const [docModal,setDocModal] = useState(false)
  const user = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    axios
      .get(`${getAnApplicationRoute}/${user?.applicationId}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="px-5">
        <Carousel banner={Banner} />
        <div className="">
          <div className="mt-10 p-5 bg-gradient-to-b from-[#28B5FF] to-[#1B4160] rounded-lg">
            <h1 className="text-white  text-2xl">
              Welcome{" "}
              <span className="font-semiBold capitalize">{user?.name}</span>
            </h1>
            <p className="text-white text-[11px]">
              <span className="font-semibold">DOB :</span>{" "}
              {DateFormat(user?.birthDate)}
            </p>
            {/* details about the student */}
            <div className="text-white text-xs mt-8 flex justify-between">
              <div>
                <h1 className="font-semibold pb-0.5">Email</h1>
                <p>{user?.email}</p>
              </div>
              <div>
                <h1 className="font-semibold pb-0.5">Phone</h1>
                <p>{user?.phone}</p>
              </div>
              <div>
                <h1 className="font-semibold pb-0.5">Country</h1>
                <p>{state?.country}</p>
              </div>
              <div>
                <h1 className="font-semibold pb-0.5">University</h1>
                <p>{state?.university}</p>
              </div>
              <div>
                <h1 className="font-semibold pb-0.5">Course</h1>
                <p>{state?.program}</p>
              </div>
              <div>
                <h1 className="font-semibold pb-0.5">Intake</h1>
                <p>{state?.intake}</p>
              </div>
            </div>
          </div>
          {/* Tracker for the status */}
          <div className="mt-10">
            <h1 className="text-[#0061B2] font-bold text-xl">
              Track your Progress
            </h1>
            <div className="w-full overflow-y-auto mt-10">
              <StudentStepper />
            </div>
          </div>
          {/* Document Update and view */}
          <div className="mt-10 flex flex-col justify-end">
            <div className="w-full mb-5">
              <h1 className="text-[#0061B2] font-bold text-xl">Documents</h1>
              <div className="my-5">
                {state?.documents?.length > 0 ? (
                  <div>
                    {state?.documents?.map((items, i) => (
                      <h1 key={i} className="text-sm font-semibold">
                        {" "}
                        Document ID :{" "}
                        <span className="text-gray-500">{items?._id}</span>
                      </h1>
                    ))}
                  </div>
                ) : (
                  <div>
                    <h1>No Documents are submitted</h1>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button onClick={()=>setDocModal(true)} className="bg-[#0061B2] md:w-1/4 text-white text-sm p-2 px-5 rounded hover:scale-105 ease-in-out duration-300">
                Upload Documents
              </button>
            </div>
          </div>
        </div>
      </div>
      {docModal && <DocModal setModal={setDocModal}/>}
    </>
  );
};

export default StudentDashboard;
