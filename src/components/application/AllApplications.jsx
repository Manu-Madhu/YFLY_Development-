import React, { useState } from "react";
import { getAllApplications } from "../../utils/Endpoint";
import { Intake } from "../../data/Dashboard";

import CommonTable from "../Table/Commontable";
import instance from "../../utils/AxiosInstance";
import AddModal from "./AddModal";
import Pagination from "../Pagination";

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
    } catch (error) {
      console.log(error);
    }
  };

  // Filter Part
  const filterHandler = async (e) => {
    try {
      const response = await instance.get(
        `${getAllApplications}?page=${page}&entries=${entries}&intake=${e.target.value}`
      );
      console.log(response);
      setData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    window.scroll(0, 0);
    application();
  }, [setPage]);

  return (
    <>
      <div className="w-full h-full text-black ">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-primary_colors text-2xl font-bold">
            Applications
          </h1>

          {/* filter & Application */}
          <div className="flex flex-col md:flex-row gap-3 mt-5 md:mt-0">
            <select
              name="intake"
              id=""
              onChange={filterHandler}
              className="px-5 text-sm text-gray-700 p-2 rounded-lg border border-primary_colors  focus:outline-none"
            >
              <option value="">Intake</option>
              {Intake.map((items, i) => (
                <option key={i} value={items?.name}>
                  {items?.name}
                </option>
              ))}
            </select>
            <button
              onClick={() => setModal(true)}
              className="p-2 px-5 text-normal bg-primary_colors text-white rounded-lg hover:scale-105 ease-in-out duration-200"
            >
              Add New Application
            </button>
          </div>
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
            getMethod={application}
          />
        </div>
      </div>
      {modal && <AddModal setModal={setModal} ca={application} />}
    </>
  );
};

export default AllApplications;
