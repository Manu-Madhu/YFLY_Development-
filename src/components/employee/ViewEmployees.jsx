import React from "react";
import { useParams } from "react-router-dom";
import Table from "../Table/Table";

const ViewEmployees = () => {
  const params = useParams();
  return (
    <div className="w-full h-full text-black">
      <h1 className="text-primary_colors text-2xl font-bold capitalize">
        {params?.role}
      </h1>
      <div className="mt-5 ">
        <Table department={params?.role}/>
      </div>
    </div>
  );
};

export default ViewEmployees;
