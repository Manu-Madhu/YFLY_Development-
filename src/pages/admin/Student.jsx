import React, { useEffect, useState } from "react";
import { getAllStudent } from "../../utils/Endpoint";

import StudentTable from "../../components/Table/StudentTable";
import instance from "../../utils/AxiosInstance";
import Pagination from "../../components/Pagination";
// import Pagination from "../../components/Pagination";

const Student = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(1);

  const studentTable = async () => {
    try {
      const res = await instance.get(`${getAllStudent}?page=${page}&entries=${entries}`);
      setData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scroll(0,0)
    studentTable();
  }, []);
  return (
    <div className="w-full h-full text-black ">
      <h1 className="text-primary_colors text-2xl font-bold">Track Student</h1>
      <div className="w-full mt-5 flex flex-col md:flex-row gap-5">
        <StudentTable data={data} />
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
