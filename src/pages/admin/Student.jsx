import React, { useEffect, useState } from "react";
import { getAllStudent } from "../../utils/Endpoint";

import StudentTable from "../../components/Table/StudentTable";
import instance from "../../utils/AxiosInstance";
import Pagination from "../../components/Pagination";
import SearchData from "../../components/search/SearchData";
import { toast } from "react-toastify";
import { Office } from "../../data/Dashboard";
import { useSelector } from "react-redux";
import ReqLoader from "../../components/loading/ReqLoader";
// import Pagination from "../../components/Pagination";

const Student = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(10);
  const [office, setOffice] = useState("");
  const [search, setSearch] = useState("");
  const user = useSelector((state)=> state?.auth?.userInfo)

  // Table initial api call
  const studentTable = async () => {
    try {
      setLoader(true)
      const res = await instance.get(
        `${getAllStudent}?page=${page}&entries=${entries}&office=${office}`
      );
      setData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoader(false)
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    studentTable();
  }, [office]);

  // Search Student
  const searchHandler = async () => {
    try {
      setLoader(true)
      const response = await instance.get(`${getAllStudent}?search=${search}`);
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.log(error);
      toast.warning("Something Wrong...");
    } finally {
      setLoader(false)
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="w-full h-full text-black pt-10 pb-28">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-primary_colors text-2xl font-bold">
          Track Student
        </h1>
        <div className="flex flex-col md:flex-row mt-4 md:mt-0 gap-4">

          {
            user?.role === "admin"
            &&
            <select
              onChange={(e)=> setOffice(e.target.value)}
              className="border border-primary_colors p-2  rounded-lg text-secondary text-normal focus:outline-none w-1/2"
            >
              <option value= "" >Select Office</option>
              {
                Office.map((item)=>(
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))
              }

            </select>
          }
            
          <SearchData
            placeholder={"Student Data"}
            searchHandler={searchHandler}
            handleKeyPress={handleKeyPress}
            setSearch={setSearch}
          />
        </div>
      </div>
      <div className="w-full mt-5 flex flex-col md:flex-row gap-5">
        <StudentTable data={data} getData={studentTable} page={page} entries={entries} />
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
      {loader && <ReqLoader />}
    </div>
  );
};

export default Student;
