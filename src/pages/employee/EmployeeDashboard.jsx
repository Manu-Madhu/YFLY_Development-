import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getEmpTaskMetrics } from "../../utils/Endpoint";

import Cards from "../../components/dashboard/Cards";
import axios from "../../utils/AxiosInstance";
import StudentLoader from "../../components/loading/StudentLoader";

const EmployeeDashboard = () => {
  const userData = useSelector((state) => state.auth.userInfo);
  const [dashData, setDashdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${getEmpTaskMetrics}/${userData._id}`)
      .then((res) => {
        setDashdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {" "}
      <div className="w-full h-full text-black ">
        <h1 className="text-primary_colors text-2xl font-bold mt-3">
          Dashboard
        </h1>
        <h3 className="text-secondary text-[14px] capitalize">
          <span className="font-bold">{userData?.name}</span> Welcome to the
          dashboard
        </h3>
        <div className="mt-5 md:mt-10 space-y-7">
          <div>{/* <Filter setData={setData} /> */}</div>
          <div className="">
            {loading ? <StudentLoader /> : <Cards data={dashData} />}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-8 md:mt-8 gap-5 md:gap-2">
          <div className=" md:w-1/2 ">
            <div className="border-2 border-primary_colors  p-9  rounded hover:shadow-xl cursor-pointer">
              <div className=" ">
                <FaUserGraduate className="text-3xl text-primary_colors" />
              </div>
              <h1 className="text-xl font-semibold text-primary_colors my-2">
                Students
              </h1>
              <div>
                <Link to={"/employee/task"}>
                  <h1 className="hover:underline hover:text-primary_colors">
                    Manage Task
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
