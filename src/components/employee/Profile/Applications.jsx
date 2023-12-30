import React from "react";
import { Link } from "react-router-dom";

const Applications = ({data}) => {
  console.log(data)
  console.log(data?.applicationList)
  return (
    <>
      <h1 className="mt-10 mb-5 text-xl font-bold text-primary_colors">
        Applications
      </h1>

      {
        data?.applicationList?.map((application,i)=>(
          <div className="bg-gradient-to-r from-[#52C3FF] to-[#D0EAFF] p-5 flex justify-around rounded-xl shadow-xl relative mb-3">
            <img
              src={require("../../../assets/icon/application_ban.png")}
              alt="ban"
              className="w-10 absolute -top-2 right-3 object-contain"
            />
            <div className="p-5 flex flex-col w-full text-white">
              <h1 className="font-bold">
                ID : <span className="font-normal">{application?._id}</span>
              </h1>
              <h1 className="font-bold">
                Student ID : <span className="font-normal">{application?.studentId}</span>
              </h1>
              <h1 className="font-bold">
                Country : <span className="font-normal">{application?.country}</span>
              </h1>
            </div>
            <div className="p-5 w-full flex flex-col md:flex-row gap-3">
              <Link to={`/admin/application/${application._id}`}>
                <button className="p-2 px-10 h-10 text-white rounded bg-[#3B7493]">
                  View
                </button>
              </Link>

              <div className="p-2 px-10 h-10 text-white rounded bg-[#E87D00]">
                Status
              </div>
            </div>
          </div>

        ))
      }
    </>
  );
};

export default Applications;
