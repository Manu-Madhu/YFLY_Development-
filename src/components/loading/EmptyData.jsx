import React from "react";
import { PulseLoader  } from "react-spinners";

const EmptyData = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <PulseLoader  color="#058BD2" />
      <span className="text-gray-500 text-sm mt-2">{data}</span>
    </div>
  );
};

export default EmptyData;
