import React, { useState } from "react";
import CommonTable from "../Table/Commontable";

import instance from "../../utils/AxiosInstance";
import { getAllApplications } from "../../utils/Endpoint";
import AddModal from "./AddModal";

const AllApplications = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(10);

  const [modal, setModal] = useState(false);

  // Table loading Data
  const application = async () => {
    try {
      const response = await instance.get(
        `${getAllApplications}?page=${page}&entries=${entries}`
      );
      setData(response?.data);
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    window.scroll(0,0)
    application();
  }, []);

  return (
    <>
      <div className="w-full h-full text-black ">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-primary_colors text-2xl font-bold">
            Applications
          </h1>
          <button onClick={()=>setModal(true)} className="p-2 px-5 text-normal bg-primary_colors text-white rounded-lg hover:scale-105 ease-in-out duration-200">
            Add New Application
          </button>
        </div>

        <div className="flex flex-wrap mt-5 w-full ">
          <CommonTable data={data} page={page} entries={entries} />
        </div>
      </div>
      {modal && <AddModal setModal={setModal} ca={application}/>}
    </>
  );
};

export default AllApplications;
