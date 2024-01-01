import React from "react";
import { GridLoader } from "react-spinners";

const EmptyData = ({ data }) => {
  return (
    <div className="">
      <GridLoader color="#36d7b7" />
      {data}
    </div>
  );
};

export default EmptyData;
