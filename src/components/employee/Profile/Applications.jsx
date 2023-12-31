import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Applications = ({ data }) => {
  const user = useSelector((state) => state?.auth?.userInfo);
  console.log(  data?.applicationList)
  return (
    <>
      {user?.role === "admin" && (
        <h1 className="mt-10 mb-5 text-xl font-bold text-primary_colors">
          Applications
        </h1>
      )}

      {
        data?.map((work,i)=>(
          <div key={i} className="bg-gradient-to-r from-[#52C3FF] to-[#D0EAFF] p-5 flex justify-around rounded-xl shadow-xl relative">
            <img
              src={require("../../../assets/icon/application_ban.png")}
              alt="ban"
              className="w-10 absolute -top-2 right-3 object-contain"
            />
            <div className="p-5 flex flex-col w-full text-white">
              <h1 className="font-bold">
                ID : <span className="font-normal">{work?._id}</span>
              </h1>
              <h1 className="font-bold">
                Student Name : <span className="font-normal">{work?.studentDetails?.name}</span>
              </h1>
              <h1 className="font-bold">
                Country : <span className="font-normal">{work?.country}</span>
              </h1>
            </div>
            <div className="p-5 w-full flex flex-col md:flex-row gap-3">
              <Link to={`/admin/application/${work?._id}`}>
                <button className="p-2 px-10 h-10 text-white rounded bg-[#3B7493]">
                  View
                </button>
              </Link>
            ) : (
              <Link to={`/employee/application/${application._id}`}>
                <button className="p-2 px-10 h-10 text-sm text-white rounded bg-[#3B7493]">
                  View
                </button>
              </Link>
            )}
            <div className="p-2 px-10 h-10 text-sm text-white rounded bg-[#E87D00] capitalize">
              {application?.status}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Applications;
