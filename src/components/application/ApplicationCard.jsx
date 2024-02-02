import React from "react";
import { useNavigate } from "react-router-dom";

const ApplicationCard = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) =>
        navigate(`/admin/applications/${data.applicationId}/${data._id}`)
      }
      className="p-8 bg-white rounded-lg shadow-lg w-full md:w-[310px] capitalize hover:scale-105 ease-in-out duration-200 cursor-pointer"
    >
      <h1 className="font-semibold text-primary_colors">
        university:{" "}
        <span className="font-medium text-sm">{data?.university}</span>
      </h1>
      <h1 className="font-semibold text-primary_colors">
        Program:{" "}
        <span className="font-medium text-sm">{data?.program}</span>
      </h1>
      <h1 className="mt-2 text-sm">
        partnership:{" "}
        <span className="font-medium text-gray-500">{data?.partnership}</span>
      </h1>
      <h1 className=" text-sm">
        Total Steps:{" "}
        <span className="font-medium text-gray-500">{data?.steps.length}</span>
      </h1>
    </div>
  );
};

export default ApplicationCard;
