import React, { useEffect, useState } from "react";
import StudentTable from "../../components/Table/StudentTable";
import instance from "../../utils/AxiosInstance";
import { getAllStudent } from "../../utils/Endpoint";

const Student = () => {
  const [data, setData] = useState();
  const studentTable = async () => {
    try {
      const res = await instance.get(getAllStudent);
      setData(res.data);
      console.log(res.data);
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
    </div>
  );
};

export default Student;
