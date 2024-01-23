import React, { useState } from "react";
import CommonTable from "../Table/Commontable";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";

const Application = () => {
  //   const [data, setData] = useState();

  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(10);

  const data = useSelector((state) => state.search.searchData);

  return (
    <div className="w-full h-full text-black pt-10 pb-28">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-primary_colors text-2xl font-bold">Applications</h1>
      </div>

      {/* Common Table */}
      <div className="flex flex-wrap mt-5 w-full ">
        <CommonTable data={data} page={page} entries={entries} />
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-end">
        <Pagination
          Data={data}
          page={page}
          setPage={setPage}
          getMethod={setPage}
        />
      </div>
    </div>
  );
};

export default Application;
