import React, { useEffect, useState } from "react";
import { getAllStudent } from "../../utils/Endpoint";

import StudentTable from "../../components/Table/StudentTable";
import instance from "../../utils/AxiosInstance";
import Pagination from "../../components/Pagination";
import SearchData from "../../components/search/SearchData";
import { toast } from "react-toastify";
// import Pagination from "../../components/Pagination";

const Student = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");

  // Table initial api call
  const studentTable = async () => {
    try {
      const res = await instance.get(
        `${getAllStudent}?page=${page}&entries=${entries}`
      );
      setData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    studentTable();
  }, []);

  // Search Student
  const searchHandler = async () => {
    try {
      const response = await instance.get(`${getAllStudent}?search=${search}`);
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.log(error);
      toast.warning("Something Wrong...");
    } finally {
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="w-full h-full text-black pt-10 pb-28">
      <div className="flex justify-between">
        <h1 className="text-primary_colors text-2xl font-bold">
          Track Student
        </h1>
        <div>
          <SearchData
            placeholder={"Student Data"}
            searchHandler={searchHandler}
            handleKeyPress={handleKeyPress}
            setSearch={setSearch}
          />
        </div>
      </div>
      <div className="w-full mt-5 flex flex-col md:flex-row gap-5">
        <StudentTable data={data} getData={studentTable} />
      </div>

      {/* <Pagination/> */}
      <div className="w-full flex justify-end">
        <Pagination
          Data={data}
          page={page}
          setPage={setPage}
          getMethod={studentTable}
        />
      </div>
    </div>
  );
};

export default Student;
