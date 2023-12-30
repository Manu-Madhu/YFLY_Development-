import React, { Suspense, lazy, useEffect, useState } from "react";
import { dashData } from "../../utils/Endpoint";
import { FaUserGraduate } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

import Filter from "../../components/dashboard/Filter";
import axios from "../../utils/AxiosInstance";
import RegistrationForm from "../../components/dashboard/RegistrationForm";
import { Link } from "react-router-dom";

const Card = lazy(() => import("../../components/dashboard/Cards"));

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  // @DCS All Card Data
  useEffect(() => {
    axios
      .get(dashData)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="w-full h-full text-black ">
        <h1 className="text-primary_colors text-2xl font-bold">Dashboard</h1>
        <h3 className="text-secondary text-[14px]">
          Welcome to Course Finder Portal
        </h3>
        <div className="mt-5 md:mt-10 space-y-7">
          <div>
            <Filter setData={setData} />
          </div>
          <div className="bg_image">
            <Suspense fallback={<div>Loading...</div>}>
              <Card data={data} />
            </Suspense>
          </div>
          <div className="w-full flex items-center justify-around">
            <button
              className="me-2 p-2 px-4 text-normal bg-primary_colors text-white rounded-lg hover:scale-105 ease-in-out duration-200"
            >
              Register a New Employeee
            </button>

            <button
              onClick={() => setModal(!modal)}
              className="me-2 p-2 px-4 text-normal bg-primary_colors text-white rounded-lg hover:scale-105 ease-in-out duration-200"
            >
              Register a New Student
            </button>
          </div>
         
        </div>
        <div className="flex flex-col md:flex-row w-full mt-5 md:mt-10 gap-5 md:gap-2">
          <div className=" md:w-1/2 ">
            <div className="border-2 border-primary_colors  p-9  rounded hover:shadow-xl cursor-pointer">
              <div className=" ">
                <FaUserGraduate className="text-3xl text-primary_colors" />
              </div>
              <h1 className="text-xl font-semibold text-primary_colors my-2">
                Students
              </h1>
              <div>
                <Link to={"#"}>
                  <h1 className="hover:underline hover:text-primary_colors">
                    Manage Student
                  </h1>
                </Link>
                <Link to={"#"}>
                  <h1 className="hover:underline hover:text-primary_colors">
                    Manage Application
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 ">
            <div className="border-2 border-primary_colors  p-9  rounded hover:shadow-xl cursor-pointer">
              <div className=" ">
                <MdManageAccounts className="text-5xl text-primary_colors" />
              </div>
              <h1 className="text-xl font-semibold text-primary_colors my-3">
                Track Employee
              </h1>
              <div>
                <Link
                  to={"#"}
                  className="hover:underline hover:text-primary_colors"
                >
                  <h1 className="flex-wrap">
                    UnderStand the Workflow of all employees.{" "}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && <RegistrationForm setModal={setModal} />}
    </>
  );
};

export default Dashboard;
