import React, { Suspense, lazy, useEffect, useState } from "react";
import { dashData } from "../../utils/Endpoint";

import Filter from "../../components/dashboard/Filter";
import axios from "../../utils/AxiosInstance";
import RegistrationForm from "../../components/dashboard/RegistrationForm";

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
      <div className="w-full h-full text-black overflow-scroll scrollbar-hidden pb-10">
        <h1 className="text-primary_colors text-2xl font-bold">Dashboard</h1>
        <h3 className="text-secondary text-[14px]">
          Welcome to Course Finder Portal
        </h3>
        <div className="mt-5 md:mt-10 space-y-5">
          <div>
            <Filter setData={setData} />
          </div>
          <div className="overflow-y-auto bg_image">
            <Suspense fallback={<div>Loading...</div>}>
              <Card data={data} />
            </Suspense>
          </div>
          <div className="w-full flex items-center justify-end">
            <button
              onClick={() => setModal(!modal)}
              className="me-2 p-2 px-4 text-normal bg-primary_colors text-white rounded-lg hover:scale-105 ease-in-out duration-200"
            >
              Register a New Student
            </button>
          </div>
        </div>
      </div>
      {modal && <RegistrationForm  setModal={setModal}/>}
    </>
  );
};

export default Dashboard;
